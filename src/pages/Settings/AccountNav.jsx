import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  settingsDataBuisness,
  settingsDataExperience,
} from "../../data/settingsData/settings";

const isNavLinkActive = (currentPath, itemPath) => {
  return currentPath === itemPath;
};

const AccountNav = () => {
  const location = useLocation();

  return (
    <div className="relative overflow-x-auto accountScrollbar">
      <div className="ml-[315px] md:ml-0 flex flex-row md:flex-col justify-center">
        <h1 className="absolute left-0 md:static md:mt-3 uppercase text-xs text-gray-400">
          Buisness settings
        </h1>
        {settingsDataBuisness.map((item, index) => (
          <ul className="flex items-center" key={index}>
            <li className="flex md:w-full">
              <NavLink
                to={item.path}
                className={`px-4 md:px-2 flex items-center gap-x-2 text-sm mt-6 md:mt-4 md:w-full ${
                  isNavLinkActive(location.pathname, item.path)
                    ? "text-logo rounded-[4px] bg-[#6366F133] py-1 px-1"
                    : "text-gray-700"
                }`}
                style={{ whiteSpace: "nowrap" }}
              >
                {item.icon}
                {item.title}
              </NavLink>
            </li>
          </ul>
        ))}
        <h1 className="absolute -right-64 md:static md:mt-4 md:left-0 uppercase text-xs text-gray-400">experience</h1>
        {settingsDataExperience.map((item, index) => (
          <ul className="flex items-center" key={index}>
            <li className="flex md:mr-0 mr-3 md:w-full">
              <NavLink
                to={item.path}
                className={`px-4 md:px-2 flex items-center gap-x-2 text-xs md:text-sm mt-6 md:mt-4 md:w-full ${
                  isNavLinkActive(location.pathname, item.path)
                    ? "text-logo rounded-[4px] bg-[#6366F133] py-1 px-1"
                    : "text-gray-700"
                }`}
                style={{ whiteSpace: "nowrap" }}
              >
                {item.icon}
                {item.title}
              </NavLink>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AccountNav;
