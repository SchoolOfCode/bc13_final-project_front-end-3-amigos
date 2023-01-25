import React from "react";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="flex flex-col min-w-full cursor-pointer bg-coral">
      <div className="bottom-0 flex justify-center p-1 m-2 text-center text-white sm:flex-row">
        <p className="">© Three Amigos</p>
        </div>
        <div className="flex justify-around pb-3 text-white ">
          {/*  Tom  absolute inset-0 flex justify-around m-5% space-x-5  */}
          <a
            className="flex items-center justify-around space-x-1 cursor-pointer pb-50"
            href="https://www.linkedin.com/in/thomas-fowler1/"
          >
            <p >Tom</p>
            <FaLinkedin  />
          </a>
          {/* Beatrice */}
          <a
            className="flex items-center justify-around space-x-1 cursor-pointer"
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Beatrice</p>
            <FaLinkedin />
          </a>
          {/* Tariq */}
          <a
            className="flex items-center justify-between space-x-1 cursor-pointer"
            href="https://www.linkedin.com/in/tariq-amin/"
          >
            <p>Tariq</p>
            <FaLinkedin />
          </a>
          {/* Victoria */}
          <a
            className="flex items-center justify-between space-x-1 cursor-pointer"
            href="https://www.linkedin.com/in/victoria-lampard-83018072/"
          >
            <p>Victoria</p>
            <FaLinkedin />
          </a>
          {/* Ryan */}
          <a
            className="flex items-center justify-between space-x-1 cursor-pointer"
            href="https://www.linkedin.com/in/ryan-donaghue-48b958185/"
          >
            <p>Ryan</p>
            <FaLinkedin />
          </a>
          {/* Jo */}
          <a
            className="flex items-center justify-between space-x-1 cursor-pointer"
            href="https://www.linkedin.com/in/jyotshna-polavarapu-13430718/"
          >
            <p>Jo</p>
            <FaLinkedin />
          </a>
        </div>
    </footer>
  );
}
export default Footer;
