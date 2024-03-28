import React from "react";
import {
  settingsBillingData,
  settingsInvoicesData,
} from "../../data/settingsData/settingsBillingData";

const SettingsBilling = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Billing & Invoices</h1>
      <p className="text-sm text-gray-500 mt-4">
        This workspace’s Basic Plan is set to{" "}
        <span className="font-semibold">$34</span> per month and will renew on
        <span className="font-semibold">July 9, 2021.</span>
      </p>
      <div className="mt-3">
        <div className="mt-6">
          {settingsBillingData.map((item, index) => (
            <div key={index}>
              <h2 className="font-semibold text-xl">{item.h1}</h2>
              <div className="border-b mb-2 flex flex-wrap justify-between my-3 py-2">
                <h2 className="text-sm">{item.left}</h2>
                <div className="flex gap-x-5">
                  <h2 className="text-sm text-gray-500">{item.right}</h2>
                  <button className="text-logo">{item.btn}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 mb-4">
          {settingsInvoicesData.map((item, index) => (
            <div>
              <h2 className="font-semibold text-xl">{item.h1}</h2>
              <div>
                {" "}
                <div className="flex my-5 justify-between w-[74%] xl:w-[58%]">
                  <div className="flex gap-x-16 text-sm">
                    <p className="text-gray-300 uppercase text-xs">
                      {item.h2Year}
                    </p>
                    <p className="text-gray-300 uppercase text-xs">
                      {item.h2Plan}
                    </p>
                  </div>
                  <p className="text-xs text-gray-300 uppercase">
                    {item.h2Amount}
                  </p>
                </div>
              </div>
              <div className="flex justify-between border-b pb-2" key={index}>
                <div className="flex gap-x-16 text-sm">
                  <p>{item.year}</p>
                  <p className="text-gray-500">{item.plan}</p>
                </div>

                <p className="text-sm text-gray-500">{item.amount}</p>
                <div className="text-logo">
                  <button className="mr-3">{item.btn1}</button>
                  <button>{item.btn2}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsBilling;
