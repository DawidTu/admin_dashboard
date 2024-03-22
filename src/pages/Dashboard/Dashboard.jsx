import React from "react";
import Avatar from "../../components/Avatar";
import Filter from "../../components/Filter";
import { FaPlus } from "react-icons/fa6";
import FirstSection from "../../components/MainSection/FirstMainSection";
import SecondSection from "../../components/MainSection/SecondMainSection";
import ThirdMainSection from "../../components/MainSection/ThirdMainSection";
import FourthMainSection from "../../components/MainSection/FourthMainSection";
import FifthMainSection from "../../components/MainSection/FifthMainSection";
import MainDashCalendar from "../../components/Calendar/MainDashCalendar";
import MainDashBanner from "../../components/MainSection/MainDashBanner";
import MyButton from "../../components/MyButton";

const Dashboard = () => {
  const options3 = ["Direct VS Indirect", "Real Time Value", "Sales VS Refunds", "Last Order", "Total Spent"];
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
        <Filter options={options3}/>
          <div className="bg-white border border-gray-200 py-[8px] px-2 min-w-64 rounded-md hover:border-gray-400 cursor-pointer">
            <MainDashCalendar />
          </div>
          <MyButton size="medium" customColor="white" icon={<FaPlus />} backgroundColor="main-color" text="Add View"/>
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
