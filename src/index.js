import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LoginForn from './LoginForm'
import ProductComponent from './components/ProductComponent'

ReactDOM.render(
  <Router>
    <Switch>      
      <Route path="/" exact component={LoginForn} />
      <Route path="/product" component={ProductComponent}></Route>      
    </Switch>
  </Router>,
  document.getElementById("root")
);

