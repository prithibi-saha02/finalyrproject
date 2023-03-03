import Link from 'next/link'
import React from 'react'

const Content = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-10 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p className="leading-relaxed">Users</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.2K</h2>
        <p className="leading-relaxed">Vendors</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">10+</h2>
        <p className="leading-relaxed">Services</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">50+</h2>
        <p className="leading-relaxed">Locations</p>
        <p className="leading-relaxed">All over Delhi NCR</p>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font bg-slate-200">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Click here to know the procedure of the services</h2>
    <div className="md:w-3/5 md:pl-6">
      <p className="leading-relaxed text-base text-[#27272a]">This is what you Get</p>
      <div className="flex md:mt-4 mt-6"> 
      <Link href={"/knowmore"}>
       <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">Know More</button>
        <span className="text-indigo-500 inline-flex items-center ml-4">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </span>
      </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Content