import React from 'react'
import ResultCard from './ResultCard'


type props = {
    title: string,
    user_id: number,
    id: number,
    city: string, 
    country: string,
    suburb: string,
    description: string,
    image: string
}

export default function ResultsDisplay() {

    // array.map
    // returning individual resultscards componetns 

    return(
        // data.map((item, )=>{

            
                <div>
                   <ResultCard /> 
                </div>
            

              )
        }
       
//     )

// }
