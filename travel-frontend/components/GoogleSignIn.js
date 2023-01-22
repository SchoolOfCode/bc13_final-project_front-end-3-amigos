import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import axios from "axios";

// this is called onClick, and a) signs in the user to google, and b) posts user details, and c) pushes the user to the home route

async function postUserDetails(userDetails) {
  const res = await axios.post(`${URL}`, userDetails);
  console.log("user details post response", res);
}

function GoogleSignIn() {
  const auth = getAuth(app);
  const router = useRouter();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


  // 
   function registerUser(displayName, email, password, uid) {
     signInWithGoogle();
    console.log("post registration user details", user);
    const userDetails = {
      username: user.displayName,
      email: user.email,
      password: "abc",
      uid: user.uid,
    };
    postUserDetails(userDetails);
    router.push("/");
  }
  

  // useEffect(() => {
  //   async function User() {
  //     if (user) {
  //       console.log(user);
  //       /** if the user is logged in - take user details and post it to database
  //  */
  //       const userDetails = {username:user.displayName, email:user.email, password:"abc", uid:user.uid}
  //       router.push("/");
  //     }
  //   };
  //   User();
  // }, [user]);
  // await postUserDetails(userDetails)

  return (
    <div>
      <button className="google-button" onClick={() => registerUser()}>
        Sign In With Google
      </button>
    </div>
  );
}

export default GoogleSignIn;
