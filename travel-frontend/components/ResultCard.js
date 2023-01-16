import React from "react";
import Image from "next/image";

export default function ResultCard({
	id,
	title,
	city,
	country,
	suburb,
	description,
	image,
}) {
	return (
		<div className="card-container group">
		<div className="single-card">

			<img src={image}  className="card-image"/>
			</div>
			<div className=" card-gradient-bg">
			<div className=" card-info-transition">
				<h3 className="card-title">{title}</h3>
				<p className="card-city">{city}</p>
				<p className="card-location">{country}</p>
				<p className="card-location">{suburb}</p>
				<p className="card-desc">{description}</p>
				<button className="card-btn">See More</button>
				<p>{id}</p>
				</div>
				</div>
				

			
		</div>
		// {/* <div className="container mx-auto py-36 px-8 ">
		// <div className="shadow-xl rounded-lg mx-auto ">

		// 	<img src={image} fill={true} className="rounded-t-lg aspect-square m-auto "/>
		// 	<div className="p-5 text-center">
		// 		<h3 className="text-3xl font-bold text-slate-700 mb-3">{title}</h3>
		// 		<p>{city}</p>
		// 		<p>{country}</p>
		// 		<p>{suburb}</p>
		// 		<p className="text-lg font-normal text-gray-600">{description}</p>
		// 		<p>{id}</p>
		// 		</div>
				

		// 	</div>
		// </div> */}
	);
}
