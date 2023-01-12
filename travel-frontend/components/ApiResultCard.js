import React from "react";

function ApiResultCard({ title, image, city, country, suburb }) {
  return (
    <div>
      <ol>
        <li>{title}</li>
        <li>{image}</li>
        <li>{city}</li>
        <li>{country}</li>
        <li>{suburb}</li>
      </ol>
    </div>
  );
}

export default ApiResultCard;
