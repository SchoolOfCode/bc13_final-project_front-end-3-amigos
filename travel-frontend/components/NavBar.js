import React from "react";
import Link from "next/Link";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";

import { app } from "../firebase/firebase";

export default function NavBar() {

  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  // initialize firebase
  const auth = getAuth(app);

  // hook from react-firebase-hooks that allows us to log in with Google
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // use next router to reload the page once the user is signed out
  const router = useRouter();


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


            <Link href="/" className="align-middle">
              Logo
            </Link>
          </li>
          <li>
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

          <li>
            {/**if the user is not logged in the LOGIN button will be on navBar
            and hide once user is logged in*/}

            {!user && (
              <button
                onClick={() => {
                  router.push("/auth");
                }}
                className="align-middle"
              >
                Login
              </button>
            )}
          </li>

          <li>
            {/* the LOGOUT button will be on navBar only if the user is logged in*/}
            {user && (
              <button
                // when the LOGOUT button is clicked the user will be signed out and the home page will be reloaded to reset the states
                onClick={() => {
                  signOut(auth).then(() => {
                    router.reload("/");
                  });
                }}
                className="align-middle"
              >
                Logout
              </button>
            )}
          </li>
          </li>
        </ul>
      </nav>
    </div>
  );
}
