const express = require('express');
const bodyParser = require('body-parser');
const morgan = require ('morgan');
const path = require('path');

const app = express();

require('./db');


//settings 
app.set('port',process.env.PORT || 3000);
//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
//Routes

//Static FIles
app.use(express.static(path.join(__dirname,'public')));
//Starting Server
app.listen(app.get('port'),() =>{
console.log(`server on port ${app.get('port')}`);
})
