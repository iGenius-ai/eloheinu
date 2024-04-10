"use client"

import React, { useState } from 'react'
import logoDark from "../../public/images/logo_dark.png";
import Image from 'next/image';
import Link from 'next/link';

const PropNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='z-50 fixed w-full bg-transparent backdrop-blur-3xl flex justify-between items-center max-lg:px-6 px-12 py-4 right-0 left-0 top-0'>
      <Image 
        src={logoDark} width={115} height={37}
        alt='Company Logo'
      />

      <div 
        className={`max-lg:-z-10 max-lg:py-20 max-lg:p-8 flex items-center gap-8 max-lg:hiddn max-lg:block max-lg:w-[15rem] max-lg:fixed max-lg:h-dvh max-lg:bg-gray-100 max-lg:top-0 max-lg:right-0 transition-transform max-lg:transform ${isMenuOpen ? 'max-lg:translate-x-0' : 'max-lg:translate-x-full'}`}
      >
        <div className='flex items-center gap-8 text-gray-800 max-lg:block'>
          <Link className='max-lg:block max-lg:mb-4' href={"/"}>Home</Link>
          <Link className='max-lg:block max-lg:mb-4' href={"/about"}>About Us</Link>
          <Link className='max-lg:block max-lg:mb-4' href={"/buy"}>Buy</Link>
          <Link className='max-lg:block max-lg:mb-4' href={"/rent"}>Rent</Link>
          <Link className='max-lg:block max-lg:mb-4' href={"/blog"}>Blog</Link>
          <Link className='max-lg:block max-lg:mb-4' href={"/contact"}>Contact Us</Link>
        </div>
      </div>

      <div className='lg:hidden' onClick={toggleMenu}>
        <i className='bx bx-menu text-black text-2xl'></i>
      </div>
    </header>
  )
}

export default PropNavbar