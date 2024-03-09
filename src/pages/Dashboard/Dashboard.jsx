import React from "react";
import Avatar from "../../components/Avatar";
import FilterData from "../../components/FilterData";
import { FaPlus } from "react-icons/fa6";
import FirstSection from "../../components/MainSection/FirstMainSection";
import SecondSection from "../../components/MainSection/SecondMainSection";
import ThirdMainSection from "../../components/MainSection/ThirdMainSection";
import FourthMainSection from "../../components/MainSection/FourthMainSection";
import FifthMainSection from "../../components/MainSection/FifthMainSection";

const Dashboard = () => {
  return (
    <div>
      {/* banner */}
      <div className="overflow-hidden bg-indigo-300 dark:text-gray-200 dark:bg-secondary-dark-bg h-28 rounded-sm w-full flex justify-between">
        <div className="p-5 flex flex-col">
          <h3 className="text-3xl">Good afternoon, Acme Inc. 👋</h3>
          <p className="mt-2">
            Here is what’s happening with your projects today:
          </p>
        </div>
      </div>
      {/* avatar section */}
      <div className="my-7 flex justify-between">
        <div className="flex">
          <Avatar />
        </div>
        <div className="flex gap-x-4">
          <div className="bg-white border border-gray-200 rounded-md hover:border-gray-400 py-[8px] w-11 cursor-pointer pl-3 pt-3">
            {/* <FilterData /> */}
          </div>
          <div className="bg-white border border-gray-200 py-[8px] w-72 rounded-md hover:border-gray-400 cursor-pointer">
            calendar
          </div>
          <button className="bg-main-color hover:bg-secondary-main px-3 py-[10px] text-white items-center justify-center flex rounded-md">
            <span className="text-lg mr-2 text-gray-300">
              <FaPlus />
            </span>
            <p className="text-sm">Add View</p>
          </button>
        </div>
      </div>
      <div>
        <FirstSection />
        <SecondSection />
        <ThirdMainSection />
        <FourthMainSection />
        <FifthMainSection />
      </div>
    </div>
  );
};

export default Dashboard;
