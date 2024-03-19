import React from "react";
import {
  DashboardDataDirect,
  DashboardDataValue,
} from "../../data/DashboardData";
import BiaxialBarChart from "../Charts/BiaxialBarChart";
import TinyLineChart from "../Charts/TinyLineChart";
import { BsExclamationCircleFill } from "react-icons/bs";

const SecondMainSection = () => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-y-7 gap-x-7 mt-8">
      {DashboardDataDirect.map((data, index) => {
        return (
          <div className="w-full border p-5 bg-box" key={index}>
            <h2 className="w-full border-b pb-3 font-bold">{data.h2}</h2>
            <div className="flex mt-5 gap-x-8">
              <div className="flex items-center">
                <span className="block w-3 h-3 rounded-full mr-2 border-[3px] border-[#60a5fa]" />
                <span className="mr-2 text-3xl font-bold">{data.dollar}</span>
                <span className="text-sidebar-text">{data.direct}</span>
              </div>
              <div className="flex items-center">
                <span className="block w-3 h-3 rounded-full mr-2 border-[3px] border-[#6366f1]" />
                <span className="mr-2 text-3xl font-bold">{data.dollar2}</span>
                <span className="text-sidebar-text">{data.indirect}</span>
              </div>
            </div>
            <div className="mt-2 w-full h-64">
              <BiaxialBarChart />
            </div>
          </div>
        );
      })}
      {DashboardDataValue.map((data, index) => {
        return (
          <div className="w-full border p-5 bg-box" key={index}>
            <div className="flex">
              <h2 className="flex items-center gap-x-3 w-full border-b pb-3 font-bold">
                {data.h2}
                <span className="text-sidebar-text">
                  <BsExclamationCircleFill />
                </span>
              </h2>
            </div>
            <div className="mt-5">
              <div className="flex">
                <span className="h3 font-bold mr-2">{data.dollar}</span>
                <span className="bg-green-500 h-full w-14 py-1 text-center text-sm rounded-full text-white">
                  {data.bage}
                </span>
              </div>
            </div>
            <div className="mt-2 w-full h-64">
              <TinyLineChart />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SecondMainSection;
