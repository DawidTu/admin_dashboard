import React, { useState } from "react";

const Checkbox = ({ id, label, disabled, type }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex">
      <div className="mr-3 flex items-center">
        <input
          className="mr-2 h-4 w-4"
          type={type}
          id={id}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
        />
        <label className="text-xs text-gray-500" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
