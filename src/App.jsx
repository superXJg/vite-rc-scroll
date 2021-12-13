import { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import classnames from "classnames";
import throttle from "lodash/throttle";
import firstImg from "../static/bg_0.jpg";
function App() {
  const [count, setCount] = useState(0);
  const [scrollTop, setScrollTop] = useState(0); // 第一屏的scrollTop
  const [scrollTop2, setScrollTop2] = useState(0); // 第二屏 scrollTop
  const [top, setTop] = useState(0);
  const [rate, setRate] = useState({
    m: 1,
    s: 1,
  });
  const [rate2, setRate2] = useState(0);
  const [flag, setFlag] = useState(false);
  const containerDomH = useRef(0);
  const handleScroll = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    setTop(top);
    const targetDom = document.querySelector(".section-0");
    if (top <= containerDomH.current - targetDom.offsetHeight) {
      console.log("top", top);
      console.log("result ", containerDomH.current - targetDom.offsetHeight);
      // console.log("containerDomH.current", containerDomH.current);
      setScrollTop(() => top);
      targetDom.style.transform = `translate3d(0, ${top}px, 0)`;
    } else {
      targetDom.style.transform = `translate3d(0, ${
        containerDomH.current - targetDom.offsetHeight
      }px, 0)`;
      setScrollTop(containerDomH.current - targetDom.offsetHeight);
    }
  };
  useEffect(() => {
    // 存第一屏的dom
    const dom = document.querySelector(".case-container");

    containerDomH.current = dom.offsetHeight;
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    let m = scrollTop / (containerDomH.current * 4);
    let s = scrollTop / (containerDomH.current * 2);
    // console.log("result", 1 - r);
    setRate({
      m: 1 - m,
      s: 1 - s,
    });
    if (scrollTop <= containerDomH.current / 2) {
      setFlag(false);
    }
    if (scrollTop > containerDomH.current / 2) {
      setFlag(true);
    }
  }, [scrollTop]);
  useEffect(() => {
    const section1 = document.querySelector(".vv-section-1");
    const top2 = top - containerDomH.current;
    if (top2 >= 0) {
      setScrollTop2(top2);
      const r = top2 / containerDomH.current;
      if (1 - r > 0.75) {
        setRate2(1 - r);
      } else {
        setRate2(0.75);
      }
      section1.style.transform = `translate3d(0, ${top2}px, 0)`;
    } else {
      setScrollTop2(0);
      setRate2(1);
      section1.style.transform = `translate3d(0, ${0}px, 0)`;
    }
  }, [top]);
  return (
    <div className="App">
      <div className="wrap">
        <div className="vv-section">
          <div className="case-container">
            <div className="section section-0">
              <div className="section-inner-wrap">
                <div
                  // className="large large-0"
                  className={classnames({
                    large: true,
                    "large-0": true,
                    hide: flag,
                    show: !flag,
                  })}
                  style={{ transform: `scale3d(1, 1, 1)` }}
                ></div>
                <div
                  // className="large large-1"
                  className={classnames({
                    large: true,
                    "large-1": true,
                    hide: !flag,
                    show: flag,
                  })}
                  style={{ transform: `scale3d(1, 1, 1)` }}
                ></div>
                <div
                  // className="medium medium-0"
                  className={classnames({
                    medium: true,
                    "medium-0": true,
                    hide: flag,
                    show: !flag,
                  })}
                  style={{ transform: `scale3d(${rate.m}, ${rate.m}, 1)` }}
                ></div>
                <div
                  // className="medium medium-1"
                  className={classnames({
                    medium: true,
                    "medium-1": true,
                    hide: !flag,
                    show: flag,
                  })}
                  style={{ transform: `scale3d(${rate.m}, ${rate.m}, 1)` }}
                ></div>
                <div
                  // className="small small-0"
                  className={classnames({
                    small: true,
                    "small-0": true,
                    hide: flag,
                    show: !flag,
                  })}
                  style={{ transform: `scale3d(${rate.s}, ${rate.s}, 1)` }}
                ></div>
                <div
                  className="small small-1"
                  className={classnames({
                    small: true,
                    "small-1": true,
                    hide: !flag,
                    show: flag,
                  })}
                  style={{ transform: `scale3d(${rate.s}, ${rate.s}, 1)` }}
                ></div>
              </div>
              <div
                className="structure-img"
                style={{
                  width: `${(1.5 - rate.m) * 110}%`,
                }}
              >
                <img
                  style={{
                    maxWidth: "100%",
                    verticalAlign: "middle",
                    display: "inline-block",
                  }}
                  src="https://uploads-ssl.webflow.com/611a971694c5a488d862f729/611a971694c5a4d8f562f781_domo.png"
                  alt="x"
                />
              </div>
              {/* <div>4</div>
          <div>5</div>
          <div>6</div> */}
            </div>
          </div>
        </div>
        <div className="vv-section vv-section-1">
          <div className="section_container-desktop">
            <div
              className="section_scroll-container"
              // style={{ transform: `translate3d(0, ${scrollTop2}px, 0)` }}
            >
              <div className="container-box"></div>
              <div
                className="container-img"
                style={{ transform: `scale3d(${rate2}, ${rate2}, 1)` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="next-section">下一个section</div>
      </div>
    </div>
  );
}

export default App;
