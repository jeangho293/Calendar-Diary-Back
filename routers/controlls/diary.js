const Diary = require('../../schemas/diary');
const joi = require('joi');

// 다이어리 작성 기능
CreateDiary = async (req, res, next) => {
  // joi 검증
  const userID = (res.locals.user);
  try {
    const DiarySchema = joi.object({
      //userID: joi.string().alphanum().min(4).required(),
      date: joi.string().required(),
      title: joi.string().required(),
      content: joi.string().required(),
      color: joi.string().required(),
    });
    const {date, title, content, color} = await DiarySchema.validateAsync(req.body);
    // Diary DB 저장
    await Diary.create({userID, date, title, content, color});
    res.send({msg: '다이어리 작성에 성공했습니다.'});
  } catch (err) {
    console.log(`method: ${req.method}, url: ${req.originalUrl}, err: ${err}`);
    res.status(200).send({msg: '다이어리 작성에 실패했습니다.'});
  }
};

// 다이어리 수정 기능
EditDiary = async (req, res) => {

  try {
    const diaryID = req.body.id;
    const {title, content, color} = req.body.post;
    // 다이어리 수정
    await Diary.findByIdAndUpdate(diaryID, {$set: {title, content, color}});
    res.send({msg: 'success'});
  } catch (err) {
    console.log(`method: ${req.method}, url: ${req.originalUrl}, err: ${err}`);
    res.send(500).send({msg: 'fail'});
  }
};

// 다이어리 삭제 기능
DeleteDiary = async (req, res) => {
  try {
    // 다이어리 삭제
    await Diary.findByIdAndDelete(req.query.id);
    res.send({msg: 'success'});
  } catch (err) {
    console.log(`method: ${req.method}, url: ${req.originalUrl}, err: ${err}`);
    res.send(500).send({msg: 'fail'});
  }
};

module.exports = {
  CreateDiary, EditDiary, DeleteDiary,
};