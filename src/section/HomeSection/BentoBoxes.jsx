import React from "react";
import "./BentoBoxes.css";
import HeroInfo from "./HeroInfo";
import ProjectInfo from "../ProjectSection/ProjectInfo";

const componentMap = {
  HeroInfo,
  ProjectInfo,
  // Add more components as needed
};

const items = [
  { type: "text", content: "HeroInfo", style: "wide" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  { type: "text", content: "ProjectInfo", style: "tall" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
  },
  { type: "text", content: "Hello" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1588224575346-501f5880ef29?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1574798834926-b39501d8eda2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  { type: "text", content: "Hello", style: "wide" },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1587897773780-fe72528d5081?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
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
          className={`flex items-center justify-center w-full h-full ${
            item.content == "ProjectInfo" ? "overflow-hidden" : ""
          } ${item.style}`}
        >
          {DynamicComponent && <DynamicComponent />}
        </div>
      );
    } else if (item.type === "image") {
      return (
        <div key={index} className={getImageClass(index)}>
          <img src={item.src} alt="" />
        </div>
      );
    }
    return null;
  };

  const getImageClass = (index) => {
    if (index % 3 === 0) return "wide";
    if (index % 5 === 0) return "big";
    if (index % 4 === 0) return "tall";
    return "regular";
  };

  return (
    <div className="p-2 px-4">
      <div className="grid-wrapper">
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
};

export default BentoBoxes;
