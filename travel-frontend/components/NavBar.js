import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";
import Image from "next/image";
import logo from "../public/AmiLogo.svg";

function NavBar() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const handleHamburger = () => {
    setBurgerMenu(!burgerMenu);
  };
/*
PLAN:
to render login with no user on navbar with NORMAL DEVICE
to render favourites when user exits on normal device
to render Hamburger menu on small screen
to show login with no User on MOBILE DEVICE
to show favourites with user on MOBILE DEVICE
*/
  return (
    <nav className="nav-container ">

      <div className="nav-bar-item-container">
        <Link href="/" >
          <Image
            src={logo}
            width={110}
            priority
            alt="Amigos sombrero"
            className=" nav-bar-logo"
          />
        </Link>
{/* if user is logged in and normal screen  */}
          {user ? (
            <div className='nav-bar-lg-menu '>
              <button className=" nav-bar-buttons">
                <Link className="align-left " href="/favourites">FAVOURITES</Link>
              </button>
              <button className="nav-bar-buttons ">
                <Link className="align-left " href="/journal">JOURNAL</Link>
              </button>
              <button
              className="nav-bar-buttons "
                onClick={() => {
                  signOut(auth).then(() => {
                    router.push("/");
                  });
                }}
              >
                LOGOUT
              </button>
            </div>
          ) :
          (
            <div className="nav-bar-lg-menu-logged-out ">
            <button className="nav-bar-buttons">
              <Link href="/auth">LOGIN</Link>
            </button>
            </div>
          )}
        {/**
         * Mobile Button
         * anything above small is going to be hidden, otherwise it will show
         */}
        <div className="nav-bar-hamburger" onClick={handleHamburger}>
          {/**
           * conditional operator to see if burgerMenu is true or not
           */}
          {burgerMenu ? (
            <AiOutlineClose size={40} className="m-2 text-white"  />
          ) : (
            <AiOutlineMenu size={40} className="m-2 text-[var(--Themer-text)]" />
          )}
        </div>
        <div>
          <div
            className={
              burgerMenu
                ? "  burger-overlay  "
                : "  burger-overlay-hidden "
            }
          >
            <div className="flex flex-col items-center justify-center space-y-5 " onClick={handleHamburger}>
              {user && (
                <>
                  <a href="/favourites" className="burger-overlay-links">
                    FAVOURITES
                  </a>
                  <a href="/journal" className="burger-overlay-links">
                    JOURNAL
                  </a>
                  </>
              )}
              {!user ? (

                <a href="/auth" className="burger-overlay-links">LOGIN</a>

              ) : (
                <div className="burger-overlay-links">
                  <button
                    onClick={() => {
                      signOut(auth).then(() => {
                        router.push("/");
                      });
                    }}
                  >
                    LOGOUT
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
}
export default NavBar;