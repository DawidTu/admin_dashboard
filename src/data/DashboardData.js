import Arrow1 from './svg/arrow1.svg';
import Arrow2 from './svg/arrow2.svg';
import Arrow3 from './svg/arrow3.svg';
import { BsThreeDots } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import { MdSaveAlt } from "react-icons/md";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { TbArrowsShuffle } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { RxCircleBackslash } from "react-icons/rx";

export const DashboardData = [
    {
        img: <img src={Arrow1} alt="arrow" />,
        h2: 'Acme Plus',
        text: 'sales',
        dollar: '$24,780',
        bage: '+49%',
        dotsIcon: <BsThreeDots/>,
    },
    {
        img: <img src={Arrow2} alt="arrow" />,
        h2: 'Acme Advanced',
        text: 'sales',
        dollar: '$17,489',
        bage: '-14%',
        dotsIcon: <BsThreeDots/>,
    },
    {
        img: <img src={Arrow3} alt="arrow" />,
        h2: 'Acme Professional',
        text: 'sales',
        dollar: '$9,962',
        bage: '+29%',
        dotsIcon: <BsThreeDots/>,
    }
]
export const DashboardDataDirect = [
    {
        h2: 'Direct VS Indirect',
        direct: 'Direct',
        indirect: 'Indirect',
        dollar: '$8.25K',
        dollar2: '$27.7K',
        secondDollar: '$9,962',
        bage: '+29%',
        dotsIcon: <BsThreeDots/>,
    },
]
export const DashboardDataValue = [
    {
        h2: 'Real Time Value',
        dollar: '$8.25K',
        bage: '+29%',
    },
]
export const DashboardDataSales = [
    {
        h2: 'Sales Over Time (all stores)',
        dollar: '$1,482',
        bage: '-22%',
        current: 'Current',
        previous: 'Previous',
    },
]
export const DashboardDataSalesRefunds = [
    {
        h2: 'Sales VS Refunds',
        dollar: '+$6,796',
        bage: '-34%',
    },
]
export const DashboardDataRecentActivity = [
    {
        icon: <FiMessageCircle/>,
        text: 'Nick Mark mentioned Sara Smith in a new post',
        btn: 'View',
        btnArrow: <FaArrowRight/>,
        color: 'purple',
    },
    {
        icon: <MdSaveAlt/>,
        text: 'The post Post Name was removed by Nick Mark',
        btn: 'View',
        btnArrow: <FaArrowRight/>,
        color: 'red',
    },
    {
        icon: <HiMiniArrowsRightLeft/>,
        text: 'Patrick Sullivan published a new post',
        btn: 'View',
        btnArrow: <FaArrowRight/>,
        color: 'green',
    },
]
export const DashboardDataRecentActivityYesterday = [
    {
        icon: <TbArrowsShuffle/>,
        text: '240+ users have subscribed to Newsletter #1',
        btn: 'View',
        btnArrow: <FaArrowRight/>,
        color: 'blue',
    },
    {
        icon: <FiMessageCircle/>,
        text: 'The post Post Name was suspended by Nick Mark',
        btn: 'View',
        btnArrow: <FaArrowRight/>,
        color: 'purple',
    },
]
export const DashboardDataIncome = [
    {
        icon: <FaArrowLeft/>,
        text: 'Qonto billing',
        dollar: '-$49.88',
        color: 'red',
    },
    {
        icon: <FaArrowRight/>,
        text: 'Cruip.com Market Ltd 70 Wilson St London',
        dollar: '+249.88',
        color: 'green',
    },
    {
        icon: <FaArrowRight/>,
        text: 'Notion Labs Inc',
        dollar: '+99.99',
        color: 'green',
    },
    {
        icon: <FaArrowRight/>,
        text: 'Market Cap Ltd',
        dollar: '+1,200.88',
        color: 'green',
    },
    {
        icon: <RxCircleBackslash/>,
        text: 'App.com Market Ltd 70 Wilson St London',
        dollar: '+$99.99',
        color: 'gray'
    },
    {
        icon: <FaArrowLeft/>,
        text: 'App.com Market Ltd 70 Wilson St London',
        dollar: '-$49.88',
        color: 'red',
    },
]



