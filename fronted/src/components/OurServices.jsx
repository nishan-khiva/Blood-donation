import React from 'react'
import { useState } from "react";
import { FaSearch, FaHospital, FaUsers, FaUserPlus } from "react-icons/fa";

const services = [
    {
        id: 1,
        title: "Blood Availability Search",
        icon: <FaSearch size={35} />,
        bg: "bg-[#7f0210]",
        textColor: "text-white",
        description:
            "The Blood Availability Search lets users quickly check real-time blood availability across registered blood centers. By selecting State, District, Blood Group, Component and Location, users can find the required units."
    },
    {
        id: 2,
        title: "Blood Center Directory",
        icon: <FaHospital size={35} />,
        description:
            "Browse the complete directory of registered blood centers with verified information and contact details."
    },
    {
        id: 3,
        title: "Blood Donation Camps",
        icon: <FaUsers size={35} />,
        description:
            "Find upcoming blood donation camps and participate to save lives."
    },
    {
        id: 4,
        title: "Donor Login",
        icon: <FaUserPlus size={35} />,
        description:
            "Donors can sign in to manage their donations, history, and notifications."
    },
];

const OurServices = () => {
    const [active, setActive] = useState(1);
    return (
        <div className="w-full px-10 py-10">
            <h1 className="text-3xl font-bold text-[#7f0210] mb-6">Our Services</h1>

            {/* Top Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service) => (
                    <div
                        key={service.id}
                        onClick={() => setActive(service.id)}
                        className={`cursor-pointer rounded-xl p-6 text-center shadow transition-all
              ${active === service.id ? "bg-[#7f0210] text-white" : "bg-gray-100 text-black"}
            `}
                    >
                        <div className="flex justify-center mb-3">{service.icon}</div>
                        <h2 className="text-lg font-semibold">{service.title}</h2>
                    </div>
                ))}
            </div>

            {/* Active Description */}
            <div className="mt-6 bg-gray-50 shadow rounded-xl p-6">
                <p className="text-gray-900 leading-relaxed">
                    {services.find((s) => s.id === active)?.description}
                </p>

                <button className="mt-4 border border-[#7f0210] text-[#7f0210] px-5 py-2 rounded-lg hover:bg-[#7f0210] hover:text-white transition">
                    {services.find((s) => s.id === active)?.title}
                </button>
            </div>
        </div>
    );
};


export default OurServices