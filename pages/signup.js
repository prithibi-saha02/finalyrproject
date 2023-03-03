/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const signup = () => {

    const [Name, setname] = useState()
    const [Ph_No, setph_No] = useState()
    const [E_mail, setemail] = useState()
    const [Address, setaddress] = useState()
    const [Postal, setpostal] = useState()
    const [password, setPassword] = useState()

    const handleChange = (e) => {
        if (e.target.name == 'Name') {
            setname(e.target.value)
        }
        else if (e.target.name == 'Ph_No') {
            setph_No(e.target.value)
        }
        else if (e.target.name == 'E_mail') {
            setemail(e.target.value)
        }
        else if (e.target.name == 'Address') {
            setaddress(e.target.value)
        }
        else if (e.target.name == 'Postal') {
            setpostal(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { Name: Name, E_mail: E_mail, Ph_No: Ph_No, Address: Address, Postal: Postal, password: password }

        let res = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        let response = await res.json()
        console.log(response)
        setname('')
        setph_No('')
        setemail('')
        setaddress('')
        setpostal('')
        setPassword('')

        toast.success('Your account has been created !', {
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
    return (
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
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <form onSubmit={handleSubmit} className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2 py-6 ">
                    <div className=" px-6 py-8 rounded shadow-md text-black w-full bg-slate-200">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <div>
                            <input value={Name} onChange={handleChange} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" id='Name' name="Name" placeholder=" Name" />
                        </div>
                        <div>
                            <input value={Ph_No} onChange={handleChange} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" id="Ph_No" name="Ph_No" placeholder="Mobile No." />
                        </div>
                        <div>

                            <input value={E_mail} onChange={handleChange} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" id="E_mail" name="E_mail" placeholder="Email" />
                        </div>
                        <div>

                            <input value={Address} onChange={handleChange} type="text" className="block border border-grey-light w-full p-3 rounded mb-4" id="Address" name="Address" placeholder="Address" />
                        </div>
                        <div>
                            <input value={Postal} onChange={handleChange} type="number" className="block border border-grey-light w-full p-3 rounded mb-4" id="Postal" name="Postal" placeholder="Postal Code" />
                        </div>
                        <div>

                            <input value={password} onChange={handleChange} type="password" className="block border border-grey-light w-full p-3 rounded mb-4" id="password" name="password" placeholder="Password" required />
                        </div>
                        <button onChange={handleSubmit} type="submit" className="px-11 align-middle text-center py-3 rounded bg-green-500 text-white hover:bg-slate-500 focus:outline-none my-1">Create Account</button>
                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" href={"#"}>Terms of Service </Link> &
                            <Link className="no-underline border-b border-grey-dark text-grey-dark" href={"#"}> Privacy Policy </Link>
                        </div>
                    </div>
                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link className="no-underline border-b border-blue text-blue-700" href={"/login"}>
                            Log in
                        </Link>.
                    </div>
                </form>
            </div>
        </div>
    )
}

export default signup