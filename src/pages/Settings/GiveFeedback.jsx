import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  settingsDataBuisness,
  settingsDataExperience,
} from "../../data/settingsData/settings";
import SettingsFeed from "../../components/Settings/SettingsFeed";

const GiveFeedback = () => {
  const location = useLocation();

  const isNavLinkActive = (currentPath, itemPath) => {
    return currentPath === itemPath;
  };

  return (
    <div className="mt-16 mx-auto h-screen">
      <h3 className="h3 font-semibold">Account Settings ✨</h3>
      <div className="bg-white mt-10 rounded-sm flex shadow-xl">
        <div className="border-r p-3 w-[200px]">
          <h1 className="uppercase text-xs text-gray-400 mt-3">
            Business settings
          </h1>
          {settingsDataBuisness.map((item, index) => {
            return (
              <ul key={index}>
                <li>
                  <NavLink
                    to={item.path}
                    className={`flex items-center gap-x-2 text-sm mt-4 ${
                      isNavLinkActive(location.pathname, item.path)
                        ? "text-logo"
                        : ""
                    }`}
                  >
                    <span className="text-sidebar-text">{item.icon}</span>
                    {item.title}
                  </NavLink>
                </li>
              </ul>
            );
          })}
          <h1 className="uppercase text-xs text-gray-400 mt-5">experience</h1>
          {settingsDataExperience.map((item, index) => {
            return (
              <ul key={index}>
                <li>
                  <NavLink
                    to={item.path}
                    className="text-logo bg-[#6366F133] py-1 px-1 flex items-center gap-x-2 text-sm mt-4"
                  >
                    <span className="text-sidebar-text">{item.icon}</span>
                    {item.title}
                  </NavLink>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="p-5 w-full">
          <SettingsFeed />
        </div>
      </div>
    </div>
  );
};

export default GiveFeedback;
