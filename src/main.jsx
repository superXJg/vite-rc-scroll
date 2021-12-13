import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Index from "./index";
import ScrollPage from "./page/ScrollPage";
// import Test from "./page/Test";
ReactDOM.render(
  <React.StrictMode>
    <ScrollPage />
    {/* <Test /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
