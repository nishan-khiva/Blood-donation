import React from 'react'
import founderImg from "../assets/Gurveerimg.jpeg";

const About = () => {
    return (
        // <div className="py-16 bg-white text-center">
        //     <div className="max-w-5xl mx-auto px-6">
        //         <h3 className="text-3xl font-bold text-red-600 mb-6">
        //             About Our Trust
        //         </h3>
        //         <p className="text-lg text-gray-700 leading-relaxed">
        //             Shaheed Udham Singh Nagar Trust is a non-profit organization dedicated
        //             to promoting blood donation and community welfare. Inspired by the
        //             bravery and sacrifice of Shaheed Udham Singh, we strive to bring hope,
        //             health, and humanity together.
        //         </p>
        //     </div>
        // </div>

        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Header */}
            <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
                About Us
            </h1>

            {/* NGO Info Section */}
            <div className="text-center text-lg text-gray-700 leading-8">
                <p>
                    <span className="font-semibold">Shaheed Udham Singh Rakt Sewa Trust</span>
                    was founded on <strong>27 March 2021</strong> with the mission to support
                    communities through emergency blood services and health initiatives.
                    Since then, the organization has been actively working across Uttarakhand.
                </p>

                <p className="mt-4">
                    We have successfully organized more than
                    <strong> 36 blood donation camps</strong> and <strong>10 health camps</strong>
                    so far, helping thousands of individuals in medical emergencies.
                    Our dedicated team is available 24/7 to ensure timely blood support
                    and promote voluntary blood donation.
                </p>
            </div>

            {/* Founder Section */}
            <div className="mt-16 flex flex-col md:flex-row items-center gap-10">

                {/* Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <img
                        src={founderImg}
                        alt="Founder"
                        className="w-64 h-83 object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Details */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Founder: Gurveer Singh
                    </h2>

                    <p className="text-lg text-gray-700 leading-8">
                        Shaheed Udham Singh Rakt Sewa Trust was founded by
                        <strong> Gurveer Singh</strong>, who envisioned a community where
                        no one suffers due to the lack of blood in critical situations.
                        With a passion for social service and community development,
                        he has led numerous initiatives in blood donation awareness,
                        youth volunteering, and health camps across Uttarakhand.
                    </p>
                </div>

            </div>

            {/* Mission & Vision Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-center text-red-700">
                    Our Mission & Vision
                </h2>

                <ul className="mt-6 space-y-4 text-lg text-gray-700 leading-8">
                    <li>✔ To provide 24/7 emergency blood support across Uttarakhand.</li>
                    <li>✔ To promote voluntary blood donation through awareness programs.</li>
                    <li>✔ To organize health camps for underserved communities.</li>
                    <li>✔ To empower youth and encourage them to participate in social welfare.</li>
                    <li>✔ To build a stronger, healthier, and more supportive society.</li>
                </ul>
            </div>

        </div>
    )
}

export default About