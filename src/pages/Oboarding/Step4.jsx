import onboarding from "../../data/svg/images/onboarding-image.jpg";
import authDecoration from "../../data/svg/images/auth-decoration.png";
import { Link } from "react-router-dom";
import logo from "../../data/svg/logo.svg";
import chack from "../../data/svg/chack.svg";
import MyButton from "../../components/MyButton";
import StepProgressbar, {
  ActiveStepProvider,
} from "../../components/StepProgressbar";

const Step4 = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="w-full px-6 xl:px-12 py-6 xl:w-1/2 h-screen">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="">
            <p className="text-sm text-gray-400">
              Don't you have an account?{" "}
              <Link to="/signIn" className="text-logo">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="mt-24 mx-auto w-full">
            <ActiveStepProvider>
              <StepProgressbar />
            </ActiveStepProvider>
          </div>
          <div className="mt-20 md:mt-32 mx-auto w-full md:w-[450px]">
            <div className="w-full">
              <div className="mx-auto flex justify-center items-center bg-green-200 rounded-full w-14 h-14">
                <img className="h-6" src={chack} alt="" />
              </div>
            </div>

            <h3 className="h3 font-semibold text-center md:text-left mt-8">
              Nice to have you, Acme Inc. 🙌
            </h3>

            <div className="mt-10">
              <div className="flex mt-8 items-center justify-center">
                <Link to="/">
                  <MyButton
                    size="small"
                    customColor="white"
                    backgroundColor="main-color"
                    text="Go To Dashboard →"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block xl:w-2/4">
        <img className="w-full fill object-cover  xl:h-screen xl:overflow-hidden" src={onboarding} alt="" />
      </div>
      <div className="hidden xl:block xl:absolute xl:left-[46.3%] xl:top-[46%]">
        <img className="h-48 w-48" src={authDecoration} alt="" />
      </div>
    </div>
  );
};

export default Step4;
