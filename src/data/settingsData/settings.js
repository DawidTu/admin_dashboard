import { MdOutlinePerson2 } from "react-icons/md";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { GiSplitArrows } from "react-icons/gi";
import { MdFormatListBulleted } from "react-icons/md";
import { PiWallet } from "react-icons/pi";
import { RiFeedbackLine } from "react-icons/ri";

export const settingsDataBuisness = [
    {
        icon: <MdOutlinePerson2/>,
        title: "My Acount",
        path: "/userPage/settingsaccount",
    },
    {
        icon: <LuArrowUpRightFromCircle/>,
        title: "My Notifications",
        path: "/userPage/settingsnotifications",
    },
    {
        icon: <GiSplitArrows/>,
        title: "Connected Apps",
        path: "/userPage/settingsconnect",
    },
    {
        icon: <MdFormatListBulleted/>,
        title: "Plans",
        path: "/userPage/settingsplan",
    },
    {
        icon: <PiWallet/>,
        title: "Billing & Invoices",
        path: "/userPage/settingsbilling",
    },
]
export const settingsDataExperience = [
    {
        icon: <RiFeedbackLine/>,
        title: "Give Feedback",
        path: "/userPage/settingsfeed",
    },
]