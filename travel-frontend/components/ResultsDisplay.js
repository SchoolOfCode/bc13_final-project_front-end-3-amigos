import React from 'react'
import ResultCard from './ResultCard'

export default function ResultsDisplay(props) {
  return (

    <div className="card-display">
    {props.data.map((item)=> {return <ResultCard id={item.id} title={item.title} city={item.city} country={item.country} suburb={item.suburb} description={item.description} image={item.image} />})}

    </div>
  )
}
