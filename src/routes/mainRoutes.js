import React, { useReducer } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from "../pages/index.jsx";
import Header from '../pages/header.jsx'

const history = createBrowserHistory
export default function Website() {
  
  return (    
    <BrowserRouter history={history}>
      <CssBaseline/>
      <Header/>
        <Switch>
          <Route exact path="/" component={MainPage} /> 
        </Switch>      
    </BrowserRouter>
  );
}
