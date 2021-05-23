const express = require('express')
const nodemailer = require('nodemailer')
const app= express()
const bodyParser= require('body-parser')
const cors = require('cors')
const multer = require('multer')
const Router= require('./route/fileUploadroutes')
const mongoose = require("mongoose")

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("hello world")
})

//connecting to Mongodb Database
mongoose.connect("mongodb://localhost:27017/users",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log("Database connected")
})

app.listen(3000, ()=>{
    console.log("App started on port 3000");
})

app.use('/api',Router)
