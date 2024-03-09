import React from 'react';
import { DashboardData } from '../../data/DashboardData';
import LineChart from '../Charts/LineChart';

const FirstMainSection = () => {
  return (
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
  )
}

export default FirstMainSection