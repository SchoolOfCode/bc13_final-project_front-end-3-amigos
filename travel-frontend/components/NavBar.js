import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";
import Image from "next/image";
import logo from "../public/logo.svg";

function NavBar() {
  const [nav, setNav] = useState(false);
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed  left-0 top-0 w-full z-10 ease-in duration-300">
      <div className=" -mr-63% m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image
            src={logo}
            width={60}
            alt="sombrero"
            className="mt-1 ml-10 align-middle"
          />
        </Link>

        <ul className="hidden sm:flex ">
          {user && (
            <ul className="  items-center justify-center space-y-5  mt-auto md:flex md:space-x-6 md:space-y-0">
              <li className="text-coral font-semibold text-lg p-4 hover:text-white ">
                <Link href="/favourites">FAVOURITES</Link>
              </li>
              <li className="text-coral font-semibold text-lg p-4  hover:text-white">
                <Link href="/journal">JOURNAL</Link>
              </li>
            </ul>
          )}
          {!user ? (
            <li className="font-semibold text-lg p-4   mt-2 h-10 standard-btn">
              <Link href="/auth">LOGIN</Link>
            </li>
          ) : (
            <li className="font-semibold text-lg mt-2 h-10 standard-btn hover:text-white">
              <button
                onClick={() => {
                  signOut(auth).then(() => {
                    router.push("/");
                  });
                }}
              >
                LOGOUT
              </button>
            </li>
          )}
        </ul>

        {/**
         * Mobile Button
         * anything above small is going to be hidden, otherwise it will show
         */}
        <div className="block sm:hidden z-10" onClick={handleNav}>
          {/**
           * conditional operator to see if nav is true or not
           */}
          {nav ? (
            <AiOutlineClose size={20} className=" text-white" />
          ) : (
            <AiOutlineMenu size={20} className=" text-white" />
          )}
        </div>
        <div>
          {/* Mobile menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-left ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul onClick={handleNav}>
              {user && (
                <ul className="  items-center justify-center space-y-5  mt-auto md:flex md:space-x-1 md:space-y-0">
                  <li className="text-white font-semibold text-lg hover:text-zinc-600">
                    <Link href="/favourites">FAVOURITES</Link>
                  </li>
                  <li className="text-white font-semibold text-lg  hover:text-zinc-600">
                    <Link href="/journal">JOURNAL</Link>
                  </li>
                </ul>
              )}
              {!user ? (
                <li className="text-white font-semibold text-lg  hover:text-zinc-600">
                  <Link href="/auth">LOGIN</Link>
                </li>
              ) : (
                <li className="text-white font-semibold text-lg mt-5 ">
                  <button
                    className=""
                    onClick={() => {
                      signOut(auth).then(() => {
                        router.push("/");
                      });
                    }}
                  >
                    LOGOUT
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
