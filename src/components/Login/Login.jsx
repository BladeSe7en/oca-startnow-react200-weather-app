import React, { Component } from 'react';
import axios from "axios";
import {  } from "./LoginActions";

class Login extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div class="login-container">
        <div class="login-header">
            <h1>Steam Authentication</h1>
        </div>
        <p 
          class="lead">Steam Authentication is a basic set of PHP files that enable users to login using their steam
            account to view protected content on our website. It creates a session using their steamid as the sessionID
            and checks for the session when a user visits the page. Steam Authorization only allows us to access the players
            public profile information such as their avatar, online status and SteamId.<br></br>Please sign in below to continue to 
            Civilization Players League Website.
        </p>

        <a 
          href="/authenticate"><img src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png"/>
        </a>
</div>
    );
  }
}

export default Login;

