/**import apiData from index.js as a prop.
 * map over the data to display on the page.
 * will be needing address.city,country,suburb,
 * data.data.name,image
 * data.data.wikipedia_extracts.text
 */

import ApiResultCard from "./ApiResultCard";

import React from "react";

function ApiResultsDisplay({ apiData }) {
  return (
    <div>
      {apiData &&
        apiData.map((item) => {
          console.log(item.preview?.source, "image");

          if (
            item.name &&
            item.address.city &&
            item.address.country &&
            item.address.suburb &&
            item.wikipedia_extracts?.text &&
            item.preview?.source
          ) {
            return (
              <ApiResultCard
                title={item.name}
                city={item.address.city}
                country={item.address.country}
                suburb={item.address.suburb}
                text={item.wikipedia_extracts.text}
                image={item.preview.source}
              />
            );
          }
        })}
    </div>
  );
}

export default ApiResultsDisplay;
