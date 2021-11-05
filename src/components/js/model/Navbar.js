import React from 'react';
import {
    useLocation,
    Link
} from 'react-router-dom'

const Navbar = () => {
    let location = useLocation()
    return (
        <nav className="bg-white px-8 pt-2 shadow-md">
             <div className="-mb-px flex justify-center">
                 <Link className={`hover:text-indigo-500 transition duration-500 ease-in-out no-underline text-${location.pathname === '/' ? "indigo" :"gray"}-500 border-b-2 border-${location.pathname === '/'? "teal-900" : "transparent" } uppercase tracking-wide font-bold text-xs py-3 mr-8`} to="/">
                     Home
                 </Link>
                 <Link className={`no-underline transition duration-500 ease-in-out hover:text-indigo-500 text-${location.pathname === '/products' ? "indigo" :"gray"}-500 border-b-2 border-${location.pathname === '/products'? "teal-900" : "transparent" } uppercase tracking-wide font-bold text-xs py-3 mr-8`} to="/products">
                    Products
                 </Link>
                 <Link className={`no-underline hover:text-indigo-500 transition duration-500 ease-in-out text-${location.pathname === '/about' ? "indigo" :"gray"}-500 border-b-2 border-${location.pathname === '/about'? "teal-900" : "transparent" } uppercase tracking-wide font-bold text-xs py-3 mr-8`} to="/about">
                     About
                 </Link>
                 <Link className={`no-underline hover:text-indigo-500 transition duration-500 ease-in-out text-${location.pathname === '/contact' ? "indigo" :"gray"}-500 border-b-2 border-${location.pathname === '/contact'? "teal-900" : "transparent" } uppercase tracking-wide font-bold text-xs py-3`} to="/contact">
                     Contact
                 </Link>
             </div>
        </nav>
    )
}

export default Navbar
