const express = require('express');
const router = express.Router();
const { GetAllCaches , DeleteAllCache } = require('../models/cache.js');



/*
 * Receives Request To Get All Caches and Calls The Cache Model to Fetch Data
 * Returns a JSON RESPONSE to Client on Successfull Fetch 
 */
router.get('/GetAllCaches',async(req, res) => {
    try{
        const GetCaches = await GetAllCaches();
        if(GetCaches != null && GetCaches != 'Not Found' && GetCaches != ''){
            console.log("<------------------------------->");
            res.status(200).json(GetCaches);
        }else{
            res.status(200).json({"message":"Data Not Found"})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

/*
 * Receives Request To Delete All Caches and Calls The Cache Model to Fetch Data
 * Returns a JSON RESPONSE to Client on Successful Deletion 
 */

router.delete('/DeleteAllCache',async(req, res) => {
    try{
        const GetCaches = await DeleteAllCache();
        if (GetCaches === true) {
            console.log("All Caches Flushed Out !");

            const ResponseObj = {
                message : "All Caches Flushed Out",
                status : true
            }
            console.log("<------------------------------->");
            res.status(200).json(ResponseObj);
        } else {
            console.log("No Data Found / Failed To Delete");
            res.status(200).json({ "message": "Error Deleting Cache Data / No Data Found" });
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})


//Export

module.exports = router