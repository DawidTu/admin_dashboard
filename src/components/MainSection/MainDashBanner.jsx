import React from "react";
import Arrow1 from "../../data/svg/arrow1.svg";

const MainDashBanner = () => {
  return (
    <div className="mt-16 relative md:overflow-hidden main-banner rounded-sm w-full inline-block">
      <div className="p-3 md:p-5 flex flex-col">
        <h3 className="text-[22px] font-semibold lg:text-3xl">
          Good afternoon, Acme Inc. 👋
        </h3>
        <p className="md:mt-2 text-gray-600">
          Here is what’s happening with your projects today:
        </p>
      </div>
      <div className="hidden xl:block">
        <img
          src={Arrow1}
          alt="arrow"
          className="absolute -top-2 right-52 transform -rotate-[130deg] scale-[2]"
        />
        <img
          src={Arrow1}
          alt="arrow"
          className="absolute bottom-2 right-72 transform rotate-[-35deg] scale-[3.5]"
        />
        <img
          src={Arrow1}
          alt="arrow"
          className="absolute -bottom-2 right-28 transform rotate-[-45deg] scale-[1.8]"
        />
      </div>
    </div>
  );
};

export default MainDashBanner;
