import IMGPropos from "../../assets/IMGPropos.png";

import "../../styles/APropos.scss";
import Button from "../../components/Button.js";

export default function Propos() {
    return (
        <div className="box-img-button">
            <img className="imgAPropos" src={IMGPropos} alt="" />
            <Button isLocationDetails={false} />
        </div>
    );
}
