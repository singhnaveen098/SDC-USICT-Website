import "./Slides.css";
import React, { useState } from 'react'
import Slider from "react-slick";
import image1 from '../images/developer.jpg'
import image3 from '../images/developer.jpg'
import image2 from '../images/ipu1.jpg'
import image4 from '../images/ipu1.jpg'
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const images = [image1, image2, image3, image4];

const Slides = () => {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaChevronCircleRight />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaChevronCircleLeft />
            </div>
        )
    }

    const [imgIndex, setImgIndex] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImgIndex(next),
        cssEase: "linear"
    };

    return (
        <div className="slides">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
                        <img src={img} alt={idx} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Slides