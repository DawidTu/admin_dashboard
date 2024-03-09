import React from "react";
import {
  DashboardDataSales,
  DashboardDataSalesRefunds,
} from "../../data/DashboardData";
import HighlightLineChart from "../Charts/HighlightLineChart";
import { BsExclamationCircleFill } from "react-icons/bs";
import BarChart from "../Charts/BarChart";

const FourthMainSection = () => {
  return (
    <div className="flex gap-x-7 mt-8">
      {DashboardDataSales.map((data, index) => {
        return (
          <div className="w-full border p-5" key={index}>
            <h2 className="w-full border-b pb-5 font-bold">{data.h2}</h2>
            <div className="flex mt-5 gap-x-8">
              <div className="flex w-full justify-between items-center">
                <div className="flex">
                  <span className="mr-2 text-3xl font-bold">{data.dollar}</span>
                  <span className="bg-yellow-500 h-full w-14 py-1 text-center text-sm rounded-full text-white">
                    {data.bage}
                  </span>
                </div>
                <div className="flex gap-x-3">
                  <span>{data.current}</span>
                  <span>{data.previous}</span>
                </div>
              </div>
            </div>
            <div className="mt-2 w-full h-64">
              <HighlightLineChart />
            </div>
          </div>
        );
      })}
      {DashboardDataSalesRefunds.map((data, index) => {
        return (
          <div className="w-full border p-5" key={index}>
            <h2 className="w-full flex items-center gap-x-3 border-b pb-5 font-bold">
              {data.h2}
              <span className="text-gray-400">
                <BsExclamationCircleFill />
              </span>
            </h2>
            <div className="mt-5">
              <div className="flex">
                <span className="h3 font-bold mr-2">{data.dollar}</span>
                <span className="bg-yellow-500 h-full w-14 py-1 text-center text-sm rounded-full text-white">
                  {data.bage}
                </span>
              </div>
            </div>
            <div className="mt-5 w-full h-64">
              <BarChart />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FourthMainSection;
