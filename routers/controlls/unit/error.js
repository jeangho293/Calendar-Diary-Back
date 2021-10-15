// error 문구 console.log()
module.exports = (req, error) => {
  console.log(`method: ${req.method}, url: ${req.originalUrl}, err: ${error}`);
}