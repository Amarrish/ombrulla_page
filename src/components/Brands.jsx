import React from 'react'
import brand1 from '../Assets/brand1.jpg'
import brand2 from '../Assets/brand2.jpg'
import brand3 from '../Assets/brand3.jpg'
import brand4 from '../Assets/brand4.jpg'
import brand5 from '../Assets/brand5.jpg'
import brand6 from '../Assets/brand6.jpg'
import './Brands.css'
const Brands = () => {
  return (

 <div className="xl:px-44 maindiv mt-16">
  <p className="text-center">BRANDS WE WORK WITH</p>
  <h1 className="text-center text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 lg:mb-6">Trusted by Thousands of Businesses</h1>

  <div className='flex flex-wrap justify-center sm:justify-between items-center subdiv'>
   
    <div className="max-w-sm p-10 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full rounded-t-lg" src={brand1} alt="" />
    </div>

    <div className="max-w-sm p-10 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full rounded-t-lg" src={brand2} alt="" />
    </div>

    <div className="max-w-sm p-14 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full rounded-t-lg" src={brand3} alt="" />
    </div>

    <div className="max-w-sm p-14 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full rounded-t-lg" src={brand4} alt="" />
    </div>

    <div className="max-w-sm p-10 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full rounded-t-lg" src={brand5} alt="" />
    </div>

    <div className="max-w-sm p-6 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="w-full rounded-t-lg" src={brand6} alt="" />
    </div>

  </div>

  <p className="text-center mt-6">BLOG UPDATES</p>
  <h1 className="text-center text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 lg:mb-6">To Read</h1>
</div>
  )
}

export default Brands