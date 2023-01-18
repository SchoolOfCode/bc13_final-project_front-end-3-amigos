import React from "react";
import Register from "../components/Register";
import LogIn from "../components/Login";

import GoogleSignIn from "../components/GoogleSignIn";

const authentication = () => {
  return (
    <div>
      <Register />
      <LogIn />
      <GoogleSignIn />
    </div>
  );
};

export default authentication;
