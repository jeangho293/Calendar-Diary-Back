const mongoose = require('mongoose');

const {Schema} = mongoose;
const UserSchema = new Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
    min: 4,
  },
  PW: {
    type: String,
    required: true,
    min: 4,
  },
  confirmPW: {
    type: String,
    required: true,
    min: 4,
  }
}, {
  versionKey: false,
});

module.exports = mongoose.model('Users', UserSchema);