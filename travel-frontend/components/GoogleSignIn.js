import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import axios from "axios";

/* this is called onClick, and a) signs in the user to google, and b) posts user details, and c) pushes the user to the home route*/

function GoogleSignIn() {
  const auth = getAuth(app);
  const router = useRouter();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // console.log(user);
  // console.log(user.user.displayName);

  // adding useEffect
  useEffect(() => {
    async function User() {
      if (user) {
        const userDetails = {
          username: user.user.displayName,
          email: user.user.email,
          uid: user.user.uid,
          password: null,
        };
        // console.log(userDetails);

        async function postUserDetails(userDetails) {
          const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
          const usersApiUrl = URL;

          // console.log(URL);

          const headers = {
            "Content-Type": "application/json",
          };
          const res = await axios.post(usersApiUrl, userDetails, {
            headers: headers,
          });

          // console.log("userfavourites post response", res);
        }
        await postUserDetails(userDetails);
        // console.log("registration complete");

        router.push("/");
      }
    }
    User();
  }, [user]);
  // console.log(user);

  return (
    <div>
      <button className="google-button " onClick={() => signInWithGoogle()}>
        Sign In With Google
      </button>
    </div>
  );
}

export default GoogleSignIn;
