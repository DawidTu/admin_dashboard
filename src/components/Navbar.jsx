import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { PiChatsCircleFill } from "react-icons/pi";
import { BsExclamationCircleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import Arrow1 from "../data/svg/arrow1.svg";
import Search from "./Search";
import Chat from "./Chat";
import Help from "./Help";
import UserProfile from "./UserProfile";
import { useStateContext } from "../contexts/ContextProvider";
import { useRef } from "react";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-lg rounded-full p-2 hover:bg-slate-300 bg-slate-200"
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

  const ref = useRef();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div ref={ref} className="border-b fixed w-full bg-white z-10">
      <div className="z-10 flex items-center justify-between p-2 px-5 md:mx-6 relative">
        <button className="text-gray-500" onClick={handleActiveMenu}>
          <AiOutlineMenu size={20}/>
        </button>
        
        <div className="flex gap-x-5 items-center">
          <div>
            <NavButton
              title="Search"
              customFunc={() => handleClick("search")}
              color={currentColor}
              icon={<RiSearch2Line />}
            />
          </div>
          <div>
            <NavButton
              title="Chat"
              dotColor="red"
              customFunc={() => handleClick("chat")}
              color={currentColor}
              icon={<PiChatsCircleFill />}
            />
          </div>
          <div>
            <NavButton
              title="Help"
              customFunc={() => handleClick("help")}
              color={currentColor}
              icon={<BsExclamationCircleFill />}
            />
          </div>
          <div className="border h-7 mt-2"></div>
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className="flex items-center gap-2 cursor-pointer p-1 relative"
              onClick={() => handleClick("userProfile")}
            >
              <div className="justify-center items-center rounded-full bg-sidepanel">
                <img className="p-2 w-9 h-9" src={Arrow1} alt="user-profile" />
              </div>
              <p>
                <span className="text-sidebar-text text-14">Acme</span>{" "}
                <span className="text-sidebar-text font-bold ml-1 text-14">
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
