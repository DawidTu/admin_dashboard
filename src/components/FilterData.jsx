import React from "react";
import { Link } from 'react-router-dom'

const FilterData = () => {
  return (
    <div className='z-10 absolute right-[430px] 2xl:right-8 top-72 bg-white border dark:bg-[#42464D] p-4 rounded-sm w-52'>
      <div className='mb-3 gap-y-1'>
        <p className='font-bold text-xl'>Acme Inc.</p>
        <i className='text-sm'>Administrátor</i>
      </div>
      <hr />
      <div className='flex flex-col mt-3 gap-y-2 text-logo'>
        <Link to="settings">Settings</Link>
        <Link to="/">Sign Out</Link>
      </div>
    </div>
  );
};

export default FilterData;
