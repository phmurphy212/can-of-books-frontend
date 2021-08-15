import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// DONE: wrap everything in Auth0
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6r5dp3cc.us.auth0.com"
      clientId="GXZS49tyFyupKmOfceB74dezjPwuGtEF"
      redirectUri= 'http://localhost:3000'
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
