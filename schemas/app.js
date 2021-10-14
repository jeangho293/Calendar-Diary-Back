const mongoose = require('mongoose');

const connect = () => {
  mongoose
    //.connect('mongodb://test:test@13.124.198.97:27017/admin', {
    .connect('mongodb://localhost:27017/week4Back', {
      ignoreUndefined: true,
    })
    .catch((err) => {
      console.error(err);
    });
};

// connect
mongoose.connection.on('error', (err) => {
  console.error('몽고디비 연걸 실패:', err);
});

console.log('MongoDB ON!');
module.exports = connect;