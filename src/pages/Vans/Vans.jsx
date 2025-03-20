import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

function Vans() {
  const [vanData, setVanData] = useState([]);

  useEffect(() => {
    fetch("/api/vans").then((res) =>
      res.json().then((data) => setVanData(data.vans))
    );
  }, []);

  //console.log(vanData);

  const vanElements = vanData.map((van) => {
    return (
      <div className="van-card" key={van.id}>
        <Link to={`/vans/${van.id}`}>
          <img src={van.imageUrl} alt={van.desc} className="van-img" />
          <div className="name-price-container">
            <p className="van-name">{van.name}</p>
            <p className="van-price">${van.price}</p>
          </div>
          <p className="per-day">/day</p>
          <button className={`btn-${van.type} btn-van-card`}>
            {/* {`${van.type[0].toUpperCase()}${van.type.slice(1)}`} */}
            {van.type}
          </button>
        </Link>
      </div>
    );
  });

  return (
    <section className="van-main-content container">
      <h2>Explore our van options</h2>
      <div className="btn-container ">
        <button className="btn-light">Simple</button>
        <button className="btn-light">Luxury</button>
        <button className="btn-light">Rugged</button>
        <button className="btn-transparent">Clear filters</button>
      </div>
      <div className="van-card-grid" key={nanoid()}>
        {vanElements}
      </div>
    </section>
  );
}

export default Vans;

//! Add this to <Link/> for screen readers:
// aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
