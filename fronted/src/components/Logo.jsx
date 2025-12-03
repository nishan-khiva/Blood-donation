import React from 'react'
import logo from '../assets/logo.jpg'
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Logo = () => {
    return (
        <nav className="flex flex-col sm:flex-row justify-between items-center p-3 sm:px-8 bg-white shadow-md">

            {/* Left: Logo + Title */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <img src={logo} alt="Trust Logo" className="h-14 sm:h-16 w-auto mb-2 sm:mb-0 sm:mr-3" />

                <div>
                    <h1 className="text-lg sm:text-xl font-bold text-[#7f0210]">
                        Shaheed Udham Singh Rakt Sewa Trust
                    </h1>
                    <p className="text-[#7f0210] text-xs sm:text-sm">
                        Sitarganj, Udham Singh Nagar, Uttarakhand - 262405
                    </p>
                </div>
            </div>

            {/* Right: Contact + Social */}
            <div className="flex flex-col items-center sm:items-end text-[#7f0210] mt-3 sm:mt-0">

                {/* Social Icons */}
                <div className="flex items-center space-x-4 sm:space-x-5 text-base sm:text-lg mb-2">
                    <a
                        href="https://www.facebook.com/gurbeer.johal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1877F2] hover:opacity-80"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com/susrstrust/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E4405F] hover:opacity-80"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:opacity-80"
                    >
                        <FaWhatsapp />
                    </a>
                </div>

                {/* Email + Phone */}
                <div className="flex flex-col items-center sm:items-end text-xs sm:text-sm space-y-1">
                    <a
                        href="mailto:susrstrust@gmail.com"
                        className="flex items-center space-x-2 hover:text-[#b5051a]"
                    >
                        <FaEnvelope />
                        <span>susrstrust@gmail.com</span>
                    </a>

                    <a
                        href="tel:+919876543210"
                        className="flex items-center space-x-2 hover:text-[#b5051a]"
                    >
                        <FaPhoneAlt />
                        <span>+91 98765 43210</span>
                    </a>
                </div>

            </div>

        </nav>
    );
}

export default Logo;
