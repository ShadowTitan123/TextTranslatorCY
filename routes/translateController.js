const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
const { CheckCache, CreateCache } = require('../models/db.js');

// Specify Microsoft Azure Services Keys and Endpoint
const subscriptionKey = process.env.subscriptionKey;
const endpoint = process.env.endpoint;

// This is required if using a Cognitive Services resource.
const location = process.env.location

/*
 * Receives Request To Test The Get Route 
 * Returns a JSON RESPONSE to Client on Success 
 */
router.get('/test', (req, res) => {
    const testApi = {
        message: "Welcome to CodeYoung Translator, API WORKS !!",
        status: true
    }
    res.status(200).json(testApi);
})


/*
 * Receives Request To Translate The Given Data 
 * Checks For Cache in DB and Returns If Found 
 * Makes an Api Fetch Request To Microsoft Translator API if Cache Not Found 
 * Returns a JSON RESPONSE to Client on Successful Fetch  
 */

router.post('/Translate', async (req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const text = req.body.text;

    //Check Data in Cache Storage 
    try {
        const CheckInCache = await CheckCache(from, to, text);
        if (CheckInCache != null && CheckInCache != 'Not Found' && CheckInCache != '') {
            const CacheObj = [{
                translations: [{
                    text: CheckInCache[0].translation,
                    to: CheckInCache[0].to_lang
                }]
            }]
            console.log("Data Fetched from Cache");
            console.log("No External Api Calls Made");
            console.log("Data Fetched from Cache and Sent To UI Sucessfully");
            console.log("<------------------------------->");
            res.status(200).json(CacheObj);
        }
    }
    catch (err) {
        console.log(err);
        console.log("Hence Fetching from External API");
        axios({
            baseURL: endpoint,
            url: '/translate',
            method: 'post',
            headers: {
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'Ocp-Apim-Subscription-Region': location,
                'Content-type': 'application/json',
                'X-ClientTraceId': uuidv4().toString()
            },
            params: {
                'api-version': '3.0',
                'from': from,
                'to': to
            },
            data: [{
                'text': text
            }],
            responseType: 'json'
        }).then(async function (response) {
            try {
                //Create a Cache from the Received Response
                const InsertCache = await CreateCache(from, to, text, response.data[0].translations[0].text);
                if (InsertCache === true) {
                    console.log("Data Inserted and Sent To UI Sucessfully");
                    console.log("<------------------------------->");
                    res.status(200).json(response.data);
                } else {
                    console.log("Data Failed to Insert in Cache");
                    res.status(500).json({ "message": "Error Inserting Cache Data" });
                }
            }
            catch (err) {
                console.log(err);
                res.status(500).json(err);
            }

        })
            .catch((err) => {
                console.log(err)
                res.status(500).json(err.message);
            });
    }
})

//Export Modules
module.exports = router;