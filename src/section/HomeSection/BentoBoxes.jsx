import React from "react";
import "./BentoBoxes.css";
import HeroInfo from "./HeroInfo";
import ScrollDown from "../ProjectSection/SrollDown";
import HeroQuote from "./HeroQuote";
import ProjectLink from "../ProjectSection/ProjectLink";
const componentMap = {
  HeroInfo,
  ScrollDown,
  HeroQuote,
  ProjectLink,
};

const items = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
    style: "tall",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
    style: "wide",
  },
  { type: "text", content: "Hello" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1588224575346-501f5880ef29?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    style: "",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1574798834926-b39501d8eda2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    style: "tall",
  },
  { type: "text", content: "Hello", style: "" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    style: "wider",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1587897773780-fe72528d5081?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    style: "big",
  },
  { type: "text", content: "Hello" },
];

const BentoBoxes = () => {
  const renderItem = (item, index) => {
    if (item.type === "text") {
      const DynamicComponent = componentMap[item.content];

      return (
        <div
          key={index}
          className={`flex items-center justify-center relative ${item.style}`}
        >
          {DynamicComponent && <DynamicComponent />}
        </div>
      );
    } else if (item.type === "image") {
      return (
        <div
          key={index}
          className={`flex items-center justify-center relative ${item.style}`}
        >
          <img src={item.src} alt="" />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-2 px-4">
      <div className="grid-wrapper">
        <HeroInfo />
        <ScrollDown />
        <HeroQuote />
        <ProjectLink />
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
};

export default BentoBoxes;
