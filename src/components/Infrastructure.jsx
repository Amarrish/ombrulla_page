import React from 'react'
import construction from '../Assets/Construction.jpg'
const Infrastructure = () => {
  return (
    <div className="home container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row h-auto p-5 mt-8">

<div className="homecontent text-center lg:text-left lg:w-1/2 md:w-1/2 sm:px-12 lg:pr-10 my-auto">
<p className="text-base sm:text-lg lg:text-2xl text-gray-700 mb-4">The Best AI Service Provider</p>
  <p className="text-3xl lg:text-3xl xl:text-5xl sm:text-5xl font-bold leading-tight mb-4 lg:mb-6">
  Enhances Efficiency, Safety, and Cost-Effectiveness
  </p>
  <ul className='list-disc list-inside pl-6 text-gray-600 leading-loose mb-6 lg:mb-8'>
    <li>
    • Cutting-Edge Solution: Ombrulla leverages AI, drones, and IoT technologies to transform infrastructure inspection.
    </li>
    <li>• Real-Time Insights: Real-time insights enhance inspection efficiency, safety, and reduce conventional challenges.</li>
    <li>• Longevity and Cost-Effectiveness: Ombrulla ensures the longevity and safety of critical infrastructure while offering a cost-effective solution.</li>
    <li>• Responsive Maintenance: Enhances infrastructure management, increasing reliability and responsiveness, and reducing risks.</li>
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

export default Infrastructure