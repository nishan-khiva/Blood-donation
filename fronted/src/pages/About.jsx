import React from 'react'
import founderImg from "../assets/Gurveerimg.jpeg";
import { FaHandPointRight } from "react-icons/fa";

const About = () => {
    return (
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

                {/* New Long About Section */}
                <p className="mt-6">
                    Our NGO works especially for patients suffering from <strong>Thalassemia</strong>,
                    <strong> cancer</strong>, and other critical diseases that require regular and timely blood
                    transfusions. We are committed to ensuring that no patient or family faces panic or crisis due to
                    a shortage of blood. Through dedicated donor networks and active volunteer participation, we make
                    urgent blood support possible anytime, anywhere.
                </p>

                <p className="mt-4">
                    Along with medical support, we are also working towards building a healthier and greener
                    environment. Our team regularly organizes <strong>tree plantation drives</strong> to promote clean air,
                    reduce pollution, and encourage environmental responsibility among communities. We believe that
                    protecting nature is equally important for protecting life.
                </p>

                <p className="mt-4">
                    To further support public welfare, we conduct <strong>free health camps</strong> in rural and
                    underserved areas. These camps help people with health checkups, awareness on major diseases, early
                    detection, and access to necessary medical guidance. Many individuals who cannot afford basic
                    healthcare benefit from these initiatives.
                </p>

                <p className="mt-4">
                    In the coming years, our trust is planning to start a <strong>free ambulance service</strong> for the
                    poor and needy. This service will especially help families who struggle to arrange emergency
                    transportation during critical situations. Our goal is to ensure that medical help reaches people
                    on time, without financial burden.
                </p>
            </div>

            {/* Founder Section */}
            <div className="mt-16 flex flex-col md:flex-row items-center gap-10">

                {/* Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <img
                        src={founderImg}
                        alt="Founder"
                        className="w-64 h-88 object-fit rounded-xl shadow-lg"
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
                    <li className='flex gap-2 items-center'><FaHandPointRight /> To provide 24/7 emergency blood support across Uttarakhand.</li>
                    <li className='flex gap-2 items-center'><FaHandPointRight /> To promote voluntary blood donation through awareness programs.</li>
                    <li className='flex gap-2 items-center'><FaHandPointRight /> To organize health camps for underserved communities.</li>
                    <li className='flex gap-2 items-center'><FaHandPointRight /> To empower youth and encourage them to participate in social welfare.</li>
                    <li className='flex gap-2 items-center'><FaHandPointRight /> To support Thalassemia, cancer, and critical patients with timely help.</li>
                    <li className='flex gap-2 items-center'><FaHandPointRight /> To protect the environment through plantation and green initiatives.</li>
                    <li className='flex gap-2 items-center'><FaHandPointRight /> To launch a free ambulance service for the poor in the near future.</li>
                </ul>
            </div>

        </div>
    )
}

export default About;
