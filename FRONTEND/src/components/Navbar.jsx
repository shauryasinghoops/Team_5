import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white w-full px-6 py-4">
            <div className=" flex items-center justify-between">

                <div className="flex-shrink-0">
                    <Link to="/" className="text-2xl font-bold tracking-tight">
                        LOGO

                    </Link>
                </div>


                <div className="flex items-center gap-10">
                    <Link to="/" className="text-lg font-semibold  hover:opacity-90">
                        Home
                    </Link>
                    <Link to="/about" className="text-lg font-semibold  hover:opacity-90">
                        About
                    </Link>
                    <Link to="/services" className="text-lg font-semibold  hover:opacity-90">
                        Services
                    </Link>
                    <Link to="/contact" className="text-lg font-semibold  hover:opacity-90">
                        Contact
                    </Link>
                    <Link to="/meet-the-team" className="text-lg font-semibold  hover:opacity-90">
                        Git Hub Connect
                    </Link>
                </div>


                <div className="flex items-center gap-8">
                    <Link to="/login" className="text-sm font-medium hover:opacity-90">
                        Login
                    </Link>
                    <Link to="/signup" className="text-sm font-semibold px-5 py-2.5 bg-white text-black rounded-md hover:bg-gray-200">
                        Create Account
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
