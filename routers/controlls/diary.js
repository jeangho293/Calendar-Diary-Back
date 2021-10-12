const Diary = require('../../schemas/diary');

// 다이어리 작성 기능
CreateDiary = async (req, res) => {
  try {
    const {userID, date, title, content, color} = req.body;
    // Diary DB 저장
    await Diary.create({userID, date, title, content, color});
    res.send({msg: 'success'});
  } catch (err) {
    console.log(`method: ${req.method}, url: ${req.originalUrl}, err: ${err}`);
    res.send(500).send({msg: 'fail'});
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