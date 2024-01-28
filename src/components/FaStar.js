import React from "react";
import { useParams } from "react-router-dom";
import { location } from "../datas/DataLocation.js";
import "../styles/FaStar.scss";

// Fonction pour rendre les étoiles en fonction du nombre de ratings
const renderStars = (stars) => {
    const totalStars = 5;
    const filledStars = parseInt(stars); // Convertir en nombre entier

    const starElements = [];

    // Boucle pour créer les éléments d'étoile remplies
    for (let i = 0; i < filledStars; i++) {
        starElements.push(
            <i
                key={i}
                className="fa-xs fa-solid fa-star"
                aria-hidden="true"
            ></i>
        );
    }

    // Boucle pour créer les éléments d'étoile vides (grisées)
    for (let i = filledStars; i < totalStars; i++) {
        starElements.push(
            <i
                key={i}
                className="fa-xs fa-solid fa-star neutral-star etoile-grey"
                aria-hidden="true"
            ></i>
        );
    }
    // Rendu des étoiles avec le texte alternatif indiquant la note
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
                {/* Image de l'hôte */}
                <img
                    className="img-host"
                    src={selectedLocation.host.picture}
                    alt={selectedLocation.host.name}
                />
                {/* Nom de l'hôte */}
                <p className="p-host-name">
                    {selectedLocation.host.name.split(" ")[0]}
                    <br />
                    {selectedLocation.host.name.split(" ")[1]}
                </p>
            </div>
            {/* Conteneur pour les étoiles de notation */}
            {selectedLocation && (
                <div className="container-FaStar">
                    {renderStars(selectedLocation.rating)}
                </div>
            )}
        </div>
    );
}
