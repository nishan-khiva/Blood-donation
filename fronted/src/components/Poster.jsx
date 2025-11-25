import React from 'react'
import posterImage from "../assets/poster.png";

const Poster = () => {
    return (
        <div>
            <img src={posterImage}
            alt='bannel'
            className='w-full px-8'
            />
        </div>
    )
}

export default Poster