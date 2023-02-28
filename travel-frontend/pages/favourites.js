import axios from "axios";
import React, { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import FavResultCardContainer from "../components/Favourites/FavResultsCardContainer";
import Footer from "../components/Footer.js";
import DynamicSearchBar from "../components/Favourites/DynamicSearch.js";
import JournalForm from "../components/JournalForm.js";

function Favourites() {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const [fav, setFav] = useState([]);
  const [filterData, setFilterData] = useState([]);

  // console.log(user);

  // console.log(fav);
  async function deleteFavourite(xid) {
    const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
    const cardXid = xid.target.id;
    const removeFavourite = await axios.delete(
      URL + `${user.uid}/favourites/${cardXid}`
    );
    const getNewData = await axios.get(URL + `${user.uid}/favourites`);
    setFav(getNewData.data.payload);
    setFilterData(getNewData.data.payload);
    // console.log(xid.target.id);
  }

  // console.log(fav);

  useEffect(() => {
    async function favData() {
      if (user) {
        const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
        const userFavouritesApi = `${URL}${user.uid}/favourites`;
        const res = await axios.get(userFavouritesApi);
        setFav(res.data.payload);
        setFilterData(res.data.payload);
      }
    }
    favData();
  }, [user]);
  // console.log(fav);

  function handleSearch(e) {
    let value = e.target.value;
    const data = fav.filter((item) => {
      return item.city
        .toLowerCase()
        .toString()
        .includes(value.toString().toLowerCase());
    });
    setFilterData(data);
  }
  // console.log(filterData);

  return (
    <>
      <DynamicSearchBar handleSearch={handleSearch} />
      {fav && (
        <FavResultCardContainer
          fav={filterData && filterData}
          deleteFavourite={deleteFavourite}
        />
      )}
      <JournalForm />
    </>
  );
}

export default Favourites;
