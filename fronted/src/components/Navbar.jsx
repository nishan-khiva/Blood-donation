import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const closeAll = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    return (
        <nav className="bg-[#7f0210] text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

                <h2 className="text-lg font-semibold md:hidden">Menu</h2>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center font-medium">

                    {/* Home */}
                    <li className="flex items-center">
                        <Link to="/home" className="px-4 hover:text-gray-200">Home</Link>
                        <span className="h-5 w-[1px] bg-white opacity-50"></span>
                    </li>

                    {/* About */}
                    <li className="flex items-center">
                        <Link to="/about" className="px-4 hover:text-gray-200">About</Link>
                        <span className="h-5 w-[1px] bg-white opacity-50"></span>
                    </li>

                    {/* Donate */}
                    <li className="flex items-center">
                        <Link to="/donate" className="px-4 hover:text-gray-200">Donate</Link>
                        <span className="h-5 w-[1px] bg-white opacity-50"></span>
                    </li>

                    {/* Events */}
                    <li className="flex items-center">
                        <Link to="/event" className="px-4 hover:text-gray-200">Events</Link>
                        <span className="h-5 w-[1px] bg-white opacity-50"></span>
                    </li>

                    {/* Dropdown - Request */}
                    <li ref={dropdownRef} className="relative flex items-center px-4 cursor-pointer">

                        <span
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="hover:text-gray-200"
                        >
                            Request ▾
                        </span>

                        {/* Dropdown Box */}
                        {dropdownOpen && (
                            <ul className="absolute left-0 mt-[18vh] bg-white text-black shadow-md rounded-md w-44 z-50">
                                <li>
                                    <Link
                                        to="/track"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={closeAll}
                                    >
                                        Track Request
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/request"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={closeAll}
                                    >
                                        Apply
                                    </Link>
                                </li>
                            </ul>
                        )}

                        <span className="h-5 w-[1px] bg-white opacity-50"></span>
                    </li>

                    {/* Contact */}
                    <li className="flex items-center">
                        <Link to="/contact" className="px-4 hover:text-gray-200">Contact</Link>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#7f0210] text-white">
                    <ul className="flex flex-col space-y-3 py-4 text-center font-medium">

                        <li><Link to="/home" onClick={closeAll} className="block py-2 hover:bg-[#a30618]">Home</Link></li>
                        <li><Link to="/about" onClick={closeAll} className="block py-2 hover:bg-[#a30618]">About</Link></li>
                        <li><Link to="/donate" onClick={closeAll} className="block py-2 hover:bg-[#a30618]">Donate</Link></li>
                        <li><Link to="/event" onClick={closeAll} className="block py-2 hover:bg-[#a30618]">Events</Link></li>

                        {/* Mobile Dropdown */}
                        <li>
                            <button
                                className="w-full py-2 hover:bg-[#a30618]"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Request ▾
                            </button>

                            {dropdownOpen && (
                                <ul className="bg-[#a30618]">
                                    <li>
                                        <Link to="/track" onClick={closeAll} className="block py-2 hover:bg-[#b80a1f]">
                                            Track Request
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/request" onClick={closeAll} className="block py-2 hover:bg-[#b80a1f]">
                                            Apply
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li><Link to="/contact" onClick={closeAll} className="block py-2 hover:bg-[#a30618]">Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
