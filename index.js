const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.json())
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
var { meetingSchema }=require('./schema')
var {loginid}=require('./schemalogin')
mongoose.connect('mongodb://localhost:27017/meetingdb');
app.post('/roombook',function(req,res){
    var bookdata= req.body
    console.log(req.body)
    var newbook= new meetingSchema(bookdata)
    newbook.save().then(function (data) {
        res.json({
            message: "Success"
        })
    }).catch(function (err) {
        res.status(500).json({
            message: "Error"
        })

    })
})
app.get('/getbook',function(req,res){
    meetingSchema.find().then(function(bookdata){
        res.json(bookdata)
    }).catch(function(err){
        res.status(500).json({
            message:"error"
        })
    
    })
})
app.post('/loginuser',function(req,res){
    var logindata= req.body
    //console.log(req.body)
    var mylogin= new loginid(logindata)
    mylogin.save().then(function (data) {
        res.json({
            message: "Success"
        })
    }).catch(function (err) {
        res.status(500).json({
            message: "Error"
        })

    })
})
app.post('/getlogin',function(req,res){
    console.log(req.body)
    let pwd=req.body.password
    loginid.findOne({company_name:req.body.company_name}).then(function(data){
        if(data.password == pwd){
            res.json(true);
        }
        else{
            res.json(false);
        }
        
    }).catch(function(err){
        res.status(500).json({
            message:"error"
        })
    
    })
})

app.listen(3000);