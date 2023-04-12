import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

export default function Navbar() {
    let navigate = useNavigate();
    let location = useLocation()
    useEffect(() => {

    }, [location])
    const handleLogout = ()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <>
            <div>
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <span className="ml-3 text-xl">Inotebook</span>
                        </Link>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <Link to='/' className={`mr-5 hover:text-gray-900  ${location.pathname === "/" ? " underline underline-offset-2" : ""}`}>Home</Link>
                            <Link to='/about' className={`mr-5 hover:text-gray-900  ${location.pathname === "/about" ? " underline underline-offset-2" : ""}`}>About</Link>
                            {!localStorage.getItem('token') ? <>
                                <Link to='/login' className={`mr-5 hover:text-gray-900  ${location.pathname === "/login" ? " underline underline-offset-2" : ""}`}>Login</Link>
                                <Link to='/signup' className={`mr-5 hover:text-gray-900  ${location.pathname === "/signup" ? " underline underline-offset-2" : ""}`}>Sign Up</Link>
                            </> :  <button className=" items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleLogout}>Log out
                            </button> 
                            }
                        </nav>
                    </div>
                </header>
            </div>
            <hr />
        </>
    )
}

