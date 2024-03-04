import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Analitics from "./pages/Analitics";
import Fintech from "./pages/Fintech";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useStateContext } from "./contexts/ContextProvider";
import Ecommerce from "./pages/Ecommerce";
import Comunity from "./pages/Comunity";
import Finance from "./pages/Finance";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar/>
          </div>
        ) : (
          <div className='"w-0 dark:bg-secondary-dark-bg'>
            <Sidebar/>
          </div>
        )}
      </div>
      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
          activeMenu ? "md:ml-64" : "flex-2"
        }`}
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar/>
        </div>
        <div>
          <Routes>
            {/* pages */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="main" element={<Main />} />
              <Route path="analitics" element={<Analitics />} />
              <Route path="fintech" element={<Fintech />} />
            </Route>
            <Route path="/ecommerce" element={<Ecommerce/>}>
            </Route>
            <Route path="/comunity" element={<Comunity/>}>
            </Route>
            <Route path="/finance" element={<Finance/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
