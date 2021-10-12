// 사용자 인증 미들웨어
const jwt = require('jsonwebtoken');
const User = require('../schemas/signup');

module.exports = async (req, res, next) => {
  const token = req.cookies.mytoken;
  console.log(`token = ${token}`)
  try {

    if (token) {
      // 토큰이 존재하면 인증 절차
      const {userID} = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findOne({userID});
      res.locals.user = user.userID;
      next();
    } else {
      // 토큰이 없으면 튕겨나감
      console.log(`method: ${req.method}, url: ${req.originalUrl}, 인증받지 않는 사용자`);
      res.send({msg: 'fail'});
      return;
    }
  } catch (err) {
    res.status(400).send({msg: '로그인 오류입니다. 관리자를 호출하세요.'});
    return;
  }
};