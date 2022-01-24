import React from "react";

interface Props {
    next: () => void;
    prev: () => void;
}

function Arrows({prev, next}: Props) {
    return (
        <div className="carousel-arrows">
            <p onClick={prev}><i className="arrow left"></i></p>
            <p onClick={next}><i className="arrow right"></i></p>
        </div>
    )
}

export default Arrows;
