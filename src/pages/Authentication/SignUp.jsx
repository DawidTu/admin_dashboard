import authImage from "../../data/svg/images/auth-image.jpg";
import authDecoration from "../../data/svg/images/auth-decoration.png";
import { Link } from "react-router-dom";
import logo from "../../data/svg/logo.svg";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import Chackbox from "../../components/ChackBox";
import { useState } from "react";

const SignUp = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const options = ["Designer", "Developer", "Accountant"];
  
  return (
    <div className="flex w-full">
      <div className="w-full px-6 xl:px-12 py-6 xl:w-1/2 h-screen">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="w-full">
          <div className="mt-20 2xl:mt-44 mx-auto w-[400px]">
            <h3 className="h3 font-semibold text-left">Create your Account ✨</h3>
            <div className="mt-10 border-b pb-6">
              <div>
                <MyInput upLabel="Email Address" size="small" dangerIcon="*"/>
              </div>
              <div className="mt-5">
                <MyInput upLabel="Full Name" size="small" dangerIcon="*"/>
              </div>
              <div className="mt-5">
                <MyInput inputType="select" value={selectedOption} onChange={handleOptionChange} options={options} upLabel="Your Role" size="small" dangerIcon="*"/>
              </div>
              <div className="mt-5">
                <MyInput inputType="password" upLabel="Password" size="small" />
              </div>
              <div className="flex mt-8 items-center justify-between">
                <Chackbox
                  type="checkbox"
                  label="Email me about product news."
                />
                <Link to="/">
                  <MyButton
                    size="small"
                    customColor="white"
                    backgroundColor="main-color"
                    text="Sign Up"
                  />
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                Have an account?{" "}
                <Link to="/signIn" className="text-logo">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block xl:w-2/4 xl:h-screen xl:overflow-hidden">
        <img className="w-screen items-center" src={authImage} alt="" />
      </div>
      <div className="hidden xl:block xl:absolute xl:left-[46.3%] xl:top-[46%]">
        <img className="h-48 w-48" src={authDecoration} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
