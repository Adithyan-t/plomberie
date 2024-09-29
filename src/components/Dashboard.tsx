import { Outlet, useLocation } from '@tanstack/react-router';
import React from 'react';
import Sidebar from './Sidebar';
import Homeiteam from './HomeOptions';
import AboutDetails from './AboutOptions';
import ServiceOptions from './ServiceOptions';
import Contactsiteams from './Contactsiteams';
import GetanEstimateIteams from './GetanEstimateIteams';

const RightContent: React.FC = () => {
  const location = useLocation();

  const routesMap: { [key: string]: JSX.Element } = {
    '/Admin/Dashboard/Home/homeiteams': <Homeiteam />,
    '/Admin/Dashboard/About/aboutoptions': <AboutDetails />,
    '/Admin/Dashboard/Services/ServiceIteams': <ServiceOptions />,
    '/Admin/Dashboard/Contacts/ContactsIteams': <Contactsiteams />,
    '/Admin/Dashboard/GetanEstimate/GetanEstimateiteams': <GetanEstimateIteams />,
  };
  return routesMap[location.pathname] || null;
};

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-grow h-screen text-white bg-blue-800">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Left Section */}
      <div className="w-1/3 p-5 border border-lightblue bg-primary">
        <div className="h-[103px] border-b-2 flex items-center border-lightblue">
          <h2 className="text-lg font-bold bg-lightblue w-fit rounded-[8px] p-2 font-grotesk">
            New Item
          </h2>
        </div>
        <Outlet />
      </div>

      {/* Right Section */}
      <div className="w-2/3 bg-primary">
        <RightContent />
      </div>
    </div>
  );
};

export default Dashboard;