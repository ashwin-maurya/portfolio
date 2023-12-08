import React from "react";
import "./ProjectLink.css";

export default function ProjectLink() {
  return (
    <>
      <div className="relative  max-sm:h-[300px] py-10 overflow-hidden max-sm:my-10 w-full bg-[#f1f1f1]">
        <div className="hero-banner relative">
          <h1 className="hero-banner__title text-left max-sm:text-[55px]">
            View Projects
          </h1>
          <div className="hero-banner__image object-cover max-sm:rotate-90  max-sm:w-[250px] max-sm:h-[180px] " />
          <h1 className="hero-banner__title hero-banner__stroked-title text-left max-sm:text-[55px]">
            View Projects
          </h1>
        </div>
      </div>
    </>
  );
}
