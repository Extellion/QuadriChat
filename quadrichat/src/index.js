import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";
import { App } from "./App";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import { Group } from "./Chats/Group";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/chats/group/:id">
          <Group />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
