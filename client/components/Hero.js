"use client"
import React, { useEffect } from 'react'
import Location from './Location';

const Hero = () => {

  return (
    <>
      <section className='text-gray-700 p-4 relative w-full left-0 top-0 hero'>
        {/* Whiteboard Sale */}
        <div className='relative'>
          <div className='bg-white max-lg:right-0 flex flex-col gap-8 px-10 py-12 rounded-sm absolute right-8 top-32 sale'>
            <div>
              <h2 className='text-2xl'>NYARUTARAMA</h2>
              <p className='text-gray-400'>Hatteras Lane, Hollywood, FL 33019</p>
            </div>
            <div className='flex gap-6 items-center'>
              <div>
                <p>Bedrooms</p>
                <div className='flex items-center gap-1'>
                  <i className='bx bxs-bed text-3xl text-gray-400'></i>
                  <p>3</p>
                </div>
              </div>
              <div>
                <p>Bathrooms</p>
                <div className='flex items-center gap-1'>
                  <i className='bx bxs-bath text-3xl text-gray-400'></i>
                  <p>2</p>
                </div>
              </div>
              <div>
                <p>Area</p>
                <div className='flex items-center gap-1'>
                  <i className='bx bxs-area text-3xl text-gray-400'></i>
                  <p>4530 <span className='text-gray-500 text-sm'>sq ft</span></p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-700'>For Sale</p>
              <h2 className='text-2xl'>$460,000</h2>
            </div>
          </div>
        </div>

        <Location />
      </section>
    </>
  )
}

export default Hero