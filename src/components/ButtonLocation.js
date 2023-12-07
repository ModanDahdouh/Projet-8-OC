import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { location } from "../datas/DataLocation.js";
import arrow from "../assets/arrow.svg";
import "../styles/ButtonLocation.scss";

export default function ButtonLocation() {
    const { id } = useParams();
    const selectedLocation = location.find((item) => item.id === id);

    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [equipmentOpen, setEquipmentOpen] = useState(false);

    const handleDescriptionClick = () => {
        setDescriptionOpen(!descriptionOpen);
        setEquipmentOpen(false); // Close equipment section
    };

    const handleEquipmentClick = () => {
        setEquipmentOpen(!equipmentOpen);
        setDescriptionOpen(false); // Close description section
    };

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
                    <ul>
                        {selectedLocation.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
