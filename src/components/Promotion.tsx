import React from 'react'
import Image from "next/image";

const Promotion = () => {
  return (
    <div className='mt-8'>
      <div className="text-center space-y-3">
        <p className="text-blue-800 text-sm font-bold">PROMOTIONS</p>
        <h1 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h1>
      </div>
      <div className='flex flex-col flex-grow gap-4'>
        {/* 60% OFF */}
        <div className='h-40 px-3  flex flex-row justify-between item-center bg-gray-400'>
          <h2 className='block font-semibold text-xl'>GET UP TO <span className='text-3xl'>60%</span></h2>
          <p className='block'>for the summer season</p>
        </div>
        <div className="Img">
          {/* <Image src={} /> */}
        </div>
      </div>
    </div>
  )
}

export default Promotion