import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="main">
        <Sidebar />

        <div className="w-full">
          <div className="md:static bg-box dark:bg-main-dark-bg">
            <Navbar />
          </div>
          <div className="overflow-hidden md:ml-[260px]">
            <div className="p-4 md:p-8 2xl:px-24">
                <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
