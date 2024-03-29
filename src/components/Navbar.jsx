import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { PiChatsCircleFill } from "react-icons/pi";
import { BsExclamationCircleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import Arrow1 from "../data/svg/arrow1.svg";

import Search from "./Search";
import Chat from "./Chat";
import Help from "./Help";
import UserProfile from "./UserProfile";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { useImageContext } from "../contexts/ImageContext";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-lg rounded-full p-2 md:p-2.5 navbutton"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-1.5 w-1.5 right-1 top-0.5"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { imageSrc } = useImageContext();
  const ref = useRef();
  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setIsClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  const [ theme, setTheme ] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const closeWindows = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsClicked({
        search: false,
        chat: false,
        help: false,
        userProfile: false,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeWindows);

    return () => {
      document.removeEventListener("click", closeWindows);
    };
  }, []);

  return (
    <div ref={ref} className="nav-bar border-b fixed w-full z-50">
      <div className="z-10 flex items-center justify-between p-2 px-3 md:mx-6 relative">
        <button className="text-gray-500" onClick={handleActiveMenu}>
          <AiOutlineMenu size={25} />
        </button>

        <div className="flex gap-x-2 items-center">
          <div>
            <NavButton
              title="Search"
              customFunc={() => handleClick("search")}
              color={currentColor}
              icon={<RiSearch2Line size={20} />}
            />
          </div>
          <div>
            <NavButton
              title="Chat"
              dotColor="red"
              customFunc={() => handleClick("chat")}
              color={currentColor}
              icon={<PiChatsCircleFill size={20} />}
            />
          </div>
          <div>
            <NavButton
              title="Help"
              customFunc={() => handleClick("help")}
              color={currentColor}
              icon={<BsExclamationCircleFill size={20} />}
            />
          </div>
          <div>
            <label
              className="swap swap-rotate relative text-lg rounded-full p-2 navbutton"
            >
              <input
                onChange={handleToggle}
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />
              <svg
                className="swap-off fill-current w-5 h-5 md:w-6 md:h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className="swap-on fill-current w-5 h-5 md:w-6 md:h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <div className="border h-9"></div>
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 relative"
              onClick={() => handleClick("userProfile")}
            >
              <div className="justify-center items-center rounded-full navuserprofile">
                <img
                  className="p-2 w-9 h-9"
                  src={imageSrc ? imageSrc : Arrow1}
                  alt={imageSrc ? "user-profile" : "arrow"}
                />
              </div>
              <p className="flex">
                <span className="text-sidebar-text text-sm md:text-14">
                  Acme
                </span>{" "}
                <span className="text-sidebar-text font-bold ml-1 text-sm md:text-14">
                  Inc.
                </span>
              </p>
              <MdKeyboardArrowDown className="text-sidebar-text text-16" />
            </div>
          </TooltipComponent>

          {isClicked.search && <Search />}
          {isClicked.chat && <Chat />}
          {isClicked.help && <Help />}
          {isClicked.userProfile && <UserProfile />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
