/**import apiData from index.js as a prop.
 * map over the data to display on the page.
 * will be needing address.city,country,suburb,
 * data.data.name,image
 * data.data.wikipedia_extracts.text
 */

import ApiResultCard from "./ApiResultCard";

import React from "react";

function ApiResultsDisplay({ apiData, postData }) {
  return (
    <div className="card-display">
      {apiData &&
        apiData.map((item) => {
      
          {
            
            return (
              <ApiResultCard
                key={item.xid}
                id={item.xid}
                title={item.name}
                city={item.address.city}
                country={item.address.country}
                suburb={item.address.suburb}
                description={item.wikipedia_extracts.text}
                image={item.preview.source}
                postData={postData}
                wikipedia={item.wikipedia}
              />
            );
          }
        })}
    </div>
  );
}

export default ApiResultsDisplay;
