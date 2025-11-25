import React from 'react'

const Event = () => {
    return (
        <section id="events" className="py-16 bg-white text-center">
            <h3 className="text-3xl font-bold text-red-600 mb-10">
                Upcoming Blood Donation Camps
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="bg-red-100 rounded-lg p-6 shadow hover:shadow-lg">
                        <h4 className="text-xl font-semibold text-red-700 mb-2">
                            Camp {i + 1}
                        </h4>
                        <p className="text-gray-700">Date: Coming Soon</p>
                        <p className="text-gray-700">Location: To be announced</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Event