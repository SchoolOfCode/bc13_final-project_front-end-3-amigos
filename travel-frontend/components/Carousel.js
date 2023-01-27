import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import havanaPic from "../public/Havana-1957-09.jpg";
import bermudaPic from "../public/Bermuda Triangle of Romania.jpg";
import panoPic from "../public/1_panoptican.jpg";
import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from "react-icons/bs"
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
 
      <div className="carousel-container ">

<div className="relative left-0 w-full h-10 ">
                  <BsArrowLeftCircleFill
            src="/left-arrow.png"
            alt="left arrow"
            onClick={handleOnClickPrev}
            className="z-10 object-contain ml-4 text-2xl transition cursor-pointer lg:text-4xl sm:text-4xl opacity-80 hover:opacity-50"
          />
          
          </div>
          
          <div className="relative w-full">
        <Image
          src={featuredPlaces[currentIndex]}
          alt="Places to visit"
          ref={carouselRef}
          className="z-0 object-fill min-w-[90vw] min-h-[20vh] rounded-md cursor-pointer aspect-video sm:min-w-[90vw]  lg:h-1/5 lg:w-5/12 lg:mx-auto lg:mb-8 hover:opacity-70"
        />
  </div>


<div className="relative w-full h-10">
          <BsArrowRightCircleFill
            src="/right-arrow.png"
            onClick={handleOnClickNext}
            alt="right arrow"
            className="z-10 object-contain mr-4 text-2xl transition cursor-pointer lg:text-4xl sm:text-4xl opacity-80 hover:opacity-50"
          />
          </div>
 
      </div>

  );
}
