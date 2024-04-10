"use client"
import React from 'react'
import Location from '../Location'

const Hero = () => {

  return (
    <>
      <section className='flex text-gray-700 p-4 relative w-full left-0 top-0 hero about-hero'>
        {/* Whiteboard Sale */}
        <div className='w-full flex items-center justify-center flex-col z-50'>
          <h1 className='text-4xl font-semibold text-white'>FIND EXCLUSIVE PROPERTIES</h1>
          <p className='text-white font-light'>OUR NETWORK OF LUXURY REAL ESTATE AGENTS</p>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <Location />
      </section>
    </>
  )
}

export default Hero