import React from "react";
import ReactDOM from "react-dom";
import Website from "./routes/mainRoutes";

import "./assets/css/index.css";
import "./assets/css/cart.css";
import "./assets/css/header.css";
import "./assets/css/product.css";
import "./assets/css/store.css";
import "./assets/css/product_cart.css";
// mocha --compilers js:babel-core/register --require babel-polyfill

const dom_id = document.getElementById("body_id");
ReactDOM.render(<Website />, dom_id);
