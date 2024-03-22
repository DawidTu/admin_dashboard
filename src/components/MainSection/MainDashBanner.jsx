import React from 'react';
import Arrow1 from "../../data/svg/arrow1.svg";


const MainDashBanner = () => {
  return (
    <div className="mt-16 relative overflow-hidden bg-indigo-200 dark:text-gray-200 dark:bg-secondary-dark-bg h-28 rounded-sm w-full flex justify-between">
    <div className="p-5 flex flex-col">
      <h3 className="text-xl font-semibold lg:text-3xl">Good afternoon, Acme Inc. 👋</h3>
      <p className="mt-2">
        Here is what’s happening with your projects today:
      </p>
    </div>
    <div className='hidden xl:block'>
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
  )
}

export default MainDashBanner