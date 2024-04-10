import React from 'react'
import { Prata } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image';
import nigeria from "../../public/images/nigeria.png";
const prata = Prata({ subsets: ['latin'], weight: ['400'] });

const Types = ({ totalListings, featured }) => {
  return (
    <>
      <section className='px-0 min-w-[15rem]'>
        <div>
          <b className={`${prata.className} font-semibold`}>Property Types</b>

          <ul className='my-4'>
            <li className='mb-2'>
              <Link className='text-gray-600' href={"#"}><i className='bx bx-chevron-right'></i> Fully Detached Duplex</Link> <span className='font-light text-gray-500'>({ totalListings })</span>
            </li>
            <li className='mb-2'>
              <Link className='text-gray-600' href={"#"}><i className='bx bx-chevron-right'></i> Semi-Detached Duplex</Link> <span className='font-light text-gray-500'>(9)</span>
            </li>
            <li className='mb-2'>
              <Link className='text-gray-600' href={"#"}><i className='bx bx-chevron-right'></i> Apartment</Link> <span className='font-light text-gray-500'>(6)</span>
            </li>
            <li className='mb-2'>
              <Link className='text-gray-600' href={"#"}><i className='bx bx-chevron-right'></i> Terraced Duplex</Link> <span className='font-light text-gray-500'>(6)</span>
            </li>
            <li className='mb-2'>
              <Link className='text-gray-600' href={"#"}><i className='bx bx-chevron-right'></i> Land</Link> <span className='font-light text-gray-500'>(6)</span>
            </li>
            <li className='mb-2'>
              <Link className='text-gray-600' href={"#"}><i className='bx bx-chevron-right'></i> Maisonette</Link> <span className='font-light text-gray-500'>(6)</span>
            </li>
            <li className='mb-2'>
              <Link className='text-gray-600' href={"#"}><i className='bx bx-chevron-right'></i> Penthouse</Link> <span className='font-light text-gray-500'>(6)</span>
            </li>
          </ul>
        </div>

        <div className='mt-10'>
          <b className={`${prata.className} font-semibold`}>Featured</b>

          <div>
            <div className="relative flex-1 rounded-md h-full location-wrapper">
              <Image
                src={nigeria}
                alt="Image 1"
                className="location h-56 w-64"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              {featured.tags && (
                <p className='top-4 left-4 text-xs absolute uppercase flex gap-2 items-center'>
                  {featured.tags.map((tag, index) => ( 
                    <span className='rounded-sm px-2 py-1 text-center w-fit bg-purple-800 text-white' key={index}>{tag}</span>
                  ))}
                </p>
              )}
              <div className='flex flex-col absolute leading-none bottom-3 left-3'>
                <p
                  className='font-semibold rounded-sm text-center  text-base w-fit text-white px-2'
                >{featured.price}</p>
                <p
                  className='rounded-sm font-light text-center italic text-[12px] w-fit text-white px-2'
                >{featured.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Types