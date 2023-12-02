import React from "react";
import LOGOFooter from "../assets/LOGOFooter.svg";
import "../styles/Footer.scss";

export default function Footer() {
    return (
        <footer>
            <img src={LOGOFooter} alt="Logo Footer" />
            <p className="p-footer">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
