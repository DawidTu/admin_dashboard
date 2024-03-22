import React, { useState, useEffect, useMemo } from "react";
import SwitchButton from "../SwitchButton";
import { settingsPlanData } from "../../data/settingsData/settingsPlanData";
import chack from "../../data/svg/chack.svg";
import MyButton from "../MyButton";
import { Link } from "react-router-dom";

const SettingsPlans = () => {
  const [monthlyPlan, setMonthlyPlan] = useState(true);

  const prices = useMemo(() => [14, 34, 74], []);

  const [discountedPrices, setDiscountedPrices] = useState(prices);

  useEffect(() => {
    const discounted = prices.map(price => {
      if (monthlyPlan) {
        return Math.round(price * 0.8);
      } else {
        return price;
      }
    });
    setDiscountedPrices(discounted);
  }, [monthlyPlan, prices]);


  return (
    <div>
      <h1 className="text-xl font-bold">Plans</h1>
      <p className="mt-5 text-sm text-gray-500">
        This workspace’s Basic Plan is set to{" "}
        <span className="font-semibold">$34</span> per month and will renew on
        July 9, 2021.
      </p>
      <div className="mt-7">
        <div className="gap-y-3 flex gap-x-3">
          <span className="text-sm text-gray-500">Monthly</span>
          <SwitchButton
            checked={monthlyPlan}
            onChange={() => setMonthlyPlan(!monthlyPlan)}
          />
          <span className="text-sm text-gray-500">
            Annually <span className="text-success">(20%)</span>
          </span>
        </div>
        <div className="flex flex-col xl:flex-row mt-7 gap-x-6 gap-y-6">
          {settingsPlanData.map((item, index) => (
            <div className="border p-6 relative" key={index}>
              <div className={`absolute top-0 left-0 h-[2px] w-full`}></div>
              <div className="border-b">
                <div className="flex items-center gap-x-3">
                  <span>{item.titleIcon}</span>
                  <h1 className="font-semibold text-lg">{item.title}</h1>
                </div>
                <p className="mt-2 text-sm text-gray-500">{item.text}</p>
                <div className="mt-4 flex flex-col">
                  <span className="text-3xl font-semibold">
                    ${discountedPrices[index]}{" "}
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
        <div className="mt-6">
          <div className="w-full p-5 bg-[#eef2ff] rounded-sm flex flex-wrap justify-center md:justify-between">
            <h1 className="mb-2 md:mb-0 text-lg font-semibold">
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

          <div>
            <h2 className="font-semibold mb-1">
              What is the difference between the three versions?
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit.
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">
              Is there any difference between Basic and Plus licenses?
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Got more questions?</h2>
            <p className="text-sm text-gray-500 mb-5">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum in voluptate velit
              esse cillum dolore eu fugiat{" "}
              <Link to="/" className="text-logo">
                contact us.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPlans;
