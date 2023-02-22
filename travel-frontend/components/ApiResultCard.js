import React from "react";
import FavouritesButton from "./FavouritesButton";

function ApiResultCard({
  id,
  title,
  city,
  country,
  suburb,
  description,
  image,
  wikipedia,
}) {
  const newFavourite = {
    xid: id,
    title,
    city,
    country,
    suburb,
    description,
    image,
  };

 
  
    return (
      <div className="group card-containerR ">
        <div className="single-cardR ">
        <img src={image} className="card-imageR " />
        </div>
            <div className=" card-gradient-bgR">
          <div className=" card-info-transitionR">
              <h3 className="card-titleR ">{title}</h3>
              <p className="card-cityR">{suburb +',  ' +city}</p>
        <p className="card-countryR">{country}</p>
              {/* <p className="card-suburbR">{suburb}</p> */}
              <p className="card-descR">{description}</p>
                <div className='card-action-containerR'>
                  <button className="card-btnR">
                    <a href={wikipedia} target="_blank">
                      See more
                    </a>
                  </button>
                  <button className=" card-btnR">
                    <FavouritesButton props={newFavourite}  />
                  </button>
    
          </div>
        </div>
        </div>
        
      </div>
    );
  }
  
  

//   return (
//     <div className="card-container group">
//       <div className="single-card">
//         <img src={image} className="card-image" />
//       </div>
//       <div className=" card-gradient-bg">
//         <div className=" card-info-transition">
//           <h3 className="card-title">{title}</h3>
//           <p className="card-city">{city}</p>
//           <p className="card-location">{country}</p>
//           <p className="card-location">{suburb}</p>
//           <p className="card-desc">{description}</p>

//           <div className='card-action-container'>
          
//        <button className="card-btn"><a href={wikipedia} target="_blank">See more</a></button>

//           <FavouritesButton props={newFavourite} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default ApiResultCard;
