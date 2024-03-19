import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { SearchData } from "../data/SearchData";
import { SearchDataMessage } from "../data/SearchData";

const Search = () => {
  return (
    <div className="nav-item fixed z-10 right-[25px] xl:right-[470px] top-20 bg-white border dark:bg-[#42464D] p-4 rounded-md w-[550px] xl:w-[650px]">
      <div className="flex items-center gap-x-3 border-b pb-2">
        <RiSearch2Line className="text-xl text-sidebar-text" />
        <input
          className="outline-none w-full"
          autoFocus
          type="text"
          placeholder="Search Anything..."
        />
      </div>
      <div>
        <h3 className="text-sm mt-4 text-sidebar-text uppercase">Recent search</h3>
        {SearchData.map((data, index) => {
          return (
            <div className=" cursor-pointer flex gap-x-3 items-center px-2 hover:bg-main-color hover:text-gray-200 py-2 rounded-md" key={index}>
              <span className="text-sidebar-text text-xl">{data.icon}</span>
              <span className="text-xs">{data.text}</span>
            </div>
          );
        })}
        <h3 className="text-sm mt-4 text-sidebar-text uppercase">Recent pages</h3>
        {SearchDataMessage.map((data, index) => {
          return (
            <div className="cursor-pointer flex gap-x-3 items-center px-2 hover:bg-main-color hover:text-gray-200 py-2 rounded-md" key={index}>
              <span className="text-sidebar-text text-xl">{data.icon}</span>
              <span className="text-xs">{data.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
