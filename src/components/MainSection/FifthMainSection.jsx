import React from "react";
import {
  DashboardDataRecentActivity,
  DashboardDataIncome,
  DashboardDataRecentActivityYesterday,
} from "../../data/DashboardData";
import { Link } from "react-router-dom";

const FifthMainSection = () => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-y-7 gap-x-7 mt-8">
      <div className="w-full border p-5 bg-box">
        <h2 className="w-full border-b pb-2 font-bold">Recent Activity</h2>
        <h3 className="uppercase text-sidebar-text w-full font-bold bg-gray-100 p-2 mt-3">
          Today
        </h3>
        {DashboardDataRecentActivity.map((data, index) => {
          const isMiddleElement =
            index !== DashboardDataRecentActivity.length - 1;

          const iconClass = `bg-${data.color}-600 rounded-full p-3 text-white`;

          return (
            <div
              key={index}
              className={`flex justify-between items-center pb-1${
                isMiddleElement ? " border-b" : ""
              }`}
            >
              <div className="flex gap-x-3 items-center mt-5">
                <span className={iconClass}>{data.icon}</span>
                <p>{data.text}</p>
              </div>
              <div>
                <Link
                  className="flex items-center gap-x-2 mt-5 text-logo"
                  to="/"
                >
                  <span>{data.btn}</span>
                  <span className="text-sm">{data.btnArrow}</span>
                </Link>
              </div>
            </div>
          );
        })}
        <h3 className="uppercase text-sidebar-text w-full font-bold bg-gray-100 p-2 mt-3">
          Yesterday
        </h3>
        {DashboardDataRecentActivityYesterday.map((data, index) => {
          const isMiddleElement =
            index !== DashboardDataRecentActivityYesterday.length - 1;

          const iconClass = `bg-${data.color}-600 rounded-full p-3 text-white`;
          return (
            <div
              key={index}
              className={`flex justify-between items-center pb-2${
                isMiddleElement ? " border-b" : ""
              }`}
            >
              <div className="flex gap-x-3 items-center mt-5">
                <span className={iconClass}>{data.icon}</span>
                <p>{data.text}</p>
              </div>
              <div>
                <Link
                  className="flex items-center gap-x-2 mt-5 text-logo"
                  to="/"
                >
                  <span>{data.btn}</span>
                  <span className="text-sm">{data.btnArrow}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full border p-5 bg-box">
        <h2 className="w-full border-b pb-2 font-bold">Income/Expenses</h2>
        <h3 className="uppercase text-sidebar-text w-full font-bold bg-gray-100 p-2 mt-3">
          Today
        </h3>
        {DashboardDataIncome.map((data, index) => {
          const isMiddleElement = index >= 1 && index <= 3;
          const isMiddleUnderlineElement = index !== DashboardDataIncome.length - 1;
          const isLastElement = index === DashboardDataIncome.length - 2;

          const iconClass = `bg-${data.color}-600 rounded-full p-3 text-white`;

          return (
            <div
              key={index}
              className={`flex justify-between items-center pb-1 ${
                isMiddleUnderlineElement ? " border-b" : ""
              }`}
            >
              <div className="flex gap-x-3 items-center mt-5">
                <span className={iconClass}>{data.icon}</span>
                <p>{data.text}</p>
              </div>
              <div className={`text-black ${isMiddleElement ? "text-green-600" : ""} ${isLastElement ? "line-through" : ""}`}>{data.dollar}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FifthMainSection;
