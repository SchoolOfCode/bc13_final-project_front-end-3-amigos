import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import havanaPic from "../public/Havana-1957-09.jpg";
import bermudaPic from "../public/Bermuda Triangle of Romania.jpg";
import panoPic from "../public/1_panoptican.jpg";
import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from "react-icons/bs"
const featuredPlaces = [
  {
    Image:havanaPic,
    Desc:"Cuban eats & drinks in a buzzing restaurant & rum bar evocative of Havana in the 1950s." ,
  }, 
  {
    Image:bermudaPic,
    Desc:"WARPED TREES FILL THIS FOREST, their skeletal figures twisting and spiraling, making it seem as though they’re contorting themselves to reach out and touch you. An eerie silence fills the air, interrupted only by the footsteps of unseen figures. Given its eerie atmosphere, it’s no wonder the Hoia-Baciu Forest is said to be one of the most haunted forests in the world. As such, it’s a place that lends well to stories steeped with darkness." ,
  }, 
  {
    Image:panoPic,
    Desc:"Famed as the place where 16-year-old Stan Laurel made his debut, the Britannia Panopticon is the oldest surviving music hall in the world." ,
  }];

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
<div className="carousel-title-container" >
<h2 className="carousel-title">Recommendations</h2>
</div>


<div className="carousel-left-arrow-container ">
                  <BsArrowLeftCircleFill
            src="/left-arrow.png"
            alt="left arrow"
            onClick={handleOnClickPrev}
            className="carousel-left-arrow"
          />
          </div>
          
          
          <div className="carousel-image">
        <Image
          src={featuredPlaces[currentIndex].Image}
          alt="Places to visit"
          priority={true}
          ref={carouselRef}
          className="z-0 object-fill min-w-[90vw] min-h-[20vh] rounded-md cursor-pointer aspect-video sm:min-w-[90vw]  lg:h-1/5 lg:w-5/12 lg:mx-auto lg:mb-8 hover:opacity-70"
        />
  </div>


<div className="carousel-right-arrow-container">
          <BsArrowRightCircleFill
            src="/right-arrow.png"
            onClick={handleOnClickNext}
            alt="right arrow"
            className="carousel-right-arrow"
          />
          </div>
 
 <div className="carousel-recommended-container">
<p className="carousel-recommended-desc">{featuredPlaces[currentIndex].Desc}</p>
 </div>



      </div>

  );
}
