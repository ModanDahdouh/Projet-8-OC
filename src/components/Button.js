import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { location } from "../datas/DataLocation.js";
import arrow from "../assets/arrow.svg";
import "../styles/ButtonLocation.scss";

export default function Button({ isLocationDetails }) {
    const { id } = useParams();
    const selectedLocation = location.find((item) => item.id === id);

    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [equipmentOpen, setEquipmentOpen] = useState(false);

    const [paragraphs, setParagraphs] = useState([
        {
            content:
                "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
            isOpen: false,
        },
        {
            content:
                "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
            isOpen: false,
        },
        {
            content:
                "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
            isOpen: false,
        },
        {
            content:
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
            isOpen: false,
        },
    ]);

    const buttonTexts = ["Fiabilité", "Respect", "Service", "Sécurité"];

    const handleDescriptionClick = () => {
        setDescriptionOpen(!descriptionOpen);
        setEquipmentOpen(false); // Close equipment section
    };

    const handleEquipmentClick = () => {
        setEquipmentOpen(!equipmentOpen);
        setDescriptionOpen(false); // Close description section
    };

    const handleButtonClick = (index) => {
        const updatedParagraphs = [...paragraphs]; // Copie de l'état actuel
        updatedParagraphs[index].isOpen = !updatedParagraphs[index].isOpen; // Inverse l'état du paragraphe

        setParagraphs(updatedParagraphs); // Met à jour l'état des paragraphes
    };

    if (isLocationDetails) {
        // Button des carte de Location
        return (
            <div className="container-button-location">
                {/* Button for Description */}
                <div className="box-button-location">
                    <button
                        className="button-onclick-location"
                        onClick={handleDescriptionClick}
                    >
                        Description
                        <img
                            src={arrow}
                            alt="Arrow"
                            className={
                                descriptionOpen
                                    ? "rotate-button-location"
                                    : "rotate-back-button-location"
                            }
                        />
                    </button>
                    {descriptionOpen && (
                        <p
                            className={`p-description-location ${
                                descriptionOpen
                                    ? "text-move-animation-location"
                                    : ""
                            }`}
                        >
                            {selectedLocation.description}
                        </p>
                    )}
                </div>

                {/* Button for Equipments */}
                <div className="box-button-location">
                    <button
                        className="button-onclick-location"
                        onClick={handleEquipmentClick}
                    >
                        Equipements
                        <img
                            src={arrow}
                            alt="Arrow"
                            className={
                                equipmentOpen
                                    ? "rotate-button-location"
                                    : "rotate-back-button-location"
                            }
                        />
                    </button>
                    {equipmentOpen && (
                        <ul className="ul-equipenments">
                            {selectedLocation.equipments.map(
                                (equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                )
                            )}
                        </ul>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            // Button la page a propos
            <div className="button-APropos">
                {buttonTexts.map((text, index) => (
                    <div className="button-box" key={index}>
                        <button
                            className="button-onclick"
                            onClick={() => handleButtonClick(index)}
                        >
                            {text}
                            <img
                                src={arrow}
                                alt="Arrow"
                                className={
                                    paragraphs[index].isOpen
                                        ? "rotate"
                                        : "rotate-back"
                                }
                            />
                        </button>
                        {paragraphs[index].isOpen && (
                            <p
                                className={`p-APropos ${
                                    paragraphs[index].isOpen
                                        ? "text-move-animation "
                                        : ""
                                }`}
                            >
                                {paragraphs[index].content}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        );
    }
}
