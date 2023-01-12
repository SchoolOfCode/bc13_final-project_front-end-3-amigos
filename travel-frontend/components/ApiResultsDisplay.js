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
      {apiData.map((item) => {
        return (
          <ApiResultCard
            title={item.name}
            image={item.image}
            city={item.data.address.city}
            country={item.address.country}
            suburb={item.address.suburb}
            text={item.wikipedia_extracts.text}
          />
        );
      })}
    </div>
  );
}

export default ApiResultsDisplay;
