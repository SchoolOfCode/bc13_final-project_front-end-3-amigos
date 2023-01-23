import React from "react";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="inset-x-0 bottom-0 w-full px-2 mt-auto bg-coral h-28">
      <div className="flex  relative  max-w-[1240px] px-2 py-2 m-2 justify-center sm:flex-row text-center text-white items-center">
        <p>© Three Amigos</p>
        <div className="absolute inset-0 flex justify-center m-5% space-x-5 ">
          {/*  Tom */}
          <a
            className="flex items-center justify-between space-x-1 "
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Tom</p>
            <FaLinkedin />
          </a>
          {/* Beatrice */}
          <a
            className="flex items-center justify-between space-x-1 "
            href="https://www.linkedin.com/in/thomas-fowler1/"
          >
            <p>Beatrice</p>
            <FaLinkedin />
          </a>
          {/* Tariq */}
          <a
            className="flex items-center justify-between space-x-1 "
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Tariq</p>
            <FaLinkedin />
          </a>
          {/* Victoria */}
          <a
            className="flex items-center justify-between space-x-1 "
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Victoria</p>
            <FaLinkedin />
          </a>
          {/* Ryan */}
          <a
            className="flex items-center justify-between space-x-1 "
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Ryan</p>
            <FaLinkedin />
          </a>
          {/* Jo */}
          <a
            className="flex items-center justify-between space-x-1 "
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Jo</p>
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
