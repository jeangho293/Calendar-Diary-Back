const Diary = require('../../schemas/diary');
const joi = require('joi');

// 다이어리 작성 기능
CreateDiary = async (req, res, next) => {
  // joi 검증
  const userID = (res.locals.user);
  console.log(userID);
  try {
    const DiarySchema = joi.object({
      //userID: joi.string().alphanum().min(4).required(),
      date: joi.string().required(),
      title: joi.ref('date'),
      content: joi.ref('date'),
      color: joi.ref('date'),
    });
    const {date, title, content, color} = await DiarySchema.validateAsync(req.body);
    // Diary DB 저장
    await Diary.create({userID, date, title, content, color});
    res.send({msg: 'success'});
  } catch (err) {
    console.log(`method: ${req.method}, url: ${req.originalUrl}, err: ${err}`);
    res.status(200).send({msg: 'fail11'});
  }
};

// 다이어리 수정 기능
EditDiary = async (req, res) => {

  try {
    // 다이어리 수정
    const {diaryID, title, content, color} = req.body;
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
    await Diary.findByIdAndDelete(req.body.diaryID);
    res.send({msg: 'success'});
  } catch (err) {
    console.log(`method: ${req.method}, url: ${req.originalUrl}, err: ${err}`);
    res.send(500).send({msg: 'fail'});
  }
};

module.exports = {
  CreateDiary, EditDiary, DeleteDiary,
};