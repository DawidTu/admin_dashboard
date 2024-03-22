import svg from "../../data/svg/images/404-illustration.svg";
import MyButton from "../../components/MyButton";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="pt-52 text-center flex flex-col items-center">
        <div className="flex justify-center">
          <img src={svg} alt="" />
        </div>
        <p className="text-gray-400 mt-5">
          Hmm...this page doesn't exist. Try searching for something else!
        </p>
        <div className="mt-5">
          <Link to="/">
            <MyButton
              backgroundColor="main-color"
              customColor="white"
              size="medium"
              text="Back To Dashboard"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
