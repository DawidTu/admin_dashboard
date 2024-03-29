import React from "react";
import AccountNav from "../pages/Settings/AccountNav";
import { Outlet } from "react-router-dom";
import MyButton from "../components/MyButton";

const UsersPage = () => {
  return (
    <div className="mt-16 mx-auto min-h-screen">
      <h3 className="h3 font-semibold">Account Settings ✨</h3>
      <div className="nav-bar mt-10 rounded-sm flex flex-col md:flex-row shadow-xl">
        <div className="border-b py-5 px-3 md:border-r md:p-3 md:w-[230px]">
          <AccountNav />
        </div>
        <div className="flex flex-col w-full">
          <div className="p-7 flex-grow">
            <Outlet />
          </div>
          <div className="border-t h-16">
            <div className="h-full w-full flex items-center justify-end px-6">
              <span className="mr-2">
                <MyButton size="small" text="Cancel" />
              </span>
              <span>
                <MyButton
                  size="small"
                  backgroundColor="main-color"
                  customColor="white"
                  text="Save Chamges"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
