//import express so i can start a server
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const axios = require ("axios");

//invokoke express server and put it in app
const app = express();

//hey server, use the middleware that allows you to serve static files
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));


app.get('/api/:city', (req,res) => {
    console.log(req.params.city);
    axios.get(
        (`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&APPID=${process.env.WEATHER_API_KEY}&units=imperial`)
      )
      .then(response => res.send(response.data));
});
//exports my server so that other files can read my configutation
module.exports = app;