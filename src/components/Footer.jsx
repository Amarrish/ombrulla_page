import React from 'react'

const Footer = () => {
  return (
    
        <footer class="bg-gray-900 items-center text-white">
    <div class="mx-auto w-full  max-w-screen-xl w-screen h-auto p-10">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white-900 xl:text-3xl sm:text:3xl uppercase dark:text-white">About Us</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium mt-4">
                <li class="mb-4">
                    <p class="">Ombrulla is an AI-driven company specializing in extracting insights from diverse data sources, including photos, videos, and data lakes. Our tailored solutions help businesses make data-driven decisions and improve their bottom line through automation and AI-powered analysis.</p>
                </li>
                <li class="mb-4">
                    <div class="">
                    <i class="fa-brands fa-facebook p-2 m-2"></i>
                    <i class="fa-brands fa-instagram p-2 m-2"></i>
                    <i class="fa-brands fa-github p-2 m-2"></i>
                    <i class="fa-brands fa-linkedin-in p-2 m-2"></i>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white-900 xl:text-3xl sm:text:3xl uppercase dark:text-white">Our Services</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <p class="hover:underline">AI Infrastructure Inspection</p>
                </li>
                <li class="mb-4">
                    <p class="hover:underline">AI Visual Inspection</p>
                </li>
                <li class="mb-4">
                    <p class="hover:underline">AI Data Analytics</p>
                </li>
                <li class="mb-4">
                    <p class="hover:underline">AI People Tracking</p>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white-900 xl:text-3xl sm:text:3xl uppercase dark:text-white">Our Solutions</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <p class="hover:underline">Asset Performance Management</p>
                </li>
                <li class="mb-4">
                    <p class="hover:underline">Job Grading & Evaluation</p>
                </li>
                <li class="mb-4">
                    <p class="hover:underline">Compensation Management</p>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white-900 xl:text-3xl sm:text:3xl uppercase dark:text-white">Reach Us</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <p class="hover:underline">United Kingdom, 53 Denton close Redhill, Surrey, RH1 5LB +44 787 999 3892</p>
                </li>
                <li class="mb-4">
                    <p class="hover:underline">Germany, Schützenstraße 51ALübeck, 23558 +49 179 512 5812</p>
                </li>
                <li class="mb-4">
                  <p class="hover:underline">India, No. 154/20, Royal SpaceThird Floor TI, HSR Layout, Bangalore, Karnataka 560102 +91 85900 56435</p>
                </li>
            </ul>
        </div>
    </div>
 
    </div>
    <p>© 2020 ombrulla, INC.ALL rights Reserved</p>
</footer>
 
  )
}

export default Footer