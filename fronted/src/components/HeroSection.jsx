import React from 'react'

const HeroSection = () => {
    return (
        <section
            id="home"
            className="bg-[url('https://images.unsplash.com/photo-1606204127522-8789d5c3d543?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
        >
            <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Donate Blood, Save Lives ❤️
                </h2>
                <p className="text-lg mb-6">
                    Join our mission to help those in need. Every drop counts.
                </p>
                <a
                    href="#donate"
                    className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold"
                >
                    Become a Donor
                </a>
            </div>
        </section>
    )
}

export default HeroSection