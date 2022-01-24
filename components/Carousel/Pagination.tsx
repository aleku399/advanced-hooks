import React from "react";

const Pagination = ({ items, activeIndex }) => {
  return (
    <div className="fullW height70 abs bot0 fCenter black50">
      {items.map((item, index) => (
        <div  className="row" key={item}>
          <div style={{ width: 5 }} className="fullH" />
          <div
            className={`dot ${activeIndex === index ? "white" : "white50"}`}
          />
          <div style={{ width: 5 }} className="fullH" />
        </div>
      ))}
    </div>
  );
};

export default Pagination;
