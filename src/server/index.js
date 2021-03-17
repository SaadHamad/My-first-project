// Require dotenv to hide the apikey
const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
// REQUIRING AXIOS TO FETCH THE API
const axios = require('axios')
// The base URL
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1"
// The API key
const apiKey = process.env.API_KEY

const app = express()
// Requiring cors
const cors = require('cors')
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Start fetching
app.get('/flyback/*', async (req, res) => {
    try {
// Geting the user URL
      const address = req.params[0];
// Fetching the API      
      const meaningCloud = await axios.get(`${baseUrl}?key=${apiKey}&url=${address}&lang=en`);
//Extract the data
      const { agreement, subjectivity, confidence, irony } = meaningCloud.data;
// Sending data to frontend
      res.send({
        agreement,
        subjectivity,
        confidence,
        irony,
      });
      console.log({agreement,
        subjectivity,
        confidence,
        irony,})
//Ending the promise
    } catch (error) {
      console.log(error, 'problem with server');     
    }
  });
