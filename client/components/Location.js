import React from 'react'

const Location = ({ activeRoute }) => {
  const homeStyles = 'z-50 flex flex-wrap justify-center absolute left-0 bottom-0 w-full mx-auto';
  const buyStyles = 'z-50 flex flex-wrap justify-center absolute left-0 bottom- w-full mx-auto';

  const containerStyles = activeRoute === '/' ? homeStyles : buyStyles;

  return (
    <>
      <div className='!z-50 flex flex-wrap justify-center absolute left-0 isolate -bottom-10 w-full mx-auto'>
        {/* First box */}
        <div className='border shadow-md text-sm p-3 bg-white rounded-tl-md rounded-bl-md'>
          <p className='pb-3'>Location</p>
          <select className='bg-white w-52'>
            <option> All Locations</option>
          </select>
        </div>
        <div className='border shadow-md text-sm p-3 bg-white'>
          <p className='pb-3'>Property Status</p>
          <select className='bg-white w-60'>
            <option> Any</option>
          </select>
        </div>
        <div className='border shadow-md text-sm p-3 bg-white'>
          <p className='pb-3'>Property Type</p>
          <select className='bg-white w-60'>
            <option> All Types</option>
          </select>
        </div>

        <button style={{ background: "#422A6F" }} className='shadow-md flex items-center justify-center p-3 text-white w-48 rounded-tr-md rounded-br-md'>
          <i className='bx bx-search text-2xl'></i> <span>Search</span>
        </button>
      </div>
    </>
  )
}

export default Location