import { Prata } from 'next/font/google'
import React from 'react'
import site1 from "../../public/images/sites/site1.png";
import Image from 'next/image';
import Link from 'next/link';
const prata = Prata({ subsets: ['latin'], weight: ['400'] });

const Featured = ({ listData }) => {
  return (
    <>
      <section className='px-6 pr-0'>
        <div className="grid grid-cols-2 gap-4">          
          {listData && listData.length > 0 ? (
            listData.map(list => (
              <Link href={`/properties/${list._id}`} key={list._id} className='max-md:mb-2 max-md:block'>
                <div className="rounded-[5px] rounded-b-none overflow-hidden relative flex-1 h-auto location-wrapper">
                  <Image
                    src={site1}
                    alt="Image 1"
                    className="location h-60"
                  />
                  <div className="absolute inset-0 bottom-0 bg-black opacity-10"></div>
                  <p className='top-4 left-4 text-xs absolute uppercase flex gap-2 items-center'>
                    {list.tags.map((tag, index) => ( 
                      <span className='rounded-sm px-2 py-1 text-center w-fit bg-purple-800 text-white' key={index}>{tag}</span>
                    ))}
                  </p>
                </div>
                <div className='p-4 !bg-white home-info rounded-b-[5px]'>
                  <h2 className={`${prata.className} text-xl mb-2`}>{list.propertyName}</h2>
                  <div className='flex items-center justify-between text-gray-600 max-md:block'>
                    <p className='font-semibold'>${list.price}</p>
                    <div className='flex items-center gap-4 max-md:mt-2'>
                      <div className='flex items-center gap-1'><i className='bx bx-bed text-xl'></i><span className='text-sm'>{list.bedrooms}</span></div>
                      <div className='flex items-center gap-1'><i className='bx bx-bath text-xl'></i><span className='text-sm'>{list.bathrooms}</span></div>
                      <div className='flex items-center gap-1'><i className='bx bx-area text-xl'></i><span className='text-sm'>{list.lenght} by {list.width}</span></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className='text-gray-500 text-[14px] w-full text-center'>There are no listings yet...</p>
          )}
        </div>
      </section>
    </>
  )
}

export default Featured