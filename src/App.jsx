import { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import classnames from "classnames";
import throttle from "lodash/throttle";
function App() {
  const [count, setCount] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [rate, setRate] = useState({
    m: 1,
    s: 1,
  });
  const [flag, setFlag] = useState(false);
  const containerDomH = useRef(0);
  const handleScroll = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    const targetDom = document.querySelector(".section-0");
    if (top <= containerDomH.current - targetDom.offsetHeight) {
      console.log("top", top);
      console.log("result ", containerDomH.current - targetDom.offsetHeight);
      // console.log("containerDomH.current", containerDomH.current);
      setScrollTop(top);
    }
  };
  useEffect(() => {
    const dom = document.querySelector(".case-container");

    containerDomH.current = dom.offsetHeight;
    console.log("containerDomH", containerDomH);
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
  return (
    <div className="App">
      <div className="wrap">
        <div className="case-container">
          <div
            className="section section-0"
            style={{
              transform: `translate3d(0, ${scrollTop}px, 0)`,
            }}
          >
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
              >
                1
              </div>
              <div
                // className="large large-1"
                className={classnames({
                  large: true,
                  "large-1": true,
                  hide: !flag,
                  show: flag,
                })}
                style={{ transform: `scale3d(1, 1, 1)` }}
              >
                1
              </div>
              <div
                // className="medium medium-0"
                className={classnames({
                  medium: true,
                  "medium-0": true,
                  hide: flag,
                  show: !flag,
                })}
                style={{ transform: `scale3d(${rate.m}, ${rate.m}, 1)` }}
              >
                2
              </div>
              <div
                // className="medium medium-1"
                className={classnames({
                  medium: true,
                  "medium-1": true,
                  hide: !flag,
                  show: flag,
                })}
                style={{ transform: `scale3d(${rate.m}, ${rate.m}, 1)` }}
              >
                2
              </div>
              <div
                // className="small small-0"
                className={classnames({
                  small: true,
                  "small-0": true,
                  hide: flag,
                  show: !flag,
                })}
                style={{ transform: `scale3d(${rate.s}, ${rate.s}, 1)` }}
              >
                3
              </div>
              <div
                className="small small-1"
                className={classnames({
                  small: true,
                  "small-1": true,
                  hide: !flag,
                  show: flag,
                })}
                style={{ transform: `scale3d(${rate.s}, ${rate.s}, 1)` }}
              >
                3
              </div>
            </div>

            {/* <div>4</div>
          <div>5</div>
          <div>6</div> */}
          </div>
          {Array.from({ length: 20 }).map(() => (
            <div className="item">文章 内容</div>
          ))}
        </div>
        <div className="next-section">下一个section</div>
      </div>
    </div>
  );
}

export default App;
