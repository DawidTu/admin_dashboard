import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropDownComponent = () => {
  const [selectedOption, setSelectedOption] = useState("lastMonth");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <div
        className="flex text-sm cursor-pointer appearance-none text-gray-500 bg-transparent border border-gray-300 hover:border-gray-400 px-3 w-44 justify-between py-2 rounded leading-tight focus:outline-none focus:border-gray-500"
        tabIndex={0}
        onClick={toggleDropdown}
        onBlur={() => setIsOpen(false)}
      >
        {selectedOption}
        <MdOutlineKeyboardArrowDown size={20} />
      </div>
      {isOpen && (
        <div className="absolute text-sm w-44 top-full left-0 mt-1 bg-main-bg border border-gray-300 rounded-md shadow-lg z-10">
          <ul>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionChange("today")}
            >
              Today
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionChange("last7days")}
            >
              Last 7 days
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionChange("lastMonth")}
            >
              Last Month
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionChange("last12Months")}
            >
              Last 12 Months
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOptionChange("allTime")}
            >
              All Time
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownComponent;
