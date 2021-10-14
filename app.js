const express = require('express');
const app = express();
const homePage = require('./routers/main');
const loginPage = require('./routers/login');
const signupPage = require('./routers/signup');
const diaryPage = require('./routers/diary');
const errorHandler = require('./middleware/error-middleware');
const cors = require('cors');
const morgan = require('morgan');
const connect = require('./schemas/app');
connect();
require('dotenv').config();

// middleware
app.use(cors({
  // 쿠키 등록 수정부분
  credentials: true,
  origin: true,
}));
//app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', homePage);
app.use('/login', loginPage);
app.use('/signup', signupPage);
app.use('/diary', diaryPage);

// errorHandler
app.use(errorHandler.routerError);
app.use(errorHandler.errorHandler);

// app listening...
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});