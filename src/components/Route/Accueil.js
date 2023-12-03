import React from "react";
import IMGAccueil from "../../assets/IMGAccueil.png";
import "../../styles/Accueil.scss";
import CardLocation from "../CardLocation";

export default function Accueil() {
    return (
        <div className="body-acceuil">
            <div className="image-container">
                <img className="img-acceuil" src={IMGAccueil} alt="" />
                <p className="paragraphe-container">
                    Chez vous, partout et ailleurs
                </p>
            </div>
            <div className="main-container">
                <CardLocation />
            </div>
        </div>
    );
}
