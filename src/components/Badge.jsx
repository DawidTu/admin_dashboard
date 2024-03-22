import React from "react";

const Badge = ({ value, backgroundColor, textColor, textSize, icon }) => {
  return (
    <div
      className={`bg-${backgroundColor}-300 bg-${backgroundColor} flex items-center pl-3 pr-3 py-1 text-${textSize} rounded-2xl text-${textColor}-600 text-${textColor}`}
    >
      {icon && <span className="-ml-2">{icon}</span>}
      <span>{value}</span>
    </div>
  );
};

export default Badge;
