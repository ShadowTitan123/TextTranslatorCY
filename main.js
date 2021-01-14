//Imports 
const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 3000;

//Define Middleware to Access Static Files and Parse Json Bodies
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())


//GET Routes
app.get('/test',require('./routes/translate.js'));

//Post Routes
app.post('/Translate',require('./routes/translate.js'));



// Listen to Port 
app.listen(PORT, () => {
    console.log(`Code Young App Running on Port ${PORT}`);
})