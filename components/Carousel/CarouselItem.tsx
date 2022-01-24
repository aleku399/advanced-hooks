import React from "react";

const CarouselItem = ({image}) => (
    <div className="carousel-item  fullW fullH">
         <img src={image} className="fullH fullW imgCover" alt="slide" />
    </div>
)

export default CarouselItem;
