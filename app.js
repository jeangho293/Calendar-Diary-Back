const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const homePage = require('./routers/main');
const loginPage = require('./routers/login');
const signupPage = require('./routers/signup');
const diaryPage = require('./routers/diary');
const connect = require('./schemas/app');
connect();
require('dotenv').config();

// EJS templates language
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET_KEY));
app.use('/', homePage);
app.use('/login', loginPage);
app.use('/signup', signupPage);
app.use('/diary', diaryPage);

// app listening...
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});