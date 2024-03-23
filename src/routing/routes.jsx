import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Main from "../pages/Dashboard/Main";
import Analytics from "../pages/Dashboard/Analytics";
import Fintech from "../pages/Dashboard/Fintech";
import Messages from "../pages/Messages";
import Calendar from "../pages/Calendar";
import Inbox from "../pages/Inbox";
import Campaings from "../pages/Campaings";
import Customers from "../pages/Ecommerce/Customers";
import Orders from "../pages/Ecommerce/Orders";
import Invoices from "../pages/Ecommerce/Invoices";
import Shop from "../pages/Ecommerce/Shop";
import Shop2 from "../pages/Ecommerce/Shop2";
import SingleProduct from "../pages/Ecommerce/SingleProduct";
import Cart from "../pages/Ecommerce/Cart";
import Cart2 from "../pages/Ecommerce/Cart2";
import Cart3 from "../pages/Ecommerce/Cart3";
import Pay from "../pages/Ecommerce/Pay";
import UsersTabs from "../pages/Comunity/UsersTabs";
import UsersTiles from "../pages/Comunity/UsersTiles";
import Profile from "../pages/Comunity/Profile";
import Feed from "../pages/Comunity/Feed";
import Forum from "../pages/Comunity/Forum";
import ForumPost from "../pages/Comunity/ForumPost";
import Meetups from "../pages/Comunity/Meetups";
import MeetupsPost from "../pages/Comunity/MeetupsPost";
import Cards from "../pages/Finance/Cards";
import Transactions from "../pages/Finance/Transactions";
import TransactionsDetails from "../pages/Finance/TransactionsDetails";
import Listing from "../pages/JobBoard/Listing";
import JobPost from "../pages/JobBoard/JobPost";
import CompanyProfile from "../pages/JobBoard/CompanyProfile";
import Kanban from "../pages/Tasks/Kanban";
import List from "../pages/Tasks/List";
import Changelog from "../pages/Utility/Changelog";
import Roadmap from "../pages/Utility/Roadmap";
import FAQs from "../pages/Utility/FAQs";
import EmptyState from "../pages/Utility/EmptyState";
import Error404 from "../pages/Utility/Error404";
import KnowledgeBase from "../pages/Utility/KnowledgeBase";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import ResetPassword from "../pages/Authentication/ResetPassword";
import Step1 from "../pages/Oboarding/Step1";
import Step2 from "../pages/Oboarding/Step2";
import Step3 from "../pages/Oboarding/Step3";
import Step4 from "../pages/Oboarding/Step4";
import Button from "../pages/Components/Button";
import InputForm from "../pages/Components/InputForm";
import Dropdown from "../pages/Components/Dropdown";
import UsersPage from "./UsersPage";
import SettingsAccount from "../pages/Settings/SettingsAccount";
import SettingsNotification from "../pages/Settings/SettingsNotification";
import SettingsConnect from "../pages/Settings/SettingsConnect";
import SettingsPlans from "../pages/Settings/SettingsPlans";
import SettingsBilling from "../pages/Settings/SettingsBilling";
import SettingsFeed from "../pages/Settings/SettingsFeed";
import Icons from "../pages/Icons";
import BadgePage from "../pages/BadgePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "analytics", element: <Analytics /> },
      { path: "fintech", element: <Fintech /> },

      { path: "fintech", element: <Fintech /> },
      { path: "customers", element: <Customers /> },
      { path: "orders", element: <Orders /> },
      { path: "invoices", element: <Invoices /> },
      { path: "shop", element: <Shop /> },
      { path: "shop2", element: <Shop2 /> },
      { path: "singleProduct", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "cart2", element: <Cart2 /> },
      { path: "cart3", element: <Cart3 /> },
      { path: "pay", element: <Pay /> },

      { path: "usersTabs", element: <UsersTabs /> },
      { path: "usersTiles", element: <UsersTiles /> },
      { path: "profile", element: <Profile /> },
      { path: "feed", element: <Feed /> },
      { path: "forum", element: <Forum /> },
      { path: "forumPost", element: <ForumPost /> },
      { path: "meetups", element: <Meetups /> },
      { path: "meetupsPost", element: <MeetupsPost /> },

      { path: "cards", element: <Cards /> },
      { path: "transactions", element: <Transactions /> },
      { path: "transactionsDetails", element: <TransactionsDetails /> },

      { path: "listing", element: <Listing /> },
      { path: "jobPost", element: <JobPost /> },
      { path: "companyProfile", element: <CompanyProfile /> },

      { path: "kanban", element: <Kanban /> },
      { path: "list", element: <List /> },

      { path: "messages", element: <Messages /> },
      { path: "inbox", element: <Inbox /> },
      { path: "campaings", element: <Campaings /> },
      { path: "calendar", element: <Calendar /> },

      {
        path: "userPage",
        element: <UsersPage />,
        children: [
          { path: "settingsaccount", element: <SettingsAccount /> }, 
          { path: "settingsnotifications", element: <SettingsNotification /> },
          { path: "settingsconnect", element: <SettingsConnect /> },
          { path: "settingsplan", element: <SettingsPlans /> },
          { path: "settingsbilling", element: <SettingsBilling /> },
          { path: "settingsfeed", element: <SettingsFeed /> },
        ],
      },

      { path: "changelog", element: <Changelog /> },
      { path: "roadmap", element: <Roadmap /> },
      { path: "fAQs", element: <FAQs /> },
      { path: "emptyState", element: <EmptyState /> },
      { path: "knowledgeBase", element: <KnowledgeBase /> },

      { path: "button", element: <Button /> },
      { path: "inputForm", element: <InputForm /> },
      { path: "dropdown", element: <Dropdown /> },
      { path: "icons", element: <Icons /> },
      { path: "badgePage", element: <BadgePage /> },
    ],
  },

  { index: true, path: "signIn", element: <SignIn /> },
  { path: "signUp", element: <SignUp /> },
  { path: "resetPassword", element: <ResetPassword /> },

  { path: "step1", element: <Step1 /> },
  { path: "step2", element: <Step2 /> },
  { path: "step3", element: <Step3 /> },
  { path: "step4", element: <Step4 /> },
  { path: "*", element: <Error404 /> },
]);

export default router;
