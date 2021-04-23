import React, { useReducer } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import MainPage from "../pages/index";

const history = createBrowserHistory
export default function Website() {
  
  return (    
    <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={MainPage} /> 
        </Switch>      
    </BrowserRouter>
  );
}
