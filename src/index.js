const express = require('express');
const bodyParser = require('body-parser');
const morgan = require ('morgan');
const path = require('path');

const app = express();

const {db} = require('./db');


//settings 
app.set('port',process.env.PORT || 3000);
//Middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
//Routes
app.use('/api/tasks',require('./routes/task.routes'));
//Static FIles
app.use(express.static(path.join(__dirname,'public')));
//Starting Server
app.listen(app.get('port'),() =>{
console.log(`server on port ${app.get('port')}`);
})
