// 다이어리 관련 Router
const express = require('express');
const router = express.Router();
const authUser = require('../middleware/auth-middleware');
const {CreateDiary, EditDiary, DeleteDiary} = require('./controlls/diary');
const Diary = require('../schemas/diary');

router.route('/')
  // 특정 다이어리 불러오기
  .get(authUser, async (req, res) => {
    console.log(req.query);
    const diaryData = await Diary.find({userID: res.locals.user, date: req.query.date});

    res.json(diaryData);
  })
  // 다이어리 작성
  .post(authUser, CreateDiary)
  // 다이어리 수정
  .put(authUser, EditDiary)
  // 다이어리 삭제
  .delete(DeleteDiary);

module.exports = router;