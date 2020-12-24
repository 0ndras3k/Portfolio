import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import OklapkaRouter from "./router";

import "./assets/scss/main.scss";

//TODO: Add multi language support

const ReactRoot = () => (
  <StrictMode>
    <OklapkaRouter />
  </StrictMode>
);
ReactDOM.render(<ReactRoot />, document.getElementById("root"));
