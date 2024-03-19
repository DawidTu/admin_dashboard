import React, { useState } from "react";

const SwitchButton = ({ checked, disabled, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const toggleSwitch = () => {
    if (!disabled) {
      setIsChecked(!isChecked);
      if (onChange) {
        onChange(!isChecked);
      }
    }
  };

  return (
    <label className="flex items-center cursor-pointer gap-x-2">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleSwitch}
          className="sr-only"
          disabled={disabled}
        />
        <div
          className={`block w-10 h-[22px] rounded-full ${
            isChecked
              ? "bg-main-color"
              : disabled
              ? "bg-gray-200"
              : "bg-gray-400"
          }`}
        ></div>
        <div
          className={`absolute left-[2px] top-[2px] ${
            disabled ? "bg-gray-400" : "bg-white"
          } w-[18px] h-[18px] rounded-full transition-transform ${
            isChecked ? "transform translate-x-[18px]" : ""
          }`}
        ></div>
      </div>
      <div
        className={`text-xs xl:text-xs italic ${
          disabled ? "text-gray-400" : "text-gray-700"
        }`}
      >
        {disabled ? "Disabled" : isChecked ? "On" : "Off"}
      </div>
    </label>
  );
};

export default SwitchButton;
