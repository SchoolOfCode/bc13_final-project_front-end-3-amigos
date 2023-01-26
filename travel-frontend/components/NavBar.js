import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase";
import Image from "next/image";
import logo from "../public/logo.svg";

function NavBar() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const router = useRouter();

  const handleHamburger = () => {
    setBurgerMenu(!burgerMenu);
  };

/* 
PLAN:
 to render login with no user on navbar with NORMAL DEVICE
to render favourites when user exits on normal device
to render Hamburger menu on small screen
to show login with no User on MOBILE DEVICE
to show favourites with user on MOBILE DEVICE
*/

  return (
    <nav>
    <div className="fixed top-0 right-0 z-10 items-center w-screen ">
      <div className="relative flex items-center justify-between text-white">
        <Link href="/" >
          <Image
            src={logo}
            width={60}
            alt="sombrero"
            className="mt-[1vh] ml-10 align-middle"
          />
        </Link>
        
        
{/* if user is logged in and normal screen  */}
          {user ? (
            <ul className='justify-between hidden my-auto md:flex '>
              <li className="absolute inset-y-0 mt-[1vw] mx-5 text-lg font-bold m max-h-10 right-[15vw] right-15  ">
                <Link className="align-left text-coral hover:text-black" href="/favourites">FAVOURITES</Link>
              </li>
              <li className="absolute inset-y-0 mt-[1vw] mx-5  max-h-10 right-[30vw] font-bold text-lg  text-coral hover:text-zinc-600 ">
                <Link className="align-left" href="/journal">JOURNAL</Link>
              </li>
           
              <button
              className="absolute inset-y-0 my-auto mt-[1vw] font-bold h-7 right-10 standard-btn"
                onClick={() => {
                  signOut(auth).then(() => {
                    router.push("/");
                  });
                }}
              >
                LOGOUT
              </button>
      
            </ul>
          ) : 

          (
            <ul className="hidden md:absolute md:inset-y-0 md:right-0 md:flex ">
            <li className="p-4 my-auto mt-5 mr-10 text-lg font-semibold align-middle standard-btn hover:text-gray-700">
              <Link href="/auth">LOGIN</Link>
            </li>
            </ul>


          )}

        {/**
         * Mobile Button
         * anything above small is going to be hidden, otherwise it will show
         */}
        <div className="absolute inset-y-0 right-0 z-10 md:hidden" onClick={handleHamburger}>
          {/**
           * conditional operator to see if burgerMenu is true or not
           */}
          {burgerMenu ? (
            <AiOutlineClose size={40} className="m-2 text-coral"  />
          ) : (
            <AiOutlineMenu size={40} className="m-2 text-coral" />
          )}
        </div>
        <div>
   
          <div
            className={
              burgerMenu
                ? "  md:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-left ease-in duration-300  "
                : "  md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 "
            }
          >
  
            <ul onClick={handleHamburger}>
              {user && (
                <ul className="items-center justify-center mt-auto space-y-5 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-lg font-semibold text-white hover:text-zinc-600">
                    <Link href="/favourites">FAVOURITES</Link>
                  </li>
                  <li className="text-lg font-semibold text-white hover:text-zinc-600">
                    <Link href="/journal">JOURNAL</Link>
                  </li>
                </ul>
              )}
              {!user ? (
                <li className="text-lg font-semibold text-white hover:text-zinc-600">
                  <Link href="/auth">LOGIN</Link>
                </li>
              ) : (
                <li className="text-lg font-semibold text-white hover:text-zinc-600">
                  <button
                    onClick={() => {
                      signOut(auth).then(() => {
                        router.push("/");
                      });
                    }}
                  >
                    LOGOUT
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </nav>
  );
}

export default NavBar;


















// import React from "react";
// import Link from "next/link";
// import { getAuth, signOut } from "firebase/auth";
// import { useRouter } from "next/router";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { app } from "../firebase/firebase";
// import Image from "next/image";
// import logo from "../public/logo.svg";

// export default function NavBar() {
//   // initialize firebase
//   const auth = getAuth(app);
//   const [user, loading, error] = useAuthState(auth);

//   // use next router to reload the page once the user is signed out
//   const router = useRouter();

//   return (



//       <nav>
//         <ul className="flex justify-between h-12 font-montserrat">
//           <li>
//             <Link href="/">
//               <Image
//                 src={logo}
//                 width={60}
//                 alt="sombrero"
//                 className="mt-5 ml-10 align-middle"
//               />
//             </Link>
//           </li>
//           {user && (
//             <div className="flex space-x-10 ">
//               <li className="absolute inset-y-0 mt-5 max-h-10 right-40 ">
//                 <Link href="/favourites" className="font-bold align-left">
//                   <button className="standard-btn">Favourites</button>
//                 </Link>
//               </li>

//               <li className="absolute inset-y-0 mt-5 max-h-10 right-80 ">
//                 {" "}
//                 <Link href="/journal" className="font-bold align-left">
//                   <button className="standard-btn">Journal</button>
//                 </Link>
//               </li>
//             </div>
//           )}

//           <li>
//             {/**if the user is not logged in the LOGIN button will be on navBar
//             and hide once user is logged in*/}

//             {!user ? (
//               <button
//                 onClick={() => {
//                   router.push("/auth");
//                 }}
//                 className="my-auto mt-5 ml-2 mr-10 font-bold standard-btn"
//               >
//                 Login
//               </button>
//             ) : (
//               <button
//                 // when the LOGOUT button is clicked the user will be signed out and the home page will be reloaded to reset the states
//                 onClick={() => {
//                   signOut(auth).then(() => {
//                     // router.push("/");
//                     router.push("/");
//                   });
//                 }}
//                 className="my-auto mt-5 mr-10 font-bold align-middle standard-btn"
//               >
//                 Logout
//               </button>
//             )}
//           </li>
//         </ul>
//       </nav>
   

//   );
// }
