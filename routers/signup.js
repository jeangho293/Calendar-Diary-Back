// 회원등록에 관한 Router
const express = require('express');
const router = express.Router();
const User = require('../schemas/signup');
const bcrypt = require('bcrypt');

router.route('')
    // 회원가입 페이지에 대한 렌더링 API
    .get((req, res) => {
      res.render('signup');
    })

    // 회원가입 등록에 대한 API
    .post(async (req, res) => {
      try {
        const {userID, PW, confirmPW} = req.body;
        //console.log(userID, PW, confirmPW);
        if (await User.findOne({userID})) {
          res.send({msg: '중복된 아이디입니다.'});
        } else {
          // bcrypt를 활용한 비밀번호 암호화, DB 생성
          const EncryptPW =  bcrypt.hashSync(PW, 10);
          await User.create({userID, PW: EncryptPW});
          res.send({msg: '회원가입을 축하드립니다.'});
        }
      } catch (err) {
        console.log(`method: ${req.method}, url: ${req.originalUrl}, error: ${err}`);
        res.status(400).send({msg: '회원가입 등록 오류입니다.'});
      }
    });

router.route('/checkup')
    // 회원가입 페이지 중복확인 이벤트에 대한 처리 API
    .post(async (req, res) => {
      try {
        const {userID} = req.body;
        if (await User.findOne({userID})) {
          res.send({msg: '중복된 아이디입니다.'});
        } else {
          res.send({msg: '사용 가능한 아이디입니다.'});
        }
      } catch (err) {
        console.log(`method: ${req.method}, url: ${req.originalUrl}, error: ${err}`);
        res.status(400).send({msg: '중복확인 버튼 에러입니다.'});
      }
    });

module.exports = router;