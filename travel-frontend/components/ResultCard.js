import React from "react";
import Image from "next/image";

export default function ResultCard({
  id,
  title,
  city,
  country,
  suburb,
  description,
  image,
}) {
  return (
    <div>
      <ol key={id}>
        <li>{title}</li>
        <li>{city}</li>
        <li>{country}</li>
        <li>{suburb}</li>
        <li>{description}</li>
        <img src={image} width="200px" />
      </ol>
    </div>
  );
}
