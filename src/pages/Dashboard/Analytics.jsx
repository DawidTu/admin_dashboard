import React, { useRef, useEffect } from "react";
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
import TableComponent from "../../components/Table";

const Analytics = () => {
  return (
    <div className="mt-14 mx-auto">
      <div className="flex justify-between mb-8">
        <h3 className="h3 font-semibold">Analitics ✨</h3>
        <div className="bg-white border border-gray-200 py-[8px] px-2 min-w-64 rounded-md hover:border-gray-400 cursor-pointer">
            <MainDashCalendar />
          </div>
      </div>
      <div>
        <FirstSection />
        <SecondSection />
        <FourthMainSection />
        <TableComponent/>
      </div>
    </div>
  );
};

export default Analytics;
