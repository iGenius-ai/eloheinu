import React from 'react'
import site8 from "../../public/images/sites/site8.png";
import Image from 'next/image';

const About = () => {
  return (
    <section className='px-12 mt-24 pb-24 luxury max-md:px-6'>
      <div className='text-center mb-10 flex flex-col items-center'>
        <h2 className={`text-[2rem] font-light mb-2`}>About Us</h2>
        <p className='font-light text-sm max-w-[75ch] text-gray-600'>
          Eloheinu real estate are passionate about providing you with the opportunity to own and purchase 
          properties across east africa countries like Nigeria, Kenya, Rwanda with the Best prices and flexible 
          payment plan and professional investment packages 
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="relative h-full location-wrapper rounded-[5px]">
          <Image
            src={site8}
            alt="Image 1"
            className="location max-w-[35rem] aspect-video"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-center uppercase text-3xl font-normal">Eloheinu Real Estate</span>
          </div>
        </div>
      </div>
      <div className={`flex items-center text-[15px] justify-center mt-8 gap-36 text-[#422A6F] max-md:gap-4`}>
        <p className='font-semibold'>Consultancy</p>
        <p className='font-semibold'>Real Estate</p>
        <p className='font-semibold'>Investment</p>
      </div>
    </section>
  )
}

export default About
