//const Diary = require('../../schemas/diary'); // version: mongoDB
const User = require('../../models/signup');
const Diary = require('../../models/diary');
const joi = require('joi');
const printError = require('../controlls/unit/error');

// 특정 다이어리 불러오기
GetDetailDiary = async (req, res, next) => {
  try {
    const diaryData = await Diary.findAll(
      {
        where:
          {
            userID: res.locals.user,
            date: req.query.date,
          }
      });
    res.json(diaryData);
  } catch (err) {
    printError(req, err);
    next(err);
  }
};

// 다이어리 작성 기능
CreateDiary = async (req, res, next) => {
  try {
    // joi 검증
    const DiarySchema = joi.object({
      date: joi.string().required(),
      title: joi.string().required(),
      content: joi.string().allow(''),
      color: joi.string().required(),
    });
    const userID = res.locals.user;
    const {date, title, content, color} = await DiarySchema.validateAsync(req.body);
    // Diary DB 저장
    await Diary.create({userID, date, title, content, color});
    res.send({msg: '다이어리 작성에 성공했습니다.'});
  } catch (err) {
    printError(req, err);
    next();
  }
};

// 다이어리 수정 기능
EditDiary = async (req, res, next) => {
  try {
    const diaryID = req.body.id;
    const {title, content, color} = req.body.post;
    // 다이어리 수정
    await Diary.update({
      title, content, color,
    }, {
      where: {
        _id: diaryID,
      }
    });
    res.send({msg: 'success'});
  } catch (err) {
    printError(req, err);
    next();
  }
};

// 다이어리 삭제 기능
DeleteDiary = async (req, res, next) => {
  try {
    // 다이어리 삭제
    await Diary.destroy({
      where: {
        _id: req.query.id
      }
    });
    res.send({msg: 'success'});
  } catch (err) {
    printError(req, err);
    next();
  }
};

module.exports = {
  CreateDiary, EditDiary, DeleteDiary,
  GetDetailDiary
};