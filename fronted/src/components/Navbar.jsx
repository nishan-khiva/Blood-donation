import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-[#7f0210] text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                
                {/* Logo Title (Optional placeholder, you can remove it) */}
                <h2 className="text-lg font-semibold md:hidden">Menu</h2>

                {/* Desktop Menu */}
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

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#7f0210] text-white">
                    <ul className="flex flex-col space-y-3 py-4 text-center font-medium">
                        <li><a href="#home" className="block py-2 hover:bg-[#a30618]">Home</a></li>
                        <li><a href="#about" className="block py-2 hover:bg-[#a30618]">About</a></li>
                        <li><a href="#donate" className="block py-2 hover:bg-[#a30618]">Donate</a></li>
                        <li><a href="#events" className="block py-2 hover:bg-[#a30618]">Events</a></li>
                        <li><a href="#contact" className="block py-2 hover:bg-[#a30618]">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
