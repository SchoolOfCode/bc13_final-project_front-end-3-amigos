import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import FavResultCardContainer from "../components/Favourites/FavResultsCardContainer";


function Favourites() {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const [fav, setFav] = useState([]);
  console.log(user)
  
  useEffect(() => {
      async function favData() {
        const URL = process.env.NEXT_PUBLIC_POSTGRES_URL
        const res = await axios.get(URL+ `abc/favourites`);
        console.log(res);
        setFav(res.data.payload);
      }
      favData();
  }, []);

  console.log(fav)
  async function deleteFavourite(xid){
    const URL = process.env.NEXT_PUBLIC_POSTGRES_URL
    const cardXid =xid.target.id
    const removeFavourite = await axios.delete(URL + `abc/favourites/${cardXid}`)
    const getNewData = await axios.get(URL + `abc/favourites`)
    setFav(getNewData.data.payload);
    console.log(xid.target.id);
  }
  

console.log(fav);

  return (
    <FavResultCardContainer fav={fav} deleteFavourite={deleteFavourite}/> 
   
  );
}

export default Favourites;
