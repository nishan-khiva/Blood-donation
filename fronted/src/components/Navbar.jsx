import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-[#7f0210] text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <ul className="hidden md:flex font-medium">
                    <li className="flex items-center">
                        <a href="#home" className="px-4 hover:text-gray-200 transition-colors duration-200">Home</a>
                        <span className="h-5 w-[1px] bg-white opacity-50"></span>
                    </li>
                    <li className="flex items-center">
                        <a href="#about" className="px-4 hover:text-gray-200 transition-colors duration-200">About</a>
                        <span className="h-5 w-[1px] bg-white opacity-50"></span>
                    </li>
                    <li className="flex items-center">
                        <a href="#donate" className="px-4 hover:text-gray-200 transition-colors duration-200">Donate</a>
                        <span className="h-5 w-[1px] bg-white opacity-50"></span>
                    </li>
                    <li className="flex items-center">
                        <a href="#events" className="px-4 hover:text-gray-200 transition-colors duration-200">Events</a>
                        <span className="h-5 w-[1px] bg-white opacity-50"></span>
                    </li>
                    <li className="flex items-center">
                        <a href="#contact" className="px-4 hover:text-gray-200 transition-colors duration-200">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar