import React from 'react'

const Watchvideo = () => {
  return (
    <>
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row h-auto p-5 mt-12 rounded items-center justify-center">
    <div className="videoinfo mx-auto px-8 sm:px-6 xl:px-48 lg:px-12 py-5  m-20 items-center justify-center border rounded" >
        <p className="text-base sm:text-lg lg:text-2xl text-gray-700 mb-4">The Best AI Service Provider</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mt-2 mb-4 sm:mb-0">
            Crafting Tomorrow's World with AI Excellence
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4">
            The majority of customers lack data-driven insights and automation. Using AI, Ombrulla assist clients in extracting data from diverse sources such as photos, videos, and data lakes, which can assist businesses in making data-driven insights and improving their bottom line.
        </p>
        <div className="btns flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 mr-2 px-4 rounded-full">
            <i class="fa-solid fa-play hover:text-blue-700 text-white"></i>
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold  py-2 px-4 rounded">
               watch
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Watchvideo