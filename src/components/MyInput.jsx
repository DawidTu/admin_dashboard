import React from 'react';

const SelectInput = ({ value, onChange, options }) => {
  return (
    <select value={value} onChange={onChange} className='text-xs outline-none bg-transparent py-2 px-2 mr-2 w-full'>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
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
  dangerIcon,
  onchange,
  inputType,
  options,
  status 
}) => {
  const defaultInputType = "text";

  const getInputClasses = () => {
    let classes = 'inline-flex items-center justify-center rounded-[4px] shadow-sm outline-none px-4';
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
    if (color === "disabled") {
      classes += " bg-gray-400";
    } 

    // Pridanie farby borderu a textu pre stav danger alebo success
    if (status === "danger") {
      classes += " border border-red-500 focus:border-none";
    } else if (status === "success") {
      classes += " border border-green-500 focus:border-none";
    } else {
      classes += " text-gray-600";
    }

    return classes;
  };

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs">
        {upLabel && (
          <label className="text-gray-600 flex justify-between">
            {upLabel}<span className='text-danger ml-1'>{dangerIcon}</span>
          </label>
        )}
        {icon && <span className="text-gray-400">{icon}</span>}
      </div>
      <div className="flex items-center mt-1 relative border rounded-[4px] shadow-sm">
        <label className={`text-gray-400 text-sm ${leftLabelText ? "pl-3 pr-1" : ""}`}>{leftLabelText}</label>
        {inputType === "select" ? (
          <SelectInput value={value} onChange={onChange} options={options} />
        ) : (
          <input
            onChange={onchange}
            type={inputType || defaultInputType} 
            className={getInputClasses()}
            placeholder={placeHolder}
            value={value}
          />
        )}
        <label className={`text-gray-400 float-right text-sm ${rightLabelText ? "pr-3 pl-1" : ""}`}>
          {rightLabelText}
        </label>
      </div>
      {downLabel && (
        <label className={`absolute mt-1 text-xs ${status === "danger" ? "text-danger" : status === "success" ? "text-success" : "text-gray-600"}`}>
        {downLabel}
      </label>
      )}
    </div>
  );
};

export default MyInput;
