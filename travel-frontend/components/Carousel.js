import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import havanaPic from "../public/Havana-1957-09.jpg";
import bermudaPic from "../public/Bermuda Triangle of Romania.jpg";

import panoPic from '../public/1_panoptican.jpg';



const featuredPlaces = [havanaPic, bermudaPic, panoPic];

let count = 0;
let carouselInterval;
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselRef = useRef();

  const removeAnimation = () => {
    carouselRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    carouselRef.current.addEventListener("animationend", removeAnimation);
    carouselRef.current.addEventListener("mouseenter", pauseCarousel);
    carouselRef.current.addEventListener("mouseleave", startCarousel);
    startCarousel();
    // Cleaner function
    return () => {
      pauseCarousel();
    };
  }, []);

  const startCarousel = () => {
    carouselInterval = setInterval(() => {
      handleOnClickNext();
    }, 3000);
  };

  const pauseCarousel = () => {
    clearInterval(carouselInterval);
  };

  // Logic to lop through all pics infinetely
  const handleOnClickNext = () => {
    count = (count + 1) % featuredPlaces.length;
    setCurrentIndex(count);
    carouselRef.current.classList.add("fade-anim");
  };
  const handleOnClickPrev = () => {
    const placesLength = featuredPlaces.length;
    count = (currentIndex + placesLength - 1) % placesLength;
    setCurrentIndex(count);
    carouselRef.current.classList.add("fade-anim");
  };

  return (
    <>
      <div className=" absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-center items-center bg-off-white bg-opacity-50 mt-44">
        <Image
          src={featuredPlaces[currentIndex]}
          alt="Places to visit"
          ref={carouselRef}
          className=" cursor-pointer rounded-md sm:h-2/3 sm:w-4/5 sm:aspect-video lg:h-1/5 lg:w-5/12 lg:mx-auto lg:mb-8 hover:opacity-70 justify-center"
        />
        <div className=" absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <img
            src="/left-arrow.png"
            onClick={handleOnClickPrev}
            className="opacity-80 h-12  pl-1  hover:opacity-50 transition cursor-pointer"
          />
          <img
            src="/right-arrow.png"
            onClick={handleOnClickNext}
            className="opacity-80 h-12  pl-1  hover:opacity-50 transition cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
