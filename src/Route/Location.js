import React from "react";
import { useParams } from "react-router-dom";
import { location } from "../datas/DataLocation.js";
import "../styles/Location.scss";
import Carousel from "../components/Carousel.js";
import Button from "../components/Button.js";
import FaStar from "../components/FaStar.js";
import Page404 from "./Page404.js";

// Composant fonctionnel pour afficher les détails d'une location spécifique.

export default function Location() {
    const { id } = useParams();

    // Recherche de la location correspondant à l'ID spécifié.
    const selectedLocation = location.find((item) => item.id === id);

    if (!selectedLocation) {
        return <Page404 />;
    }
    // Rendu des détails de la location.
    return (
        <div className="container-location">
            <div className="carousel">
                <Carousel />
            </div>
            <div className="container-location-2">
                <div className="conainer-title-tags">
                    <h2 className="h2-TitleLocation">
                        {selectedLocation.title}
                    </h2>
                    <h3 className="h3-TitleLocation">
                        {selectedLocation.location}
                    </h3>

                    <div>
                        <ul className="tags-location">
                            {selectedLocation.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <FaStar />
            </div>

            <Button isLocationDetails={true} />
        </div>
    );
}
