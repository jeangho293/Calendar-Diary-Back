const jwt = require('jsonwebtoken');
const User = require('../schemas/signup');

module.exports = async (req, res, next) => {
  const token = req.cookies.mytoken;

  try {
    if (token) {
      const {userID} = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findOne({userID});
      res.locals.user = user.userID;
      next();
    } else {
      console.log(`method: ${req.method}, url: ${req.originalUrl}`);
      res.status(400).send({msg: '권한이 없습니다. 로그인 후 사용하세요.'});
      return;
    }
  } catch (err) {
    res.status(400).send({msg: '로그인 오류입니다. 관리자를 호출하세요.'});
    return;
  }
};