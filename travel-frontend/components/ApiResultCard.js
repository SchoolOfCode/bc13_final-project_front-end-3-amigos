import React from "react";
import FavouritesButton from "./FavouritesButton";

function ApiResultCard({
  id,
  title,
  city,
  country,
  suburb,
  description,
  image,
  wikipedia,
}) {
  const newFavourite = {
    xid: id,
    title,
    city,
    country,
    suburb,
    description,
    image,
  };

  return (
    <div className="card-container group">
      <div className="single-card">
        <img src={image} className="card-image" />
      </div>
      <div className=" card-gradient-bg">
        <div className=" card-info-transition">
          <h3 className="card-title">{title}</h3>
          <p className="card-city">{city}</p>
          <p className="card-location">{country}</p>
          <p className="card-location">{suburb}</p>
          <p className="card-desc">{description}</p>

          <div className='flex mb-1 space-x-14'>
          <button className="card-btn">See More</button>

       <button><a href={wikipedia} target="_blank">See more</a></button>

          <FavouritesButton props={newFavourite} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiResultCard;
