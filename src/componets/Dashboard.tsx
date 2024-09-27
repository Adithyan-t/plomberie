import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Homeiteams from './Homeiteams';
import Aboutoptions from './Aboutoptions';
import { useLocation } from 'react-router-dom';


const RightContent = () => {
  const location = useLocation();
  if (location.pathname === '/home/homeiteams') {
    return <Homeiteams />;
  } else if (location.pathname === '/about/aboutoptions') {
    return <Aboutoptions/>;
  } else if (location.pathname === 'contact') {
    return <div>Contact Content</div>;
  }

  return <div>Default Content</div>;
};


const Dashboard = () => {
  const params = useParams();
  console.log(params); // This will log the route parameters

  return (
    <div className="flex-grow bg-blue-800 h-screen text-white flex">
      {/* Left Section */}
      <div className="w-1/3 border border-lightblue p-5 bg-primary">
        <div className='h-[103px] border-b-2 items-center flex border-lightblue'>
          <h2 className="text-lg font-bold bg-lightblue w-fit rounded-[8px] p-2 font-grotesk ">New Item</h2>
        </div>
        <Outlet /> {/* This will render nested routes */}
      </div>

      {/* Right Section */}
      <div className="w-2/3 bg-primary">
        {/* <div className='h-[103px] border-b-2 items-center flex border-lightblue m-5'>
          <h2 className="text-lg font-bold bg-lightblue w-fit rounded-[8px] p-2 font-grotesk ">Home Items</h2>
        </div> */}

        <RightContent />          
      </div>
    </div>
  );
};

export default Dashboard;
