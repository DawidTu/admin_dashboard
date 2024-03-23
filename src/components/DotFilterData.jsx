import React, { useState, useRef, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";

const DotFilterData = ({ options }) => {
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
    <div className="inline-flex relative z-[3]" ref={dropdownRef}>
      <button
        className="w-full flex justify-center items-center p-2 rounded-full focus:bg-slate-200"
        aria-label="Select option"
        aria-haspopup="true"
        onClick={toggleDown}
      >
        <BsThreeDots size={18} />
      </button>
      {isOpen && (
        <div className="absolute top-8 w-32 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded mt-1">
          <div className="text-sm px-4 pt-2">
            {options.map((option, index) => (
              <button
                key={index}
                className="mb-2 w-full text-left focus:outline-none"
                onClick={() => handleOptionChange(option)}
              >
                <span className="text-[13px] text-gray-600">{option}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DotFilterData;
