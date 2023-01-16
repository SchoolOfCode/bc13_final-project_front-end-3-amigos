import React from 'react'
import ResultCard from './ResultCard'

export default function ResultsDisplay(props) {
  return (

    <div className="card-display">
      {/* iterating through each item of data array[3] and rendering the required props  */}
      {recData.map((item) => {
        return (
          <ResultCard
            key={item.id}
            image={item.image}
            title={item.title}
            city={item.city}
            country={item.country}
            suburb={item.suburb}
            description={item.description}
          />
        );
      })}

    </div>
  )
}
