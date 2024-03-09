import React from 'react';
import { DashboardDataDirect, DashboardDataValue } from "../../data/DashboardData";
import BiaxialBarChart from "../Charts/BiaxialBarChart";
import TinyLineChart from "../Charts/TinyLineChart";
import { BsExclamationCircleFill } from "react-icons/bs";

const SecondMainSection = () => {
  return (
    <div className="flex gap-x-7 mt-8">
          {DashboardDataDirect.map((data, index) => {
            return (
              <div className="w-full border p-5" key={index}>
                <h2 className="w-full border-b pb-3 font-bold">{data.h2}</h2>
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
                <div className="flex">
                  <h2 className="flex items-center gap-x-3 w-full border-b pb-3 font-bold">
                    {data.h2}
                    <span className="text-gray-400">
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
  )
}

export default SecondMainSection