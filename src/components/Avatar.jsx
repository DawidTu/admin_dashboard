import React from 'react';
import avatar1 from '../data/avatar/avatar.jpg';
import avatar2 from '../data/avatar/avatar2.jpg';
import avatar3 from '../data/avatar/avatar3.png';
import avatar4 from '../data/avatar/avatar4.jpg';
import { FaPlus } from "react-icons/fa6";

const Avatar = () => {
  return (
    <div className='flex h-10 w-10 -mr-2'>
        <img className='rounded-full' src={avatar1} alt="" />
        <img className='rounded-full -m-1 h-10 mt-0.5' src={avatar2} alt="" />
        <img className='rounded-full -m-1 h-10 mt-0.5' src={avatar3} alt="" />
        <img className='rounded-full -m-1 h-10 mt-0.5' src={avatar4} alt="" />
        <button className="bg-white -m-1 h-10 mt-0.5 border text-xl border-gray-200 p-2 text-logo rounded-full hover:border-gray-400 cursor-pointer"><FaPlus/></button>
    </div>
  )
}

export default Avatar