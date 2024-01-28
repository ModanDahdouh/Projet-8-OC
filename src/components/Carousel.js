import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { location } from "../datas/DataLocation.js";
import "../styles/Carousel.scss";
import ArrowLeft from "../assets/ArrowLeft.png";
import ArrowRight from "../assets/ArrowRight.png";

// Composant fonctionnel pour afficher un carrousel d'images
export default function Carousel() {
    const { id } = useParams();
    const selectedLocation = location.find((item) => item.id === id);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = useRef(null);

    // Fonction pour passer à la diapositive suivante
    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === selectedLocation.pictures.length - 1
                ? 0
                : prevSlide + 1
        );
    };

    // Fonction pour passer à la diapositive précédente
    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0
                ? selectedLocation.pictures.length - 1
                : prevSlide - 1
        );
    };

    // Effet pour mettre à jour la position du carrousel en fonction de l'indice de la diapositive actuelle
    useEffect(() => {
        // Fonction pour mettre à jour la position du carrousel
        const updateCarousel = () => {
            slides.current.style.transform = `translateX(-${
                currentSlide * 100
            }%)`;
        };

        updateCarousel(); // Appel de la fonction pour mettre à jour le carrousel
    }, [currentSlide]); // Déclenchement de l'effet à chaque changement de l'indice de la diapositive actuelle

    // Rendu du composant Carousel
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
            {/* Navigation du carrousel */}
            {selectedLocation.pictures.length > 1 && ( // Condition pour afficher les flèches
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
            )}
            {/* Compteur de diapositives */}
            <div className="slide-counter">
                {currentSlide + 1}/{selectedLocation.pictures.length}
            </div>
        </div>
    );
}
