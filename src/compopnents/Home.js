import React from 'react'
import Slides from './Slides'
import image1 from '../images/developer.jpg'
import image2 from '../images/ipu1.jpg'

const Home = () => {
    return (
        <div>
            <h1 className='text-center my-20 font-bold text-4xl sm:text-6xl'>Software Development Cell USIC&T</h1>
            <Slides />
            <h1 className='text-center font-extrabold my-12 text-4xl'>About Us</h1>
            <p className='my-6 w-4/6 text-xl text-center mx-auto'>Department responsible for the Guru Gobind Singh Indraprastha University's constant growth towards the aim of becoming a digitally dependent organisation. Students of the university have been selected to develop different software for helping out the faculty as well as students in day to day college activities.</p>
        </div>
    )
}

export default Home