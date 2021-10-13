// 로그인 관련 Router
const express = require('express');
const {TryLogin} = require('./controlls/login');
const router = express.Router();
const authUser = require('../middleware/auth-middleware');

router.route('')
  //로그인 페이지 렌더링
  .get(authUser, (req, res) => {

    if (res.locals.user) {
      res.send({msg: 'success'});
    }
  })

  .post(TryLogin);
module.exports = router;