import React from 'react'
import nigeria from "../../public/images/nigeria.png";
import rwanda from "../../public/images/rwanda.png";
import kenya from "../../public/images/kenya.png";
import Image from 'next/image';
import { Prata } from 'next/font/google'
const prata = Prata({ subsets: ['latin'] })


const Luxury = () => {
  return (
    <>
      <section className='px-12 mt-24 pb-24 luxury max-md:px-6'>
        <div className='text-center mb-10'>
          <h2 className={`${prata.className} max-md:text-[1.5rem] text-[2rem] font-semibold mb-2`}>Locations With Over 3000 Listings</h2>
          <p className='font-light text-sm'>A best choice property and a comprehensive legal protection is 100% possible</p>
        </div>
        <div className="flex items-center justify-center gap-4 max-md:block">
          <div className="relative flex-1 h-full location-wrapper max-md:mt-2">
            <Image
              src={nigeria}
              alt="Image 1"
              className="location h-72"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white uppercase text-3xl font-normal">Nigeria</span>
            </div>
          </div>
          <div className="relative flex-1 h-full location-wrapper max-md:mt-2">
            <Image
              src={kenya}
              alt="Image 2"
              className="location h-72"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white uppercase text-3xl font-normal">Kenya</span>
            </div>
          </div>
          <div className="relative flex-1 h-full location-wrapper max-md:mt-2">
            <Image
              src={rwanda}
              alt="Image 3"
              className="location h-72"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white uppercase text-3xl font-normal">Rwanda</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Luxury