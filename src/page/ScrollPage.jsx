import ScrollAnim from "rc-scroll-anim";
import React, { useState, useEffect, useRef } from "react";
import StepNumber from "./StepNumber";
import "../lib/swiper.min.css";
import "./scroll.css";
import { Freeze } from "react-freeze";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const ScrollParallax = ScrollAnim.Parallax;
const ScrollElement = ScrollAnim.Element;
const ScrollPage = () => {
  const disableScroll = useRef(false);
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
      width: "50%",
    });
  };
  const handleLeave = () => {
    setCss({});
    // setWrapCss({});
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(
        "document.body.scrollTop",
        document.documentElement.scrollTop
      );
      console.log("scroll");
      [
        [2, 3],
        [2, 3],
        [3, 4],
      ];
    });
  }, []);
  useEffect(() => {
    const dom = document.getElementById("box");
    console.log(" dom.offsetTop", dom.offsetTop);
    let index = 0;
    let startX = 0;
    let startY = 0;
    let moveEndX = 0;
    let moveEndY = 0;
    dom.addEventListener("touchstart", (e) => {
      if (disableScroll.current) {
        e.stopPropagation();
        e.preventDefault();
      }
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
    });
    dom.addEventListener("touchmove", (e) => {
      moveEndX = e.changedTouches[0].pageX;
      moveEndY = e.changedTouches[0].pageY;
      let Y = moveEndY - startY;
      // if (swiper.activeIndex === 0 && Y < 0) {
      //   // 第一屏 然后页面网上走
      //   disableScroll.current = false;
      // }
      // if (swiper.activeIndex === 3 && Y > 0) {
      //   // 最后一屏幕
      //   disableScroll.current = false;
      // }
    });
    dom.addEventListener("touchend", (e) => {
      moveEndX = e.changedTouches[0].pageX;
      moveEndY = e.changedTouches[0].pageY;
      let X = moveEndX - startX;
      let Y = moveEndY - startY;
      if (Y > 0) {
        console.log("down");
        if (index > 0) {
          index--;
          window.scrollTo(0, dom.offsetTop + index * window.innerHeight);
        }

        // swiper.slideNext();
      }
      if (Y < 0) {
        console.log("up");
        // swiper.slidePrev();
        if (index < 3) {
          index++;
          window.scrollTo(0, dom.offsetTop + index * window.innerHeight);
        }
      }
    });
  }, []);
  useEffect(() => {
    // var swiper = new Swiper(".swiper-container", {
    //   pagination: ".swiper-pagination",
    //   paginationClickable: true,
    //   direction: "vertical",
    // });
    // const dom = document.getElementById("mask");
    // // slideNext() 或slidePrev()
    // let startX = 0;
    // let startY = 0;
    // let moveEndX = 0;
    // let moveEndY = 0;
    // dom.addEventListener("touchstart", (e) => {
    //   if (disableScroll.current) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //   }
    //   startX = e.touches[0].pageX;
    //   startY = e.touches[0].pageY;
    // });
    // dom.addEventListener("touchmove", (e) => {
    //   if (disableScroll.current) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //   }
    //   moveEndX = e.changedTouches[0].pageX;
    //   moveEndY = e.changedTouches[0].pageY;
    //   let Y = moveEndY - startY;
    //   if (swiper.activeIndex === 0 && Y < 0) {
    //     // 第一屏 然后页面网上走
    //     disableScroll.current = false;
    //   }
    //   if (swiper.activeIndex === 3 && Y > 0) {
    //     // 最后一屏幕
    //     disableScroll.current = false;
    //   }
    // });
    // dom.addEventListener("touchend", (e) => {
    //   if (disableScroll.current) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //   }
    //   moveEndX = e.changedTouches[0].pageX;
    //   moveEndY = e.changedTouches[0].pageY;
    //   let X = moveEndX - startX;
    //   let Y = moveEndY - startY;
    //   if (Y > 0) {
    //     console.log("down");
    //     swiper.slideNext();
    //   }
    //   if (Y < 0) {
    //     console.log("up");
    //     swiper.slidePrev();
    //   }
    // });
  }, []);
  return (
    <div className="page-wraper">
      <div className="page page1">
        <div>
          page1 往下滚模仿官网首页结构方便熟悉 rc-scroll-anim 750px设计稿下 1rem
          100px
        </div>
      </div>
      <div className="page page2">
        <ScrollElement id="page2">
          <ScrollParallax
            animation={[
              {
                playScale: [0, 0.3],
                x: "20vw",
                scaleX: 0.2,
                scaleY: 0.2,
                // scrollX: 0.2,
                // scrollY: 0.2,
              },
              {
                playScale: [0, 0.7],
                y: 100,
                x: 100,
              },
            ]}
            location="page2"
            style={{
              transform: "scale(0)",
              transformOrigin: "0 0 0",
            }}
          >
            <div className="demo-box">111111111</div>
          </ScrollParallax>
        </ScrollElement>
      </div>
      <ScrollElement
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
          <ScrollParallax id="box" className="slide-left-box" style={css}>
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
                        // console.log("start1");
                        setIndex(2);
                      },
                      onComplete: () => {
                        // console.log("onComplete1");
                        // setIndex(2);
                      },
                      onCompleteBack: () => {
                        setIndex(1);
                        // console.log("onCompleteBack1");
                      },
                    },
                    {
                      height: 180,
                      playScale: [0, 1],
                      onStart: () => {
                        // console.log("start2");
                        setIndex(3);
                      },
                      onComplete: () => {
                        // console.log("onComplete2");
                        // setIndex(3);
                      },
                      onCompleteBack: () => {
                        setIndex(2);
                        // console.log("onCompleteBack2");
                      },
                    },
                    {
                      height: 240,
                      playScale: [0, 1],
                      onStart: () => {
                        // console.log("start3");
                        setIndex(4);
                      },
                      onComplete: () => {
                        // console.log("onComplete3");
                        // setIndex(4);
                      },
                      onCompleteBack: () => {
                        setIndex(3);
                        // console.log("onCompleteBack3");
                      },
                    },
                    {
                      height: "240",
                      playScale: [0, 1],
                      onStart: () => {
                        // console.log("start4");
                        setIndex(4);
                      },
                      onComplete: () => {
                        // console.log("onComplete4");
                        setIndex(4);
                      },
                      onCompleteBack: () => {
                        setIndex(3);
                        // console.log("onCompleteBack4");
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
      </ScrollElement>
      <ScrollElement
        className="window"
        id="tabs"
        //   style={{ height: "1600px" }}
      >
        {/* <div>demo</div> */}
        <div style={{ height: "49px" }}></div>
        <ScrollParallax
          location="tabs"
          animation={[
            {
              playScale: [0.3, 0.6],
              y: 0,
              // opacity: 1,
            },
          ]}
          style={{
            transform: "translateY(150px)",
            // opacity: "0",
          }}
        >
          <div className="mobile-product-title">
            All-in-One Enterprise Management Suite
          </div>
        </ScrollParallax>

        <ScrollParallax
          className="card-wrap"
          location="tabs"
          animation={[
            {
              playScale: [0, 1],
            },
            {
              playScale: [0, 0.5],
              y: "30vh",
              opacity: 0,
            },
          ]}
        >
          <div className="bird-wrap">
            <ScrollParallax
              location="tabs"
              animation={[
                {
                  playScale: [0.3, 0.6],
                  // y: 0,
                  scaleX: 1,
                  scaleY: 1,
                  opacity: 1,
                },
                {
                  playScale: [0, 0.3],
                  y: 0,
                  scaleX: 0,
                  scaleY: 0,
                  opacity: 0,
                },
              ]}
              style={{
                transform: "scale(0) translateY(-40px)",
                opacity: "0",
              }}
            >
              <div className="bird-container"></div>
            </ScrollParallax>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "25px",
            }}
          >
            <ScrollParallax
              location="tabs"
              animation={[
                {
                  playScale: [0.2, 0.4],
                  x: -50,
                  y: -80,
                  opacity: 0.4,
                  scaleY: 0.2,
                  scaleX: 0.2,
                },
                {
                  playScale: [0, 0.6],
                  scaleX: 1,
                  scaleY: 1,
                  x: 0,
                  y: 0,
                  opacity: 1,
                },
              ]}
              style={{
                transform: "translate(-80px, -80px) scale(0) ",
                // transformOrigin: "0 0 0",
                opacity: "0",
              }}
            >
              <div className="inner-box box1">xxx</div>
            </ScrollParallax>
            <ScrollParallax
              location="tabs"
              animation={[
                {
                  playScale: [0.2, 0.4],
                  x: 50,
                  y: -80,
                  opacity: 0.4,
                  scaleY: 0.2,
                  scaleX: 0.2,
                },
                {
                  playScale: [0, 0.6],
                  x: 0,
                  y: 0,
                  scaleX: 1,
                  scaleY: 1,
                  opacity: 1,
                },
              ]}
              style={{
                transform: " translate(80px, -80px) scale(0)",
                opacity: "0",
              }}
            >
              <div className="inner-box box2">xxx</div>
            </ScrollParallax>
          </div>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ScrollParallax
              location="tabs"
              animation={[
                {
                  playScale: [0.2, 0.4],
                  x: -50,
                  y: 80,
                  opacity: 0.4,
                  scaleY: 0.2,
                  scaleX: 0.2,
                },
                {
                  playScale: [0, 0.6],
                  scaleX: 1,
                  scaleY: 1,
                  x: 0,
                  y: 0,
                  opacity: 1,
                },
              ]}
              style={{
                transform: "scale(0) translate(-80px, 80px)",
                opacity: "0",
              }}
            >
              <div className="inner-box box3">xxx</div>
            </ScrollParallax>
            <ScrollParallax
              location="tabs"
              animation={[
                {
                  playScale: [0.2, 0.4],
                  x: 50,
                  y: 80,
                  opacity: 0.4,
                  scaleY: 0.2,
                  scaleX: 0.2,
                },
                {
                  playScale: [0, 0.6],
                  scaleX: 1,
                  scaleY: 1,
                  x: 0,
                  y: 0,
                  opacity: 1,
                },
              ]}
              style={{
                transform: "scale(0) translate(80px, 80px)",
                opacity: "0",
              }}
            >
              <div className="inner-box box4">xxx</div>
            </ScrollParallax>
          </div>
        </ScrollParallax>

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
    </div>
  );
};
export default ScrollPage;
