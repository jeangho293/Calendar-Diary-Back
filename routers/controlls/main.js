const Diary = require('../../schemas/diary');

getMonthDiary = async (req, res) => {
  const temp_date = req.query.date.split('/');
  const date = temp_date[2] + '-' + temp_date[0];
  const diaryDate= await Diary.find({
    date: {
      '$gte': date + '-01',
      '$lte': date + '-31',
    }
  });
  console.log(diaryDate);
  res.json(diaryDate);
};

module.exports = {
  getMonthDiary,
}