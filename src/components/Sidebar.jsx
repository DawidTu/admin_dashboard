import { Link, NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa6";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { LuArrowRightToLine } from "react-icons/lu";

import { links } from "../data/links";
import { useState } from "react";

const activeLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
const normalLink =
  "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md";

const Sidebar = () => {
  const activeMenu = true;
  const arrowSize = "23px";
  const [isArrowLeft, seIsArrowLeft] = useState(true);

  const toggleIcon = () => {
    seIsArrowLeft((LuArrowLeftFromLine) => !LuArrowLeftFromLine);
  };

  return (
    <div className="bg-sidepanel h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="mx-6 items-center">
            <Link to="/" className="text-logo">
              <FaReact className="mt-5 ml-3" size={30} />
            </Link>
            <div className="mt-10 text-main text-sm">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-subtitle m-3 mt-4 uppercase text-xs">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={() => {}}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
              <div className="flex text-main justify-end items-center mt-10">
                <button onClick={toggleIcon}>
                  {isArrowLeft ? (
                    <LuArrowLeftFromLine size={arrowSize} />
                  ) : (
                    <LuArrowRightToLine size={arrowSize} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
