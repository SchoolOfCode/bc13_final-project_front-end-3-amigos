import axios from "axios";
import React, { useEffect, useState } from "react";

function Favourites() {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    async function favData() {
      const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
      const res = await axios.get(URL);
      console.log(res);
      setFav(res.data.payload);
      console.log(fav);
    }
    favData();
  }, []);
  console.log(fav);

  return (
    <div className="card-display">
      {fav &&
        fav.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} />
              <p>{item.city}</p>
              <p>{item.country}</p>
              <p>{item.suburb}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Favourites;
