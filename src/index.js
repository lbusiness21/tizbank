import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
     <Auth0Provider
      domain='darknets.us.auth0.com'
      clientId='zVbrbFnmhw0Qp7b9CHGWpOZZXopqg0hr'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
