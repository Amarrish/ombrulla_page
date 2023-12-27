import React from 'react'
import job from '../Assets/jobprofiler.jpg'
import comp from '../Assets/comp.jpg'
const Cards = () => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
        <div class="max-w-sm xl:py-6 m-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <h1>PRODUCTS</h1>
    <a href="#">
        <h5 class="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Our HR Tools</h5>
    </a>
    <p class="mb-3 mt-8 font-normal text-gray-500 dark:text-gray-400">Our job grading and evaluation tool, combined with the compensation management tool, is a highly effective SaaS-based solution. It greatly assists HR consultants and managers in carrying out their roles with efficiency and precision.</p>
</div>

<div class="max-w-sm p-6 m-2 xl:py-6 mt-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Job Grading and Evaluation</h5>
    </a>
    <p class="mb-3 mt-4 font-normal text-gray-500 dark:text-gray-400">Job evaluation assesses and ranks job roles in an organization based on responsibilities and skills, often for compensation and structuring purposes.</p>
    <img className='mt-4' src={job} alt="" />
    <a href="#" class="inline-flex items-center mt-8 text-blue-600 hover:underline">
        Free trial
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>


<div class="max-w-sm p-6 m-2 xl:py-6 mt-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Compensation Management</h5>
    </a>
    <p class="mb-3 mt-8 font-normal text-gray-500 dark:text-gray-400">Compensation management software automates salary planning, budget management, and equity analysis, ensuring fair and competitive pay practices.</p>
    <img className='mt-4' src={comp} alt="" />
    <a href="#" class="inline-flex items-center mt-8 text-blue-600 hover:underline">
        Free trial
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>
    </div>
  )
}

export default Cards