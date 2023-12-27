import React from 'react'
import user from '../Assets/user.png'
import chain from '../Assets/chain1.jpg'
import google from '../Assets/google.png'
import impact from '../Assets/impact.jpg'
import ai from '../Assets/Ai.jpg'
const Cardinfo = () => {
  return (
    <div className='flex flex-wrap items-center justify-evenly mt-5'>
        <div class="max-w-sm bg-white border mt-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={chain} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Use of AI in Process Optimization and Quality Control</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">AI Visual Inspection is increasingly being used in process optimization and quality control across a range of industries, including manufacturing, healthcare, and logistics.</p>
        
       <div className='flex items-center'>
        <div><img src={user} alt="" className='w-10 h-10' /></div>
        <div><p>Zara Elizabeth</p> <p>November 21, 2023 .3 min read</p></div>
       </div>
    </div>
</div>

<div class="max-w-sm bg-white border mt-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={google} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Google I/O 2023: A Deeper Look at the Future of AI</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Google I/O 2023 envisions a future where helpful AI integrates seamlessly into our lives, breaking down barriers, empowering individuals, and tackling global challenges. By developing AI responsibly, we can shape a future where everyone benefits.</p>
        
       <div className='flex items-center'>
        <div><img src={user} alt="" className='w-10 h-10' /></div>
        <div><p>Zara Elizabeth</p> <p>November 21, 2023 .3 min read</p></div>
       </div>
    </div>
</div>

<div class="max-w-sm bg-white border mt-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={impact} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">A Deep Understanding of AI Visual Inspection</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The primary objective of this blog is to offer a foundational comprehension of automated visual evaluation and elucidate how AI Visual Inspection techniques contributes to significant time and effort savings.</p>
        
       <div className='flex items-center'>
        <div><img src={user} alt="" className='w-10 h-10' /></div>
        <div><p>Zara Elizabeth</p> <p>November 21, 2023 .3 min read</p></div>
       </div>
    </div>
</div>

<div class="max-w-sm bg-white border mt-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={ai} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Use of AI in Process Optimization and Quality Control</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">AI Visual Inspection is increasingly being used in process optimization and quality control across a range of industries, including manufacturing, healthcare, and logistics.</p>
        
       <div className='flex items-center'>
        <div><img src={user} alt="" className='w-10 h-10' /></div>
        <div><p>Zara Elizabeth</p> <p>November 21, 2023 .3 min read</p></div>
       </div>
    </div>
</div>
    </div>
  )
}

export default Cardinfo