import axios from "axios";
import React from "react";
import FavouritesButton from "./FavouritesButton";

function FavResultCard({
  xid,
  title,
  city,
  country,
  suburb,
  description,
  image,
  uid,
  deleteFavourite
}) {
  
  

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
          <button className="card-btn">See More</button>
          <FavouritesButton deleteFavourite={deleteFavourite} xid={xid}/>
        </div>
      </div>
    </div>
  );
}

export default FavResultCard;
