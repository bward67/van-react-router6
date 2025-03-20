import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const HostVans = () => {
  const [hostVanData, setHostVanData] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVanData(data.vans));
  }, []);

  const hostVanElements = hostVanData.map((van) => {
    return (
      <div className="parent-of-link">
        <Link to={`host/vans/${van.id}`} key={van.id} className="host-van-card">
          <img src={van.imageUrl} alt={van.description} />
          <div>
            <p className="host-van-name">{van.name}</p>
            <p className="host-van-price">${van.price}/day</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <section className="container host-van-container">
        <h2>Your listed vans</h2>
        <div className="host-van-list">
          {hostVanData.length > 0 ? (
            <div key={nanoid()}>{hostVanElements}</div>
          ) : (
            <h5>Loading...</h5>
            // maybe this in case the host has no vans for rent
            // <h5>You currently have no vans listed for rent</h5>
          )}
        </div>
      </section>
    </>
  );
};

export default HostVans;
