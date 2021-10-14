const Diary = require('../../schemas/diary');
const {divideDate} = require('./unit/main');

// 메인페이지에 보여지는 yyyy-mm 요청에 대한 DB 검출
getMonthDiary = async (req, res) => {
  try {
    const date = divideDate(req);
    // 로그인한 유저가 쓴 다이어리만 가져오게 필터링
    const diaryDate = await Diary.find(
      {
        date: {
          '$gte': date + '-01',
          '$lte': date + '-31',
        },
        userID: res.locals.user,
      },
      {
        date: 1,
        title: 1,
        color: 1,
      });
    console.log(diaryDate);
    res.json(diaryDate);
  } catch (err) {
    res.status(400).send({msg: '메인페이지 요청 에러입니다.'});
  }

};

module.exports = {
  getMonthDiary,
};