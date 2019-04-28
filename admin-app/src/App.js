import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Home from './component/App/Home';
import Login from './component/App/Login';



export default class App extends Component {

  render() {
    return (
      <Router > 
          <Route exact path="/login" component={Login} />
          <Route  path="/home" component={Home} />
      </Router > 
    )
  }
}


