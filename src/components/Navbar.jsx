import React from 'react'
import { assets } from '../assets/frontend_assets/assets' 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt="Logo" /> 
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <li>
          <NavLink to='/' className='relative group flex flex-col item-center gap-1'>
            <span className='py-1'>Home</span>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/collection' className='relative group flex flex-col item-center gap-1'>
            <span className='py-1'>Collection</span>
            <hr className='w-2/4 border-none  h-[1.5px] bg-gray-700 hidden ' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='relative group flex flex-col item-center gap-1'>
            <span className='py-1'>About</span>
            <hr className='w-2/4 border-none  h-[1.5px] bg-gray-700 hidden ' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='relative group flex flex-col item-center gap-1'>
            <span className='py-1'>Contact</span>
            <hr className='w-2/4 border-none  h-[1.5px] bg-gray-700 hidden ' />
          </NavLink>
        </li>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
        <div className='group relative'>
           <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
           <div className='group-hover:block hidden aboulute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded '>
                <p></p>
                <p></p>
                <p></p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
