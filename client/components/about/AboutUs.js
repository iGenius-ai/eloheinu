import React from 'react'
import nigeria from "../../public/images/nigeria.png";
import Image from 'next/image';
import { Prata } from 'next/font/google'
import Investment from '../home/Investment';
import MajorSites from '../home/MajorSites';
const prata = Prata({ subsets: ['latin'], weight: ['400'] });

const AboutUs = () => {
  return (
    <>
      <section className='px-12 mt-12 pb-24 luxury'>
        <div className='text-center mb-4 flex flex-col items-center'>
          <h2 className='text-[1.5rem] font-light mb-2'>
            A Best choice property and a comprehensive legal protection is 100% possible 
          </h2>
          <p className='font-light text-sm max-w-[75ch]'>
            Eloheinu real estate are passionate about providing you with the opportunity to own and purchase 
            properties across East African countries like Nigeria, Kenya, Rwanda with the Best prices and flexible 
            payment plan and professional investment packages
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-center text-center gap-20">
          <div>
            <p className='text-2xl text-[#644898]'>1000+</p> <span className='text-sm font-light'>Listings</span>
          </div>
          <div>
            <p className='text-2xl text-[#644898]'>500+</p> <span className='text-sm font-light'>Happy Customers</span>
          </div>
          <div>
            <p className='text-2xl text-[#644898]'>5+</p> <span className='text-sm font-light'>Years of Experience</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="relative h-full location-wrapper rounded-[5px]">
            <Image
              src={nigeria}
              alt="Image 1"
              className="location max-w-[35rem] aspect-video"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white uppercase text-3xl font-normal">Nigeria</span>
            </div>
          </div>
        </div>
        <div className={`${prata.className} flex items-center justify-center mt-8 gap-36 text-[#422A6F]`}>
          <p>Consultancy</p>
          <p>Real Estate</p>
          <p>Investment</p>
        </div>

        <div className='text-center mt-6 mb-4 flex flex-col items-center'>
          <h2 className='text-[1.5rem] font-light mb-2'>
            Consultancy 
          </h2>
          <p className='font-light text-sm max-w-[75ch]'>
            We provide balanced and professional end to end consultations on real estate market to our 
            clients through our vast knowledge and genius research of both local and international real 
            estate markets we have come to master and understand trend and market dynamics in order to 
            lead the change in real estate industry. Our major aim to provide you with suitable, profitable 
            real estate experience with flexible payment options.
          </p>
        </div>

        <div className='text-center mt-6 mb-4 flex flex-col items-center'>
          <h2 className='text-[1.5rem] font-light mb-2'>
            Real Estate 
          </h2>
          <p className='font-light text-sm max-w-[75ch]'>
            Property is considered a rewarding investment all over the world, in fact for many investors 
            property has been the only investment option. However, many property buyers stay away or have 
            had a bitter experience in past due to lack of expertise in the evaluation and proper documentation.
            With a renowned experience in the real estate business and an unmatched track record, we are 
            uniquely poised to cater to the needs of Individuals and corporate for their real estate investment.
            We offer the complete range of services related to purchasing/sale/leasing/rent of properties. 
            We delight in understanding specific needs of our clients and help them realise their goals.
          </p>
        </div>

        <div className='text-center mt-6 mb-4 flex flex-col items-center'>
          <h2 className='text-[1.5rem] font-light mb-2'>
            Investment
          </h2>
          <p className='font-light text-sm max-w-[75ch]'>
            Our mission is simply to set the industry standard in investment consulting services for all 
            kinds of investors. Providing a complete range of investment opportunities for our clients, 
            and guiding them in making an informed decision. The Real Estate sector is flourishing greatly 
            in Nigeria and in most parts of the world, with great opportunities. Be a part of those who will 
            enjoy these endless opportunities today.
          </p>
        </div>
      </section>
      <MajorSites />
    </>
  )
}

export default AboutUs