import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../server";

const VanDetails = () => {
  const params = useParams();
  // console.log(params);

  const [vanInfo, setVanInfo] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanInfo(data.vans));
  }, [params.id]);

  return (
    <div>
      {vanInfo ? (
        <div className="van-details-page container">
          <img
            src={vanInfo.imageUrl}
            alt={vanInfo.description}
            className="van-img"
          />
          <button
            className={`btn-${vanInfo.type} btn-van-card btn-van-info-type`}
          >
            {vanInfo.type}
          </button>
          <p className="van-info-name">{vanInfo.name}</p>
          <p className="van-info-price">
            ${vanInfo.price}
            <span>/day</span>
          </p>
          <p className="van-info-desc">{vanInfo.description}</p>
          <button className="btn-orange btn-orange-van-info">
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetails;
