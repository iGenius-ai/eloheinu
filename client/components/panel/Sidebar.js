"use client"

import React from 'react';
import { Rubik } from 'next/font/google'
import logoDark from "../../public/images/logo_dark.png";
import Image from 'next/image';
import { useSidebar } from '@/context/SidebarContext';

const rubik = Rubik({ subsets: ['latin'] })

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  const handleLogout = async () => {
    try {
      // Remove the token from localStorage
      localStorage.removeItem('token');
      window.location.href = '/auth/signin';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <div
        className={`${rubik.className} p-6 pr-0 py-4 w-60 bg-slate-50 transition-transform duration-300 ease-in-out fixed top-0 left-0 h-full z-50 shadow-md max-md:-translate-x-full ${sidebarOpen ? "max-md:translate-x-0" : ""}`} id="sidebar"
      >
        <div>
          <a href="/" className='block w-fit'>
            <Image 
              src={logoDark} width={115} height={37}
              alt='Company Logo'
            />
          </a>
        </div>

        <div className="mt-20">
          <ul className='flex flex-col gap-2'>
            <li id="dashboard"
              className='cursor-pointer rounded px-2 py-3 w-auto text-gray-500 text-base hover:text-gray-800 hover:font-semibold transition-all ease-in-out duration-300'
            >
              <a className='flex items-center gap-1' href="/dashboard"><i className='bx bxs-home'></i> <span>Home</span></a>
            </li>
            <li id="bots"
              className='cursor-pointer rounded px-2 py-3 w-auto text-gray-500 text-base hover:text-gray-800 hover:font-semibold transition-all ease-in-out duration-300'
            >
              <a className='flex items-center gap-1' href="/bots"><i className='bx bxs-building-house'></i> <span>Property Listings</span></a>
            </li>
          </ul>
        </div>

        <div 
          className='mt-32 cursor-pointer px-2 text-red-600 py-4 w-full hover:text-red-700 hover:font-semibold transition-all ease-in-out duration-300'
        >
          <button onClick={handleLogout} className='flex items-center gap-1'>
            <i className='bx bx-log-out'></i> <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar;