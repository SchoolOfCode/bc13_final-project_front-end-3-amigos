import React from "react";

function ApiResultCard({ title, city, country, suburb, text, image }) {
  return (
    <div className="card-container group">
		<div className="single-card">
      <img src={image}  className="card-image"/>
      </div>
      <div className=" card-gradient-bg">
			<div className=" card-info-transition">
				<h3 className="card-title">{title}</h3>
				<p className="card-city">{city}</p>
				<p className="card-location">{country}</p>
				<p className="card-location">{suburb}</p>
				<p className="card-desc">{text}</p>
				<button className="card-btn">See More</button>
    </div>
    </div>
    </div>
  );
}

export default ApiResultCard;
