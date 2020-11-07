const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const ApiUsers =require('./routes/users');
const ApiTests = require('./routes/tests');




//settings
app.set('port',process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//routes
app.use('/api/users', ApiUsers);
app.use('/api/tests', ApiTests);
//code validations

//Global Variables


module.exports =  app;


