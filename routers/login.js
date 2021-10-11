const express = require('express');
const router = express.Router();

router.route('')
    // 로그인 페이지 렌더링
    .get((req, res) => {
      res.render('login');
    });

module.exports = router;