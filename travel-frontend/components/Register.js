import React, {useState} from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { getAuth } from '@firebase/auth'
import { app } from '../firebase/firebase';
/* 
PLAN:
have a form for register
take input values
send data (username, email, password) to db

anotheremail@email.com Password3000 Tom303
*/


function Register() {
    const auth = getAuth(app);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

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

      console.log(email, password, username)
  return (
    <div>
    <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
    <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button onClick={() => createUserWithEmailAndPassword(email, password)}>
        Register
      </button>


    </div>
  )
}

export default Register