import React from 'react'
import Image from 'next/image';
import site1 from "../../public/images/sites/site1.png";

const Testimonials = () => {
  return (
    <>
      <section className='px-12 mt-24 pb-24 luxury max-md:px-6'>
        <div className='text-center'>
          <h2 className='text-[2rem] font-normal mb-2'>Testimonials</h2>
        </div>
        <div className="p-4 flex items-center justify-center gap-4 max-md:block">
          <div className='bg-[#33BEFF0F] h-[280px] rounded-md p-8 flex flex-col gap-4 justify-start items-start max-md:mb-2'>
            <i className='bx bxs-quote-left text-4xl text-[#33BEFF]'></i>
            <p className='max-w-[20ch] capitalize font-light'>
              We offer a 22% down payment on most of our properties with a 36 to 48% spread
            </p>
            <div className='flex gap-2 items-center'>
              <Image src={site1} width={40} className='rounded-full aspect-square' alt='Testimonials'/>
              <div className='leading-none'>
                <p className='text-[.9rem]'>by <b>Charles Emmanuel</b></p>
                <i className='font-light text-[.9rem]'>Software Engineer</i>
              </div>
            </div>
          </div>
          <div className='bg-[#33BEFF0F] h-[280px] rounded-md p-8 flex flex-col gap-4 justify-start items-start max-md:mb-2'>
            <i className='bx bxs-quote-left text-4xl text-[#33BEFF]'></i>
            <p className='max-w-[20ch] capitalize font-light'>
              We offer a 22% down payment on most of our properties with a 36 to 48% spread
            </p>
            <div className='flex gap-2 items-center'>
              <Image src={site1} width={40} className='rounded-full aspect-square' alt='Testimonials'/>
              <div className='leading-none'>
                <p className='text-[.9rem]'>by <b>Charles Emmanuel</b></p>
                <i className='font-light text-[.9rem]'>Software Engineer</i>
              </div>
            </div>
          </div>
          <div className='bg-[#33BEFF0F] h-[280px] rounded-md p-8 flex flex-col gap-4 justify-start items-start max-md:mb-2'>
            <i className='bx bxs-quote-left text-4xl text-[#33BEFF]'></i>
            <p className='max-w-[20ch] capitalize font-light'>
              We offer a 22% down payment on most of our properties with a 36 to 48% spread
            </p>
            <div className='flex gap-2 items-center'>
              <Image src={site1} width={40} className='rounded-full aspect-square' alt='Testimonials'/>
              <div className='leading-none'>
                <p className='text-[.9rem]'>by <b>Charles Emmanuel</b></p>
                <i className='font-light text-[.9rem]'>Software Engineer</i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials