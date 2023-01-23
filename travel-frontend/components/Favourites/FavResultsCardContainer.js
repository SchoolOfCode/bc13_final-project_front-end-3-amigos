

import FavResultCard from "./FavResultCard";

import React from "react";

function ApiResultsDisplay({ fav, deleteFavourites }) {
  return (
    <div className="card-display">
      {fav &&
        fav.map((item) => {
           
            return (
              <FavResultCard
                key={item.xid}
                id={item.xid}
                title={item.title}
                city={item.city}
                country={item.country}
                suburb={item.suburb}
                description={item.description}
                image={item.image}
                uid={item.uid}
                deleteFavourites={deleteFavourites}
              />
            );
            
        })}
    </div>
  );
}

export default ApiResultsDisplay;
