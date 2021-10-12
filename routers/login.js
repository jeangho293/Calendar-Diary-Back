// 로그인 관련 Router
const express = require('express');
const {TryLogin} = require('./controlls/login');
const router = express.Router();


router.route('')
    //로그인 페이지 렌더링
    // .get((req, res) => {
    //   console.log('로그인페이지 이동했음');
    //   res.send();
    // })
    //로그인 API
    .post(TryLogin);
module.exports = router;