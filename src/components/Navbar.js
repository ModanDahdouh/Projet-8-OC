import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/LOGO.svg";
import "../styles/Navbar.scss";

export default function Banner() {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    const handleWindowClick = (event) => {
        const nav = document.querySelector(".LogoNav");
        if (nav && !nav.contains(event.target)) {
            setActiveLink(null);
        }
    };

    window.addEventListener("mousedown", handleWindowClick);

    return (
        <div className="LogoNav">
            <img className="logo-nav" src={LOGO} alt="logo" />
            <nav>
                <Link
                    className={
                        activeLink === "Accueil"
                            ? "link-accueil active"
                            : "link-accueil"
                    }
                    to="/"
                    onClick={() => handleLinkClick("Accueil")}
                >
                    Accueil
                </Link>
                <Link
                    className={
                        activeLink === "A Propos"
                            ? "link-propos active"
                            : "link-propos"
                    }
                    to="/Propos"
                    onClick={() => handleLinkClick("A Propos")}
                >
                    A Propos
                </Link>
            </nav>
        </div>
    );
}
