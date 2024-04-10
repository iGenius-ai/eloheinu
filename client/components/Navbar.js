"use client"

import React from 'react'
import logo from "../public/images/logo.png";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ user }) => {

  return (
    <header className='z-50 absolute w-full bg-transparent flex justify-between items-center max-lg:px-6 px-12 py-4 right-0 left-0 top-0'>
      <Image 
        src={logo} width={115} height={37}
        alt='Company Logo'
      />

      <div className='flex items-center gap-8 max-lg:hidden'>
        <div className='flex items-center gap-8 text-white'>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/buy"}>Buy</Link>
          <Link href={"/rent"}>Rent</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </div>

      <div className='lg:hidden'>
        <i className='bx bx-menu text-white text-2xl cursor-pointer'></i>
      </div>
    </header>
  )
}

export default Navbar