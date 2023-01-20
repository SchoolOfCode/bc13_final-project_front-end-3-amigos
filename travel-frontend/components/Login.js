import React, {useState, useEffect} from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from '@firebase/auth'
import { app } from '../firebase/firebase';
import { useRouter } from 'next/router';

const LogIn = () => {
  const router = useRouter()
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    function User() {
      if (user) {
        router.push("/");
      }
    }
    User();
  }, [user]);


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
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className="App flex flex-col justify-center items-center">
      <input
        className='form-control'
        type="email"
        value={email}
        placeholder={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='form-control'
        type="password"
        value={password}
        placeholder={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='auth-sign-in-button' onClick={() => signInWithEmailAndPassword(email, password)}>
        Sign In
      </button>
    </div>
  );
};


export default LogIn