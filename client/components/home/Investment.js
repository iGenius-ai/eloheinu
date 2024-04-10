import React from 'react'
import Link from 'next/link';
import MajorSites from './MajorSites';
import { Prata } from 'next/font/google'
const prata = Prata({ subsets: ['latin'], weight: ['400'] });

const Investment = () => {
  return (
    <>
      <section className='px-12 mt-24 max-md:px-6'>
        <div className='text-center mb-10 flex flex-col items-center'>
          <h2 className={`${prata.className} text-[2rem] font-light mb-2`}>Investment</h2>
          <p className='font-light text-sm max-w-[75ch] text-gray-600'>
            Our mission is simply to set the industry standard in investment consulting services for all 
            kinds of investors. Providing a complete range of investment opportunities for our clients, 
            and guiding them in making an informed decision. The Real Estate sector is flourishing greatly 
            in Nigeria and in most parts of the world, with great opportunities. Be a part of those who will 
            enjoy these endless opportunities today.
          </p>
          <h2 className={`text-[2rem] font-light mb-2 mt-8`}>Investment Offers</h2>
        </div>
      </section>
      <section className='pb-24 luxury'>
        <div className="p-4 flex items-center justify-center gap-4 invest h-[30rem] max-md:block max-md:h-auto">
          <div className='bg-gray-100 h-[250px] rounded-md p-8 flex flex-col gap-8 justify-center items-center max-md:mb-2'>
            <p className='max-w-[20ch] text-center capitalize font-light'>
              We offer a 22% down payment on most of our properties with a 36 to 48% spread
            </p>
            <Link href="/about" className='font-bold' style={{ color: "#422A6F" }}>Know More</Link>
          </div>
          <div className='bg-gray-100 h-[250px] rounded-md p-8 flex flex-col gap-8 justify-center items-center max-md:mb-2'>
            <p className='max-w-[20ch] text-center capitalize font-light'>
              We also have the best investment scheme for you. Minimum investment scheme is $24,000 
              and maximum scheme is $2.4 million 
            </p>
            <Link href="/about" className='font-bold' style={{ color: "#422A6F" }}>Know More</Link>
          </div>
          <div className='bg-gray-100 h-[250px] rounded-md p-8 flex flex-col gap-8 justify-center items-center max-md:mb-2'>
            <p className='max-w-[20ch] text-center capitalize font-light'>
              We also offer 14% RIO on deals less than 500,000. Deals over 500,000 ROI is 22%
            </p>
            <Link href="/about" className='font-bold' style={{ color: "#422A6F" }}>Know More</Link>
          </div>
        </div>
      </section>

      <MajorSites />
    </>
  )
}

export default Investment
