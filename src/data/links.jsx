import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
  AiOutlineShop,
  AiOutlineDashboard,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { IoPeopleSharp, IoLogoWebComponent } from "react-icons/io5";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { FaChartPie } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { PiCirclesFour } from "react-icons/pi";
import { CgComponents } from "react-icons/cg";

const iconSize = "24px";

export const links = [
  {
    title: "Pages",
    links: [
      {
        name: "dashboard",
        icon: <AiOutlineDashboard size={iconSize} />,
      },
      {
        name: "ecommerce",
        icon: <AiOutlineShop size={iconSize} />,
      },
      {
        name: "comunity",
        icon: <IoPeopleSharp size={iconSize} />,
      },
      {
        name: "finance",
        icon: <FaChartPie size={iconSize} />,
      },
      {
        name: "job",
        icon: <FiShoppingBag size={iconSize} />,
      },
      {
        name: "tasks",
        icon: <FaTasks size={iconSize} />,
      },
      {
        name: "massages",
        icon: <TiMessages size={iconSize} />,
      },
      {
        name: "inbox",
        icon: <HiMiniInboxArrowDown size={iconSize} />,
      },
      {
        name: "calendar",
        icon: <AiOutlineCalendar size={iconSize} />,
      },
      {
        name: "campaigns",
        icon: <FiStar size={iconSize} />,
      },
      {
        name: "settings",
        icon: <IoIosSettings size={iconSize} />,
      },
      {
        name: "utility",
        icon: <PiCirclesFour size={iconSize} />,
      },
    ],
  },

  {
    title: "More",
    links: [
      {
        name: "authentication",
        icon: <AiOutlineShoppingCart size={iconSize} />,
      },
      {
        name: "onboarding",
        icon: <CgComponents size={iconSize} />,
      },
      {
        name: "components",
        icon: <IoLogoWebComponent size={iconSize} />,
      },
    ],
  },
];
