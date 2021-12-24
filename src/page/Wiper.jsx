import ScrollAnim from "rc-scroll-anim";
import React, { useState, useEffect, useRef } from "react";
import StepNumber from "./StepNumber";
import "../lib/swiper.min.css";
import "./scroll.css";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import { Freeze } from "react-freeze";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const Count1 = () => {
  console.log(" run body count1");
  useEffect(() => {
    console.log("count1");
    return () => {
      console.log("out 1");
    };
  }, []);
  return (
    <div>
      1111111
      <p>1111</p>
      <h1>1111</h1>
    </div>
  );
};
const Count2 = () => {
  console.log(" run body count2");
  useEffect(() => {
    console.log("count2");
    return () => {
      console.log("out 2");
    };
  }, []);
  return (
    <div>
      2222222
      <p>1111</p>
      <h1>1111</h1>
    </div>
  );
};
const Count3 = () => {
  console.log(" run body count3");
  useEffect(() => {
    console.log("count3");
    return () => {
      console.log("out 3");
    };
  }, []);
  return (
    <div>
      3333333
      <p>1111</p>
      <h1>1111</h1>
    </div>
  );
};

const Demo = () => {
  const [active, setActive] = useState("");
  function callback(key) {
    // console.log(key);
    // setActive(key);
  }
  return (
    <div>
      <button onClick={() => setActive("1")}>1</button>
      <button onClick={() => setActive("2")}>2</button>
      <button onClick={() => setActive("3")}>3</button>
      <Freeze freeze={active !== "1"}>
        <Count1></Count1>
      </Freeze>
      <Freeze freeze={active !== "2"}>
        <Count2></Count2>
      </Freeze>
      <Freeze freeze={active !== "3"}>
        <Count3></Count3>
      </Freeze>
    </div>
  );
};
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
      width: "51%",
    });
  };
  const handleLeave = () => {
    setCss({});
    // setWrapCss({});
  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (document.documentElement.scrollTop >= 1344) {
        console.log("chao guo l");
        disableScroll.current = true;
        document.documentElement.scrollTo = 1344;
      }
    });
    var swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      paginationClickable: true,
      direction: "vertical",
    });
    const dom = document.getElementById("mask");
    // slideNext() 或slidePrev()
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
      if (disableScroll.current) {
        e.stopPropagation();
        e.preventDefault();
      }
      moveEndX = e.changedTouches[0].pageX;

      moveEndY = e.changedTouches[0].pageY;
      let Y = moveEndY - startY;
      if (swiper.activeIndex === 0 && Y > 0) {
        // console.log("swiper.activeIndex", swiper.activeIndex);
        // 第一屏 然后页面网上走
        // disableScroll.current = false;
      }
      if (swiper.activeIndex === 3 && Y < 0) {
        // 最后一屏幕
        // disableScroll.current = false;
      }
    });
    dom.addEventListener("touchend", (e) => {
      if (disableScroll.current) {
        e.stopPropagation();
        e.preventDefault();
      }
      moveEndX = e.changedTouches[0].pageX;

      moveEndY = e.changedTouches[0].pageY;

      let X = moveEndX - startX;

      let Y = moveEndY - startY;

      if (Y > 0) {
        console.log("down");
        swiper.slidePrev();
      }

      if (Y < 0) {
        console.log("up");
        swiper.slideNext();
      }
    });
  }, []);
  return (
    <div className="page-wraper">
      <div className="page page1">
        {/* <div>
          page1 往下滚模仿官网首页结构方便熟悉 rc-scroll-anim 750px设计稿下 1rem
          100px
        </div> */}
        <Demo></Demo>
      </div>
      <div className="page page2"></div>
      <ScrollElement id="swiper">
        <ScrollParallax
          location="swiper"
          animation={[
            {
              playScale: [0, 1],
              onStart: () => {
                console.log("start sw");
                // disableScroll.current = false;
              },
              onComplete: () => {
                console.log("onComplete sw");
                // disableScroll.current = true;
              },
              onCompleteBack: () => {
                console.log("onCompleteBack sw");
                // disableScroll.current = false;
              },
            },
          ]}
        >
          <div className="page" id="target">
            <div className="inner">
              <div className="mask" id="mask"></div>
              {/* <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">Slide 1</div>
                  <div class="swiper-slide">Slide 2</div>
                  <div class="swiper-slide">Slide 3</div>
                  <div class="swiper-slide">Slide 4</div>
                </div>
                <div class="swiper-pagination"></div>
              </div> */}
            </div>
          </div>
        </ScrollParallax>
      </ScrollElement>

      <div className="page">page last</div>
    </div>
  );
};
export default ScrollPage;
