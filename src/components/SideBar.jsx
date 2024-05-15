import React, { useState } from "react";

import Logo from "../assets/logo.svg?react";
import Portfilo from "../assets/portfilo.svg?react";
import Ring from "../assets/ring.svg?react";
import Trading from "../assets/trading.svg?react";
import Training from "../assets/training.svg?react";
import Automation from "../assets/automation.svg?react";
import User from "../assets/user.png";

const sidebarItems = [
  { name: "Alerts", icon: Ring },
  { name: "Training", icon: Training },
  { name: "Automation", icon: Automation },
  { name: "Portfolio", icon: Portfilo },
  { name: "Trading", icon: Trading },
];

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("Alerts");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (window.innerWidth < 768) {
      setExpanded(false); 
    }
  };

  return (
    <div
      className={`bg-black w-[50px] flex md:fixed z-20  h-full shadow-xl font-poppins font-bold text-white items-center ${
        expanded ? "md:w-[180px]" : "md:w-[50px]"
      } transition-all flex-col gap-3 duration-200`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Logo className="mt-[29px] w-[39px] h-[17px] md:w-[80%] md:h-12 mb-10" />
      {sidebarItems.map((item) => (
        <div
          key={item.name}
          className={`flex cursor-pointer ${
            !expanded ? "justify-center" : ""
          }  gap-3 items-center group  px-2  py-2 w-[90%] rounded-md 
          }`}
          onClick={() => handleItemClick(item.name)}
        >
          <item.icon
            className={`${
              activeItem === item.name
                ? "fill-[#53ACFF]"
                : "fill-[#5D5D5D] group-hover:fill-white"
            }`}
          />

          <span
            className={`hidden text-sm font-semibold ${
              !expanded
                ? "hidden"
                : activeItem === item.name
                ? "text-[#53ACFF] md:block"
                : "text-[#5D5D5D] md:block group-hover:text-white"
            }`}
          >
            {item.name}
          </span>
        </div>
      ))}
      <div className="flex items-center gap-4 mt-auto mb-4">
        <img src={User} className="w-[40px] h-[40px] rounded-full" />
        {expanded && (
          <div className="hidden md:flex  font-bold text-sm  flex-col gap-1 items-center justify-center">
            <span>John Doe</span>
            <span className="text-[#5D5D5D]">Beginner</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
