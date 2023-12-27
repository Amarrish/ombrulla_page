import React from 'react'
import construction from '../Assets/analyticst.png';

const Analytics = () => {
  return (
    <div className="home container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row h-auto p-5 mt-8">

    <div className="homecontent text-center lg:text-left lg:w-1/2 md:w-1/2 sm:px-12 lg:pr-10 my-auto">
    <p className="text-base sm:text-lg lg:text-2xl text-gray-700 mb-4">AI DATA ANALYTICS</p>
      <p className="text-3xl lg:text-3xl xl:text-5xl sm:text-5xl font-bold leading-tight mb-4 lg:mb-6">
      Empowers Businesses to Make Insightful Decisions
      </p>
      <ul className='list-disc list-inside pl-6 text-gray-600 leading-loose mb-6 lg:mb-8'>
        <li>
        • Actionable Insights: AI data analysis enhances decisions, personalizes customer experiences and improve operations.
        </li>
        <li>• Increased Customer Loyalty: AI predictive analytics for personalized recommendations & increased customer loyalty.</li>
        <li>• Quality Assurance: AI analytics identifies and mitigates potential issues, ensuring the quality and reliability of products and services.</li>
        <li>• Efficiency and Responsiveness: Customers benefit from increased efficiency, improved product quality, and more responsive interactions with businesses.</li>
    </ul>
    
     
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

export default Analytics