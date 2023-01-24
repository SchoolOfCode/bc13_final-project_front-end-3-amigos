import axios from "axios";
import React from "react";
import FavouritesButton from "./FavouritesButton";

// Pull down URL to use inside of handleclick
const URL = "https://final-project-backend-d6jk.onrender.com/userfavourites/";

// Function that pulls data from the card and sends a post request to put it in the database.
// PROBLEMS:
// the key is currently undefined (but rest of the data coming through OK)
// SO: a) is it going to the database? and
// b) if so, which values are missing/what is it being stored as? e.g., what ID is in there?

// function handleClick({ title, city, country, suburb, description, image }) {
//   const user_id = 4;
//   const newFavourite = {
//     user_id,
//     title,
//     city,
//     country,
//     suburb,
//     description,
//     image,
//   };
//   console.log("new Favourite:", newFavourite);
//   axios
//     .post(`${URL}`, newFavourite)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

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
  // console.log("wikipedia:", wikipedia)
  // console.log("new favourite in API RESULT CARD:", newFavourite);

  // const handleClick = () => {
  //   console.log("wiki at HC", wikipedia)
  //   document.location.href = {wikipedia};
  // };

  return (
    <div className="card-container group">
      <div className="single-card">
        <img src={image} className="card-image" />
      </div>
      <div className=" card-gradient-bg">
        <div className=" card-info-transition">
          <h3 className="card-title">{title}</h3>
          <p className="card-city">{city}</p>
          <p className="card-location">{country}</p>
          <p className="card-location">{suburb}</p>
          <p className="card-desc">{description}</p>

          <div className='flex mb-1 space-x-14'>
          <button className="card-btn">See More</button>

       <button><a href={wikipedia} target="_blank">See more</a></button>

          <FavouritesButton props={newFavourite} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiResultCard;
