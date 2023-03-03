import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
      <footer className="text-[#f8fafc] body-font bg-[#1c1917]">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-[#f8fafc]">
             <Image width={50} height={70} src='/logolatest.png' alt='logo2' className="rounded-lg"/>
              <span className="ml-3 text-xl">E-Service.in</span>
            </a>
            <p className="mt-2 text-sm text-gray-200">Get Services near by you</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#f8fafc] tracking-widest text-sm mb-3">LOCATION</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#f8fafc] ">East Delhi</a>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">West Delhi</a>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">Gurugram</a>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">Noida</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#f8fafc] tracking-widest text-sm mb-3">KNOW MORE</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={"/about"} className="text-[#f8fafc] ">About Us</Link>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">Careers</a>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">Investments</a>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">Services</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#f8fafc] tracking-widest text-sm mb-3">SUPPORT</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#f8fafc] ">Feedback</a>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">Contact Us</a>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">Blog</a>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">Join with Us</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#f8fafc] tracking-widest text-sm mb-3">LEGAL AUTHENTIC</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#f8fafc] ">Terms & Conditions</a>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">Privacy Policies</a>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">Agreement</a>
                </li>
                <li>
                  <a className="text-[#f8fafc] ">Partner Welfare Policies</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[#27272a]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-[#ffffff]">© 2022 E-service co. ltd. —
              <a href="/" rel="noopener noreferrer" className="text-[#f8fafc] ml-1" target="_blank">All rights Reserved</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer