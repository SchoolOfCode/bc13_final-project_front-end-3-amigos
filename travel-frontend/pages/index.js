import Head from "next/head";
import Image from "next/image";
import backgroundImg from "../public/minimalistBG.jpg";
import PhotoBG from "../public/Blue-Lagoon-in-Malta-6.png";
import { Inter, M_PLUS_1 } from "@next/font/google";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";

import Carousel from "../components/Carousel";

import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.js";
import ApiResultsCardContainer from "../components/ApiResultsCardContainer";
import axios from "axios";
import Typewriter from "typewriter-effect";
// import { auth } from "../firebase/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const auth = getAuth(app);

export default function Home() {
  // useState to hold the database data
  const [recData, setRecData] = useState([]);
  // useState to hold API data
  const [apiData, setApiData] = useState('');

  // useState that watches if the user is logged in or not
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // declare the auth state to check the user status
  const [user, loading, error] = useAuthState(auth);

  // state for the loader
  const [isLoading, setIsLoading] = useState(true);

  /**
   * - seperate the logic, have signin only in the Nav bar ✅
   * - conditional rendring for the Navbar (check)
   * - Post functionality for the card to be implemented once the user is signed in
   * - when you go to other pages there is a firebase error which needs to be fixed ✅
   *        - add app as argument in getAuth()
   * - fix the search bar bug
   * - fix the Navbar log in and log out ✅
   */

  /**
   * create an async fn post data when you are logged in
   * if user is not singed in give an alert to "sign in"
   * if the user is signed in, it will run the post fn (postUserData) (postUserFavourites)
   * to add the user details in our user table and user_favourites table
   */
  // this is the branch!
  // async function postData(xid) {
  //   // console.log(xid);
  //   console.log(user, "user");
  //   // if the user is not logged in and click on the heart button an alert box will popup
  //   if (!user) {
  //     alert("Please Sign In");
  //   }
  //   // user logged in
  //   if (user) {
  //     // this condition only post the user details once, when they log in
  //     // once it has posted to user details in the user table, the state isUserLoggedIn changes to true
  //     // the reason for this condition is, every time the heart is clicked it should not post user details every time but only once
  //     if (!isUserLoggedIn) {
  //       // we are taking the metadata of the user and save it in this object
  //       let userData = {
  //         username: user.displayName,
  //         email: user.email,
  //       };
  //       console.log(userData.username);
  //       // this line is passing the userData as an argument of the postUserData fn, which will make the post in user table
  //       const res = await postUserData(userData);
  //       // console.log(res, "response 78");
  //       setIsUserLoggedIn(true);
  //     }
  //     // once the user clicks on heart
  //     // we get the xid of that specific card
  //     // and then filter the apiData(which holds the data coming from the API )
  //     // let filterFavourites = apiData.filter((item) => {
  //     //   return item.xid === xid;
  //     // });
  //     // console.log(filterFavourites);
  //   }
  // }

  /**
   * post functionality to save the username's details(email, displayName=username) into our database
   * create async/await fn and use axios to create the post request
   *
   */
  async function postUserData(data) {
    const postURL = process.env.NEXT_PUBLIC_POST_URL;
    return await axios.post(postURL, data);
    //console.log(data);
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
      await axios.get(URL + "abc/favourites").then((response) => {
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
    //setting the state to false so that the loader is shown
    setIsLoading(false);
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
      console.log("responses:", responses);
      //console.log("batch location response:", responses);

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
    //setting the state to true so that loader is not shown
    setIsLoading(true);
  }
  //console.log(apiData, "final state api");
  // console.log(apiData[0].data, "first try");

  const typewriter = new Typewriter({ loop: true, delay: 75 });

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="absolute w-full bg-no-repeat pb-2/3 xl:pb-1/3 bg-cover -z-10 h-1/2 -mt-12% sm:-mt-7% bg-main-bg">
        {/* <Image
          src={PhotoBG}
          alt="Mountain landscape"
          className="object-cover w-full -mt-20 h-2/4 "
          priority={true}
        /> */}
      </div>

      <div className="font-bold typewriter font-explora">
        <Typewriter
        className='font-explora'
          options={{
            strings: [
              "Vamos Amigos!!",
              `Let's go!!`,
              "Yallah!!",
              "Haideee!!",
              "Andiamo!!",
              "Vamos lá!!!",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div>
        <SearchBar handleClick={getApiData} />
      </div>
      {/* passing the state variable as a prop */}

      {/* conditional rednring so when the user searches the loader is shown*/}
      {!isLoading && <Loader />}


      {(!apiData)? <Carousel />:<ApiResultsCardContainer postData={postData} apiData={apiData} /> }
      

      <Footer />
    </div>
      
  );
}
