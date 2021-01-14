const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

// Specify Microsoft Azure Services Keys and Endpoint
const subscriptionKey = process.env.subscriptionKey;
const endpoint = process.env.endpoint;

// This is required if using a Cognitive Services resource.
const location = process.env.location


router.get('/test',(req, res) => {
    console.log('test');
})


router.post('/Translate', (req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const text = req.body.text;
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
    }).then(function (response) {
       // console.log(JSON.stringify(response.data, null, 4));
        res.status(200).json(response.data);
    })
    .catch((err) => {
        res.status(500).json(err.message);
    });
})



//Export

module.exports = router;