import React from 'react'
import Navbar from '../components/Navbar'
import About from './About'
import HeroSection from '../components/HeroSection'
import DonateSection from '../components/DonateSection'
import Event from '../components/Event'
import Slider from '../components/Slider'
import ImageSlider from '../components/ImageSlider'
import OurServices from '../components/OurServices'
import WhoCanDonate from '../components/WhoDonate'
import Poster from '../components/Poster'

const Home = () => {
    return (
        <>
           
            <Slider />
            <ImageSlider/>
            <OurServices/>
            <WhoCanDonate/>
            <Poster/>
        </>
    )
}

export default Home