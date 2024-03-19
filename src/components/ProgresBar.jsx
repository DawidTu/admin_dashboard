import { useState } from "react";

const ProgressBar = () => {
  const [activeStep, setActiveStep] = useState(3);

  const handleClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <div className="w-3/5 relative">
        <div
          className={`h-[2px] bg-gray-300 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 transition-width duration-300 ease-in-out step-${activeStep}`}
        />

        <div className="flex justify-between mt-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`w-3 h-3 z-[8] rounded-full  border-2 border-gray-400 flex items-center justify-center cursor-pointer transition-bg duration-300 ease-in-out ${
                step === activeStep ? "bg-main-color border-none" : "bg-white"
              }`}
              onClick={() => handleClick(step)}
            />
          ))}
        </div>
      </div>
      <div className="flex w-3/5 text-gray-500 text-sm italic justify-between mt-3">
        <p>Not at all</p>
        <p>Extremely likely</p>
      </div>
    </div>
  );
};

export default ProgressBar;
