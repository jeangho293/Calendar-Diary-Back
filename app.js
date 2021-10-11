const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const loginPage = require('./routers/login');
const signupPage = require('./routers/signup');
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
app.use('/login', loginPage);
app.use('/signup', signupPage);

// app listening...
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/login`);
});