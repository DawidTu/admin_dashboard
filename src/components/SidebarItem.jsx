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
        (isActive || activeParent) ? "text-logo rounded-sm bg-blue" : ""
      }`}
    >
      {item.children ? (
        <div
          className={`flex justify-between transition-all ease-in-out duration-300 ${
            (isActive || activeParent) ? "" : "text-gray-300"
          }`}
          onClick={handleToggle}
        >
          <div className="flex items-center">
            <div className="flex text-sm gap-x-4 text-gray-300 ">
              <Link className={(isActive || activeParent) ? "text-logo" : ""}>{item.icon}</Link>
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
          className={`flex w-full justify-between  ${
            (isActive || activeParent) ? "text-logo" : "text-gray-300"
          }`}
        >
          <div className="flex gap-x-4">
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </div>
          <span className="mr-3">{item.badge}</span>
        </Link>
      )}

      {isOpen && item.children && (
        <div className="text-sidebar-text hover:text-white flex flex-col items-start">
          {item.children.map((child, index) => (
            <div className="text-sm" key={index}>
              <SidebarItem item={child} activeParent={(activeParent)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
