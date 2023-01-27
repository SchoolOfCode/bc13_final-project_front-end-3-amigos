import React from "react";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  {/* xs:mt-[10vw] mob:mt=[1.5vw] */}
  return (
    <footer className="footer">
      <div className="footer-items-container ">
        <p className="">© Three Amigos</p>
        </div>
        <div className="about-us-container ">
          <a
            className="about-us-attribute "
            href="https://www.linkedin.com/in/thomas-fowler1/"
          >
            <p >Tom</p>
            <FaLinkedin  />
          </a>
          {/* Beatrice */}
          <a
            className="about-us-attribute"
            href="https://www.linkedin.com/in/beatrice-stanila-82219b144/"
          >
            <p>Beatrice</p>
            <FaLinkedin />
          </a>
          {/* Tariq */}
          <a
            className="about-us-attribute"
            href="https://www.linkedin.com/in/tariq-amin/"
          >
            <p>Tariq</p>
            <FaLinkedin />
          </a>
          {/* Victoria */}
          <a
            className="about-us-attribute"
            href="https://www.linkedin.com/in/victoria-lampard-83018072/"
          >
            <p>Victoria</p>
            <FaLinkedin />
          </a>
          {/* Ryan */}
          <a
            className="about-us-attribute "
            href="https://www.linkedin.com/in/ryan-donaghue-48b958185/"
          >
            <p>Ryan</p>
            <FaLinkedin />
          </a>
          {/* Jo */}
          <a
            className="about-us-attribute "
            href="https://www.linkedin.com/in/jyotshna-polavarapu-13430718/"
          >
            <p className="Jo-p">Jo</p>
            <FaLinkedin />
          </a>
        </div>
    </footer>
  );
}
export default Footer;
