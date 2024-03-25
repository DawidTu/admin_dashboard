import onboarding from "../../data/svg/images/onboarding-image.jpg";
import authDecoration from "../../data/svg/images/auth-decoration.png";
import { Link } from "react-router-dom";
import logo from "../../data/svg/logo.svg";
import MyButton from "../../components/MyButton";
import StepProgressbar, {
  ActiveStepProvider,
} from "../../components/StepProgressbar";
import MyInput from "../../components/MyInput";

const Step3 = () => {
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
          <div className="mt-20 mx-auto w-full">
            <ActiveStepProvider>
              <StepProgressbar />
            </ActiveStepProvider>
          </div>
          <div className="mt-20 mx-auto w-[450px]">
            <h3 className="h3 font-semibold text-left">
              Company information ✨
            </h3>
            <div className="mt-10">
              <MyInput upLabel="Company Name" dangerIcon="*" size="small" />
              <div className="mt-6 flex gap-x-3">
                <MyInput upLabel="City" dangerIcon="*" size="small" />
                <MyInput upLabel="Postal Code" dangerIcon="*" size="small" />
              </div>
              <div className="mt-6">
                <MyInput upLabel="Street Address" dangerIcon="*" size="small" />
              </div>
              <div className="mt-6">
                <MyInput upLabel="Country" dangerIcon="*" size="small" />
              </div>

              <div className="flex mt-8 items-center justify-between">
                <Link to="/step2" className="underline text-sm text-gray-400">
                  ← Back
                </Link>
                <Link to="/step4">
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
      <div className="hidden xl:block xl:w-2/4 xl:h-screen xl:overflow-hidden">
        <img className="w-screen items-center" src={onboarding} alt="" />
      </div>
      <div className="hidden xl:block xl:absolute xl:left-[46.3%] xl:top-[46%]">
        <img className="h-48 w-48" src={authDecoration} alt="" />
      </div>
    </div>
  );
};

export default Step3;
