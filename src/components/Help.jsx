import React from "react";
import { Link } from "react-router-dom";
import { IoIosDocument } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";

const Help = () => {
  return (
    <div className="nav-item absolute right-[197px] top-16 bg-white border dark:bg-[#42464D] p-4 rounded-sm w-52">
      <h3 className="text-gray-400 uppercase mb-2">need help?</h3>
      <div className="text-logo text-base">
        <Link className="flex items-center gap-x-2 mb-3">
          <IoIosDocument />
          <span>Documentation</span>
        </Link>

        <Link className="flex items-center gap-x-2 mb-3">
          <MdSupportAgent />
          <span>Support Site</span>
        </Link>

        <Link className="flex items-center gap-x-2">
          <FaLocationArrow />
          <span>Contact us</span>
        </Link>
      </div>
    </div>
  );
};

export default Help;
