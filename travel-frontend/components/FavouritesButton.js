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

function FavouritesButton(newFavourite) {
  //console.log("new favourite in FAV BUTTON 🚨:", newFavourite);

  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  // const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
  const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;

  const uid = user.uid;
  // console.log("userUid:", uid);
  const favouritesApiUrl = `${URL}${uid}/favourites`;

  async function postRequest(newFavourite) {
    // console.log("userUid in Post request:", uid);
    // console.log("postRequest content:", newFavourite.props, uid);
    const headers = {
      "Content-Type": "application/json",
    };

    const res = await axios.post(favouritesApiUrl, newFavourite.props, {
      headers: headers,
    });
    console.log(res);
  }

  // Make an axios delete request with UID, XID, UID attached to the body and XID in the path

  const xid = newFavourite.props.xid;
  async function deleteRequest(xid, uid) {
    console.log("delete request xid:", xid);
    console.log("userUid in Delete request:", uid);
    const res = await axios.delete(`${favouritesApiUrl}/${xid}`);
    console.log(res);
  }

// Toggle favourite function 
  async function toggleFavourite(newFavourite) {
    if (!user) {
      alert("please log in");
    }

    // IF/ELSE STATEMENT FOR POST & DELETE
    if (user) {
      if (favourite === true) {
        await deleteRequest(xid, uid);
        console.log("unfavourited clicked!");
      } else {
        await postRequest(newFavourite);
        console.log("Favourited clicked!");
      }
    }

    // TOGGLE HEART STATE
    setFavourite(!favourite);
    console.log("state toggled to:", favourite);
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


  return (
    <>
      <button onClick={() => toggleFavourite(newFavourite)}>
        {favourite === true ? currentlyAFavourite : notAFavourite}
      </button>
    </>
  );
}

export default FavouritesButton;
