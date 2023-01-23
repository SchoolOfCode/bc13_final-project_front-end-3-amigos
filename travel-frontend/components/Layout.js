import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }) {
	return (
		<div className=''>
			<NavBar />
			{children}
		</div>
	);
}
