import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import axios from "axios";

// this is called onClick, and a) signs in the user to google, and b) posts user details, and c) pushes the user to the home route

function GoogleSignIn() {
  const auth = getAuth(app);
  const router = useRouter();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user);
  console.log(user.user.displayName);

  // async function postUserDetails(userDetails) {
  //   console.log("postUserDetails(userDetails) is fired");
  //   const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
  //   const res = await axios.post(`${URL}`, {
  //     username: user.user.displayName,
  //     email: user.user.email,
  //     uid: user.user.uid,
  //     password: "null",
  //   });
  //   console.log("postUserDetails:-", URL, userDetails);
  //   console.log("user details post response", res);
  // }
  // adding useEffect
  useEffect(() => {
    async function User() {
      if (user) {
        console.log("user @ UseEffect email:", user.user.email);
        console.log("user @ UseEffect username:", user.user.displayName);
        console.log("user @ UseEffect uid:", user.user.uid);

        const userDetails = {
          username: user.user.displayName,
          email: user.user.email,
          uid: user.user.uid,
          password: "null",
        };
        console.log(userDetails);

        async function postUserDetails(userDetails) {
          console.log("postUserDetails(userDetails) is fired");
          // const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
          const URL = `//xwrxqxhr:wCU0PAsKZeTaKCaGCueQHoyKuJHh0wNn@mel.db.elephantsql.com/xwrxqxhr`;
          const res = await axios.post(`${URL}`, {
            username: user.user.displayName,
            email: user.user.email,
            uid: user.user.uid,
            password: "null",
          });
          // console.log("postUserDetails:-", URL, userDetails);
          console.log("user details post response", res);
        }
        postUserDetails(userDetails);
        console.log("registration complete");

        router.push("/");
      }
    }
    User();
  }, [user]);
  // console.log(user.user.email);
  console.log(user);

  return (
    <div>
      <button className="google-button" onClick={() => signInWithGoogle()}>
        Sign In With Google
      </button>
    </div>
  );
}

export default GoogleSignIn;
