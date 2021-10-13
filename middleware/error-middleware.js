errorHandler = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500).send(err.message);
  console.log(res.locals);

}

routerError = (req, res, next) =>{
  const error = new Error(`${req.method} ${req.originalUrl} 라우터 에러입니다.`)
  error.status = 404
  next(error);
}

module.exports = {
  errorHandler, routerError,
}