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
    }
    favData();
  }, []);
  console.log(fav);

  return (
    <div className="card-display">
      {fav &&
        fav.map((i) => {
          return (
            <div key={i.id}>
              <img src={i.image} />
              <p>{i.city}</p>
              <p>{i.country}</p>
              <p>{i.suburb}</p>
              <p>{i.description}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Favourites;
