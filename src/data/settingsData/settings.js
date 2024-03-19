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
        path: "/myaccount",
    },
    {
        icon: <LuArrowUpRightFromCircle/>,
        title: "My Notifications",
        path: "/myNotifications",
    },
    {
        icon: <GiSplitArrows/>,
        title: "Connected Apps",
        path: "/connesctedApps",
    },
    {
        icon: <MdFormatListBulleted/>,
        title: "Plans",
        path: "/plans",
    },
    {
        icon: <PiWallet/>,
        title: "Billing & Invoices",
        path: "/billingInvoices",
    },
]
export const settingsDataExperience = [
    {
        icon: <RiFeedbackLine/>,
        title: "Give Feedback",
        path: "/giveFeedback",
    },
]