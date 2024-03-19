import React from "react";

const Badge = ({ value, color }) => {
  return (
    <div className={`badge bg-${color} px-2 py-1 text-sm rounded-md text-white`}>{value}</div>
  );
};

export default Badge;
