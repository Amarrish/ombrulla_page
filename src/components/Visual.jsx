import React from 'react'
import construction from '../Assets/visual.jpg'

const Visual = () => {
  return (
    <div className="home container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row h-auto p-5 mt-8">

<div className="homepage lg:w-1/2 md:w-1/2 sm:px-12 flex-1">
      <img className="w-full max-w-full sm:w-full md:w-full lg:max-w-full xl:max-w-full rounded" src={construction}  alt="No_image" />
    </div>

    <div className="homecontent text-center lg:text-left lg:w-1/2 md:w-1/2 sm:px-12 lg:pr-10 my-auto">
    <p className="text-base sm:text-lg lg:text-2xl text-gray-700 mb-4">AI VISUAL INSPECTION</p>
      <p className="text-3xl lg:text-3xl xl:text-5xl sm:text-5xl font-bold leading-tight mb-4 lg:mb-6">
      Improving Quality with Greater Precision
      </p>
      <ul className='list-disc list-inside pl-6 text-gray-600 leading-loose mb-6 lg:mb-8'>
        <li>
        • AI Defect Detection: Utilizes computer vision and machine learning to identify and recognise defects during visual inspections autonomously.
        </li>
        <li>• Eagle-Eyed Vision: AI algorithms can identify even the most subtle defects, including microscopic cracks, colour variations, and misalignments.</li>
        <li>• Informed Decision-Making: Valuable data is extracted from images and videos, empowering users to make informed, data-driven decisions.</li>
        <li>• Real-Time Insights: AI defect detection provides immediate feedback, enabling proactive interventions and adjustments to production processes.</li>
    </ul>
    
     
      <div className="btns flex items-center">
        <button className="bg-blue-700 text-white py-2 px-4 rounded-full mr-2 mb-2 sm:mb-0">Schedule Call</button>
        <p className='py-2 px-4'>Read More</p>
      </div>
    </div>
    
    </div>
  )
}

export default Visual