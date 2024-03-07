import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Dashboard/Main";
import Analytics from "./pages/Dashboard/Analytics";
import Fintech from "./pages/Dashboard/Fintech";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useStateContext } from "./contexts/ContextProvider";
import Messages from "./pages/Messages/Messages";
import Comunity from "./pages/Comunity/Comunity";
import Finance from "./pages/Finance/Finance";
import Calendar from "./pages/Calendar";
import Kanban from "./pages/Kanban";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <BrowserRouter>
      <div className="main dark:bg-main-dark-bg">
        <Sidebar />

        <div className="container">
          <div className="md:static bg-main-bg dark:bg-main-dark-bg">
            <Navbar />
          </div>
          <div className="p-8">
            {/* Content */}
            <Routes>
              {/* pages */}

              {/* Dashboard */}
              <Route path="/" element={<Main />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="fintech" element={<Fintech />} />

              {/* Ecommerce */}
              <Route path="comunity" element={<Comunity />} />
              <Route path="finance" element={<Finance />} />

              {/* Messages */}
              <Route path="messages" element={<Messages />} />

              <Route path="calendar" element={<Calendar />} />
              <Route path="kanban" element={<Kanban />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
