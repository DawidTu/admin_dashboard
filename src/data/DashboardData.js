import Arrow1 from './svg/arrow1.svg';
import Arrow2 from './svg/arrow2.svg';
import Arrow3 from './svg/arrow3.svg';
import { BsThreeDots } from "react-icons/bs";

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



