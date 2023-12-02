import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/LOGO.svg";
import "../styles/Navbar.scss";

export default function Banner() {
    return (
        <div className="LogoNav">
            <img className="logo-nav" src={LOGO} alt="logo" />
            <nav>
                <Link className="link-accueil" to="/">
                    Accueil
                </Link>
                <Link className="link-propos" to="/Propos">
                    A Propos
                </Link>
            </nav>
        </div>
    );
}
