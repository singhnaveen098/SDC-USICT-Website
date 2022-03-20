import React, { useEffect } from 'react';
import Typewriter from "typewriter-effect";
import CardList from "./CarouselList";
import Carousel3D from './Carousel3D';
import Teams from './Teams';
import AOS from 'aos';
import about from '../images/about.png'
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        AOS.init({ once: true, duration: 1000 });
        window.addEventListener('load', AOS.refresh);
    }, [])

    return (
        <div>
            <h1 className='flex text-center mt-20 mb-10 font-bold items-center justify-center text-4xl h-40 lg:h-fit sm:text-6xl'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Software Development Cell")
                            .pauseFor(500)
                            .deleteAll()
                            .typeString("USIC&T")
                            .pauseFor(500)
                            .start();
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
            <Carousel3D
                CardList={CardList}
            />
            <div data-aos="fade-up" className='flex flex-row flex-wrap justify-center items-center mt-12'>
                <img src={about} alt="about" />
                <div className='w-5/6 xl:w-3/6'>
                    <h1 className='text-center font-extrabold my-12 text-4xl'>About Us</h1>
                    <p className=' text-xl text-center mx-auto'>Department responsible for the Guru Gobind Singh Indraprastha University's constant growth towards the aim of becoming a digitally dependent organisation. Students of the university have been selected to develop different software for helping out the faculty as well as students in day to day college activities.</p>
                </div>
            </div>
            <Teams />
        </div>
    )
}

export default Home