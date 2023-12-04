import React from "react";

import "../../styles/Location.scss";
import Carousel from "../Carousel.js";

export default function Location() {
    return (
        <div className="container-location">
            <div className="carousel">
                <Carousel />
            </div>
        </div>
    );
}

// {
/* <h2>{selectedLocation.title}</h2>
<p>{selectedLocation.description}</p>
<p>Hôte : {selectedLocation.host.name}</p>
<img
    src={selectedLocation.host.picture}
    alt={selectedLocation.host.name}
/>
<p>Rating : {selectedLocation.rating}</p>
<p>Emplacement : {selectedLocation.location}</p>
<h3>Équipements :</h3>
<ul>
    {selectedLocation.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
    ))}
</ul>
<h3>Tags :</h3>
<ul>
    {selectedLocation.tags.map((tag, index) => (
        <li key={index}>{tag}</li>
    ))}
</ul> */
// }
