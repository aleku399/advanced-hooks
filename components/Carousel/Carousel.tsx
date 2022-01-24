import React, { useState, useEffect } from "react";
import Arrows from "./CarouselArrow";
import CarouselItem from "./CarouselItem";
import Pagination from "./Pagination";

function Carousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPause, setIsPause] = useState(false);

  const updateIndex = (index) => {
    const idx =
      index < 0 ? items.length - 1 : index >= items.length ? 0 : index;
    setActiveIndex(idx);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPause) {
        updateIndex(activeIndex + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div
      className="carousel screenW screenH dGray col"
      onMouseEnter={() => setIsPause(true)}
      onMouseLeave={() => setIsPause(false)}
    >
      <Arrows
        next={() => updateIndex(activeIndex + 1)}
        prev={() => updateIndex(activeIndex - 1)}
      />
      <div
        className="inner fullW fullH rel"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, i) => (
          <CarouselItem key={i} image={item}/>
        ))}
      </div>
      <Pagination items={items} activeIndex={activeIndex} />
    </div>
  );
}

export default Carousel;
