import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    return (
        <nav className="bg-[#7f0210] text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* Logo Title (Optional placeholder, you can remove it) */}
                <h2 className="text-lg font-semibold md:hidden">Menu</h2>

                {/* Desktop Menu */}
                <ul className="hidden md:flex font-medium">
                    <li className="flex items-center">
                        <Link to="/home" className="px-4 hover:text-gray-200 transition-colors duration-200">Home</Link>
                        <span className="h-5 w-[1px] bg-white opacity-50"></span>
                    </li>
                    <li className="flex items-center">
                        <Link to="/about"  className="px-4 hover:text-gray-200 transition-colors duration-200">About</Link>
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
                        <li><Link to="/home" onClick={handleClose} className="block py-2 hover:bg-[#a30618]">Home</Link></li>
                        <li><Link to="/about" onClick={handleClose} className="block py-2 hover:bg-[#a30618]">About</Link></li>
                        <li><Link to="/donate" onClick={handleClose} className="block py-2 hover:bg-[#a30618]">Donate</Link></li>
                        <li><Link to="#" onClick={handleClose} className="block py-2 hover:bg-[#a30618]">Events</Link></li>
                        <li><Link to="#contact" onClick={handleClose} className="block py-2 hover:bg-[#a30618]">Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
