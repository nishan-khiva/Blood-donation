import React from 'react'

const Slider = () => {
    return (
        <marquee
            behavior="scroll"
            direction="left"
            scrollamount="6"
            onMouseOver={(e) => e.target.stop()}
            onMouseOut={(e) => e.target.start()}
            class="bg-white py-1"
        >
            <span class="text-[#7f0210] font-semibold">
                Shaheed Udham Singh Nagar Trust — 🩸 Be a life saver! 🩸
            </span>
        </marquee>
    )
}

export default Slider