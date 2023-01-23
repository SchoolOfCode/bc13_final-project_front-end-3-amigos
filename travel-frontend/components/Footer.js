import React from "react";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full  py-6 px-2  inset-x-0 bottom-0 bg-gray-800 bg-opacity-30 mt-3 ">
      <div className="flex relative max-w-[1240px] px-2 py-4 m-2 justify-center sm:flex-row text-center text-white items-center">
        <p>© Three Amigos</p>
        <div className="absolute inset-0 flex justify-center mt-7% mb-7% space-x-5  ">
          {/*  Tom */}
          <a
            className="flex  justify-between space-x-1 items-center "
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Tom</p>
            <FaLinkedin />
          </a>
          {/* Beatrice */}
          <a
            className="flex  justify-between space-x-1 items-center "
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Beatrice</p>
            <FaLinkedin />
          </a>
          {/* Tariq */}
          <a
            className="flex  justify-between space-x-1 items-center "
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Tariq</p>
            <FaLinkedin />
          </a>
          {/* Victoria */}
          <a
            className="flex  justify-between space-x-1 items-center "
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Victoria</p>
            <FaLinkedin />
          </a>
          {/* Ryan */}
          <a
            className="flex  justify-between space-x-1 items-center "
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Ryan</p>
            <FaLinkedin />
          </a>
          {/* Jo */}
          <a
            className="flex  justify-between space-x-1 items-center "
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
