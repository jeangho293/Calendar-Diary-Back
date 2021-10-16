const User = require('../../schemas/signup');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const printError = require('../controlls/unit/error');

// 로그인 페이지 허용
GetLoginPage = (req, res, next) => {
  try {
    if (res.locals.user) {
      res.send({msg: 'success'});
    }
  } catch (err) {
    printError(req, err);
    next();
  }
};

// 로그인 시도
TryLogin = async (req, res, next) => {
  try {
    const {userID, PW} = req.body;
    const user = await User.findOne({userID});

    // DB에 해당 userID가 존재할 경우
    if (user) {
      if (await bcrypt.compare(PW, user.PW)) {
        const token = jwt.sign({userID: user.userID}, process.env.JWT_SECRET_KEY, {
          expiresIn: '5d',
        });

        console.log(`발급된 토큰: ${token}\n 로그인 성공`);
        res.send({msg: 'success', token: token});
      } else {
        res.send({msg: '아이디 또는 비밀번호가 틀렸습니다.'});
      }
    } else {
      res.send({msg: '존재하지 않는 아이디입니다.'});
    }
  } catch (err) {
    printError(req, err);
    next();
  }
};

module.exports = {TryLogin, GetLoginPage};