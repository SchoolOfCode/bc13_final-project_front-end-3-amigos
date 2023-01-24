import React, { useState } from "react";
import Image from "next/image";
import fullHeart from "../../public/love.png";

function FavouritesButton({ deleteFavourite, xid }) {
  // console.log(xid);
  const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
  return (
    <>
      <Image
        id={xid}
        onClick={(id) => {
          deleteFavourite(id);
        }}
        src={fullHeart}
        className="p-1 rounded-full bg-opacity-70 bg-off-white"
        width={40}
        alt="a clicked favourite button"
      />
    </>
  );
}

export default FavouritesButton;
