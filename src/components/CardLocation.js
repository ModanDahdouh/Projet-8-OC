import React from "react";
import { location } from "../datas/DataLocation.js";
import { Link } from "react-router-dom";
import "../styles/CardLocation.scss";

// Composant fonctionnel pour afficher des cartes de location avec des liens vers les détails de chaque location
export default function CardLocation() {
    return (
        <div className="card-location">
            {location.map((item) => (
                <Link
                    className="link-card"
                    to={`/location/${item.id}`}
                    key={item.id}
                >
                    <img
                        className="img-card"
                        src={item.cover}
                        alt={item.title}
                    />
                    <h2 className="img-title">{item.title}</h2>
                </Link>
            ))}
        </div>
    );
}
