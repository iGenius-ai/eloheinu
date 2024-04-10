"use client"

import React, { useEffect } from 'react'
import avatar from "../../public/images/avatar.jpg";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Rubik } from 'next/font/google'
import Overview from '../user/Overview';
import { useSidebar } from '@/context/SidebarContext';

const rubik = Rubik({ subsets: ['latin'] })

const Content = ({ user }) => {
  const router = useRouter();
  const { toggleSidebar, sidebarOpen } = useSidebar();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/auth/signin');
    }
  }, []);

  return (
    <>
      <div 
        style={{ transition: 'margin-left .3s' }}
        className={`${sidebarOpen ? "max-md:ml-60" : "max-md:ml-0"} ml-60 h-screen relative ${rubik.className} max-md:ml-0`} id="main-content"
      >
        <header className={` transition-[margin] duration-300 ease-in-out flex items-center justify-between py-4 px-8 h-14`}>
          <div className="flex items-center" onClick={toggleSidebar}>
            <i className="bx bx-menu text-2xl cursor-pointer" id="sidebar-toggle"></i>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src={avatar} alt='Brand Logo'
              width={40} height={40}
              className='rounded-full aspect-square'
            />
            <div className="user-dropdown max-md:hidden">
              <span className="flex items-center text-sm">{user.fullName}</span>
            </div>
          </div>
        </header>

        <Overview user={user} />
      </div>
    </>
  )
}

export default Content