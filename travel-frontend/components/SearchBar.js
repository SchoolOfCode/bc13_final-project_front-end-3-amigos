
import React, {useState} from "react";


export default function SearchBar({handleClick}) {
	const [searchTerm, setSearchTerm] = useState("")
	return (
		<div className="flex justify-center mt-48  lg:mx-auto">
			<input onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
		className="bg-off-white lg:w-1/3 sm:rounded-l-lg pl-1 text-black placeholder-black" type="text" placeholder="Search..."></input>
			<button onClick={() => {
          handleClick(searchTerm);
        }}
		className=" bg-dark-green text-off-white drop-shadow-lg sm:rounded-r-lg p-2">Search</button>
		</div>
	);
}
