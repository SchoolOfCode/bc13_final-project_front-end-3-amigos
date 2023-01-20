/* 
PLAN: 
Create a state to store if button has been clicked
render empty heart
when clicked in render full heart
level 2: user is signed only fire post route then 
*/
import React, { useState } from "react";
import Image from "next/image";
import emptyHeart from "../public/empty-heart.png";
import fullHeart from "../public/love.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase";
import axios from "axios";
import { async } from "@firebase/util";

function FavouritesButton({
  id,
  title,
  city,
  country,
  suburb,
  description,
  image,
}) {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
  const uid = user.uid;

  async function postRequest(
    uid,
    id,
    title,
    city,
    country,
    suburb,
    description,
    image
  ) {
    const res = await axios.post(`${URL}`, {
      uid,
      id,
      title,
      city,
      country,
      suburb,
      description,
      image,
    });
    console.log(res);
  }

  /**  Make an axios delete request with UID, Xid attached to the body &
               send to home endpoint*/
  async function deleteRequest(id, uid) {
    const res = await axios.delete(`${URL}`, { data: { id, uid } });
    console.log(res);
  }

  const currentlyAFavourite = (
    <Image
      src={fullHeart}
      className="p-1 rounded-full bg-opacity-70 bg-off-white"
      width={40}
      alt="a clicked favourite button"
    />
  );
  const notAFavourite = (
    <Image
      src={emptyHeart}
      className="p-1 rounded-full bg-opacity-70 bg-off-white"
      width={40}
      alt="an unclicked favourite button"
    />
  );

  const [favourite, setFavourite] = useState(false);

  // probably need to pass in XID for this
  const toggleFavourite = () => {
    // Set state for selected favourite

    if (user) {
      setFavourite(async (favourite) => {
        if (favourite === true) {
          await postRequest(
            uid,
            id,
            title,
            city,
            country,
            suburb,
            description,
            image
          );
          console.log("unfavourited clicked!");
        }
        if (favourite === false) {
          await deleteRequest(id, uid);

          console.log("Favourited!");
        }

        // switched favourite state boolean
        return !favourite;
      });
    }
    if (!user) {
      alert("please log in");
    }
    console.log(user);
  };

  return (
    <>
      <button onClick={() => toggleFavourite()}>
        {favourite === true ? currentlyAFavourite : notAFavourite}
      </button>
    </>
  );
}

export default FavouritesButton;
