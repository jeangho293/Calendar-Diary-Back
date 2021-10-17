const express = require('express');
const app = express();
const homePage = require('./routers/main');
const loginPage = require('./routers/login');
const signupPage = require('./routers/signup');
const diaryPage = require('./routers/diary');
const errorHandler = require('./middleware/error-middleware');
const {swaggerUi, specs} = require('./swagger/swagger');
const cors = require('cors');
const {sequelize} = require('./models');
// const connect = require('./schemas/app');
// connect();
require('dotenv').config();

// sequelize MYSQL
sequelize.sync({force: false})
  .then(() => {
    console.log('MYSQL 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

// swagger middleware
app.use('/api', swaggerUi.serve, swaggerUi.setup(specs));

// middleware
app.use(cors({
  // 쿠키 등록 수정부분
  credentials: true,
  origin: true,
}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', homePage);
app.use('/login', loginPage);
app.use('/signup', signupPage);
app.use('/diary', diaryPage);

// errorHandler
app.use(errorHandler.routerError);
app.use(errorHandler.errorHandler);

module.exports = app;