import Link from 'next/link'
import React from 'react'

const PropertyDetails = ({ listData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <>
      <section className='p-12 flex justify-between gap-12 w-full max-lg:px-6 max-lg:block'>
        <div className='flex flex-col gap-8 w-full'>
          <div>
            <div className='flex justify-between items-center border-b border-gray-400 pb-4 max-lg:block'>
              <p>Details</p>
              <small><i className='bx bx-calendar'></i> <span>Updated on {formatDate(listData.date)}</span></small>
            </div>
            <div className='bg-gray-300 p-4 mt-6 rounded'>
              <div className='flex items-center gap-8 w-full'><span className='w-48'>Property ID: </span> <span className='w-full font-semibold'>{listData.propertyID}</span></div>
              <div className='flex items-center gap-8 w-full'><span className='w-48'>Price: </span> <span className='w-full font-semibold'>${listData.price}</span></div>
              <div className='flex items-center gap-8 w-full'><span className='w-48'>Bedrooms: </span> <span className='w-full font-semibold'>{listData.bedrooms}</span></div>
              <div className='flex items-center gap-8 w-full'><span className='w-48'>Bathrooms: </span> <span className='w-full font-semibold'>{listData.bathrooms}</span></div>
              <div className='flex items-center gap-8 w-full'><span className='w-48'>Property Type: </span> <span className='w-full font-semibold'>{listData.propertyType}</span></div>
              <div className='flex items-center gap-8 w-full'><span className='w-48'>Property Status: </span> <span className='w-full font-semibold'>{listData.status}</span></div>
            </div>
          </div>

          <div className='mt-8'>
            <div className='flex justify-between items-center border-b border-gray-400 pb-4'>
              <p>Features</p>
            </div>
            <ul className='mt-6 flex flex-wrap gap-8 items-start' style={{ rowGap: "0" }}>
              {listData.features.map((feature, index) => ( 
                <li key={index} className='w-[200px] mb-2 text-sm flex items-center gap-2 font-light'>
                  <i className='bx bx-check-circle'></i> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='w-full max-lg:!block' style={{ flex: "0 0 30%" }}>
          <div className='flex items-center gap-2'>
            <div className='w-10 bg-gray-400 h-10 rounded'></div>
            <div>
              <p className='flex items-center gap-1'><i className='bx bx-user'></i> <span>Eloheinu Inc.</span></p>
              <Link href={"#"} className='font-semibold text-sm'>View Listings</Link>
            </div>
          </div>
          <form className='py-2 flex flex-col gap-2'>
            <input type='text' placeholder='Name' className='border outline-none text-sm border-gray-300 p-2 rounded'></input>
            <input type='tel' placeholder='Phone' className='border outline-none text-sm border-gray-300 p-2 rounded'></input>
            <input type='email' placeholder='Email' className='border outline-none text-sm border-gray-300 p-2 rounded'></input>
            <textarea placeholder='Send a message...' className='border outline-none resize-none text-sm border-gray-300 p-2 rounded'></textarea>
            <select className='border bg-white text-gray-600 outline-none resize-none text-sm border-gray-300 p-2 rounded'>
              <option>Select</option>
            </select>
            <div className='flex items-center gap-1'>
              <input type='checkbox' className='outline-none'></input>
              <p className='text-sm'>I agree to the <b>Terms of Use</b></p>
            </div>
            <div className='flex items-center gap-1 w-full'>
              <Link href={"#"} className='w-full text-center bg-[#422A6F] text-white border outline-none text-sm border-gray-300 p-2 rounded'>Send Message</Link>
              <Link href={"#"} className='w-full text-center border outline-none text-sm border-gray-500 p-2 rounded'>Call</Link>
            </div>
            <Link href={"#"} className='w-full text-center border outline-none text-sm border-gray-500 p-2 rounded'>
              <i className='bx bxl-whatsapp' ></i> WhatsApp
            </Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default PropertyDetails