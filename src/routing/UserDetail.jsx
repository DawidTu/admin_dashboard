import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import SettingsAccount from "../components/Settings/SettingsAccount";
import SettingsConnect from "../components/Settings/SettingsConnect";
import SettingsPlans from "../components/Settings/SettingsPlans";
import SettingsBilling from "../components/Settings/SettingsBilling";
import SettingsFeed from "../components/Settings/SettingsFeed";

const UserDetail = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);
  return (
    <div>
       
    </div>
  )
}

export default UserDetail