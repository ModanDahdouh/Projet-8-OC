import React, { useState } from "react";
import IMGPropos from "../../assets/IMGPropos.png";
import arrow from "../../assets/arrow.svg";
import "../../styles/APropos.scss";

export default function Propos() {
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

    const handleButtonClick = (index) => {
        const updatedParagraphs = [...paragraphs]; // Copie de l'état actuel
        updatedParagraphs[index].isOpen = !updatedParagraphs[index].isOpen; // Inverse l'état du paragraphe

        setParagraphs(updatedParagraphs); // Met à jour l'état des paragraphes
    };

    return (
        <div className="box-img-button">
            <img className="imgAPropos" src={IMGPropos} alt="" />
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
        </div>
    );
}
