import React, { createContext, useContext, useState } from "react";

const StepContext = createContext();

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
};

export const StepProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(1);

  const setStep = (step) => {
    setActiveStep(step);
  };

  return (
    <StepContext.Provider value={{ activeStep, setStep }}>
      {children}
    </StepContext.Provider>
  );
};
