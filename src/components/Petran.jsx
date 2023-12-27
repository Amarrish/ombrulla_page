import React from 'react'
import construction from '../Assets/iot.jpg';

const Petran = () => {
  return (
    <div className="home mx-auto sm:px-6 lg:px-32 lg:py-16 flex flex-col sm:flex-row h-auto  mt-8 bg-blue-800">

    <div className="homecontent text-center lg:text-left lg:w-1/2 md:w-1/2 sm:px-12 lg:pr-10 my-auto">
    <p className="text-base sm:text-lg lg:text-2xl text-white mb-4">Petran
Performance - Tracking - Analytics</p>
      <p className="text-3xl text-white lg:text-3xl xl:text-5xl sm:text-5xl font-bold leading-tight mb-4 lg:mb-6">
      AI & IoT Enabled Asset Performance Management
      </p>
      <p className="text-white leading-loose mb-6 lg:mb-8">
      Petran offers an Asset Performance Management (APM) system that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable proactive maintenance strategies.
  </p>
    
     
      <div className="btns flex items-center">
        <button className="bg-blue-700 text-white py-2 px-4 rounded-full mr-2 mb-2 sm:mb-0">Schedule Call</button>
        <p className='py-2 px-4'>Read More</p>
      </div>
    </div>
    
    <div className="homepage lg:w-1/2 md:w-1/2 sm:px-12 flex-1">
      <img className="w-full max-w-full sm:w-full md:w-full lg:max-w-full xl:max-w-full rounded" src={construction}  alt="No_image" />
    </div>
    
    </div>
  )
}

export default Petran