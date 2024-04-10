"use client"
import React from 'react'

const Hero = () => {

  return (
    <>
      <section className='flex text-gray-700 p-4 relative w-full left-0 top-0 hero about-hero'>
        {/* Whiteboard Sale */}
        <div className='w-full flex items-center justify-center flex-col z-50'>
          <h1 className='text-4xl font-semibold text-white'>ABOUT US</h1>
          <p className='text-white font-light'>YOUR DREAM PROPERTY AND PEACE OF MIND IS GUARANTEED</p>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>
    </>
  )
}

export default Hero