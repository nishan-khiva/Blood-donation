import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-14">
      <footer className="bg-[#3a3a3a] text-white py-12 px-4">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* CONTACT SECTION */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>

            <p className="font-semibold">Address:</p>
            <p className="mb-4">
              Sitarganj, Distt- Udham Singh Nagar,<br />
              262405, Uttrakhand
            </p>

            <p className="font-semibold">Email:</p>
            <p className="mb-4">susrstrust@gmail.com</p>

            <p className="font-semibold">Contact Number</p>
            <p className="mb-4">+91 98765 43210</p>
          </div>

          {/* EMPTY RIGHT SIDE (You can add links later) */}
          <div></div>
        </div>

        {/* BOTTOM STRIP */}

      </footer>
      <div className="bg-black text-center text-white text-sm py-3 w-full">
        © {new Date().getFullYear()} Designed & Developed by Nishan Singh-9690413852
        <p className="text-xs text-gray-400 text-center ">
          <Link to="/adminlogin" className="hover:text-gray-600">
            Admin Access
          </Link>
        </p>
      </div>

    </div>

  );
};

export default Footer;
