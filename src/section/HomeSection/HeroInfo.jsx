import React from "react";
export default function HeroInfo() {
  return (
    <>
      <div class="w-full h-full group text-center text-white relative uppercase overflow-hidden">
        <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <span class="text-[66px] leading-[3rem]    w-[100%] font-bold flex justify-center items-center">
            <span className="overflow-hidden block w-full">
              <span className="relative top-4 group-hover:-top-1 transition-all ease-linear  duration-200">
                Ashwin
              </span>
            </span>
            <span className="overflow-hidden block w-full ">
              <span className="relative -top-7 group-hover:-top-1 transition-all ease-linear  duration-200">
                Maurya&nbsp;
              </span>
            </span>
          </span>
        </h1>
        <div class="hero-one absolute top-0 z-[1] w-[60%] h-full bg-[url(https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80)] bg-cover bg-no-repeat bg-center  [clip-path:polygon(0%_0%,65%_0%,100%_100%,0%_100%)]"></div>
        <div class="hero-one absolute top-0 right-0 w-[70%] h-full  bg-[url(https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80)] bg-cover bg-no-repeat bg-center  "></div>
        <div className="w-full absolute h-full bg-[rgba(0,0,0,.5)] z-10 "></div>
      </div>
    </>
  );
}
