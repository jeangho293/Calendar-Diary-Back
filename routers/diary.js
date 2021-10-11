// 다이어리 관련 Router
const express = require('express');
const router = express.Router();
const Diary = require('../schemas/diary');

router.route('/')
    // 다이어리 작성
    .post(async (req, res) => {
      try {
        const {
          userID, date, title, content, color,
        } = req.body;
        // DB 저장
        await Diary.create({userID, date, title, content, color});
        res.send({msg: '다이어리를 저장했습니다.'});
      } catch (err) {
        console.log(`method: ${req.method}, url: ${req.originalUrl}, err: ${err}`);
        res.send(500).send({msg: '다이어리 작성 에러입니다.'});
      }
    })
    // 다이어리 수정
    .put((req, res) => {

    })
    // 다이어리 삭제
    .delete((req, res) => {

    });
module.exports = router;