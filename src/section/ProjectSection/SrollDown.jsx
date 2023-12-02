import React, { useState, useEffect } from "react";
import "./ScrollDown.css";

export default function ScrollDown() {
  const textArray = "I design and develop websites for passion".split("");
  const finalPositions = textArray.map(() => ({
    x: Math.random() * 10 - 5,
    y: Math.random() * 10 - 5,
  }));

  const [visibleText, setVisibleText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [randomOrder, setRandomOrder] = useState(
    [...Array(textArray.length)].map((_, index) => index)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let newText = visibleText;

        if (prevIndex < textArray.length) {
          // Shuffle the order of indices
          const shuffledOrder = [...Array(textArray.length)]
            .map((_, i) => i)
            .sort(() => Math.random() - 0.5);
          newText = shuffledOrder
            .slice(0, prevIndex + 1)
            .map((i) => textArray[i])
            .join("");
        } else {
          clearInterval(interval);
        }

        return prevIndex + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [visibleText, textArray]);

  return (
    <>
      <div className="relative max-sm:my-5 max-sm:mb-20 h-full w-full flex justify-center items-center min-h-[150px]">
        <div className="parent">
          <div className="child">
            <div className="scroll-down flex">
              <div className="uppercase  scroll-down-text mx-1">
                <span className="bg-[#3367D1] text-white">scroll down</span>
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
        <div className="w-[60%] text-[30px] h-full  justify-center text-right max-sm:justify-end items-center max-sm:text-[35px] font-bold max-sm:mb-0 font-mono capitalize max-h-[150px] leading-[3rem] absolute right-0">
          {randomOrder.map((originalIndex, index) => (
            <span
              key={index}
              style={{
                transform: `translate(${finalPositions[originalIndex].x}em, ${finalPositions[originalIndex].y}em)`,
                display: index < currentIndex ? "inline" : "none",
              }}
            >
              {textArray[originalIndex]}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
