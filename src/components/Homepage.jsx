import React from 'react'
import gif from '../Assets/giphy.gif'
import './Homepage.css'
const Homepage = () => {
  return (
    <>
<div className="home container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row h-auto p-5 mt-8">

<div className="homecontent text-center lg:text-left lg:w-1/2 md:w-1/2 sm:px-12 lg:pr-10 my-auto">
<h1 className=''>What Customers Say About Us</h1>
  <p className="text-3xl lg:text-5xl xl:text-6xl sm:text-5xl font-bold leading-tight mb-4 lg:mb-6">
    Manual <br /> Inspection is <br /> <span className="text-blue-500">Slow & Error- <br />Prone</span>
  </p>
  <p className="text-gray-600 leading-loose mb-6 lg:mb-8">
    AI visual inspection, powered by computer vision, revolutionizes the inspection process in manufacturing, enhancing precision and cost-effectiveness, all the while maintaining product excellence.
  </p>
  <div className="btns flex items-center">
    <button className="bg-blue-700  text-white py-3 px-4 rounded-full mr-2 mb-2 sm:mb-0">Schedule Call</button>
    <button className="bg-blue-700  text-white py-2 px-4 rounded-full"><i class="fa-solid fa-play hover:text-blue-700 text-white"></i></button>
    <p className='py-2 px-4 text:hover'>Watch video</p>
  </div>
</div>

<div className="homepage lg:w-1/2 md:w-1/2 sm:px-12 flex-1">
  <img className="w-full max-w-full sm:w-full md:w-full lg:max-w-full xl:max-w-full" src={gif} alt="No_image" />
</div>

</div>
    </>
  )
}

export default Homepage