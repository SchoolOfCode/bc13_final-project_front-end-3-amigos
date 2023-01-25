import React, { useState } from "react";

export default function SearchBar({ handleClick, searchError }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorText, setErrorText] = useState("")

function changeErrorText(searchError){
  if (searchError){
    setErrorText("")
  } else {setErrorText("No results found!")}
}

  console.log("search error IN SEARCHBAR!:", searchError)
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
        placeholder= {searchError ? "No result found, try again!" : "Donde?"}
       
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
