const User = require('../../schemas/signup');
const bcrypt = require('bcrypt');
const {CheckRegister} = require('./unit/signup');

// 회원가입 절차 기능
SignUser = async (req, res) => {
  try {
    const {userID, PW, confirmPW} = req.body;
    const CheckID = await CheckRegister(userID, PW, confirmPW);

    if (await User.findOne({userID})) {
      res.status(200).send({msg: '이미 존재하는 아이디입니다'});
    } else if (CheckID) {
      res.status(200).send(CheckID);
    } else {
      // bcrypt 를 활용한 비미번화 암호화 및 DB 생성
      const EncryptPW = bcrypt.hashSync(PW, parseInt(process.env.SALT));
      await User.create({userID, PW: EncryptPW});
      res.status(200).send({msg: '회원가입을 축하드립니다.'});
    }
  } catch (err) {
    console.log(`method: ${req.method}, url: ${req.originalUrl}, error: ${err}`);
    res.status(500).send({msg: '회원가입 등록 오류입니다.'});
  }
};

// 아이디 중복 확인 절차 기능
CheckDuplicatedID = async (req, res) => {
  try {
    const {userID} = req.body;
    if (await User.findOne({userID})) {
      res.status(200).send({msg: '중복된 아이디입니다. (중복버튼)'});
    } else {
      res.send({msg: '사용 가능한 아이디입니다'});
    }
  } catch (err) {
    console.log(`method: ${req.method}, url: ${req.originalUrl}, error: ${err}`);
    res.status(400).send({msg: '중복확인 버튼 에러입니다.'});
  }
};
module.exports = {SignUser, CheckDuplicatedID};