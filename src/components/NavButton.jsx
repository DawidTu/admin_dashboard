// NavButton.js
import React from "react";
import TooltipComponent from "./TooltipComponent"; 

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-lg rounded-full p-2 hover:bg-slate-300 bg-slate-200"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-1.5 w-1.5 right-1 top-0.5"
      />
      {icon}
    </button>
  </TooltipComponent>
);

export default NavButton;
