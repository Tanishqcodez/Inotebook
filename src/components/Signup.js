import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext'
import Loading from './Loading';

export default function Signup() {
    let navigate = useNavigate();
    const context = useContext(NoteContext)
    const { setshowAlert,setAlertMessage, spinner,setspinner } = context


    const [cred, setCred] = useState({ name: '', email: '', password: '' })
    const handleSumbit = async (e) => {
        setspinner({
            loading: true,
            loader: 'BeatLoader'   
    })
        e.preventDefault()
        const response = await fetch("https://inotebook-eyy0.onrender.com/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password })
        })
        const json = await response.json()
        setspinner({
            loading: false,
            loader: 'BeatLoader'   
        })
        console.log(json);
        if (json.success === true) {
            // save the auth token
            localStorage.setItem('token', json.authToken)
            navigate("/");
            setAlertMessage({message: 'Account Created Successfully!', color: false}) 
            setshowAlert(true)
        } else {
            setAlertMessage({message: 'Not valid Email!' ,color: true})
            setshowAlert(true)
        }
    }

    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }
    return (
        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                    Inotebook
                </p>
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSumbit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                <input type="text" name="name" id="name" placeholder="John doe  " className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required onChange={onChange} value={cred.name} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required onChange={onChange} value={cred.email} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required onChange={onChange} value={cred.password} />
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-400" disabled={cred.name.length<3 || cred.password.length<5}>{spinner.loading ? <Loading/> : 'Create an account'}</button>

                            <p className="text-sm font-light text-gray-500 ">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline ">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
