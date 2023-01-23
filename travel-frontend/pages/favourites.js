import axios from "axios";
import React, { useEffect, useState } from "react";
import ApiResultCard from "../components/ApiResultCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase";

function Favourites() {
  const [fav, setFav] = useState([]);

  const auth = getAuth(app);
  // anytime get the current user at any time with firebase.auth().currentUser.
  console.log(auth)
  const uid = auth.currentUser.uid;
console.log("uid:", uid)

  useEffect(() => {
    async function favData() {
      const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;

      const userFavouritesApi = `${URL}${uid}/favourites`;

      const res = await axios.get(userFavouritesApi);

      setFav(res.data.payload);
    }
    favData();
  }, []);
  // console.log(fav);

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
