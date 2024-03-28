import React from "react";
import { NotificationsData } from "../data/NotificationsData";

const Chat = () => {
  return (
    <div className="nav-item fixed right-1 md:right-[100px] xl:right-[275px] top-[54px] bg-white border dark:bg-[#42464D] p-4 rounded-sm w-96">
      <h3 className="text-sidebar-text uppercase text-sm">Notification</h3>
      <div>
        {NotificationsData.map((data, index) => {
          return (
            <div key={index}>
              <div>
                <p className="flex items-center mt-4 mb-3">
                  <span>{data.text}</span>
                </p>
              </div>
              <div>
                <span className="text-sm text-sidebar-text">{data.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
