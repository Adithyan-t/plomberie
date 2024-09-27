import React from 'react';
import layer from '../assets/layer.png'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen bg-blue-900 text-white bg-primary p-5 border border-lightblue">
        <div className=' h-[103px] border-b-2 items-center flex border-lightblue'>
        <h2 className="text-lg font-bold bg-lightblue w-fit  rounded-[8px]  p-2 font-grotesk ">CMS</h2>

        </div>
<div className='pt-3'>
<span className='text-2xl font-bold mt-10'> Collections</span>
      <ul className='ms-5 mt-2'>
      <Link to='home' className='flex justify-between py-2  text-lg gap-5 hover:bg-lightblue px-2 rounded-xl'>
      <div  className='flex justify-center  items-center gap-5'>
            <img src={layer} alt=""  className='w-[18px] h-[18px]'/>
            <p>Home</p>

            </div>
        
        <span>9</span>

        </Link>
        <Link to='about' className='flex justify-between py-2  text-lg gap-5 hover:bg-lightblue px-2 rounded-xl'>
            <div className='flex justify-center  items-center gap-5'>
            <img src={layer} alt=""  className='w-[18px] h-[18px]'/>
            <p>About</p>

            </div>
        
        <span>9</span>

        </Link>
        <div className='flex justify-between py-2  text-lg gap-5 hover:bg-lightblue px-2 rounded-xl'>
            <div className='flex justify-center  items-center gap-5'>
            <img src={layer} alt=""  className='w-[18px] h-[18px]'/>
            <p>Services</p>

            </div>
        
        <span>9</span>

        </div> <div className='flex justify-between py-2  text-lg gap-5 hover:bg-lightblue px-2 rounded-xl'>
            <div className='flex justify-center  items-center gap-5'>
            <img src={layer} alt=""  className='w-[18px] h-[18px]'/>
            <p>Contacts</p>

            </div>
        
        <span>9</span>

        </div>
        <div className='flex justify-between py-2  text-lg gap-5 hover:bg-lightblue px-2 rounded-xl'>
            <div className='flex justify-center  items-center gap-5'>
            <img src={layer} alt=""  className='w-[18px] h-[18px]'/>
            <p>Get an Estimate</p>

            </div>
        
        <span>9</span>

        </div>
      </ul>
</div>
        
    </div>
  );
};

export default Sidebar;
