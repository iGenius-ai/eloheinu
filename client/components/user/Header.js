import React from 'react'
import avatar from "../../public/images/avatar.jpg";
import Image from 'next/image';

const Header = ({ user }) => {
  return (
    <header className='flex items-center justify-between py-4 px-8 h-14'>
      <div className="flex items-center">
        <i className="bx bx-menu text-2xl cursor-pointer" id="sidebar-toggle"></i>
      </div>
      <form action="#">
        <input type="search" 
          className="w-full p-2 text-sm bg-gray-900 rounded-md focus:border focus:border-blue-800 outline-none" 
          name="" placeholder="Search anything..." 
        />
      </form>

      <div className="flex items-center gap-1">
        <Image
          src={avatar} alt='Brand Logo'
          width={40} height={40}
          className='rounded-full aspect-square'
        />
        <div className="user-dropdown">
          <span className="flex items-center text-sm">{user.brand}</span>
        </div>
      </div>
    </header>
  )
}

export default Header