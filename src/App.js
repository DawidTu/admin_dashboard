import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Dashboard/Main";
import Analytics from "./pages/Dashboard/Analytics";
import Fintech from "./pages/Dashboard/Fintech";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useStateContext } from "./contexts/ContextProvider";
import Messages from "./pages/Messages";
import Calendar from "./pages/Calendar";
import Inbox from "./pages/Inbox";
import Campaings from "./pages/Campaings";
import Customers from "./pages/Ecommerce/Customers";
import Orders from "./pages/Ecommerce/Orders";
import Invoices from "./pages/Ecommerce/Invoices";
import Shop from "./pages/Ecommerce/Shop";
import Shop2 from "./pages/Ecommerce/Shop2";
import SingleProduct from "./pages/Ecommerce/SingleProduct";
import Cart from "./pages/Ecommerce/Cart";
import Cart2 from "./pages/Ecommerce/Cart2";
import Cart3 from "./pages/Ecommerce/Cart3";
import Pay from "./pages/Ecommerce/Pay";
import UsersTabs from "./pages/Comunity/UsersTabs";
import UsersTiles from "./pages/Comunity/UsersTiles";
import Profile from "./pages/Comunity/Profile";
import Feed from "./pages/Comunity/Feed";
import Forum from "./pages/Comunity/Forum";
import ForumPost from "./pages/Comunity/ForumPost";
import Meetups from "./pages/Comunity/Meetups";
import MeetupsPost from "./pages/Comunity/MeetupsPost";
import Cards from "./pages/Finance/Cards";
import Transactions from "./pages/Finance/Transactions";
import TransactionsDetails from "./pages/Finance/TransactionsDetails";
import Listing from "./pages/JobBoard/Listing";
import JobPost from "./pages/JobBoard/JobPost";
import CompanyProfile from "./pages/JobBoard/CompanyProfile";
import Kanban from "./pages/Tasks/Kanban";
import List from "./pages/Tasks/List";
import MyAccount from "./pages/Settings/MyAccount";
import MyNotifications from "./pages/Settings/MyNotifications";
import ConnectedApps from "./pages/Settings/ConnectedApps";
import Plans from "./pages/Settings/Plans";
import BillingInvoices from "./pages/Settings/BillingInvoices";
import GiveFeedback from "./pages/Settings/GiveFeedback";
import Changelog from "./pages/Utility/Changelog";
import Roadmap from "./pages/Utility/Roadmap";
import FAQs from "./pages/Utility/FAQs";
import EmptyState from "./pages/Utility/EmptyState";
import Error404 from "./pages/Utility/Error404";
import KnowledgeBase from "./pages/Utility/KnowledgeBase";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import ResetPassword from "./pages/Authentication/ResetPassword";
import Step1 from "./pages/Oboarding/Step1";
import Step2 from "./pages/Oboarding/Step2";
import Step3 from "./pages/Oboarding/Step3";
import Step4 from "./pages/Oboarding/Step4";
import Button from "./pages/Components/Button";
import InputForm from "./pages/Components/InputForm";
import Dropdown from "./pages/Components/Dropdown";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <BrowserRouter>
      <div className="main dark:bg-main-dark-bg">
        <Sidebar />

        <div className="w-full">
          <div className="md:static bg-main-bg dark:bg-main-dark-bg">
            <Navbar />
          </div>
          <div className="ml-[260px]">
            <div className="p-8 2xl:px-24">
              {/* Content */}
              <Routes>
                {/* pages */}

                {/* Dashboard */}
                <Route path="/" element={<Main />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="fintech" element={<Fintech />} />

                {/* Ecommerce */}
                <Route path="fintech" element={<Fintech />} />
                <Route path="customers" element={<Customers />} />
                <Route path="orders" element={<Orders />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="shop" element={<Shop />} />
                <Route path="shop2" element={<Shop2 />} />
                <Route path="singleProduct" element={<SingleProduct />} />
                <Route path="cart" element={<Cart />} />
                <Route path="cart2" element={<Cart2 />} />
                <Route path="cart3" element={<Cart3 />} />
                <Route path="pay" element={<Pay />} />

                {/* Comunity */}
                <Route path="usersTabs" element={<UsersTabs />} />
                <Route path="usersTiles" element={<UsersTiles />} />
                <Route path="profile" element={<Profile />} />
                <Route path="feed" element={<Feed />} />
                <Route path="forum" element={<Forum />} />
                <Route path="forumPost" element={<ForumPost />} />
                <Route path="meetups" element={<Meetups />} />
                <Route path="meetupsPost" element={<MeetupsPost />} />

                {/* Finance */}
                <Route path="cards" element={<Cards />} />
                <Route path="transactions" element={<Transactions />} />
                <Route
                  path="transactionsDetails"
                  element={<TransactionsDetails />}
                />

                {/* Job Board */}
                <Route path="listing" element={<Listing />} />
                <Route path="jobPost" element={<JobPost />} />
                <Route path="companyProfile" element={<CompanyProfile />} />

                {/* Tasks */}
                <Route path="kanban" element={<Kanban />} />
                <Route path="list" element={<List />} />

                <Route path="messages" element={<Messages />} />
                <Route path="inbox" element={<Inbox />} />
                <Route path="campaings" element={<Campaings />} />
                <Route path="calendar" element={<Calendar />} />

                {/* Settings */}
                <Route path="myAccount" element={<MyAccount />} />
                <Route path="myNotifications" element={<MyNotifications />} />
                <Route path="connesctedApps" element={<ConnectedApps />} />
                <Route path="plans" element={<Plans />} />
                <Route path="billingInvoices" element={<BillingInvoices />} />
                <Route path="giveFeedback" element={<GiveFeedback />} />

                {/* Utility */}
                <Route path="changelog" element={<Changelog />} />
                <Route path="roadmap" element={<Roadmap />} />
                <Route path="fAQs" element={<FAQs />} />
                <Route path="emptyState" element={<EmptyState />} />
                <Route path="error404" element={<Error404 />} />
                <Route path="knowledgeBase" element={<KnowledgeBase />} />

                {/* Authentication */}
                <Route path="signIn" element={<SignIn />} />
                <Route path="signUp" element={<SignUp />} />
                <Route path="resetPassword" element={<ResetPassword />} />

                {/* Oboarding */}
                <Route path="step1" element={<Step1 />} />
                <Route path="step2" element={<Step2 />} />
                <Route path="step3" element={<Step3 />} />
                <Route path="step4" element={<Step4 />} />

                {/* Components */}
                <Route path="button" element={<Button />} />
                <Route path="inputForm" element={<InputForm />} />
                <Route path="dropdown" element={<Dropdown />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
