import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Index from "./index";
import Wiper from "./page/Wiper";
import ScrollPage from "./page/ScrollPage";
// import Test from "./page/Test";
ReactDOM.render(
  <React.StrictMode>
    {/* <Wiper /> */}
    {/* <Test /> */}
    <ScrollPage />
  </React.StrictMode>,
  document.getElementById("root")
);
