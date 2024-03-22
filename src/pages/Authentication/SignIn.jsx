import authImage from "../../data/svg/images/auth-image.jpg";
import authDecoration from "../../data/svg/images/auth-decoration.png";
import { Link } from "react-router-dom";
import logo from "../../data/svg/logo.svg";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import { useState } from "react";
import Validation from "./LoginValidation";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const hendleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="flex w-full">
      <div className="w-full px-6 xl:px-12 py-6 xl:w-1/2 h-screen">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="w-full">
          <div className="mt-24 2xl:mt-44 mx-auto w-[400px]">
            <h3 className="h3 font-semibold text-left">Welcome back! ✨</h3>
            <div className="mt-10 border-b pb-6">
              <form onSubmit={hendleSubmit}>
                <div>
                  <MyInput
                    type = "email"
                    onchange={handleInput}
                    upLabel="Email Address"
                    size="small"
                    downLabel={
                      errors.email && (
                        <span className="text-danger">{errors.email}</span>
                      )
                    }
                  />
                </div>
                <div className="mt-5">
                  <MyInput
                    inputType="password"
                    onchange={handleInput}
                    upLabel="Paswword"
                    size="small"
                    downLabel={
                      errors.password && (
                        <span className="text-danger">{errors.password}</span>
                      )
                    }
                  />
                </div>
              </form>
              <div className="flex mt-8 items-center justify-between">
                <Link to="/resetPassword" className="underline text-sm text-gray-400">
                  Forgot Password?
                </Link>

                <MyButton
                  size="small"
                  customColor="white"
                  backgroundColor="main-color"
                  text="Sign In"
                  onClick={() => console.log(values)}
                />
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                Don't you have an account?{" "}
                <Link to="/signUp" className="text-logo">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="bg-[#FFFFCC] mt-6">
              <div className="text-[#d97706] p-3">
                <svg
                  className="inline w-3 h-3 mr-1"
                  fill="#d97706"
                  viewBox="0 0 12 12"
                >
                  <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"></path>
                </svg>
                <span className="text-sm">
                  To support you during the pandemic super pro features are free
                  until March 31st.
                </span>
              </div>
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

export default SignIn;
