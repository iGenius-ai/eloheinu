import React from 'react'

const PropertyHead = ({ user, listData }) => {
  return (
    <>
      <section className='mx-12 py-24 pb-4 border-b-2 border-gray-300 max-lg:px-6 max-lg:mx-0'>
        <div className='flex items-center gap-2 text-sm text-gray-700'>
          <p>Home</p> <p className='flex items-center gap-2 text-gray-400'><span>&gt;</span>{listData?.propertyName}</p>
        </div>
        <div className='flex items-start justify-between py-4 max-lg:block'>
          <div className='max-lg:mb-4'>
            <p className='uppercase'>{listData?.propertyName}</p>
            <span className='uppercase text-xs text-white bg-gray-500 px-2 py-1'>{listData?.status}</span>
          </div>
          <div className='flex items-start flex-wrap'>
            <div className='mr-4'>
              <p className='font-semibold text-[#422A6F]'>${listData?.price}</p>
              <span className='text-xs text-gray-600'>Price</span>
            </div>
            <div className='text-center'>
              <p className='font-semibold border-l border-r border-gray-600 px-4'>{listData?.bedrooms}</p>
              <span className='text-xs text-black'>Beds</span>
            </div>
            <div className='text-center'>
              <p className='font-semibold border-l border-gray-600 px-4'>{listData?.bathrooms}</p>
              <span className='text-xs text-black'>Baths</span>
            </div>
            <div className='text-center ml-4 flex items-center gap-2 max-lg:ml-0 max-lg:mt-4'>
              <button className='border-2 text-sm border-[#422A6F] bg-[#422A6F] px-4 py-1 rounded-md text-white'>Save</button>
              <button className='border-2 text-sm border-[#422A6F] px-4 py-1 rounded-md'>Share</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PropertyHead