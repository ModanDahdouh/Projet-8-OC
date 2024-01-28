import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/LOGO.svg";
import "../styles/Navbar.scss";

// Composant fonctionnel pour la bannière de navigation
export default function Banner() {
    // État local pour suivre le lien actif
    const [activeLink, setActiveLink] = useState(null);

    // Fonction pour gérer le clic sur un lien
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    // Fonction pour gérer le clic en dehors de la barre de navigation
    const handleWindowClick = (event) => {
        const nav = document.querySelector(".LogoNav");
        if (nav && !nav.contains(event.target)) {
            setActiveLink(null); // Réinitialise l'état si le clic est en dehors de la barre de navigation
        }
    };
    // Ajoute un écouteur d'événements pour détecter les clics en dehors de la barre de navigation
    window.addEventListener("mousedown", handleWindowClick);

    return (
        <div className="LogoNav">
            <img className="logo-nav" src={LOGO} alt="logo" />
            <nav>
                {/* Lien vers la page "Accueil" */}
                <Link
                    className={
                        activeLink === "Accueil"
                            ? "link-accueil active"
                            : "link-accueil"
                    }
                    to="/"
                    onClick={() => handleLinkClick("Accueil")} // Appelle la fonction pour gérer le clic sur ce lien
                >
                    Accueil
                </Link>
                {/* Lien vers la page "A Propos" */}
                <Link
                    className={
                        activeLink === "A Propos"
                            ? "link-propos active"
                            : "link-propos"
                    }
                    to="/Propos"
                    onClick={() => handleLinkClick("A Propos")} // Appelle la fonction pour gérer le clic sur ce lien
                >
                    A Propos
                </Link>
            </nav>
        </div>
    );
}
