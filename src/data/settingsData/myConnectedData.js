import MyButton from "../../components/MyButton";
import star from "../svg/star.svg";
import circle from "../svg/circle.svg";
import { FaCheck } from "react-icons/fa6";
import lightning1 from "../svg/lightning1.svg";
import lightning2 from "../svg/lightning2.svg";
import lightning3 from "../svg/lightning3.svg";
import lightning4 from "../svg/lightning4.svg";
import lightning5 from "../svg/lightning5.svg";
import lightning6 from "../svg/lightning6.svg";
import { FaArrowRight } from "react-icons/fa6";

export const MyConnectedData = [
  {
    title: "MaterialStack",
    text: "Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.",
    mainIcon: <img width={40} src={lightning1} alt="" />,
    icon1: <img width={12} src={circle} alt="" />,
    icon2: <img width={12} src={star} alt="" />,
    button: (
      <MyButton
        icon={<FaCheck className="text-green-500" />}
        text="Connected"
        size="small"
      />
    ),
  },
  {
    title: "MaterialStack",
    text: "Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.",
    mainIcon: <img width={40} src={lightning2} alt="" />,
    icon1: <img width={12} src={circle} alt="" />,
    icon2: <img width={12} src={star} alt="" />,
    button: (
      <MyButton
        icon={<FaCheck className="text-green-500" />}
        text="Connected"
        size="small"
      />
    ),
  },
  {
    title: "MaterialStack",
    text: "Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.",
    mainIcon: <img width={40} src={lightning3} alt="" />,
    icon1: <img width={12} src={circle} alt="" />,
    icon2: <img width={12} src={star} alt="" />,
    button: (
      <MyButton
        icon={<FaCheck className="text-green-500" />}
        text="Connected"
        size="small"
      />
    ),
  },
  {
    title: "MaterialStack",
    text: "Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.",
    mainIcon: <img width={40} src={lightning4} alt="" />,
    icon1: <img width={12} src={circle} alt="" />,
    icon2: <img width={12} src={star} alt="" />,
    button: (
      <MyButton
        icon={<FaCheck className="text-green-500" />}
        text="Connected"
        size="small"
      />
    ),
  },
  {
    title: "MaterialStack",
    text: "Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.",
    mainIcon: <img width={40} src={lightning5} alt="" />,
    icon1: <img width={12} src={circle} alt="" />,
    icon2: <img width={12} src={star} alt="" />,
    button: (
      <MyButton
        icon={<FaCheck className="text-green-500" />}
        text="Connected"
        size="small"
      />
    ),
  },
  {
    title: "MaterialStack",
    text: "Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.",
    mainIcon: <img width={40} src={lightning6} alt="" />,
    icon1: <img width={12} src={circle} alt="" />,
    icon2: <img width={12} src={star} alt="" />,
    button: (
      <MyButton
        icon={<FaCheck className="text-green-500" />}
        text="Connected"
        size="small"
      />
    ),
  },
];
export const MyConnectedDataTrending = [
  {
    title: "Programming",
    text: "400+ Apps",
    link: "Explore",
    icon: <FaArrowRight />,
  },
  {
    title: "Digital Marketing",
    text: "320+ Apps",
    link: "Explore",
    icon: <FaArrowRight />,
  },
  {
    title: "Music & Audio",
    text: "270+ Apps",
    link: "Explore",
    icon: <FaArrowRight />,
  },
];
