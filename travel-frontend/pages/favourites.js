import axios from "axios";
import React, { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import FavResultCardContainer from "../components/Favourites/FavResultsCardContainer";
import Footer from "../components/Footer.js";

function Favourites() {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const [fav, setFav] = useState([]);
  console.log(user);

  

  console.log(fav);
  async function deleteFavourite(xid) {
    const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
    const cardXid = xid.target.id;
    const removeFavourite = await axios.delete(
      URL + `${user.uid}/favourites/${cardXid}`
    );
    const getNewData = await axios.get(URL + `${user.uid}/favourites`);
    setFav(getNewData.data.payload);
    console.log(xid.target.id);
  }

  console.log(fav);

  useEffect(() => {
    async function favData() {
      if(user) {
        const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
        const userFavouritesApi = `${URL}${user.uid}/favourites`;
        const res = await axios.get(userFavouritesApi);
        setFav(res.data.payload);
      }
    }
    favData();
  }, [user]);
  // console.log(fav);

  return (
    <div>
      <FavResultCardContainer fav={fav} deleteFavourite={deleteFavourite} />
      <Footer />
    </div>
  );
}

export default Favourites;
