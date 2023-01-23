/**import apiData from index.js as a prop.
 * map over the data to display on the page.
 * will be needing address.city,country,suburb,
 * data.data.name,image
 * data.data.wikipedia_extracts.text
 */

import ApiResultCard from "./ApiResultCard";

import React from "react";

function ApiResultsDisplay({ fav }) {
  return (
    <div className="card-display">
      {fav &&
        fav.map((item) => {
           
            return (
              <ApiResultCard
                key={item.xid}
                id={item.xid}
                title={item.title}
                city={item.city}
                country={item.country}
                suburb={item.suburb}
                description={item.description}
                image={item.image}
                uid={item.uid}
              />
            );
            
        })}
    </div>
  );
}

export default ApiResultsDisplay;
