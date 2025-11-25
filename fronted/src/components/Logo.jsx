import React from 'react'
import logo from '../assets/logo.jpg'
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Logo = () => {
    return (
        <nav className="flex justify-between items-center p-3 px-8 bg-white shadow-md">
            {/* Left: Logo and Title */}
            <div className="flex items-center">
                <img src={logo} alt="Trust Logo" className="h-16 w-auto mr-3" />
                <div>
                    <h1 className="text-xl font-bold text-[#7f0210]">
                        Shaheed Udham Singh Nagar Trust
                    </h1>
                    <p className="text-[#7f0210] text-sm">
                        Sitarganj, Udham Singh Nagar, Uttarakhand - 262405
                    </p>
                </div>
            </div>

            {/* Right: Social Media + Contact */}
            <div className="flex flex-col items-end text-[#7f0210]">
                {/* Social Media Icons */}
                <div className="flex items-center space-x-5 text-lg mb-2">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1877F2] hover:opacity-80 transition-opacity"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E4405F] hover:opacity-80 transition-opacity"
                    >
                        <FaInstagram />
                    </a>
                    {/* WhatsApp Icon */}
                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:opacity-80 transition-opacity"
                    >
                        <FaWhatsapp />
                    </a>
                </div>

                {/* Email and Phone */}
                <div className="flex flex-col items-end text-sm space-y-1">
                    <a
                        href="mailto:susrstrust@gmail.com"
                        className="flex items-center space-x-2 hover:text-[#b5051a] transition-colors"
                    >
                        <FaEnvelope />
                        <span>susrstrust@gmail.com</span>
                    </a>
                    <a
                        href="tel:+919876543210"
                        className="flex items-center space-x-2 hover:text-[#b5051a] transition-colors"
                    >
                        <FaPhoneAlt />
                        <span>+91 98765 43210</span>
                    </a>
                </div>
            </div>

        </nav>
    );
}



export default Logo