//const User = require('../../schemas/signup'); // version: MongoDB
const User = require('../../models/signup');
const bcrypt = require('bcrypt');
const {CheckRegister} = require('./unit/signup');
const joi = require('joi');
const printError = require('../controlls/unit/error');

// 회원가입 절차 기능
SignUser = async (req, res, next) => {
  try {
    const UserSchema = joi.object({
      userID: joi.string().min(4).alphanum().required(),
      PW: joi.string().min(4).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      confirmPW: joi.ref('PW'),
    });

    const {userID, PW, confirmPW} = await UserSchema.validateAsync(req.body);
    const CheckID = await CheckRegister(userID, PW, confirmPW);

    if (await User.findOne({
      where: {
        userID,
      }
    })) {
      res.send({msg: '이미 존재하는 아이디입니다'});
    } else if (CheckID) {
      res.send(CheckID);
    } else {
      // bcrypt 를 활용한 비미번화 암호화 및 DB 생성
      const EncryptPW = bcrypt.hashSync(PW, parseInt(process.env.SALT));
      await User.create({userID, PW: EncryptPW});
      res.status(200).send({msg: 'success'});
    }
  } catch (err) {
    printError(req, err);
    next(err);
  }
};

// 아이디 중복 확인 절차 기능
CheckDuplicatedID = async (req, res, next) => {
  try {
    const {userID} = req.body;
    if (await User.findOne({
      where: {
        userID,
      }
    })) {
      res.send({msg: '이미 존재하는 아이디입니다.'});
    } else {
      res.send({msg: '사용 가능한 아이디입니다'});
    }
  } catch (err) {
    printError(req, err);
    next();
  }
};
module.exports = {SignUser, CheckDuplicatedID};