import authImage from "../../data/svg/images/auth-image.jpg";
import authDecoration from "../../data/svg/images/auth-decoration.png";
import { Link } from "react-router-dom";
import logo from "../../data/svg/logo.svg";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";

const ResetPassword = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="w-full px-6 xl:px-12 py-6 xl:w-1/2 h-screen">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="w-full">
          <div className="mt-48 2xl:mt-64 mx-auto w-[400px]">
            <h3 className="h3 font-semibold text-left">
              Reset your Password✨
            </h3>
            <div className="mt-10">
              <div>
                <MyInput upLabel="Email Address" size="small" dangerIcon="*" />
              </div>

              <div className="mt-6 float-right">
                <Link to="/">
                  <MyButton
                    size="small"
                    customColor="white"
                    backgroundColor="main-color"
                    text="Send Reset Link"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block xl:w-2/4">
        <img className="w-full fill object-cover  xl:h-screen xl:overflow-hidden" src={authImage} alt="" />
      </div>
      <div className="hidden xl:block xl:absolute xl:left-[46.3%] xl:top-[46%]">
        <img className="h-48 w-48" src={authDecoration} alt="" />
      </div>
    </div>
  );
};

export default ResetPassword;
