import React, { useState } from "react";

export default function SearchBar({ handleClick }) {
  const [searchTerm, setSearchTerm] = useState("");

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(event.target.value);
      handleClick(event.target.value);
    }
  };
  return (
    <div className="search-bar-container">
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={(event) => onKeyDown(event)}
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
