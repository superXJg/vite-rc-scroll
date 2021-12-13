import ScrollAnim from "rc-scroll-anim";
import React, { useState, useEffect } from "react";
import StepNumber from "./StepNumber";
import "../lib/swiper.min.css";
import "./scroll.css";
const ScrollParallax = ScrollAnim.Parallax;
const ScrollElement = ScrollAnim.Element;
const ScrollPage = () => {
  const [css, setCss] = useState({});
  const [wrapCss, setWrapCss] = useState({});
  const [index, setIndex] = useState(1);
  const handleFlex = () => {
    setWrapCss({
      alignSelf: "flex-end",
    });
  };
  const handleFlexRest = () => {
    setWrapCss({
      alignSelf: "flex-start",
    });
  };
  const handleEnter = () => {
    setCss({
      ...css,
      position: "fixed",
      top: 0,
      left: 0,
      width: "51%",
    });
  };
  const handleLeave = () => {
    setCss({});
    // setWrapCss({});
  };
  useEffect(() => {}, []);
  return (
    <div className="page-wraper">
      <div className="page page1">
        <div>
          page1 往下滚模仿官网首页结构方便熟悉 rc-scroll-anim 750px设计稿下 1rem
          100px
        </div>
      </div>
      <div className="page page2">page2</div>
      {/* <ScrollElement
        className="slide"
        id="box"
        //   style={{ height: "1600px" }}
      >
        <ScrollParallax
          location="box"
          className="slide-left"
          style={wrapCss}
          animation={[
            {
              playScale: [0, 1],
            },
            {
              playScale: [0, 1],
              onStart: () => {
                // console.log("onStart1");
                handleEnter();
              },
              onComplete: () => {
                // console.log("onComplete1");
              },
              onCompleteBack: () => {
                // console.log("onCompleteBack1");
                handleLeave();
                handleFlexRest();
              },
              onStartBack: () => {
                // console.log("onStartBack1");
              },
            },
            {
              playScale: [0, 1],
              onStart: () => {
                // console.log("onStart2");
              },
              onComplete: () => {
                // console.log("onComplete2");
              },
              onCompleteBack: () => {
                // console.log("onCompleteBack2");
              },
              onStartBack: () => {
                // console.log("onStartBack2");
              },
            },
            {
              playScale: [0, 1],
              onStart: () => {
                // console.log("onStart3");
              },
              onComplete: () => {
                // console.log("onComplete3");
              },
              onCompleteBack: () => {
                // console.log("onCompleteBack3");
              },
              onStartBack: () => {
                // console.log("onStartBack3");
              },
            },
            {
              playScale: [0, 1],
              onStart: () => {
                // console.log("onStart4");
                handleLeave();
                handleFlex();
              },
              onComplete: () => {
                // console.log("onComplete4");
              },
              onCompleteBack: () => {
                handleEnter();
                // console.log("onCompleteBack4");
              },
              onStartBack: () => {
                // console.log("onStartBack4");
              },
            },
          ]}
        >
          <ScrollParallax className="slide-left-box" style={css}>
            <div className="">left</div>
            <ScrollParallax className="progress">
              <div className="progress-index">{index}</div>
              <div className="progress-line">
                <ScrollParallax
                  className="progress-line-inner"
                  style={{ height: 0 }}
                  location="box"
                  animation={[
                    {
                      height: 60,
                      playScale: [0, 1],
                    },
                    {
                      height: 120,
                      playScale: [0, 1],
                      onStart: () => {
                        console.log("start1");
                        setIndex(2);
                      },
                      onComplete: () => {
                        console.log("onComplete1");
                        // setIndex(2);
                      },
                      onCompleteBack: () => {
                        setIndex(1);
                        console.log("onCompleteBack1");
                      },
                    },
                    {
                      height: 180,
                      playScale: [0, 1],
                      onStart: () => {
                        console.log("start2");
                        setIndex(3);
                      },
                      onComplete: () => {
                        console.log("onComplete2");
                        // setIndex(3);
                      },
                      onCompleteBack: () => {
                        setIndex(2);
                        console.log("onCompleteBack2");
                      },
                    },
                    {
                      height: 240,
                      playScale: [0, 1],
                      onStart: () => {
                        console.log("start3");
                        setIndex(4);
                      },
                      onComplete: () => {
                        console.log("onComplete3");
                        // setIndex(4);
                      },
                      onCompleteBack: () => {
                        setIndex(3);
                        console.log("onCompleteBack3");
                      },
                    },
                    {
                      height: "240",
                      playScale: [0, 1],
                      onStart: () => {
                        console.log("start4");
                        setIndex(4);
                      },
                      onComplete: () => {
                        console.log("onComplete4");
                        setIndex(4);
                      },
                      onCompleteBack: () => {
                        setIndex(3);
                        console.log("onCompleteBack4");
                      },
                    },
                  ]}
                ></ScrollParallax>
              </div>
              <div className="progress-index">4</div>
            </ScrollParallax>
          </ScrollParallax>
        </ScrollParallax>
        <ScrollParallax location="box" className="slide-right">
          <div className="right-item">right1</div>
          <div className="right-item">right2</div>
          <div className="right-item">right3</div>
          <div className="right-item">right4</div>
        </ScrollParallax>
      </ScrollElement> */}
      <ScrollElement
        className="window"
        id="tabs"
        //   style={{ height: "1600px" }}
      >
        {/* <div>demo</div> */}
        <div style={{ display: "flex" }}>
          <ScrollParallax
            location="tabs"
            animation={[
              {
                playScale: [0, 1],
                y: 0,
              },
            ]}
            style={{
              transform: " translateY(100px)",
            }}
          >
            <div className="inner-box">xxx</div>
          </ScrollParallax>
          <ScrollParallax
            location="tabs"
            animation={[
              {
                playScale: [0, 1],
                y: 0,
              },
            ]}
            style={{
              transform: " translateY(100px)",
            }}
          >
            <div className="inner-box">xxx</div>
          </ScrollParallax>
        </div>

        {/* <ScrollParallax
          location="tabs"
          // className="inner-box"
          animation={[
            {
              playScale: [0, 1],
              scaleX: 1,
              scaleY: 1,
            },
          ]}
          style={{
            transform: "scale(0) translateY(0)",
          }}
        >
          <div className="inner-box">xxx</div>
        </ScrollParallax> */}
      </ScrollElement>
      <div className="page">page last</div>
      <div className="page">page last</div>
    </div>
  );
};
export default ScrollPage;
