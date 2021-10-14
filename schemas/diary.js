const mongoose = require('mongoose');

const {Schema} = mongoose;
const DiarySchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  }
}, {
  versionKey: false,
});

module.exports = mongoose.model('diaries', DiarySchema);