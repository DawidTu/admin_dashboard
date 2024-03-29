import React, { useState, useEffect, useRef } from "react";
import ChackBox from "../components/ChackBox";
import MyButton from "../components/MyButton";
import { IoFilter } from "react-icons/io5";

const Filter = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionChange = () => {
    setIsOpen(false);
  };

  const toggleDown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="inline-flex relative z-[5]" ref={dropdownRef}>
      <button
        className="w-full main-content dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-500 flex justify-center items-center p-2 rounded-[4px] "
        aria-label="Select option"
        aria-haspopup="true"
        onClick={toggleDown}
      >
        <IoFilter size={18} />
      </button>
      {isOpen && (
        <div className="absolute top-10 w-56 main-content border rounded mt-1">
          <div className="text-sm px-4 py-2">
            <div className="font-semibold mt-2 mb-4 uppercase text-gray-400 text-xs">
              Filters
            </div>
            {options.map((option, index) => (
              <div className="flex">
                <div className="mt-1">
                  <ChackBox type="checkbox" />
                </div>
                <button
                  key={index}
                  className="mb-2 w-full text-left focus:outline-none"
                  onClick={() => handleOptionChange(option)}
                >
                  <span className="text-[13px] text-gray-600">{option}</span>
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 border-t py-2 px-3">
            <MyButton text="Clear" size="xs" />
            <MyButton
              backgroundColor="main-color"
              customColor="white"
              text="Apply"
              size="xs"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
