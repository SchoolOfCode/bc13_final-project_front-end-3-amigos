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
      <div className="group card-container ">
        <div className="single-card ">
        <img src={image} className="card-image " />
        </div>
            <div className=" card-gradient-bg">
          <div className=" card-info-transition">
              <h3 className="card-title ">{title}</h3>
              <p className="card-city">{suburb +',  ' +city}</p>
        <p className="card-country">{country}</p>
        <div className= 'desc-div'>
              <p className="card-desc">{description}</p>
        </div>
                <div className='card-action-container'>
                  <button className="card-btn">
                    <a href={wikipedia} target="_blank">
                      See more
                    </a>
                  </button>
                    <FavouritesButton props={newFavourite}  />
          </div>
        </div>
        </div>
        
      </div>
    );
  }
  

export default ApiResultCard;
