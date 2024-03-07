import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  if (item.children) {
    return (
      <div>
        <div className="mt-5 text-white">
          <div className="flex justify-between" onClick={handleToggle}>
            <div className="flex items-center gap-3">
              <span className="flex gap-x-4 text-gray-300">
                {item.icon}
                {item.title}
              </span>
            </div>
            <div className="text-xl text-gray-300">{isOpen ? item.iconOpened : item.iconClosed}</div>
          </div>
          {isOpen && (
            <div className="text-gray-400 flex flex-col items-start ml-10">
              {item.children.map((child, index) => (
                <div className="text-sm" key={index} >
                  <SidebarItem item={child} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <span className="flex mt-3 text-gray-300">
        <Link to={item.path} className={`flex gap-x-4 ${item.children ? 'text-sm' : ''}`}>
          {item.icon}
          {item.title}
        </Link>
      </span>
    );
  }
};

export default SidebarItem;
