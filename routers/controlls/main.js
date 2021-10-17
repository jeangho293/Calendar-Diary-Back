//const Diary = require('../../schemas/diary');  // 몽고 DB
const User = require('../../models/signup');
const Diary = require('../../models/diary');
const {Op} = require('sequelize');
const {divideDate} = require('./unit/main');
const printError = require('../controlls/unit/error');

// 메인페이지에 보여지는 yyyy-mm 요청에 대한 DB 검출
getMonthDiary = async (req, res, next) => {
  try {
    const date = divideDate(req);
    // 로그인한 유저가 쓴 다이어리만 가져오게 필터링 몽고 DB
    // const diaryDate = await Diary.findAll(
    //   {
    //     date: {
    //       '$gte': date + '-01',
    //       '$lte': date + '-31',
    //     },
    //     userID: res.locals.user,
    //   },
    //   {
    //     date: 1,
    //     title: 1,
    //     color: 1,
    //   });
    const diaryDate = await User.findOne({
      include: [{
        model: Diary,
        where: {
          date: {
            [Op.gte]: date + '-01',
            [Op.lte]: date + '-31',
          },
        },
        attributes: [
          '_id', 'date', 'title', 'color',
        ],
      }]
    });

    res.json(diaryDate.Diaries);
  } catch (err) {
    printError(req, err);
    next();
  }
};

module.exports = {
  getMonthDiary,
};