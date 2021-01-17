'use strict';

//Imports 
const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 3000;
const { DeleteExpiredCache } = require('./models/db.js');
const moment = require('moment'); // Require MomentJS Library to Format Dates
moment().format();


//Define Middleware to Access Static Files and Parse Json Bodies
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())


//Database Connection
const db = require('./DB/config.js');


//Middleware to Delete Expired Caches
const DeleteCaches = (req, res, next) => {
    var current = new Date(); // current Time
    var GetTime = new Date(current.getTime());
    var CurrentDate = GetTime.toLocaleDateString('ko-KR');
    var FormatCurrentDate = moment(CurrentDate, 'MM-DD-YYYY').format('YYYY-MM-DD');  // Format to YYYY-MM-DD as supported in MySQL
    //var FormatCurrentDate = '2021-01-18';  // Use this to test Expiry of caches by providing any date greater than expiry date 
    DeleteExpiredCache(FormatCurrentDate);
    next();
}


//GET Routes
app.get('/test', require('./routes/translateController.js'));
app.get('/getAllSupportedLanguages', require('./routes/languageController.js'))
app.get('/GetAllCaches', DeleteCaches, require('./routes/cacheController.js'))

//Post Routes
app.post('/Translate', DeleteCaches, require('./routes/translateController.js'));

//Put Routes
app.put('/UpdateLanguages', require('./routes/languageController.js'));

//Delete Routes
app.delete('/DeleteAllCache', DeleteCaches, require('./routes/cacheController.js'));



// Listen to Port 
app.listen(PORT, () => {
    console.log(`Code Young App Running on Port ${PORT}`);
})