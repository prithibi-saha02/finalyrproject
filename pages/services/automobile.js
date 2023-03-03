/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import storestable from "../../models/storestable"
import mongoose from "mongoose";

const automobile = ({stores}) => {
  return (
    <div>
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
    {stores.map((Store)=> {
            return <Link parsehref={true} key={Store._id} href={"/store/${Store.slug}"}>
      <div className="p-4 cursor-pointer shadow-lg m-5 w-fit">
          <img alt="ecommerce" className="m=auto h-[36vh] md:h-[25vh] block" src={Store.img}/>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{Store.Store_Id}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{Store.Store_Name}</h2>
          <h4 className="text-gray-900 title-font text-md font-medium">{Store.Store_Lis}</h4>
          <p className="mt-1">{Store.Store_Details}</p>
          <p className="mt-1">{Store.Store_Add}</p>
          <p className="mt-1 text-gray-800 text-sm">{Store.Type}</p>
          <p className="mt-1 text-gray-800 text-sm">{Store.Contact}</p>
        </div>
      </div>
    </Link>
    })}
    </div>
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)
}

  let stores = await storestable.find()
  console.log(stores)
  return {
    props: {stores:JSON.parse(JSON.stringify(stores))},
    }
  }

export default automobile