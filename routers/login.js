// 로그인 관련 Router
const express = require('express');
const {TryLogin} = require('./controlls/login');
const router = express.Router();
const authUser = require('../middleware/auth-middleware');

router.route('')
    //로그인 페이지 렌더링
    .get(authUser, (req, res) => {
      console.log('로그인페이지 이동했음');
      if (res.locals.user) {
        res.send({msg: 'success'});
      } else {
        res.send({msg: 'fail'});
      }
    })

    .post(TryLogin);
module.exports = router;