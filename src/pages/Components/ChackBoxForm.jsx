import React, { useState, useEffect } from "react";

const CheckBoxForm = () => {
  const [selectedRadio, setSelectedRadio] = useState("radio1");

  useEffect(() => {
    highlightRadio(selectedRadio);
  }, [selectedRadio]);

  function highlightRadio(id) {
    setSelectedRadio(id);
  }

  return (
    <form>
      <div>
        <label className="block cursor-pointer">
          <input
            type="radio"
            name="radio-buttons"
            className="hidden"
            defaultChecked
            onClick={() => highlightRadio("radio1")}
          />
          <div
            id="radio1"
            className={`flex items-center bg-white text-sm text-slate-800 dark:text-slate-100 rounded dark:bg-slate-800 border ${
              selectedRadio === "radio1" ? "border-indigo-500" : "border-slate-200 dark:border-slate-700"
            } p-3 mb-4`}
          >
            <svg className="mr-4 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                className="text-indigo-500"
                d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z"
              ></path>
              <path
                fill="currentColor"
                className="text-indigo-300"
                d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z"
              ></path>
              <path
                fill="currentColor"
                className="text-indigo-200"
                d="M13 12.588v11l8.486-4.714A1 1 0 0 0 22 18V7.589l-9 4.999Z"
              ></path>
            </svg>
            <span>I have a company</span>
          </div>
          <div
            className="rounded pointer-events-none cvc1e cd0c0 cyj9a csmh2 cbe4h c1u8w"
            aria-hidden="true"
          ></div>
        </label>
        <label className="block cursor-pointer">
          <input
            type="radio"
            name="radio-buttons"
            className="hidden"
            onClick={() => highlightRadio("radio2")}
          />
          <div
            id="radio2"
            className={`flex items-center bg-white text-sm text-slate-800 dark:text-slate-100 rounded dark:bg-slate-800 border ${
              selectedRadio === "radio2" ? "border-indigo-500" : "border-slate-200 dark:border-slate-700"
            } p-3 mb-4`}
          >
            <svg className="mr-4 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                className="text-indigo-500"
                d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z"
              ></path>
              <path
                fill="currentColor"
                className="text-indigo-300"
                d="m11 12.588-9-5V18a1 1 0 0 0 .514.874L11 23.588v-11Z"
              ></path>
            </svg>
            <span>I’m a freelance / contractor</span>
          </div>
          <div
            className="rounded pointer-events-none cvc1e cd0c0 cyj9a csmh2 cbe4h c1u8w"
            aria-hidden="true"
          ></div>
        </label>
        <label className="block cursor-pointer">
          <input
            type="radio"
            name="radio-buttons"
            className="hidden"
            onClick={() => highlightRadio("radio3")}
          />
          <div
            id="radio3"
            className={`flex items-center bg-white text-sm text-slate-800 dark:text-slate-100 rounded dark:bg-slate-800 border ${
              selectedRadio === "radio3" ? "border-indigo-500" : "border-slate-200 dark:border-slate-700"
            } p-3 mb-4`}
          >
            <svg className="mr-4 h-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                className="text-indigo-500"
                d="m12 10.856 9-5-8.514-4.73a1 1 0 0 0-.972 0L3 5.856l9 5Z"
              ></path>
            </svg>
            <span>I’m just getting started</span>
          </div>
          <div
            className="rounded pointer-events-none cvc1e cd0c0 cyj9a csmh2 cbe4h c1u8w"
            aria-hidden="true"
          ></div>
        </label>
      </div>
    </form>
  );
};

export default CheckBoxForm;
