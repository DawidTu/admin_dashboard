import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Analitics from "./pages/Analitics";
import Fintech from "./pages/Fintech";

const App = () => {
  const activeMenu = true;
  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            sidebar
          </div>
        ) : (
          <div className='"w-0 dark:bg-secondary-dark-bg text-red-500'>
            sidebar
          </div>
        )}
      </div>
      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
          activeMenu ? "md:ml-72" : "flex-2"
        }`}
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          Navbar
        </div>
        <div>
          <Routes>
            {/* pages */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="main" element={<Main />} />
              <Route path="analitics" element={<Analitics />} />
              <Route path="fintech" element={<Fintech />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
