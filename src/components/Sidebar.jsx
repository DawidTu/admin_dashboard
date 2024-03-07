import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import { SidebarData } from "../data/SidebarData";
import { secondData } from "../data/SidebarData";

const Sidebar = () => {
  return (
    <div className="h-screen sidebar">
      <div className="p-6">
        <div>
          <Link className="text-logo" to="/">
            <FaReact size={43} />
          </Link>
        </div>
        <div>
          <div className="mt-10">
            <span className="uppercase text-xs text-gray-400">pages</span>
            {SidebarData.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
          </div>
          <div className="mt-5">
            <span className="uppercase text-xs text-gray-400">more</span>
            {secondData.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
