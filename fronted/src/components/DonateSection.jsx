import React from 'react'

const DonateSection = () => {
    return (
        <section id="donate" className="py-16 bg-red-50 text-center">
            <h3 className="text-3xl font-bold text-red-600 mb-6">
                Become a Blood Donor
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Register as a donor today and help us save lives. Your contribution
                makes a real difference.
            </p>
            <a
                href="#"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold"
            >
                Register Now
            </a>
        </section>
    )
}

export default DonateSection