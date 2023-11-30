import React from "react";
import "./ScrollDown.css";
export default function ScrollDown() {
  return (
    <>
      <div className="relative max-sm:my-5 max-sm:mb-20 h-full w-full">
        <div className="parent">
          <div className="child">
            <div className="scroll-down flex">
              <div className="uppercase scroll-down-text">
                <span>scroll down</span>
              </div>
              <div className="chevron-container">
                <span className="glyphicon glyphicon-chevron-down"></span>
                <span className="glyphicon glyphicon-chevron-down"></span>
                <span className="glyphicon glyphicon-chevron-down"></span>
                <span className="glyphicon glyphicon-chevron-down"></span>
                <span className="glyphicon glyphicon-chevron-down"></span>
                <span className="glyphicon glyphicon-chevron-down"></span>
                <span className="glyphicon glyphicon-chevron-down"></span>
                <span className="glyphicon glyphicon-chevron-down"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] text-2xl h-full flex justify-center items-center max-sm:text-[35px] font-bold mb-5 max-sm:mb-0 font-mono capitalize ">
          I design and develop websites for passion.
        </div>
      </div>
    </>
  );
}
