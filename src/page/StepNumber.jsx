import React, { useEffect } from "react";
import "./step.css";

const StepNumber = () => {
  useEffect(() => {
    let spanDom = document.querySelector("span");
    let start = 0;
    var timer = setInterval(fn, 1000);
    function fn() {
      start++;
      clearInterval(timer);
      timer = setInterval(fn, start > 10 ? 0 : 1000);
      if (start > 10) {
        spanDom.style.transition = `none`;
        start = 0;
      } else {
        spanDom.style.transition = `transform 500ms ease-in-out`;
      }
      spanDom.style.transform = `translate(0%,-${(start / 11) * 100}%)`;
    }

    // let spanDom = document.querySelector("span");
    // let start = 0;

    // const fn = () => {
    //   setInterval(() => {
    //     start++;
    //     if (start > 10) {
    //       start = 0;
    //       spanDom.style.transition = "none";
    //     } else {
    //       spanDom.style.transition = `transform 500ms ease-in-out`;
    //     }
    //     spanDom.style.transform = `translate(0,-${start * 10}%)`;
    //     //   console.log("count", start);
    //   }, 1000);
    // };
    // fn();
  }, []);
  return (
    <ul>
      <li>
        <span>01234567890</span>
      </li>
    </ul>
  );
};
export default StepNumber;
