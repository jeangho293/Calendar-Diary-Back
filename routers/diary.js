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
    .put(async (req, res) => {
      try {
        const {diaryID, title, content, color} = req.body;
        await Diary.findOneAndUpdate({_id: diaryID}, {$set: {title, content, color}});
        res.send({msg: '수정완료'});
      } catch (err) {
        console.log(`method: ${req.method}, url: ${req.originalUrl}, err: ${err}`);
        res.status(500).send({msg: '다이어리 수정 오류입니다.'});
      }
    })
    // 다이어리 삭제
    .delete(async (req, res) => {
      try {
        const {diaryID} = req.body;
        await Diary.deleteOne({_id: diaryID});
        res.send({msg: '삭제되었습니다.'});
      } catch (err) {
        console.log(`method: ${req.method}, url: ${req.originalUrl}, err: ${err}`);
        res.send(500).send({msg: '다이어리 삭제 에러입니다.'});
      }
    });
module.exports = router;