import React from "react";
import MainDashCalendar from "../../components/Calendar/MainDashCalendar";
import { FaPlus } from "react-icons/fa6";
import MainDashBanner from "../../components/MainSection/MainDashBanner";

const Fintech = () => {
  return (
    <div className="mt-14 mx-auto">
      <div className="flex flex-col md:flex-row justify-between md:mb-8">
        <h3 className="h3 font-semibold">Fintech ✨</h3>
        <div className="flex flex-col md:flex-row gap-y-3 gap-x-3 mt-3">
          <div className="main-content border border-gray-200 py-[8px] px-2 min-w-64 rounded-md hover:border-gray-400 cursor-pointer mt-2  md:mt-0 flex">
            <MainDashCalendar />
          </div>
          <button className="bg-main-color hover:bg-secondary-main px-3 py-[8px] text-white items-center justify-center flex rounded-md">
            <span className="text-lg mr-2 text-gray-300">
              <FaPlus />
            </span>
            <p className="text-sm">Add View</p>
          </button>
        </div>
      </div>
      <div><MainDashBanner/></div>
    </div>
  );
};

export default Fintech;
