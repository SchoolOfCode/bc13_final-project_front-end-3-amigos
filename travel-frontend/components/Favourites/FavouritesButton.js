
import React, { useState } from "react";
import Image from "next/image";
import fullHeart from "../../public/love.png";
import axios from "axios";


function FavouritesButton({deleteFavourite, xid}) {
  const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
  return (
    <>
      <button xid = {xid} onClick={() => {deleteFavourite(xid)}}>
      <Image
      src={fullHeart}
      className="p-1 rounded-full bg-opacity-70 bg-off-white"
      width={40}
      alt="a clicked favourite button"
    />
      </button>
    </>
  );
}

export default FavouritesButton;
