import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Layout({ children }) {
	return (
		<div className='flex flex-col min-w-[100%] min-h-[100%] '>
			<NavBar />
			{children}
			<ThemeSwitcher />
			<Footer />
		</div>
	);
}
