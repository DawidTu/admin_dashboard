import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { SearchData } from "../data/SearchData";
import { SearchDataMessage } from "../data/SearchData";

const Search = () => {
  return (
    <div className="nav-item absolute right-[370px] top-20 bg-white border dark:bg-[#42464D] p-4 rounded-md w-[650px]">
      <div className="flex items-center gap-x-3 border-b pb-2">
        <RiSearch2Line className="text-xl text-gray-400" />
        <input
          className="outline-none w-full"
          autoFocus
          type="text"
          placeholder="Search Anything..."
        />
      </div>
      <div>
        <h3 className="text-sm mt-4 text-gray-400 uppercase">Recent search</h3>
        {SearchData.map((data, index) => {
          return (
            <div className="flex gap-x-3 items-center px-2 hover:bg-main-color hover:text-gray-200 py-2 rounded-md" key={index}>
              <span className="text-gray-400 text-xl">{data.icon}</span>
              <span className="text-xs">{data.text}</span>
            </div>
          );
        })}
        <h3 className="text-sm mt-4 text-gray-400 uppercase">Recent pages</h3>
        {SearchDataMessage.map((data, index) => {
          return (
            <div className="flex gap-x-3 items-center px-2 hover:bg-main-color hover:text-gray-200 py-2 rounded-md" key={index}>
              <span className="text-gray-400 text-xl">{data.icon}</span>
              <span className="text-xs">{data.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
