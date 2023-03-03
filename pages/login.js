/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Router } from 'next/router';

const login = () => {
  const [E_mail, setemail] = useState()
  const [password, setPassword] = useState()

  const handleChange = (e) => {
      
       if (e.target.name == 'E_mail') {
          setemail(e.target.value)
      }
      else if (e.target.name == 'password') {
          setPassword(e.target.value)
      }
  }
  const handleSubmit = async (e) => {
      e.preventDefault()
      const data = { E_mail, password}

      let res = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
      let response = await res.json()
      console.log(response)
      setemail('')
      setPassword('')
      if (response.success
        ) {  
          toast.success('You are succesfully logged in !', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          Router.push('http://localhost:3000/')
        }
        else{
          toast.error(response.error, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
      }
  }
  return (
    <div>
        <section>
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">Get login and be a part of our team and service providing to you.</h1>
      <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
    </div>
  <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <Link href={"http://localhost:3000/"} className="flex items-center mb-6 text-2xl font-semibold text-b[#9ca3af] dark:text-black">
          <img className="w-8 h-8 mr-2 rounded-md" src="/logolatest.png" alt="logo"/>
          E-service    
      </Link>
      <div className="w-full bg-grey-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-[#2a2d36]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-200 md:text-2xl dark:text-black">
                  Sign in to your account
              </h1>
              <form onChange={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                  <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
                      <label htmlFor="E_mail" className="block mb-2 text-sm font-medium text-black-800] dark:text-white">Register Email id</label>
                      <input onChange={handleChange} type="text" id="E_mail" name="E_mail" autoComplete="E_mail" required className="bg-gray-50 border border-gray-300 text-[#9ca3af] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-[#585864] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Register Email id"/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#9ca3af] dark:text-white">Password</label>
                      <input onChange={handleChange} type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-[#52525a] dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-black dark:text-black">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-green-700">Sign in</button>
                  <p className="text-sm font-dark text-black dark:text-black">
                      Don't have an account yet?<Link href={'/signup'}className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue dark:text-blue-500">Sign up
                      </Link> 
                  </p>
              </form>
          </div>
      </div>
  </div>
  </div>
</section>
    </div>
  )
}

export default login