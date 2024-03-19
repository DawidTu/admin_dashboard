import React, { useState } from "react";
import MyInput from "../../components/MyInput";
import { FaPen } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCircleExclamation } from "react-icons/fa6";
import ChackBox from "../../components/ChackBox";
import SwitchButton from "../../components/SwitchButton";

const InputForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("Italy");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  return (
    <div className="mt-16 mx-auto h-full">
      <h3 className="h3 font-semibold border-b border-gray-300 pb-10">
        Input Form ✨
      </h3>
      <div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Input Types</h3>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-5 items-center">
            <MyInput upLabel="Default" size="small" />
            <MyInput
              upLabel="W/Tooltip"
              icon={<FaCircleExclamation size={16} />}
              size="small"
            />
            <MyInput upLabel="Mandatory" size="small" />
            <MyInput upLabel="W/Prefix" size="small" leftLabelText="USD" />
            <MyInput upLabel="W/Suffix" size="small" rightLabelText="%" />
            <MyInput
              upLabel="W/Placeholder"
              size="small"
              placeHolder="Something cool..."
            />
            <MyInput upLabel="W/Icon" leftLabelText={<FaPen />} size="small" />
            <MyInput
              upLabel="W/Supporting Text"
              downLabel="Supporting text goes here?"
              size="small"
            />
            <MyInput
              upLabel="Search"
              size="small"
              leftLabelText={<IoSearch />}
            />
          </div>
        </div>
        <div className="my-8 w-full">
          <h3 className="font-semibold text-2xl">Input Size</h3>
          <div className="mt-5 flex gap-y-3 gap-x-3 items-center w-full">
            <MyInput upLabel="Small" size="small" />
            <MyInput upLabel="Default" size="medium" />
            <MyInput upLabel="Large" size="large" />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Input States</h3>
          <div className="mt-5 flex gap-y-3 gap-x-3 items-center w-full">
            <MyInput
              color="disabled"
              placeHolder="Something cool..."
              upLabel="Disabled"
              size="small"
            />
            <MyInput color="danger" upLabel="Error" size="small" />
            <MyInput color="success" upLabel="Success" size="small" />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Select</h3>
          <div className="mt-5 flex gap-y-3 gap-x-3 items-center w-[180px]">
            <MyInput
              size="small"
              upLabel="Country"
              placeHolder={selectedCountry}
              value={selectedCountry}
              onChange={handleCountryChange}
            />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Checkbox</h3>
          <div className="mt-5 flex gap-y-3 gap-x-3 items-center w-full">
            <ChackBox id="Active" label="Active" type="checkbox" />
            <ChackBox chacked id="Selected" label="Selected" type="checkbox" />
            <ChackBox
              id="checkbox3"
              label="Disabled"
              type="checkbox"
              disabled
            />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Radio</h3>
          <div className="mt-5 flex gap-y-3 gap-x-3 items-center w-full">
            <ChackBox id="Active" label="Active" type="radio" />
            <ChackBox id="Selected" label="Selected" type="radio" />
            <ChackBox
              id="checkbox3"
              label="Disabled"
              type="radio"
              disabled
            />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Toggle Switch</h3>
          <div className="mt-5 flex gap-y-3 gap-x-12 items-center w-full">
            <SwitchButton checked={true}/>
            <SwitchButton />
            <SwitchButton disabled={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
