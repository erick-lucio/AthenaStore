import React, { useReducer } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import CssBaseline from '@material-ui/core/CssBaseline';

import MainPage from "../pages/index.jsx";
import SignInPage from "../pages/signin.jsx";
import SignUpPage from "../pages/signup.jsx";
import StorePage from "../pages/store.jsx"
import NotFoundPage from "../pages/404.jsx"

import Header from '../components/header.jsx'

const history = createBrowserHistory
export default function Website() {
  
  return (    
    <BrowserRouter history={history}>
      <CssBaseline/>
        <Switch>
          <Route exact path="/store*" component={Header} /> 
        </Switch>      
        <Switch>
          <Route exact path="/" component={MainPage} /> 
          <Route exact path="/signup" component={SignUpPage} /> 
          <Route exact path="/signin" component={SignInPage} /> 
          <Route exact path="/store" component={StorePage} /> 
          <Route path="*" component={NotFoundPage} /> 
        </Switch>     

    </BrowserRouter>
  );
}
