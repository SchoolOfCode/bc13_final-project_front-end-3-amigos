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
  // const { id, title, city, country, suburb, description, image } = newFavourite;
  const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
  const uid = user.uid;
  console.log("userUid:", uid);

  async function postRequest(newFavourite) {
    console.log("userUid in Post request:", uid);
    console.log("postRequest content:", newFavourite.props);
    const res = await axios.post(`${URL}`, {
      // uid: newFavourite.props.uid,
      uid,
      xid: newFavourite.props.xid,
      title: newFavourite.props.title,
      city: newFavourite.props.city,
      country: newFavourite.props.country,
      suburb: newFavourite.props.suburb,
      description: newFavourite.props.description,
      image: newFavourite.props.image,
    });
    console.log(res);
  }

  /**  Make an axios delete request with UID, Xid attached to the body &
               send to home endpoint*/
  const { xid } = newFavourite.props.xid;
  async function deleteRequest(xid) {
    console.log("userUid in Delete request:", uid);
    console.log(xid, uid);
    const res = await axios.delete(`${URL}`, { data: { xid } });
    console.log(res);
  }

  // DeFINE MEGA FUNCTION OF TOGGLEFAVOURITE!

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
  //console.log("favourite state initially:", favourite);

  // IN THE HANDLECLICK WE WANT:
  // - 'favourite' state to be toggled so it renders and functions differently the next time it's clicked
  // - IF the heart is empty, the click sends off a POST request
  // - IF the heart is FULL, click sends a DELETE request

  //const toggleFavourite = async () => {
  // Set state for selected favourite

  // if (user) {
  //   setFavourite(async (favourite) => {
  //     if (favourite === true) {
  //       await deleteRequest(id, uid);
  //       console.log("unfavourited clicked!");
  //     }
  //     if (favourite === false) {
  //       console.log("favourite clicked");
  //       await postRequest(
  //         uid,
  //         id,
  //         title,
  //         city,
  //         country,
  //         suburb,
  //         description,
  //         image
  //       )
  //       console.log("Favourited!");
  //     }

  //     // switched favourite state boolean
  //     return !favourite;
  //   });
  //}

  // onClick if the heart is full send delete request else send post request.
  // Check the functionalities.
  return (
    <>
      <button onClick={() => toggleFavourite(newFavourite)}>
        {favourite === true ? currentlyAFavourite : notAFavourite}
      </button>
    </>
  );
}

export default FavouritesButton;
