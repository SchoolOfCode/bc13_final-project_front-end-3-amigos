import React from "react";
import Link from "next/Link";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";

export default function NavBar() {
  const auth = getAuth(app);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
            {!user && (
              <button
                onClick={() => {
                  signInWithGoogle();
                }}
                className="align-middle"
              >
                Login
              </button>
            )}
          </li>

          <li>
            {user && (
              <button
                //   className="align-middle"
                onClick={() => {
                  signOut(auth).then(() => {
                    router.reload("/");
                  });
                }}
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
