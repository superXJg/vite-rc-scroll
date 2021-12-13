import { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import "animate.css";
const Index = () => {
  return (
    <div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "#ccc" }}
        className="animate__animated animate__backInDown"
      >
        box
      </div>
    </div>
  );
};

export default Index;
