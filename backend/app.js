const express = require('express');
const bodyParser = require('body-parser')
const regRouter = require('./reg_login/reg')

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//midleware
app.use('/reg',regRouter);

app.listen(port, ()=>{
    console.log("SERVER IS RUNING")
})