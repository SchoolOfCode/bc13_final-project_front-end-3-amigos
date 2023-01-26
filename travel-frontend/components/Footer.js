import React from "react";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="flex flex-col min-w-full cursor-pointer xs:mt-[10vw] mob:mt=[1.5vw] bg-coral">
      <div className="flex flex-row justify-center p-1 m-2 text-center text-white ">
        <p className="">© Three Amigos</p>
        </div>
        <div className="mob:justify-around mob:space-x-[0.1em] pb-3 text-white  xs:px-2 mob:flex xs:grid-cols-2 xs:grid xs:gap-[2vw] ">
          {/*  Tom  absolute inset-0 flex justify-around m-5% space-x-5  */}
          <a
            className="flex items-center justify-around cursor-pointer sm:space-mob:space-x-[0.1em] "
            href="https://www.linkedin.com/in/thomas-fowler1/"
          >
            <p >Tom</p>
            <FaLinkedin  />
          </a>
          {/* Beatrice */}
          <a
            className="flex items-center justify-around cursor-pointer sm:space-x-1 space-x-[0.1em]"
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Beatrice</p>
            <FaLinkedin />
          </a>
          {/* Tariq */}
          <a
            className="flex items-center justify-around cursor-pointer sm:space-x-1 space-x-[0.1em]"
            href="https://www.linkedin.com/in/tariq-amin/"
          >
            <p>Tariq</p>
            <FaLinkedin />
          </a>
          {/* Victoria */}
          <a
            className="flex items-center justify-around cursor-pointer sm:space-x-1 space-x-[0.1em]"
            href="https://www.linkedin.com/in/victoria-lampard-83018072/"
          >
            <p>Victoria</p>
            <FaLinkedin />
          </a>
          {/* Ryan */}
          <a
            className="flex items-center justify-around cursor-pointer sm:space-x-1 space-x-[0.1em]  "
            href="https://www.linkedin.com/in/ryan-donaghue-48b958185/"
          >
            <p>Ryan</p>
            <FaLinkedin />
          </a>
          {/* Jo */}
          <a
            className="flex items-center justify-around cursor-pointer sm:space-x-1 "
            href="https://www.linkedin.com/in/jyotshna-polavarapu-13430718/"
          >
            <p className="xs:mx-5 mob:mx-0">Jo</p>
            <FaLinkedin />
          </a>
        </div>
    </footer>
  );
}
export default Footer;
