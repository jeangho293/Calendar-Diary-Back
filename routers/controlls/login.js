const User = require('../../schemas/signup');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

TryLogin = async (req, res) => {
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
        res.status(200).send({msg: 'success', token: token});
      } else {
        res.status(200).send({msg: '아이디 또는 비밀번호가 틀렸습니다.'});
      }
    } else {
      res.status(200).send({msg: '존재하지 않는 아이디입니다.'});
    }
  } catch (err) {
    console.log(`method: ${req.method}, url: ${req.originalUrl}, error: ${err}`);
    res.status(400).send({msg: 'fail'});
  }
};

module.exports = {TryLogin};