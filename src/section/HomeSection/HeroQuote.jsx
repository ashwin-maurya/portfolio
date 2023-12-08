import React from "react";

export default function HeroQuote() {
  return (
    <>
      <div className="relative wide max-sm:py-10 max-sm:mt-20">
        <div className=" justify-center flex items-center flex-col text-3xl tracking-widest max-md:text-3xl ">
          <p className="bg-black text-white transform -rotate-3 text-center font-extrabold py-1 px-2 font-kalam">
            “I should probably
          </p>
          <p className="bg-red-500  transform rotate-2 text-white text-center font-extrabold  py-1 px-2 font-kalam">
            up-things
          </p>
          <p className="bg-black transform -rotate-2 text-white text-center font-extrabold py-1 px-2 font-kalam">
            to do”
          </p>
        </div>
      </div>
    </>
  );
}
