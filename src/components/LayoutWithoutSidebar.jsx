import React from "react";
import Navbar from "./Navbar";

const LayoutWithoutSidebar = ({ children }) => {
  return (
    <div className=" bg-main-bg dark:bg-main-dark-bg">
      <div className="w-full">
        <div className="md:static bg-box dark:bg-main-dark-bg">
          <Navbar />
        </div>
        <div className="p-8 mt-12 2xl:px-24">
          {/* Content */}
          
        </div>
      </div>
    </div>
  );
};

export default LayoutWithoutSidebar;
