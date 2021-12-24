import React, { useEffect } from "react";
import PhyTouch from "phy-touch";
const Full = () => {
  useEffect(() => {
    new PhyTouch("#fullpage", {
      animationEnd: function () {},
      leavePage: function (index) {
        console.log("leave" + index);
      },
      beginToPage: function (index) {},
    });
    return () => {};
  }, []);
  return (
    <div className="full-page">
      <div className="content" id="fullpage">
        <div className="p1"></div>
        <div className="p2"></div>
        <div className="p3"></div>
      </div>
    </div>
  );
};
export default Full;
