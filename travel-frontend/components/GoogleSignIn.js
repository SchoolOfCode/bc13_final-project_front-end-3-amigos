import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";

function GoogleSignIn() {
  const auth = getAuth(app);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div>
      <div className="App">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => signInWithGoogle()}>Sign In</button>
      </div>
    </div>
  );
}

export default GoogleSignIn;
