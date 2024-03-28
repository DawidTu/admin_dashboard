import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ActiveStepContext = React.createContext();

export const ActiveStepProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <ActiveStepContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </ActiveStepContext.Provider>
  );
};

const StepProgressbar = () => {
  const { activeStep, setActiveStep } = useContext(ActiveStepContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let step = 1;
    switch (path) {
      case "/step1":
        step = 1;
        break;
      case "/step2":
        step = 2;
        break;
      case "/step3":
        step = 3;
        break;
      case "/step4":
        step = 4;
        break;
      default:
        step = 1;
        break;
    }
    setActiveStep(step);
  }, [location.pathname, setActiveStep]);

  const handleClick = (step) => {
    setActiveStep(step);
    switch (step) {
      case 1:
        navigate("/step1");
        break;
      case 2:
        navigate("/step2");
        break;
      case 3:
        navigate("/step3");
        break;
      case 4:
        navigate("/step4");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="w-full md:w-4/5 mx-auto relative">
        <div
          className={`h-[2px] bg-gray-300 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 transition-width duration-300 ease-in-out step-${activeStep}`}
        />

        <div className="flex justify-between mt-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-5 h-5 text-xs z-[8] rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer transition-bg duration-300 ease-in-out ${
                step <= activeStep
                  ? "bg-main-color border-none text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleClick(step)}
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepProgressbar;
