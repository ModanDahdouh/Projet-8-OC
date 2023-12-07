import React from "react";
import { useParams } from "react-router-dom";
import { location } from "../../datas/DataLocation.js";
import "../../styles/Location.scss";
import Carousel from "../Carousel.js";
import ButtonLocation from "../ButtonLocation.js";
import FaStar from "../FaStar.js";

export default function Location() {
    const { id } = useParams();
    const selectedLocation = location.find((item) => item.id === id);
    return (
        <div className="container-location">
            <div className="carousel">
                <Carousel />
            </div>
            <div className="container-location-2">
                <div>
                    <h2 className="h2-TitleLocation">
                        {selectedLocation.title}
                    </h2>
                    <h3 className="h3-TitleLocation">
                        {selectedLocation.location}
                    </h3>

                    <div>
                        <ul className="tags-location">
                            {selectedLocation.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <FaStar />
            </div>

            <ButtonLocation />
        </div>
    );
}

// {/* <p>{selectedLocation.description}</p>
//             <p>Hôte : {selectedLocation.host.name}</p>
//             <img
//                 src={selectedLocation.host.picture}
//                 alt={selectedLocation.host.name}
//             />
//             <p>Rating : {selectedLocation.rating}</p>
//             <p>Emplacement : {selectedLocation.location}</p>
//             <h3>Équipements :</h3>
//             <ul>
//                 {selectedLocation.equipments.map((equipment, index) => (
//                     <li key={index}>{equipment}</li>
//                 ))}
//             </ul>
//             <h3>Tags :</h3>
//             <ul>
//                 {selectedLocation.tags.map((tag, index) => (
//                     <li key={index}>{tag}</li>
//                 ))}
//             </ul> */}
