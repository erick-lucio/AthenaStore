import React, { useReducer } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import CssBaseline from "@material-ui/core/CssBaseline";

import MainPage from "../pages/index";
import SignInPage from "../pages/signin";
import SignUpPage from "../pages/signup";
import StorePage from "../pages/store";
import NotFoundPage from "../pages/404";

import Header from "../components/header";


const history = createBrowserHistory;
export default function Website() {
  return (
    <BrowserRouter basename="/">
      <CssBaseline />
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
