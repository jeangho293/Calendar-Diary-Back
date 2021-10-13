// 다이어리 관련 Router
const express = require('express');
const router = express.Router();
const authUser = require('../middleware/auth-middleware')
const {CreateDiary, EditDiary, DeleteDiary} = require('./controlls/diary');

router.route('/')
    // 다이어리 작성
    .post(authUser, CreateDiary)
    // 다이어리 수정
    .put(EditDiary)
    // 다이어리 삭제
    .delete(DeleteDiary);

module.exports = router;