import React from "react";
import Link from "next/Link";

export default function NavBar() {
  return (
    <div className="">
      <nav className="bg-dark-green ">
        <ul className="flex justify-evenly  h-12 text-off-white text-xl">
          <li>
            {" "}
            <Link href="/" className="align-middle">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/favourites" className="align-middle">
              Favourites
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/journal" className="align-middle">
              Journal
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/about" className="align-middle">
              About Us
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/login" className="align-middle">
              Login
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/logout" className="align-middle">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
