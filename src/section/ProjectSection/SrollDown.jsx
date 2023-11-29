import React from "react";
import "./ScrollDown.css";
export default function ScrollDown() {
  return (
    <>
      <div className="relative">
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
        <div className="w-[50%] text-2xl font-bold mb-5 font-mono capitalize">
          I design and develop websites for passion.
        </div>
      </div>
    </>
  );
}
