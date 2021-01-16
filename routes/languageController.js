const express = require('express');
const router = express.Router();
const { GetAllSupportedLanguages , UpdateLanguages} = require('../models/languages.js');


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


router.put('/UpdateLanguages',async(req, res) => {
    try{
        const ActiveLanguages = JSON.parse(req.body.activeLanguages);
        const GetLanguages = await UpdateLanguages(ActiveLanguages);
        if (GetLanguages === true) {
            console.log("All Languages Updated !");
            const ResponseObj = {
                message : "All Languages Updated",
                status : true
            }
            console.log("<------------------------------->");
            res.status(200).json(ResponseObj);
        } else {
            console.log("No Data Found / Failed To Update");
            res.status(200).json({ "message": "Error Updating Data / No Data Found" });
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})



module.exports = router;