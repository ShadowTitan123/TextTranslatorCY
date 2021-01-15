const express = require('express');
const router = express.Router();
const { GetAllSupportedLanguages} = require('../models/languages.js');


router.get('/GetAllSupportedLanguages',async(req, res) => {
    try{
        const GetLanguages = await GetAllSupportedLanguages();
        if(GetLanguages != null && GetLanguages != 'Not Found' && GetLanguages != ''){
            console.log("<------------------------------->");
            res.status(200).json(GetLanguages);
        }else{
            res.status(500);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})



module.exports = router;