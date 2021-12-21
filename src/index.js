const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer')


const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://monty-python:SnYUEY4giV9rekw@functionup-backend-coho.0zpfv.mongodb.net/Group11-SM-p4?retryWrites=true&w=majority", { useNewUrlParser: true ,useUnifiedTopology:true, useCreateIndex:true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

  

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});