import onboarding from "../../data/svg/images/onboarding-image.jpg";
import authDecoration from "../../data/svg/images/auth-decoration.png";
import { Link } from "react-router-dom";
import logo from "../../data/svg/logo.svg";
import MyButton from "../../components/MyButton";
import StepProgressbar, {
  ActiveStepProvider,
} from "../../components/StepProgressbar";
import ChackBoxForm2 from "../Components/ChackBoxForm2";
import SwitchButton from "../../components/SwitchButton";

const Step2 = () => {
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

        <div className="w-full h-screen flex flex-col items-center mt-10">
          <div className="mt-24 mx-auto w-full">
            <ActiveStepProvider>
              <StepProgressbar />
            </ActiveStepProvider>
          </div>
          <div className="mt-20 mx-auto w-[450px]">
            <h3 className="h3 font-semibold text-left">
              Tell us about your company ✨
            </h3>
            <div className="mt-10">
              <ChackBoxForm2 />
              <div className="flex items-center justify-between mt-8">
                <div>
                  <div className="text-slate-800 dark:text-slate-100 text-sm">
                    💸 Lorem ipsum is place text commonly?
                  </div>
                  <p className="text-xs mt-2 text-gray-400 max-w-80">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts.
                  </p>
                </div>
                <SwitchButton checked={true} />
              </div>

              <div className="flex mt-8 items-center justify-between">
                <Link to="/step1" className="underline text-sm text-gray-400">
                  ← Back
                </Link>
                <Link to="/step3">
                  <MyButton
                    size="small"
                    customColor="white"
                    backgroundColor="main-color"
                    text="Next Step →"
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

export default Step2;
