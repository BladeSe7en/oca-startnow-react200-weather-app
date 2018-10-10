const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const axios = require ("axios");

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));


app.get('/api/:city', (req,res) => {
    console.log(req.params.city);
    axios.get(
        (`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.WEATHER_API_KEY}&units=imperial`)
      )
      .then(response => res.send(response.data));
});

module.exports = app;