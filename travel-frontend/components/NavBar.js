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
    <div className="">
      <nav className="bg-dark-green ">
        <ul className="flex justify-between  h-12 text-off-white text-xl">
          <li>
            <Link href="/">
              <Image
                src={logo}
                width={50}
                alt="sombrero"
                className="align-middle ml-10 mt-5"
              />
            </Link>
          </li>
          {user && (
            <div className="flex space-x-10  ">
              <li className="absolute inset-y-0 right-40 mt-5">
                <Link href="/favourites" className="align-left">
                  Favourites
                </Link>
              </li>

              <li className="absolute inset-y-0 right-80 mt-5">
                {" "}
                <Link href="/journal" className="align-left">
                  Journal
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
                className="align-middle my-auto mr-10 mt-5"
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
                className="align-middle my-auto mr-10 mt-5"
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
