import React from "react";
import Link from "next/Link";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";
import Image from "next/image";
import logo from "../public/logo.svg";
import { useState } from "react";

export default function NavBar() {
  // initialize firebase
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  const [navbar, setNavbar] = useState(false);

  // use next router to reload the page once the user is signed out
  const router = useRouter();

  return (
    <div>
      <nav className="w-full">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image
                  src={logo}
                  width={60}
                  alt="sombrero"
                  className="mt-5 ml-10 align-middle"
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {user && (
                  <div className="flex space-x-10 ">
                    <li>
                      <Link href="/favourites" className="font-bold align-left">
                        <button className="my-auto mt-5 mr-auto font-bold align-middle standard-btn">
                          Favourites
                        </button>
                      </Link>
                    </li>

                    <li>
                      {" "}
                      <Link href="/journal" className="font-bold align-left">
                        <button className="my-auto mt-5 mr-5 font-bold align-middle standard-btn">
                          Journal
                        </button>
                      </Link>
                    </li>
                  </div>
                )}

                <li>
                  {/**if the user is not logged in the LOGIN button will be on navBar
            and hide once user is logged in*/}

                  {!user ? (
                    <button
                      onClick={() => {
                        router.push("/auth");
                      }}
                      className="my-auto mt-5 ml-2 mr-1 standard-btn"
                    >
                      Login
                    </button>
                  ) : (
                    <button
                      // when the LOGOUT button is clicked the user will be signed out and the home page will be reloaded to reset the states
                      onClick={() => {
                        signOut(auth).then(() => {
                          router.reload("/");
                        });
                      }}
                      className="my-auto mt-5 mr-10 font-bold align-middle standard-btn"
                    >
                      Logout
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
