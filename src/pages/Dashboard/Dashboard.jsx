import React from "react";
import { DashboardData, DashboardDataSales } from "../../data/DashboardData";
import { DashboardDataDirect } from "../../data/DashboardData";
import { DashboardDataValue } from "../../data/DashboardData";
import LineChart from "../../components/Charts/LineChart";
import BiaxialBarChart from "../../components/Charts/BiaxialBarChart";
import TinyLineChart from "../../components/Charts/TinyLineChart";
import PieChart from "../../components/Charts/PieChart";
import HighlightLineChart from "../../components/Charts/HighlightLineChart";
import BarChart from "../../components/Charts/BarChart";

const Dashboard = () => {
  return (
    <div>
      <div className="overflow-hidden bg-indigo-300 dark:text-gray-200 dark:bg-secondary-dark-bg h-28 rounded-sm w-full flex justify-between">
        <div className="p-5 flex flex-col">
          <h3 className="text-3xl">Good afternoon, Acme Inc. 👋</h3>
          <p className="mt-2 text-subtitle">
            Here is what’s happening with your projects today:
          </p>
        </div>
      </div>
      <div className="my-7 flex justify-between">
        <div className="">avatar</div>
        <div>filter calendar add</div>
      </div>
      <div>
        <div className="flex gap-x-7">
          {DashboardData.map((data, index) => {
            return (
              <div className="w-full border p-5" key={index}>
                <div className="flex items-center justify-between">
                  {data.img}
                  {data.dotsIcon}
                </div>
                <h2 className="mt-2 text-xl font-bold">{data.h2}</h2>
                <div className="my-2 uppercase text-gray-400 text-sm">
                  {data.text}
                </div>
                <div className="flex">
                  <span className="h3 font-bold mr-2">{data.dollar}</span>
                  <span className="bg-green-500 h-full w-14 py-1 text-center text-sm rounded-full text-white">
                    {data.bage}
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-100 h-20">
                  <LineChart />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-x-7 mt-8">
          {DashboardDataDirect.map((data, index) => {
            return (
              <div className="w-full border p-5" key={index}>
                <h2 className="w-full border-b pb-2 font-bold">{data.h2}</h2>
                <div className="flex mt-5 gap-x-8">
                  <div>
                    <span className="mr-2 text-3xl font-bold">
                      {data.dollar}
                    </span>
                    <span className="text-gray-400">{data.direct}</span>
                  </div>
                  <div>
                    <span className="mr-2 text-3xl font-bold">
                      {data.dollar2}
                    </span>
                    <span className="text-gray-400">{data.indirect}</span>
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
              <div className="w-full border p-5" key={index}>
                <h2 className="w-full border-b pb-2 font-bold">{data.h2}</h2>
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
        <div className="flex gap-x-7 mt-8">
          <div className="border p-5 w-1/3">
            <h2 className="w-full border-b pb-2 font-bold">Top Countries</h2>
            <div className="mt-2 w-full h-60">
              <PieChart />
            </div>
          </div>
          <div className="border p-5 w-2/3">
            <h2 className="w-full border-b pb-2 font-bold">Top CHannels</h2>
            <div className="mt-2 w-full h-60">
              tabulka
            </div>
          </div>
        </div>
        <div className="flex gap-x-7 mt-8">
          {DashboardDataSales.map((data, index) => {
            return (
              <div className="w-full border p-5" key={index}>
                <h2 className="w-full border-b pb-5 font-bold">{data.h2}</h2>
                <div className="flex mt-5 gap-x-8">
                  <div className="flex w-full justify-between items-center">
                    <div className="flex">
                      <span className="mr-2 text-3xl font-bold">
                        {data.dollar}
                      </span>
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
                <div className="mt-2 w-full h-64"><HighlightLineChart/></div>
              </div>
            );
          })}
          {DashboardDataValue.map((data, index) => {
            return (
              <div className="w-full border p-5" key={index}>
                <h2 className="w-full border-b pb-5 font-bold">{data.h2}</h2>
                <div className="mt-5">
                  <div className="flex">
                    <span className="h3 font-bold mr-2">{data.dollar}</span>
                    <span className="bg-yellow-500 h-full w-14 py-1 text-center text-sm rounded-full text-white">
                      {data.bage}
                    </span>
                  </div>
                </div>
                <div className="mt-2 w-full h-64">
                  <BarChart />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-x-7 mt-8">
          {DashboardDataDirect.map((data, index) => {
            return (
              <div className="w-full border p-5" key={index}>
                <h2 className="w-full border-b pb-2 font-bold">{data.h2}</h2>
                <div className="flex mt-5 gap-x-8">
                  <div>
                    <span className="mr-2 text-3xl font-bold">
                      {data.dollar}
                    </span>
                    <span className="text-gray-400">{data.direct}</span>
                  </div>
                  <div>
                    <span className="mr-2 text-3xl font-bold">
                      {data.dollar2}
                    </span>
                    <span className="text-gray-400">{data.indirect}</span>
                  </div>
                </div>
                <div className="mt-2 w-full h-64">linechart</div>
              </div>
            );
          })}
          {DashboardDataValue.map((data, index) => {
            return (
              <div className="w-full border p-5" key={index}>
                <h2 className="w-full border-b pb-2 font-bold">{data.h2}</h2>
                <div className="mt-5">
                  <div className="flex">
                    <span className="h3 font-bold mr-2">{data.dollar}</span>
                    <span className="bg-green-500 h-full w-14 py-1 text-center text-sm rounded-full text-white">
                      {data.bage}
                    </span>
                  </div>
                </div>
                <div className="mt-2 w-full h-64">linechart</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
