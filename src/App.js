import React from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";

import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" >
          <Login />
        </Route>
        <Route exact path="/signup" >
          <Signup />
        </Route>
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
