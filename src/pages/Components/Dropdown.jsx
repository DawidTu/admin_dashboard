import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import UserProfile from "../../components/UserProfile";
import {
  useStateContext,
  ContextProvider,
} from "../../contexts/ContextProvider";
import Arrow1 from "../../data/svg/arrow1.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDownComponent from "../../components/DropDownComponent";
import MainDashCalendar from "../../components/Calendar/MainDashCalendar";

const Dropdown = () => {
  const { handleClick, isClicked } = useStateContext();

  return (
    <div className="mt-16 mx-auto h-[1500px]">
      <h3 className="h3 font-semibold border-b border-gray-300 pb-10">
        Dropdown ✨
      </h3>
      <div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Classic Dropdown</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center">
            <DropDownComponent />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Full-width Dropdown</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center"></div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Filter</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center"></div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Profile</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center relative">
            <ContextProvider>
              <TooltipComponent content="Profile" position="BottomCenter">
                <div
                  className="flex items-center gap-2 cursor-pointer p-1"
                  onClick={() => handleClick("userProfile")}
                >
                  <div className="justify-center items-center rounded-full bg-sidepanel">
                    <img
                      className="p-2 w-9 h-9"
                      src={Arrow1}
                      alt="user-profile"
                    />
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
              {isClicked.userProfile && <UserProfile />}
            </ContextProvider>
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Switch Account</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center"></div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Notification</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center"></div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Help Center</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center"></div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Quick Selection</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center"></div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">
            Datepicker (built with flatpickr)
          </h3>
          <div className=" mt-8 flex flex-wrap gap-y-3 gap-x-3 items-center">
            <div className="bg-white border border-gray-200 py-[8px] px-2 min-w-64 rounded-md hover:border-gray-400 cursor-pointer">
              <MainDashCalendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
