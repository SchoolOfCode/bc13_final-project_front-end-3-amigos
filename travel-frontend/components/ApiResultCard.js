import axios from "axios";
import React from "react";

// Pull down URL to use inside of handleclick
const URL = process.env.NEXT_PUBLIC_POSTGRES_URL

// Function that pulls data from the card and sends a post request to put it in the database.
// PROBLEMS: 
  // the key is currently undefined (but rest of the data coming through OK)
  // SO: a) is it going to the database? and 
  // b) if so, which values are missing/what is it being stored as? e.g., what ID is in there? 

function handleClick({ key, title, city, country, suburb, text, image }) {
  const newFavourite = {
    key,
    title,
    city,
    country,
    suburb,
    text,
    image,

  }
  console.log("new Favourite:", newFavourite)
  axios.post(`${URL}/`, newFavourite);
}

function ApiResultCard({ key, title, city, country, suburb, text, image }) {
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
          <p className="card-desc">{text}</p>
          <button className="card-btn">See More</button>
          <button
            className="card-btn"
            onClick={()=>handleClick({key, title, city, country, suburb, text, image
            })}
          >
            FAVOURITE!
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApiResultCard;
