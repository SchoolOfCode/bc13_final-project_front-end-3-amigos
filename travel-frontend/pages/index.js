import Head from "next/head";
import Image from "next/image";
import backgroundImg from "../public/minimalistBG.jpg";
import { Inter, M_PLUS_1 } from "@next/font/google";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import ResultsDisplay from "../components/ResultsDisplay";
import Carousel from "../components/Carousel";

import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.js";
import ApiResultsDisplay from "../components/ApiResultsDisplay";
import axios from "axios";
// import { auth } from "../firebase/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Register from "../components/Register";

const auth = getAuth(app);

export default function Home() {
  // useState to hold the database data
  const [recData, setRecData] = useState([]);
  // useState to hold API data
  const [apiData, setApiData] = useState([]);

  //
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // declare the auth state
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  /**
   * post functionality to save the username's details(email, displayName=username) into our database
   * create async/await fn and use axios to create the post request
   *
   */

  async function postUserData(data) {
    const postURL = process.env.NEXT_PUBLIC_POST_URL;
    return await axios.post(postURL, data);
  }

  /**
   * create async fn for a post functionality for our user_favourites
   * array.filter method to filter the data chosen by the user
   * make a post request using axios.post to post the filtered data in to the user_favourite table
   *
   */

  async function postUserFavourites(data) {
    const postURL = process.env.NEXT_PUBLIC_POST_URL;
    return await axios.post(postURL, data);
  }

  /**
   * create an async fn to sign in with Google
   * if user is not singed in than redirect to sign in with Google popup
   * if the user is signed in, it will run the post fn (postUserData) to add the user details in our user table
   */

  async function googleLogin(xid) {
    console.log(xid);
    console.log(user, "user");
    if (!user) {
      signInWithGoogle();
    }
    if (user) {
      if (!isUserLoggedIn) {
        let userData = {
          username: user.user.displayName,
          email: user.user.email,
        };
        console.log(userData);
        const res = await postUserData(userData);
        console.log(res, "response 78");
        console.log(res.data.payload, "payload");
        setIsUserLoggedIn(true);
      }
    }
    // let userData = {
    //   username: user.user.displayName,
    //   email: user.user.email,
    // };
    // console.log(userData);
    // const res = await postUserData(userData);
    // console.log(res);

    // let userFavourites = apiData.filter((item) => {
    //   return item.xid === xid;
    // });
    // console.log(userFavourites);
  }
  /**
   * connect frontend with backend with connection string
   * create .env file at the root level and save the backend url
   * use NEXT_PUBLIC to expose the environment variable
   * get data from database using useEffect and axios
   * render data on the landing page
   * pass data as props to ResultCard component
   */
  const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
  useEffect(() => {
    async function getData() {
      await axios.get(URL).then((response) => {
        setRecData(response.data.payload);
      });
    }
    getData();
  }, []);

  //console.log(recData);

  /* fetch the data from API using Axios on submit from search bar
    --> we get lat & lon from geo_name
      --> use them on radius url for dynamic get
    --> we get xid's from radius url
    --> use them to get the features(data)
      --> store the above data into a state variable;
    --> pass this as props to ApiResultsDisplay
  */
  async function getApiData(searchTerm) {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const geoData = await axios.get(
      `https://api.opentripmap.com/0.1/en/places/geoname?name=${searchTerm}&apikey=${API_KEY}`
    );

    //console.log(geoData, "geoData");

    // take out from geo_data only the lat and lon using object destructuring
    const { lat, lon } = geoData.data;
    // use lat and lon to get xid from radius url dynamically
    const radiusData = await axios.get(
      `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${lon}&lat=${lat}&limit=20&apikey=${API_KEY}`
    );

    // console.log(radiusData, "radiusData");

    // iterate the list through features to get all of the xid's
    const xid = radiusData.data.features.map((id) => {
      return id.properties.xid;
    });

    // console.log(xid, "xid");

    // create a new empty array to concatenate the xid data using the spread operator
    let places = [];
    // start the first subset of xid at 0
    let index = 0;
    // use while loop to keep to subset of 5 xid's for each request
    while (index <= xid.length) {
      //minIndex is zero for first iteration
      const minIndex = index;
      // add 5 to minIndex to group them into 5 xid's
      const maxIndex = minIndex + 5;
      // use slice method to start with minIndex and end right before maxIndex
      let xidSubset = xid.slice(minIndex, maxIndex);
      // assign maxIndex to index for next iteration(which will start with 5 and end with 10 and so on for each iteration)
      index = maxIndex;
      // set an interval of 1 second between each request
      await new Promise((request) => {
        setTimeout(request, 1000);
      });
      //take the response from Api fetch and map over those 5 responses and render the data
      const responses = await Promise.all(
        xidSubset.map(async (xid) => {
          // use one xid at a time to get the data
          let xidData = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${API_KEY}`;
          const result = await axios.get(xidData);
          // console.log(result, "api result");
          return result.data;
        })
      );

      console.log("batch location response:", responses);

      /**
       *  concatenate the xid data(responses) using the spread operator
       *  after the first iteration will have 5 places inside the array so we have to spread it as well
       *  at the end of iteration will have 20 places objects inside the array
       */
      places = [...places, ...responses];
      // console.log(places, "places");
      // console.log(responses, "responses");
    }
    // setApiData to the final array of 20 places
    setApiData(places);
  }
  //console.log(apiData, "final state api");
  // console.log(apiData[0].data, "first try");
  return (
    <>
      {/* This div is just here as these styling props can't be given directly to Image component */}
      <div className="fixed w-full h-full bg-light-green -z-10 ">
        <Image
          src={backgroundImg}
          alt="Mountain landscape"
          className="h-4/6"
          priority={true}
        />
      </div>
      <SearchBar handleClick={getApiData} />
      {/* passing the state variable as a prop */}
      {/* {recData && <ResultsDisplay recData={recData} />} */}
      
      {apiData && (
        <ApiResultsDisplay googleLogin={googleLogin} apiData={apiData} />
      )}
    </>
  );
}
