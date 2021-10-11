// 로그인 관련 Router
const express = require('express');
const router = express.Router();
const User = require('../schemas/signup');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.route('')
    // 로그인 페이지 렌더링
    .get((req, res) => {
      res.render('login');
    })
    // 로그인 API
    .post(async (req, res) => {
      try {
        const {userID, PW} = req.body;
        const user = await User.findOne({userID});

        // DB에 해당 userID가 존재할 경우
        if (user) {
          // 해당 userID의 비밀번호와 req 의 비밀번호가 같은 경우
          if (await bcrypt.compare(PW, user.PW)) {
            const token = jwt.sign({userID: user.userID}, process.env.JWT_SECRET_KEY, {
              expiresIn: '5d',
            });
            console.log(token);
            res.cookie('mytoken', token, {
              httpOnly: true,
            });
            res.status(200).send({msg: 'success'});
          } else {
            // 비밀번호가 틀릴 경우
            res.status(200).send({msg: '아이디 또는 비밀번호가 틀렸습니다.'});
          }
        } else {
          // DB에 해당 userID가 없는 경우
          res.status(200).send({msg: '존재하지 않는 아이디입니다.'});
        }

        res.send();
      } catch (err) {
        console.log(`method: ${req.method}, url: ${req.originalUrl}, error: ${err}`);
        res.status(400).send();
      }
    });
module.exports = router;