import React from "react";
import PieChart from "../Charts/PieChart";
import TableComponent from "../Tables/Table";

const ThirdMainSection = () => {
    
  return (
    <div className="flex flex-wrap xl:flex-nowrap gap-y-7 gap-x-7 mt-8">
      <div className="border p-5 w-full xl:w-1/3 bg-box">
        <h2 className="w-full border-b pb-2 font-bold">Top Countries</h2>
        <div className="mt-2 w-full h-60">
          <PieChart />
        </div>
      </div>
      <div className="border p-5 w-full xl:w-2/3 bg-box">
        <h2 className="w-full border-b pb-2 font-bold">Top Channels</h2>
        <div className="mt-2 w-full">
          <TableComponent />
        </div>
      </div>
    </div>
  );
};

export default ThirdMainSection;
