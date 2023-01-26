import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "@firebase/auth";
import { app } from "../firebase/firebase";
import axios from "axios";
/* 
PLAN:
have a form for register
take input values
send data (username, email, password) to db

anotheremail@email.com Password3000 Tom303
*/

/* 
use axios to create a post request to our db with registered user info 

*/

function Register() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }

  async function sendRegistrationDetails(data) {
    const postURL = process.env.NEXT_PUBLIC_POST_URL;
    return await axios.post(postURL, data);
  }
  async function postData() {
    let userObj = { email, username };
    await sendRegistrationDetails(userObj);
  }

  function Register() {
    createUserWithEmailAndPassword(email, password, username);
    postData();
  }

  return ( 

    <div className="flex flex-col  items-center">
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        className="form-control"
      />
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />
      <button onClick={() => Register} className="register-button">
        Register
      </button>
    </div>
  );
}

export default Register;
