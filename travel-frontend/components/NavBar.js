import React from "react";
import Link from "next/Link";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";
import Image from "next/image";
import logo from "../public/logo.svg";

export default function NavBar() {
  // initialize firebase
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  // use next router to reload the page once the user is signed out
  const router = useRouter();

  return (
    <div className=" font-montserrat">
      <nav>
        <ul className="flex justify-between h-12  ">
          <li>
            <Link href="/">
              <Image
                src={logo}
                width={60}
                alt="sombrero"
                className="mt-5 ml-10 align-middle"
              />
            </Link>
          </li>
          {user && (
            <div className="flex space-x-10 ">
              <li className="absolute inset-y-0 mt-5 right-40 ">
                <Link href="/favourites" className="font-bold align-left">
                  <button className="standard-btn">Favourites</button>
                </Link>
              </li>

              <li className="absolute inset-y-0 mt-5 right-80 ">
                {" "}
                <Link href="/journal" className="font-bold align-left">
                  <button className="standard-btn">Journal</button>
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
                className="my-auto mt-5 ml-2 mr-10 font-bold standard-btn"
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
      </nav>
    </div>
  );
}
