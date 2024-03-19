import React, { useState } from "react";
import SwitchButton from "../SwitchButton";
import { settingsPlanData } from "../../data/settingsData/settingsPlanData";
import chack from "../../data/svg/chack.svg";
import MyButton from "../MyButton";
import { Link } from "react-router-dom";

const SettingsPlans = () => {
  const colors = ["#6ee7b7", "#7dd3fc", "#a5b4fc"];
  const [price, setPrice] = useState(settingsPlanData[0].price);
  const discount = (price / 100) * 20;

  const handleSwitchChange = () => {
    // Ak je cena mesačná, použite pôvodnú cenu alebo odpočítajte zľavu
    if (settingsPlanData[0].price === 19) {
      setPrice(price - discount);
    } else {
      // Ak je cena ročná, použite pôvodnú cenu
      setPrice(19);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Plans</h1>
      <p className="mt-5 text-sm text-gray-500">
        This workspace’s Basic Plan is set to $34 per month and will renew on
        July 9, 2021.
      </p>
      <div className="mt-7">
        <div className="gap-y-3 flex gap-x-3">
          <span className="text-sm text-gray-500">Monthly</span>
          <SwitchButton onChange={handleSwitchChange} />
          <span className="text-sm text-gray-500">
            Annually <span className="text-success">(20%)</span>
          </span>
        </div>
        <div className="flex mt-7 gap-x-6">
          {settingsPlanData.map((item, index) => (
            <div className="border p-6 relative" key={index}>
              <div
                className={`absolute top-0 left-0 h-[2px] w-full`}
                style={{ backgroundColor: colors[index] }}
              ></div>
              <div className="border-b">
                <div className="flex items-center gap-x-3">
                  <span>{item.titleIcon}</span>
                  <h1 className="font-semibold text-lg">{item.title}</h1>
                </div>
                <p className="mt-2 text-sm text-gray-500">{item.text}</p>
                <div className="mt-4 flex flex-col">
                  <span className="text-3xl font-semibold">
                    ${item.price}{" "}
                    <span className="text-sm text-gray-500">/mo</span>
                  </span>
                  <button className="my-4 w-full">{item.btn}</button>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xs font-semibold">{item.h2}</h2>
                <ul className="mt-5">
                  <li className="flex gap-x-2 text-sm text-gray-500 mt-3">
                    <img width={12} src={chack} alt="" />
                    {item.li1}
                  </li>
                  <li className="flex gap-x-2 text-sm text-gray-500 mt-3">
                    <img width={12} src={chack} alt="" />
                    {item.li2}
                  </li>
                  <li className="flex gap-x-2 text-sm text-gray-500 mt-3">
                    <img width={12} src={chack} alt="" />
                    {item.li1}
                  </li>
                  <li className="flex gap-x-2 text-sm text-gray-500 mt-3">
                    <img width={12} src={chack} alt="" />
                    {item.li2}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="w-full p-5 bg-[#eef2ff] rounded-sm flex justify-between">
            <h1 className="text-lg font-semibold">
              Looking for different configurations?
            </h1>
            <MyButton
              size="medium"
              backgroundColor="main-color"
              customColor="white"
              text="Contact Sales"
            />
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-semibold mb-4">FAQs</h1>
          <div className="border-b pb-4">
            <div>
              <h2 className="font-semibold mb-1">
                What is the difference between the three versions?
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit.
              </p>
            </div>
            <div>
              <h2 className="font-semibold mb-2">
                Is there any difference between Basic and Plus licenses?
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Got more questions?</h2>
              <p className="text-sm text-gray-500 mb-5">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum in voluptate
                velit esse cillum dolore eu fugiat{" "}
                <Link to="/" className="text-logo">contact us.</Link>
              </p>
            </div>
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
    </div>
  );
};

export default SettingsPlans;
