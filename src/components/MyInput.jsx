import React from 'react';

const SelectInput = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className='outline-none bg-transparent py-2 w-[180px]'>
      <option value="Italy">Italy</option>
      <option value="USA">USA</option>
      <option value="United Kingdom">United Kingdom</option>
    </select>
  );
};

const MyInput = ({
  size,
  color,
  value,
  icon,
  upLabel,
  downLabel,
  placeHolder,
  leftLabelText,
  rightLabelText,
  onChange,
}) => {
  const getInputClasses = () => {
    let classes = 'inline-flex items-center justify-center rounded-[4px] shadow-sm outline-none';
    classes += " bg-transparent";

    // Nastavenie veľkosti
    if (size === "small") {
      classes += " py-2 w-full text-sm";
    } else if (size === "medium") {
      classes += " px-1 py-2.5 w-full max-h-13 text-base";
    } else if (size === "large") {
      classes += " px-1 py-3 w-full max-h-16 text-lg";
    } else {
      classes += " w-full py-2 text-base";
    }

    // Nastavenie farby
    if (color === "success") {
      classes += " border-green-500 focus:border-green-700";
    } else if (color === "danger") {
      classes += " border-red-500 focus:border-red-700";
    } else if (color === "disabled") {
      classes += " bg-gray-400";
    }
    return classes;
  };

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs">
        {upLabel && (
          <label className="text-gray-600 flex justify-between">
            {upLabel}
          </label>
        )}
        {icon && <span className="text-gray-400">{icon}</span>}
      </div>
      <div className="flex items-center mt-1 relative border rounded-[4px] shadow-sm">
        <label className="text-gray-500 pl-3 pr-1">{leftLabelText}</label>
        {onChange !== undefined ? (
          <SelectInput value={value} onChange={onChange} />
        ) : (
          <input
            type="text"
            className={getInputClasses()}
            placeholder={placeHolder}
            value={value}
          />
        )}
        <label className="text-gray-500 pr-3 pl-1 float-right">
          {rightLabelText}
        </label>
      </div>
      {downLabel && (
        <label className="absolute text-xs text-gray-600">{downLabel}</label>
      )}
    </div>
  );
};

export default MyInput;
