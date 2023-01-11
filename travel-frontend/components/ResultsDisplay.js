import React from "react";
import ResultCard from "./ResultCard";

export default function ResultsDisplay({ data }) {
  // const { id, title, city, country, suburb, description, image } = props;
  return (
    <div>
      {data.map((item) => {
        return (
          <ResultCard
            key={item.id}
            title={item.title}
            city={item.city}
            country={item.country}
            suburb={item.suburb}
            description={item.description}
            image={item.image}
          />
        );
      })}
    </div>
  );
}
