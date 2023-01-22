import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import axios from "axios";


async function postUserDetails(userDetails) {    
  const res = await axios.post(`${URL}`, userDetails)
  console.log("user details post response", res)
  }

function GoogleSignIn() {
  const auth = getAuth(app);
  const router = useRouter();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    async function User() {
      if (user) {
        console.log(user);
        /** if the user is logged in - take user details and post it to database
   */
        const userDetails = {username:user.displayName, email:user.email, password:"abc", uid:user.uid}
        await postUserDetails(userDetails)
        router.push("/");
      }
    };
    User();
  }, [user]);

  return (
    <div>
      <button className="google-button" onClick={() => signInWithGoogle()}>
        Sign In With Google
      </button>
    </div>
  );
}

export default GoogleSignIn;
