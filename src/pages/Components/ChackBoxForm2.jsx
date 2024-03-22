import React, { useState, useEffect } from "react";

const CheckBoxForm2 = () => {
  const [selectedRadio, setSelectedRadio] = useState("radio1");

  useEffect(() => {
    highlightRadio(selectedRadio);
  }, [selectedRadio]);

  function highlightRadio(id) {
    setSelectedRadio(id);
  }

  return (
    <form className="flex justify-center">
      <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-4">
        <label className="cursor-pointer">
          <input
            type="radio"
            name="radio-buttons"
            className="hidden"
            defaultChecked
            onClick={() => highlightRadio("radio1")}
          />
          <div
            id="radio1"
            className={`bg-white dark:bg-slate-800 rounded border ${
              selectedRadio === "radio1"
                ? "border-indigo-500 border-2"
                : "border-slate-200 border-2 dark:border-slate-700"
            } p-4 text-center`}
          >
            <svg
              className="inline-flex mx-auto mb-3 h-8 bg-indigo-200 rounded-full"
              viewBox="0 0 40 40"
            >
              <path
                fill="currentColor"
                className="text-indigo-500"
                d="m26.371 23.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 24 17v-1.828A4.087 4.087 0 0 0 20 11a4.087 4.087 0 0 0-4 4.172V17a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V27a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
              ></path>
            </svg>
            <div className="text-center text-sm font-semibold mb-2 text-slate-800 dark:text-slate-100">
              Individual
            </div>
            <div className="text-center text-sm text-gray-500">
              Lorem ipsum is place text commonly used.
            </div>
          </div>
        </label>
        <label className="cursor-pointer">
          <input
            type="radio"
            name="radio-buttons"
            className="hidden"
            onClick={() => highlightRadio("radio2")}
          />
          <div
            id="radio2"
            className={`bg-white dark:bg-slate-800 rounded border ${
              selectedRadio === "radio2"
                ? "border-indigo-500 border-2"
                : "border-slate-200 border-2 dark:border-slate-700"
            } p-4 text-center`}
          >
            <svg
              className="inline-flex mx-auto mb-3 h-8 bg-indigo-200 rounded-full"
              viewBox="0 0 40 40"
            >
              <path
                fill="currentColor"
                className="text-indigo-500"
                d="m26.371 23.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 24 17v-1.828A4.087 4.087 0 0 0 20 11a4.087 4.087 0 0 0-4 4.172V17a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V27a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
              ></path>
              <path
                fill="currentColor"
                className="text-indigo-300"
                d="m30.377 22.749-3.709-1.5a1 1 0 0 1-.623-.926v-.878A3.989 3.989 0 0 0 28.027 16v-1.828c.047-2.257-1.728-4.124-3.964-4.172-2.236.048-4.011 1.915-3.964 4.172V16a3.989 3.989 0 0 0 1.982 3.445v.878a1 1 0 0 1-.623.928c-.906.266-1.626.557-2.159.872-.533.315-1.3 1.272-2.299 2.872 1.131.453 6.075-.546 6.072.682V28a2.99 2.99 0 0 1-.182 1h7.119A.996.996 0 0 0 31 28v-4.323a1 1 0 0 0-.623-.928Z"
              ></path>
              <path
                fill="currentColor"
                className="text-indigo-500"
                d="m22.371 24.749-3.742-1.5a1 1 0 0 1-.629-.926v-.878A3.982 3.982 0 0 0 20 18v-1.828A4.087 4.087 0 0 0 16 12a4.087 4.087 0 0 0-4 4.172V18a3.982 3.982 0 0 0 2 3.445v.878a1 1 0 0 1-.629.928l-3.742 1.5a1 1 0 0 0-.629.926V27a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.323a1 1 0 0 0-.629-.928Z"
              ></path>
            </svg>
            <div className="text-center text-sm font-semibold mb-2 text-slate-800 dark:text-slate-100">
              Organization
            </div>
            <div className="text-center text-sm text-gray-500">
              Lorem ipsum is place text commonly used.
            </div>
          </div>
        </label>
      </div>
    </form>
  );
};

export default CheckBoxForm2;
