/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
const myrequest = () => {
  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">E-Service</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Sr_Id #21992</h1>
        <p className=" leading-relaxed mb-4">Your request has been succesfully registerd please wait while transferring the req to the store vendor. You can check your status by clicking the track status button.</p>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 border-b-2  py-2 text-lg px-1">Description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Color</span>
          <span className="ml-auto text-gray-900">Blue</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Size</span>
          <span className="ml-auto text-gray-900">Medium</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-gray-900">4</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button className="flex ml-auto text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded">Track Status</button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default myrequest
