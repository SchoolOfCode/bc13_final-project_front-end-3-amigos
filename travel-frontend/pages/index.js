import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel";
import { useState } from "react";
import ApiResultsCardContainer from "../components/ApiResultsCardContainer";
import axios from "axios";
import Typewriter from "typewriter-effect";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Image from "next/image";

export default function Home() {
  // useState to hold API data
  const [apiData, setApiData] = useState("");
  // state for the loader
  const [isLoading, setIsLoading] = useState(true);
  // create state for if there's a search error
  const [searchError, setSearchError] = useState(false);
  // create state to hold error text
  //const [errorText, setErrorText] = useState("")
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
    if (searchTerm.length > 1) {
      setIsLoading(false);
      setSearchError(false);
      try {
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
          // console.log("responses:", responses);
          //console.log("batch location response:", responses);
          /**
           *  concatenate the xid data(responses) using the spread operator
           *  after the first iteration will have 5 places inside the array so we have to spread it as well
           *  at the end of iteration will have 20 places objects inside the array
           */
          places = [...places, ...responses];
        }
        const finalResult = places.filter((item) => {
          return (
            item.wikipedia_extracts && item.preview && item.name && item.address
          );
        });
        // console.log("finalResult", finalResult);
        // setApiData to the final array of 20 places
        setApiData(finalResult);
        //setting the state to true so that loader is not shown
        // Iterate over the places array, check that each item has both an image key and a wikipediaextracts key - maybe more faterwards
        // if so, push it to a new array that is then returned
        // console.log(responses, "responses");
      } catch (e) {
        alert("No Result Found");
        //setSearchError(true);
        // setErrorText("No results found!")
      }
      setIsLoading(true);
    }
  }
  //console.log(apiData, "final state api");
  // console.log(apiData[0].data, "first try");
  /*  */

  return (
    <div className="html-div">
      <main>
        {/* <Image
     className="hero-styling"
     priority
     
      /> */}
        <div className="hero-styling"></div>
        <SearchBar handleClick={getApiData} searchError={searchError} />
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: [
                "Vamos Amigos...",
                `Let's go...`,
                "Yallah...",
                "Haideee...",
                "Andiamo...",
                "Vamos lá...",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div></div>
        {/* conditional rendering so when the user searches the loader is shown*/}
        {!isLoading && <Loader />}

        {apiData.length === 0 ? (
          <Carousel />
        ) : (
          <ApiResultsCardContainer apiData={apiData} />
        )}
      </main>
    </div>
  );
}
