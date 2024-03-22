import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ item, activeParent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(location.pathname === item.path);
  }, [location.pathname, item.path]);

  useEffect(() => {
    setIsOpen(activeParent && isActive);
  }, [activeParent, isActive]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`pb-1 py-4 text-white ${
        (isActive || activeParent) ? "text-logo" : ""
      }`}
    >
      {item.children ? (
        <div
          className={`pl-3 items-center flex justify-between transition-all ease-in-out duration-300 ${
            (isActive || activeParent || isOpen) ? "bg-[#0f172a] pt-1" : "text-gray-300"
          }`}
          onClick={handleToggle}
        >
          <div className="flex items-center">
            <div className="flex gap-x-4 text-gray-300 cursor-pointer">
              <Link className={(isOpen || isActive) ? "text-logo" : ""}>{item.icon}</Link>
              <span>{item.title}</span>
            </div>
          </div>
          <div className="px-3 text-xl text-gray-300">
            {isOpen ? item.iconOpened : item.iconClosed}
          </div>
        </div>
      ) : (
        <Link
          to={item.path}
          className={`items-center flex pl-3 w-full justify-between cursor-pointer ${
            (isActive || activeParent) ? "text-logo" : "text-gray-300"
          }`}
        >
          <div className="flex gap-x-4">
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </div>
          <span className="text-xs mr-3 bg-indigo-500 text-white rounded-md">{item.badge}</span>
        </Link>
      )}

      {isOpen && item.children && (
        <div className={`text-sidebar-text hover:text-white flex flex-col items-start ${isOpen || isActive ? "bg-[#0f172a] pt-1" : ""}`}>
          {item.children.map((child, index) => (
            <div className="text-sm ml-6" key={index}>
              <SidebarItem item={child} activeParent={(activeParent)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
