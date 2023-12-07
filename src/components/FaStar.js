import React from "react";
import { useParams } from "react-router-dom";
import { location } from "../datas/DataLocation.js";
import "../styles/FaStar.scss";

// Fonction pour rendre les étoiles en fonction du nombre de ratings
const renderStars = (stars) => {
    const totalStars = 5;
    const filledStars = parseInt(stars); // Convertir en nombre

    const starElements = [];

    for (let i = 0; i < filledStars; i++) {
        starElements.push(
            <i
                key={i}
                className="fa-xs fa-solid fa-star"
                aria-hidden="true"
            ></i>
        );
    }

    for (let i = filledStars; i < totalStars; i++) {
        starElements.push(
            <i
                key={i}
                className="fa-xs fa-solid fa-star neutral-star etoile-grey"
                aria-hidden="true"
            ></i>
        );
    }

    return (
        <div className="card-rating">
            {starElements}
            <span className="sr-only">
                Note de {filledStars} sur {totalStars}
            </span>
        </div>
    );
};

// Composant principal FaStar
export default function FaStar() {
    const { id } = useParams();
    const selectedLocation = location.find((item) => item.id === id);

    return (
        <div className="container-host-fastar">
            <div className="container-host">
                <img
                    className="img-host"
                    src={selectedLocation.host.picture}
                    alt={selectedLocation.host.name}
                />
                <p className="p-host-name">
                    {selectedLocation.host.name.split(" ")[0]}
                    <br />
                    {selectedLocation.host.name.split(" ")[1]}
                </p>
            </div>
            {selectedLocation && (
                <div className="container-FaStar">
                    {renderStars(selectedLocation.rating)}
                </div>
            )}
        </div>
    );
}
