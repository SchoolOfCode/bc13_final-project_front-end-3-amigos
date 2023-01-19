import React from "react";
import Register from "../components/Register";
import LogIn from "../components/Login";
import GoogleSignIn from "../components/GoogleSignIn";
import { app } from "../firebase/firebase";
import { getAuth } from "firebase/auth";

const authentication = () => {
  const auth = getAuth(app);
  return (
    <div>
      <Register />
      <LogIn />
      <GoogleSignIn />
    </div>
  );
};

export default authentication;
