

import FavResultCard from "./FavResultCard";

import React from "react";

function FavResultCardContainer({ fav, deleteFavourite }) {
  return (
    <div className="fav-card-display">
      {fav &&
        fav.map((item) => {
           
            return (
              <FavResultCard
                key={item.xid}
                xid={item.xid}
                title={item.title}
                city={item.city}
                country={item.country}
                suburb={item.suburb}
                description={item.description}
                image={item.image}
                uid={item.uid}
                deleteFavourite={deleteFavourite}
              />
            );
            
        })}
    </div>
  );
}

export default FavResultCardContainer;
