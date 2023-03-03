/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import { useState } from "react"
import mongoose from "mongoose"
import storestable from "../../models/storestable"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const POST = ({store}) => {
  const router = useRouter()
  const { slug } = router.query
  const [pin, setPin] = useState()
  const [service, setService] = useState()
  async function checkServiceablity() {
    let pins = await fetch('http://localhost:3000/api/pincodecheck')
    let pinJson = await pins.json()
    if (pinJson.includes(parseInt(pin))) {
      setService(true)
      toast.success('Pincode Servicable', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else {
      setService(false)
      toast.error('Pincode Not Servicable! In service soon...!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }
  const onChangepin = (e) => {
    setPin(e.target.value)
  }

  return <>
    <section className="text-gray-600 body-font overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{storestable.Store_Id}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{storestable.Store_Name}</h1>
            <div className="flex mb-4">
              <span className="flex-grow text-black border-b-2 border-slate-700 py-2 text-lg px-1">Description</span>
            </div>
            <p className="leading-relaxed mb-4">{storestable.Store_Details}</p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">License ID:</span>
              <span className="ml-auto text-gray-900">{storestable.Lic}</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Address</span>
              <span className="ml-auto text-gray-900">Medium</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Type</span>
              <span className="ml-auto text-gray-900">{storestable.Type}</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Contact</span>
              <span className="ml-auto text-gray-900">{storestable.Contact}</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">80</span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Request service</button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className=" pin flex mt-6 space-x-2 text-sm">
              <input onChange={onChangepin} type="text" className=" px-2 bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out mr-4" placeholder="Enter your area pincode" />
              <button onClick={checkServiceablity} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Check Availablity</button>
            </div>
            {(!service && service != null) &&
              <div className="text-red-700 text-sm mt-3">
                Sorry! This service is not present in this area, work in progress will join very soon.
              </div>}
            {(service && service != null) &&
              <div className="text-green-800 text-sm mt-3">
                Yup! This service is Available in your area
              </div>}
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://www.onedios.com/blog/wp-content/uploads/2021/04/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg" />
        </div>
      </div>
    </section>
  </>
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)
  }
  let store = await storestable.findOne({ slug: context.query.slug })
  return {
    props: { store: JSON.parse(JSON.stringify(store)) },
  }
}

export default POST