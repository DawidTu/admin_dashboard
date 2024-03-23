import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineShop,
  AiOutlineDashboard,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { IoPeopleSharp, IoLogoWebComponent } from "react-icons/io5";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { FaChartPie } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { PiCirclesFour } from "react-icons/pi";
import { CgComponents } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import Badge from "../components/Badge";

const iconSize = "22px";

export const SidebarData = [
  
      {
        title: "Dashboard",
        path: "/:id",
        icon: <AiOutlineDashboard size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,

        children: [
          {
            title: 'Main',
            path: '/',
          },
          {
            title: 'Analytics',
            path: '/analytics',
          },
          {
            title: 'Fintech',
            path: '/fintech',
          },
        ]
      },
      {
        title: "E-commerce",
        path: "/customers/:id",
        icon: <AiOutlineShop size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,

        children: [
          {
            title: "Customers",
            path: "/customers",
          },
          {
            title: "Orders",
            path: "/orders",
          },
          {
            title: "Invoices",
            path: "/invoices",
          },
          {
            title: "Shop",
            path: "/shop",
          },
          {
            title: "Shop 2",
            path: "shop2",
          },
          {
            title: "Single Product",
            path: "/singleProduct",
          },
          {
            title: "Cart",
            path: "/cart",
          },
          {
            title: "Cart 2",
            path: "/cart2",
          },
          {
            title: "Cart 3",
            path: "/cart3",
          },
          {
            title: "Pay",
            path: "/pay",
          },
        ]
      },
      {
        title: "Comunity",
        path: "/usersTabs/:id",
        icon: <IoPeopleSharp size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,

        children: [
          {
            title: "Users - Tabs",
            path: "/usersTabs",
          },
          {
            title: "Users - Tiles",
            path: "/usersTiles",
          },
          {
            title: "Profile",
            path: "/profile",
          },
          {
            title: "Feed",
            path: "/feed",
          },
          {
            title: "Forum",
            path: "/forum",
          },
          {
            title: "Forum - Post",
            path: "/forumPost",
          },
          {
            title: "Meetups",
            path: "/meetups",
          },
          {
            title: "Meetups - Post",
            path: "/meetupsPost",
          },
        ]
      },
      {
        title: "Finance",
        path: "/cards/:id",
        icon: <FaChartPie size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,

        children: [
          {
            title: "Cards",
            path: "/cards",
          },
          {
            title: "Transactions",
            path: "/transactions",
          },
          {
            title: "Transactions Details",
            path: "/transactionsDetails",
          },
        ]
      },
      {
        title: "Job Board",
        path: "/listing/:id",
        icon: <FiShoppingBag size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,

        children: [
          {
            title: "Listing",
            path: "/listing",
          },
          {
            title: "Job Post",
            path: "/jobPost",
          },
          {
            title: "Company Profile",
            path: "/companyProfile",
          },
        ]
      },
      {
        title: "Tasks",
        path: "/kanban/:id",
        icon: <FaTasks size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,

        children: [
          {
            title: "Kanban",
            path: "/kanban",
          },
          {
            title: "List",
            path: "/list",
          },
        ]
      },
      {
        title: "Messages",
        path: "/messages",
        icon: <TiMessages size={iconSize} />,
        badge: <Badge value="4" color="main-color"/>,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,
      },
      {
        title: "Inbox",
        path: "/inbox",
        icon: <HiMiniInboxArrowDown size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,
      },
      {
        title: "Calendar",
        path: "/calendar",
        icon: <AiOutlineCalendar size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,
      },
      {
        title: "Campaings",
        path: "/campaings",
        icon: <FiStar size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,
      },
      {
        title: "Settings",
        path: "/userPage/:id",
        icon: <IoIosSettings size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,
        children: [
          {
            title: "My Account",
            path: "/userPage/settingsaccount",
          },
          {
            title: "My Notifications",
            path: "/userPage/settingsnotifications",
          },
          {
            title: "Connected Apps",
            path: "/userPage/settingsconnect",
          },
          {
            title: "Plans",
            path: "/userPage/settingsplan",
          },
          {
            title: "Billing & Invoices",
            path: "/userPage/settingsbilling",
          },
          {
            title: "Give Feedback",
            path: "/userPage/settingsfeed",
          },
        ]
      },
      {
        title: "Utility",
        path: "/changelog/:id",
        icon: <PiCirclesFour size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,

        children: [
          {
            title: "Changelog",
            path: "/changelog",
          },
          {
            title: "Roadmap",
            path: "/roadmap",
          },
          {
            title: "FAQs",
            path: "/faqs",
          },
          {
            title: "Empty State",
            path: "/emptyState",
          },
          {
            title: "404",
            path: "404",
          },
          {
            title: "Knowledge Base",
            path: "/knowledgeBase",
          },
        ]
      },
    ];
    
    
    export const secondData = [
      {
        title: "Authentication",
        path: "/signIn/:id",
        icon: <AiOutlineShoppingCart size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,

        children: [
          {
            title: "Sign In",
            path: "/signIn",
          },
          {
            title: "Sign up",
            path: "/signUp",
          },
          {
            title: "Reset Password",
            path: "/resetPassword",
          },
        ]
      },
      {
        title: "Oboarding",
        path: "/step1/:id",
        icon: <CgComponents size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,
        
        children: [
          {
            title: "Step 1",
            path: "/step1",
          },
          {
            title: "Step 2",
            path: "/step2",
          },
          {
            title: "Step 3",
            path: "/step3",
          },
          {
            title: "Step 4",
            path: "/step4",
          },
        ]
      },
      {
        title: "Components",
        path: "/button/:id",
        icon: <IoLogoWebComponent size={iconSize} />,
        iconClosed: <RiArrowDownSLine/>,
        iconOpened: <RiArrowUpSLine/>,

        children: [
          {
            title: "Button",
            path: "/button",
          },
          {
            title: "Input Form",
            path: "/inputForm",
          },
          {
            title: "Dropdown",
            path: "/dropdown",
          },
          {
            title: "Icons",
            path: "/icons",
          },
          {
            title: "Badge",
            path: "/badgePage",
          },
        ]
      },
  ]
