import React, { use } from "react";
import Register from "../components/Register";
import LogIn from "../components/Login";
import GoogleSignIn from "../components/GoogleSignIn";
import { app } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import Image from "next/image";
import authBg from "../public/auth.jpg";

/**
 * Once a user has reigstered,
 * render the sign in functionality
 * remove registration fields
 * Add a register link for non-registered users
 * useState hook for toggling registered users
 */

const authentication = () => {
  const auth = getAuth(app);
  const [registered, setRegistered] = useState(true);
  const registeredUser = (
    <div className="flex flex-col items-center justify-center">
      <LogIn className="auth-sign-in-button" />
      <GoogleSignIn />{" "}
    </div>
  );
  const unRegisteredUser = (
    <div>
      <Register />{" "}
    </div>
  );
  const toggleRegistered = () => {
    if (registered) {
      setRegistered(false);
    }
    if (!registered) {
      setRegistered(true);
    }
  };
  return (
    <>
      <div className="fixed w-screen h-screen -z-10 ">
        <Image
          alt="mountainous landscape"
          priority={true}
          src={authBg}
          className="w-full h-full -z-1 "
        />
      </div>
      <div className="grid h-screen place-items-center">
        <div className="flex flex-col items-center justify-center">
          {registered === true ? registeredUser : unRegisteredUser}
          {registered === true ? (
            <>
              <p className="pt-5 text-white">Don't have an account yet?</p>
              <button
                className="register-button"
                onClick={() => toggleRegistered()}
              >
                Register Here
              </button>
            </>
          ) : (
            <>
              <p className="pt-5 text-white">Already registered?</p>
              <button
                onClick={() => toggleRegistered()}
                className="auth-sign-in-button"
              >
                Log In
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default authentication;
