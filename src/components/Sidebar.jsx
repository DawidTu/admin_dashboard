import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { SidebarData } from "../data/SidebarData";
import { secondData } from "../data/SidebarData";
import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa6";
import { useStateContext } from "../contexts/ContextProvider";
import logo from '../data/svg/logo.svg';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeElement, setActiveElement] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (element) => {
    setActiveElement(element);
    setActiveMenu(true);
    setIsSidebarOpen(true); // Otvorí sidebar, keď kliknete na ikonu
  };

  return (
    <div>
      {activeMenu && (
        <div className={`px-4 pt-4 h-full sidebar ${isSidebarOpen ? "" : "sidebar-closed"}`}>
          <div className={`${screenSize <= 770 ? "flex justify-between" : "flex"}`}>
            {screenSize <= 770 && (
              <button onClick={() => setActiveMenu(false)} className="text-gray-500">
                <FaArrowLeft />
              </button>
            )}
            <Link to="/" onClick={() => handleMenuClick("logo")}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div>
            <div className="mt-10">
              <div className="ml-1 text-xs text-sidebar-text">
                {isSidebarOpen ? (
                  <span className="uppercase">pages</span>
                ) : (
                  <span className="text-xl transition-all ease-in-out duration-300">...</span>
                )}
              </div>
              {SidebarData.map((item, index) => (
                <SidebarItem key={index} item={item} activeParent={activeElement === item.title} />
              ))}
            </div>
            <div className="mt-5">
              <span className="ml-1 text-xs text-sidebar-text">
                {isSidebarOpen ? (
                  <span className="uppercase">more</span>
                ) : (
                  <span className="text-xl transition-all ease-in-out duration-300">...</span>
                )}
              </span>
              {secondData.map((item, index) => (
                <SidebarItem key={index} item={item} activeParent={activeElement === item.title} />
              ))}
            </div>
          </div>
          <div onClick={toggleSidebar} className={`text-sidebar-text my-6 text-[23px] ${isSidebarOpen ? "float-right px-4" : "float-left"}`}>
            {isSidebarOpen ? <LuArrowLeftFromLine /> : <LuArrowRightFromLine />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;