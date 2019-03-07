const axios         = require('axios');
const Discord       = require('discord.js');
const Discordie     = require("discordie");
const dotenv        = require('dotenv').config();
const express       = require('express');
const app           = express();
const fs            = require('fs');
const http          = require('http').Server(app);
const morgan        = require('morgan');
const path          = require('path');
const io            = require('socket.io')(http);
const steam         = require('steam-login');
const bot           = new Discord.Client();
const client        = new Discordie();
const guild         = 291751672106188800;
//const channel     = '291751672106188800';
let steamUser;


app.use(morgan('dev'));

app.use(require('express-session')({ resave: false, saveUninitialized: false, secret: 'a secret' }));
app.use(steam.middleware({
    realm: 'http://localhost:3000/',
    verify: 'https://bpc-cpl-wesite-chat-app.herokuapp.com//verify',
    apiKey: `${process.env.STEAM_API_KEY}`
}
));
app.use(express.static('dist'));
app.use(express.static('public'));

axios.get(`${process.env.DISCORD_GET_MSG}`)
    .then((discordResponse) => {
        console.log('this is req: ' + discordResponse);
        messages = discordResponse;
    })

    .catch((err) => {
        console.log(err);
        res.send(err);
    }); 
function getMessages(req, res) {
    axios({
        url: `${process.env.DISCORD_GET_MSG_URL}`,
        method: 'get',
        headers: {
            Authorizaton: Bot`${process.env.DISCORD_API_KEY}`,
        }
            .then((messages) => {
                console.log('this is msg: ' + discordMessage);
            })
            .catch((err) => {
                console.log(err);
                res.send(err);
            })
    });
}
function postMessageToDiscord(val) {

    const message = steamUser.personaname + ': ' + val;
    
    var discordUrl = `${process.env.DISCORD_WEB_HOOK}`;
    axios.post(discordUrl, { content: message })
        .then(response => {
            console.log(response.data)
        })
        .catch(console.log);
  
}
app.get('/chat', steam.verify(), (req, res) => {
    //res.render('reportBot.html');
    res.sendFile(path.join(__dirname, '../public/chat.html'))
});

app.get('/authenticate', steam.authenticate(), function (req, res) {
    console.log(req.user);
});

app.get('/verify', steam.verify(), function (req, res) {
    fs.appendFile('log.csv', ('steam ID: ' + req.user._json.steamid) + '\t' + ('user name: ' + req.user._json.personaname) + '\n', (err) => {
        if (err) throw err;
        res.sendFile(path.join(__dirname, '../public/chat.html'));
    });
    steamUser = req.user._json;
});

app.get('/logout', steam.enforceLogin('/'), function (req, res) {
    req.logout();
    res.redirect('/');
});

client.connect({
    token: `${process.env.DISCORD_API_KEY}`
    
});

client.Dispatcher.on("GATEWAY_READY", e => {
    console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
    if (e.message.content == "ping")
        e.message.channel.sendMessage("pong");
});

bot.on('ready', () => {
    console.log('Ready!');
});
bot.on('message', message => {
    io.emit('newMessage',message.author.username + ': ' + message.content);

    if (message.content.indexOf("What is the weather in ") === 0) {
        var city = message.content.substring(22);
        console.log('this is city: ', city);
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.WEATHER_API_KEY}&units=imperial`)
            .then((response) => {
                var channel = bot.channels.get(`${process.env.DISCORD_CHANNEL_ID}`);
                channel.send(`The current temperature in ${city} is ${response.data.main.temp}`);
            });
    }
});
bot.login(`${process.env.DISCORD_API_KEY}`);

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('sendMessage', function (val) {
        postMessageToDiscord(val)
    });
});
module.exports = http;
