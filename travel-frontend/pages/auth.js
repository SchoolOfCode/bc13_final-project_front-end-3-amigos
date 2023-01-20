import React, { use } from "react";
import Register from "../components/Register";
import LogIn from "../components/Login";
import GoogleSignIn from "../components/GoogleSignIn";
import { app } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import Image from "next/image";
import mountainBG from '../public/mouintain-bg.jpg'


/**
 * Once a user has reigstered, 
 * render the sign in functionality 
 * remove registration fields 
 * Add a register link for non-registered users
 * useState hook for toggling registered users 
 */

const authentication = () => {

  const auth = getAuth(app);
  const [registered, setRegistered] = useState(true)
  const registeredUser = <div className='align-middle'> <LogIn />
<GoogleSignIn /> </div>;
  const unRegisteredUser = <div > <Register />  </div>
  const toggleRegistered = () => {
    if (registered) {
      setRegistered(false)  
    } if (!registered){
      setRegistered(true)
    }
  }
  return (
    

    <>
    <div className="fixed w-full h-full -z-10 ">
    <Image alt='mountainous landscape' src={mountainBG} priority={true} className= 'w-full h-full -z-1' />

    </div>
    <div className='flex justify-center mx-auto'>
    {registered === true? registeredUser:unRegisteredUser}
    {registered ===true? <button onClick={()=> toggleRegistered()}>Register</button>: <button onClick={()=> toggleRegistered()}>Log In</button>}
    </div>
    </>
    
    
  );
};

export default authentication;
