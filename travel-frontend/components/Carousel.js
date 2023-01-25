import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import havanaPic from "../public/Havana-1957-09.jpg";
import bermudaPic from "../public/Bermuda Triangle of Romania.jpg";
import panoPic from "../public/1_panoptican.jpg";

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
 
      <div className="relative flex mt-[30vh] sm:mt-[40vh] md:mt-[55vh] lg:mt-[67vh] xl:mt-[105vh] 2xl:mt-[130vh]  items-center justify-center w-full h-full px-3 transform -translate-y-1/2 bg-opacity-50 bg-off-white my-1/3">

<div className="relative left-0 w-full h-10 ">
                  <Image
            src="/left-arrow.png"
            alt="left arrow"
            onClick={handleOnClickPrev}
            fill
            className="z-10 object-contain pl-1 transition cursor-pointer opacity-80 hover:opacity-50"
          />
          </div>
          <div className="relative w-full">
        <Image
          src={featuredPlaces[currentIndex]}
          alt="Places to visit"
          ref={carouselRef}
          className="z-0 object-fill min-w-[95vw] min-h-[20vh] rounded-md cursor-pointer aspect-video sm:min-w-[90vw]  lg:h-1/5 lg:w-5/12 lg:mx-auto lg:mb-8 hover:opacity-70"
        />
  </div>


<div className="relative w-full h-10">
          <Image
            src="/right-arrow.png"
            onClick={handleOnClickNext}
            alt="right arrow"
            fill
            className="z-10 object-contain pl-1 transition cursor-pointer opacity-80 hover:opacity-50"
          />
          </div>
 
      </div>

  );
}
