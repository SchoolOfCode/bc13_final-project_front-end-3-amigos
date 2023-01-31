import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }) {
	return (
		<div className='min-w-full min-h-full'>
			<NavBar />
			{children}
		</div>
	);
}
