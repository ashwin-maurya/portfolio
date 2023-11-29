import React, { useState, useEffect } from "react";

export default function HeroInfo() {
  const [leftImageIndex, setLeftImageIndex] = useState(0);
  const [rightImageIndex, setRightImageIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    {
      img: "https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1588224575346-501f5880ef29?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1574798834926-b39501d8eda2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1475359524104-d101d02a042b?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1685999260720-bf996aea939d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  useEffect(() => {
    const leftInterval = setInterval(() => {
      if (!isHovered) {
        setLeftImageIndex((prevIndex) => {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * images.length);
          } while (randomIndex === prevIndex);
          return randomIndex;
        });
      }
    }, 1000);

    const rightInterval = setInterval(() => {
      if (!isHovered) {
        setRightImageIndex((prevIndex) => {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * images.length);
          } while (randomIndex === prevIndex || randomIndex === leftImageIndex);
          return randomIndex;
        });
      }
    }, 1000);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, [isHovered, leftImageIndex, rightImageIndex, images]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`relative bigger ${isHovered ? "no-change" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full group text-center relative uppercase overflow-hidden">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <span className="text-[86px] max-lg:text-[75px] max-md:text-[70px] max-sm:text-[45px] leading-[5.5rem]  w-[100%] font-bold flex justify-center items-center">
              <span className="overflow-hidden block w-full">
                <span className="relative text-white top-12 group-hover:-top-0 transition-all ease-linear  duration-200">
                  Ashwin
                </span>
              </span>
              <span className="overflow-hidden block w-full ">
                <span className="relative -top-12 text-white group-hover:-top-0 transition-all ease-linear  duration-200">
                  Maurya&nbsp;
                </span>
              </span>
            </span>
            <span className="overflow-hidden block w-full">
              <span className="opacity-0 group-hover:opacity-100 text-[red] relative left-56 -top-10 group-hover:top-0  transition-all ease-linear  duration-300">
                Frontend Developer
              </span>
            </span>
          </h1>{" "}
          <div
            className="hero-one  transition-all ease-in-out duration-200 absolute top-0 z-[1] w-[60%] h-full bg-cover bg-no-repeat bg-center [clip-path:polygon(0%_0%,65%_0%,100%_100%,0%_100%)]"
            style={{
              backgroundImage: `url(${images[leftImageIndex].img})`,
            }}
          ></div>
          <div
            className="hero-one  transition-all ease-in-out duration-200 absolute top-0 right-0 w-[70%] h-full bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${images[rightImageIndex].img})`,
            }}
          ></div>
          <div className="w-full absolute h-full bg-[rgba(0,0,0,.7)] z-10 "></div>
        </div>
      </div>
    </>
  );
}
