import React from "react";
import Avatar from "../../components/Avatar";
import FilterData from "../../components/FilterData";
import { MdOutlineFilterList } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import FirstSection from "../../components/MainSection/FirstMainSection";
import SecondSection from "../../components/MainSection/SecondMainSection";
import ThirdMainSection from "../../components/MainSection/ThirdMainSection";
import FourthMainSection from "../../components/MainSection/FourthMainSection";
import FifthMainSection from "../../components/MainSection/FifthMainSection";
import MainDashCalendar from "../../components/Calendar/MainDashCalendar";
import MainDashBanner from "../../components/MainSection/MainDashBanner";
import { ContextProvider } from "../../contexts/ContextProvider";
import { useStateContext } from "../../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const NavButton = ({ customFunc, icon }) => (
  <TooltipComponent>
    <button type="button" onClick={() => customFunc()} className="relative">
      {icon}
    </button>
  </TooltipComponent>
);

const Dashboard = () => {
  const { handleClick, isClicked } = useStateContext();

  return (
    <div>
      {/* banner */}
      <MainDashBanner />
      {/* avatar section */}
      <div className="my-7 flex flex-col gap-y-5 xl:flex-row xl:justify-between">
        <div className="flex ml-44 xl:ml-0">
          <Avatar />
        </div>
        <div className="flex gap-x-4">
          <ContextProvider>
            <div className="bg-white border text-gray-500 border-gray-200 rounded-md hover:border-gray-400 w-11 cursor-pointer pl-[11px] pt-2.5">
              <NavButton
                customFunc={() => handleClick("filter")}
                icon={<MdOutlineFilterList size={20}/>}
              />
            </div>
            {isClicked.filter && <FilterData />}
          </ContextProvider>
          <div className="bg-white border border-gray-200 py-[8px] px-2 min-w-64 rounded-md hover:border-gray-400 cursor-pointer">
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
