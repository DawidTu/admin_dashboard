import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { SidebarData } from "../data/SidebarData";
import { secondData } from "../data/SidebarData";
import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa6";
import { useStateContext } from "../contexts/ContextProvider";
import logo from "../data/svg/logo.svg";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeElement, setActiveElement] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOpenItem = (item) => {
    if (activeElement && activeElement !== item.title) {
      setActiveElement(item.title);
    } else {
      setActiveElement(null);
    }
  };

  const handleMenuClick = (element) => {
    setActiveElement(element);
    setActiveMenu(true);
    setIsSidebarOpen(true);
  };

  return (
    <div>
      {activeMenu && (
        <div
          className={`px-2 pt-4 h-full sidebar ${
            isSidebarOpen ? "sidebar" : "sidebar-closed"
          }`}
        >
          <div
            className={`${
              screenSize <= 770 ? "flex justify-between px-2" : "flex"
            }`}
          >
            {screenSize <= 770 && (
              <button
                onClick={() => setActiveMenu(false)}
                className="text-gray-500 ml-1"
              >
                <FaArrowLeft />
              </button>
            )}
            <Link
              className={`ml-2 ${isSidebarOpen ? "" : "sidebar-closed"}`}
              to="/"
              onClick={() => handleMenuClick("logo")}
            >
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="mt-10">
            <div className="ml-1 text-xs text-sidebar-text">
              {isSidebarOpen ? (
                <span className="uppercase text-gray-400">pages</span>
              ) : (
                <span className="text-xl text-gray-400 transition-all ease-in-out duration-300 ml-2.5">
                  ...
                </span>
              )}
            </div>
            {SidebarData.map((item, index) => (
              <SidebarItem
                key={index}
                item={item}
                activeParent={activeElement === item.title}
                handleOpenItem={handleOpenItem}
              />
            ))}
          </div>
          <div className="mt-5">
            <div className="ml-1 text-xs text-sidebar-text">
              {isSidebarOpen ? (
                <span className="uppercase text-gray-400">more</span>
              ) : (
                <span className="text-xl text-gray-400 transition-all ease-in-out duration-300 ml-2.5">
                  ...
                </span>
              )}
            </div>
            {secondData.map((item, index) => (
              <SidebarItem
                key={index}
                item={item}
                activeParent={activeElement === item.title}
                handleOpenItem={handleOpenItem}
              />
            ))}
          </div>

          <div
            onClick={toggleSidebar}
            className={`text-sidebar-text my-6 text-[23px] ${
              isSidebarOpen ? "float-right px-4" : "float-left px-3"
            }`}
          >
            {isSidebarOpen ? <LuArrowLeftFromLine /> : <LuArrowRightFromLine />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
