import React, { useState } from "react";

export default function SearchBar({ handleClick }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="search-bar-container">
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="search-bar"
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
