import React, { useState } from "react";

export default function SearchBar({ handleClick }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex justify-center mt-5% lg:mx-auto">
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="pl-1 text-black placeholder-black bg-white lg:w-1/3 sm:rounded-lg"
        type="text"
        placeholder="Donde?"
      ></input>
      <button
        onClick={() => {
          handleClick(searchTerm);
        }}
        className="font-bold standard-btn"
      >
        Search
      </button>
    </div>
  );
}
