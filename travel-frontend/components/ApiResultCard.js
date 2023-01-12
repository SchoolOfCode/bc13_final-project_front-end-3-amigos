import React from "react";

function ApiResultCard({ title, city, country, suburb, text, image }) {
  return (
    <div>
      <img src={image} />
      <ol>
        <li>{title}</li>
        <li>{city}</li>
        <li>{country}</li>
        <li>{suburb}</li>
        <li>{text}</li>
      </ol>
    </div>
  );
}

export default ApiResultCard;
