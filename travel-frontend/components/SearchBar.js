import React from "react";
import { useState } from "react";

export default function SearchBar({ handleClick }) {
  // State variable to hold the value coming from input field
  const [searchTerm, setSearchTerm] = useState("");

  // handleChange function to target the value thats put in input field
  function handleChange(e) {
    // set the value to setSearchTerm
    setSearchTerm(e.target.value);
  }

  console.log(searchTerm);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      ></input>
      {/* handleClick function to display data on the click of search button */}
      <button
        type="submit"
        onClick={() => {
          handleClick(searchTerm);
        }}
      >
        Search
      </button>
    </div>
  );
}
