import React from "react";
import MyButton from "../MyButton";
import {
  MyNotificationDataGeneral,
  MyNotificationDataShares,
} from "../../data/settingsData/myNotificationData";

const SettingsNotification = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">My Notifications</h1>
      <div className="mt-3">
        {MyNotificationDataGeneral.map((item, index) => {
          return (
            <div key={index} className="border-b">
              <h1 className="text-lg font-bold mb-3">{item.mainTitle}</h1>
              <div className="flex justify-between items-center mb-5">
                <div>
                  <h1 className="text-sm font-semibold">{item.title}</h1>
                  <p className="text-xs text-gray-400">{item.text}</p>
                </div>
                <div>{item.icon}</div>
              </div>
            </div>
          );
        })}
        <div className="mt-5">
          {MyNotificationDataShares.map((item, index) => {
            return (
              <div key={index} className="border-b">
                <h1 className="text-lg font-bold mb-3">{item.mainTitle}</h1>
                <div className="flex justify-between items-center my-5">
                  <div>
                    <h1 className="text-sm font-semibold">{item.title}</h1>
                    <p className="text-xs text-gray-400">{item.text}</p>
                  </div>
                  <div>
                    <span className="italic text-sm mr-2 text-gray-300 items-center">
                      {item.smText}
                    </span>
                    {item.button}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex float-right">
          <span className="mr-2">
            <MyButton size="medium" text="Cancel" />
          </span>
          <span>
            <MyButton
              size="medium"
              backgroundColor="main-color"
              customColor="white"
              text="Save Chamges"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SettingsNotification;
