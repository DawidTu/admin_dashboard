import React from "react";
import {
  MyConnectedData,
  MyConnectedDataTrending,
} from "../../data/settingsData/myConnectedData";
import { Link, NavLink } from "react-router-dom";

const SettingsConnect = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">My Notifications</h1>
      <div className="mt-3">
        <div className="border-b mt-6">
          <ul className="flex gap-y-3 mb-3 text-xs gap-x-4 text-gray-500">
            <li>
              <NavLink className="text-logo" exact>
                View All
              </NavLink>
            </li>
            <li>
              <NavLink>Utility</NavLink>
            </li>
            <li>
              <NavLink>Marketing</NavLink>
            </li>
            <li>
              <NavLink>Development</NavLink>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 mt-6 gap-x-6 gap-y-6 border-b pb-7">
          {MyConnectedData.map((item, index) => (
            <div key={index} className="p-4 border shadow-lg w-full">
              <div className="flex items-center gap-x-3">
                <div className="bg-main-color rounded-full">
                  {item.mainIcon}
                </div>
                <h1 className="font-bold text-lg">{item.title}</h1>
              </div>
              <p className="mt-5 text-sm text-gray-500">{item.text}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-3 mt-5">
                  <span className="text-sm flex items-center gap-x-2 text-gray-500">
                    {item.icon1} 4K+
                  </span>
                  <span className="text-sm flex items-center gap-x-2 text-yellow-600">
                    {item.icon2} 4.7
                  </span>
                </div>
                <button className="mt-4">{item.button}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4">
          <h1 className="mt-5 text-lg font-bold">Trending Categories</h1>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-5 justify-center">
            {MyConnectedDataTrending.map((item, index) => (
              <div className="mt-5 flex w-full">
                <div
                  className="border rounded-sm shadow-lg w-full h-[106px]"
                  key={index}
                >
                  <div className="px-6 py-3">
                    <h1 className="font-semibold text-lg">{item.title}</h1>
                    <div className="flex mt-4 justify-between">
                      <p className="text-gray-500 italic text-sm">
                        {item.text}
                      </p>
                      <Link className="text-xs text-logo flex gap-x-2 items-center" to="#">
                        <span>{item.link}</span>
                        <span>{item.icon}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsConnect;
