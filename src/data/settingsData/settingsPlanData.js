import planStar from '../svg/planStar.svg';
import planStar2 from '../svg/planStar2.svg';
import planStar3 from '../svg/planStar3.svg';
import { FaCheck } from "react-icons/fa6";
import MyButton from '../../components/MyButton'

export const settingsPlanData = [
    {
        titleIcon: <img width={25} src={planStar} alt="" />,
        title: "Basic",
        text: "Ideal for individuals that need a custom solution with custom tools.",
        price: 19,
        btn: <MyButton text="Downgrade"/>,
        h2: "WHAT'S INCLUDED",
        li1: 'Lorem ipsum dolor sit amet',
        li2: 'Quis nostrud exercitation',
    },
    {
        titleIcon: <img width={25} src={planStar2} alt="" />,
        title: "Basic",
        text: "Ideal for individuals that need a custom solution with custom tools.",
        price: 39,
        btn: <MyButton backgroundColor="gray-200" customColor="gray-400" type="disabled" icon={<FaCheck/>} text="Current Plan"/>,
        h2: "WHAT'S INCLUDED",
        li1: 'Lorem ipsum dolor sit amet',
        li2: 'Quis nostrud exercitation',
    },
    {
        titleIcon: <img width={25} src={planStar3} alt="" />,
        title: "Basic",
        text: "Ideal for individuals that need a custom solution with custom tools.",
        price: 79,
        btn: <MyButton backgroundColor="main-color" customColor="white" text="Upgrade"/>,
        h2: "WHAT'S INCLUDED",
        li1: 'Lorem ipsum dolor sit amet',
        li2: 'Quis nostrud exercitation',
    },
]