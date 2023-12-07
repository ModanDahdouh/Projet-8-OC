import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { location } from "../datas/DataLocation.js";
import "../styles/Carousel.scss";
import ArrowLeft from "../assets/ArrowLeft.png";
import ArrowRight from "../assets/ArrowRight.png";

export default function Carousel() {
    const { id } = useParams();
    const selectedLocation = location.find((item) => item.id === id);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === selectedLocation.pictures.length - 1
                ? 0
                : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0
                ? selectedLocation.pictures.length - 1
                : prevSlide - 1
        );
    };

    useEffect(() => {
        const updateCarousel = () => {
            slides.current.style.transform = `translateX(-${
                currentSlide * 100
            }%)`;
        };

        updateCarousel();
    }, [currentSlide]);

    return (
        <div className="carousel-container">
            <div className="slides" ref={slides}>
                {selectedLocation.pictures.map((pictures, index) => (
                    <div key={index} className="slide">
                        <img
                            className="img-carousel"
                            src={pictures}
                            alt={pictures}
                        />
                    </div>
                ))}
            </div>
            <div className="navigation">
                <img
                    src={ArrowLeft}
                    alt="Previous"
                    className="arrow"
                    onClick={prevSlide}
                />
                <img
                    src={ArrowRight}
                    alt="Next"
                    className="arrow"
                    onClick={nextSlide}
                />
            </div>
            <div className="slide-counter">
                {currentSlide + 1}/{selectedLocation.pictures.length}
            </div>
        </div>
    );
}
