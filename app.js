const express = require('express')
const app = express();
require('dotenv').config()

// EJS templates language
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// app listening...
app.listen(process.env.PORT, ()=>{
  console.log(`http://localhost:${process.env.PORT}`);
})