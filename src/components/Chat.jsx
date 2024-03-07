import React from "react";
import { NotificationsData } from "../data/NotificationsData";

const Chat = () => {
  return (
    <div className="nav-item absolute right-[259px] top-16 bg-white border dark:bg-[#42464D] p-4 rounded-sm w-96">
      <h3 className="text-gray-400 uppercase text-sm">Notification</h3>
      <div>
        {NotificationsData.map((data, index) => {
          return (
            <>
              <div key={index}>
                <p className="flex items-center mt-4 mb-3">
                  <span>{data.text}</span>
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-400">{data.date}</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
