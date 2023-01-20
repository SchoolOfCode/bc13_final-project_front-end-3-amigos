import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";

function GoogleSignIn() {
  const auth = getAuth(app);
  const router = useRouter();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    function User() {
      if (user) {
        router.push("/");
      }
    }
    User();
  }, [user]);

  return (
    <div>
      <button className="google-button" onClick={() => signInWithGoogle()}>Sign In With Google</button>
    </div>
  );
}

export default GoogleSignIn;
