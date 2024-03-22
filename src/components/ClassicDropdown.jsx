import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ClassicDropdown = ({ options, iconPosition }) => {
  const [selectedOption, setSelectedOption] = useState(options[2]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
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
    <div className="inline-flex relative w-full z-30" ref={dropdownRef}>
      <button
        className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-500 flex items-center px-4 py-2 rounded-[4px] justify-between text-sm"
        aria-label="Select option"
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        <MdOutlineKeyboardArrowDown size={20}/>
      </button>
      {isOpen && (
        <div className="absolute top-9 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded mt-1">
          <div className="text-sm">
            {options.map((option, index) => (
              <button
                key={index}
                className="block w-full py-2 px-4 text-left hover:bg-gray-50 focus:outline-none"
                onClick={() => handleOptionChange(option)}
              >
                <div className="flex items-center">
                  <div>
                    {iconPosition === "left" && selectedOption === option && (
                      <FaCheck className="w-3 h-3 mr-2 text-logo" />
                    )}
                  </div>
                  <span className={selectedOption === option ? "text-logo" : ""}>{option}</span>
                  <div>
                    {iconPosition === "right" && selectedOption === option && (
                      <FaCheck className="w-3 h-3 ml-2 text-logo" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassicDropdown;
