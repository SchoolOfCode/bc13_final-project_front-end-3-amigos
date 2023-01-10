import React from 'react'
import ResultCard from './ResultCard'


type displayProps = {
    id: number,
      user_id: number,
      title: string,
      city: string, 
      country: string,
      suburb: string,
      description: string,
      image: string
  }

export default function ResultsDisplay(props: displayProps) {

    // array.map
    // returning individual resultscards componetns 

    return(
        // data.map((item, )=>{

            
                <div>
                   <ResultCard {...props}/> 
                </div>
            

              )
        }
       
//     )

// }
