import Head from "next/head";
import Image from "next/image";
import axios from "axios";
// import { Inter } from '@next/font/google'
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import ResultsDisplay from "../components/ResultsDisplay";
// import data from "../data/data";
import { useEffect, useState } from "react";

// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // useState to hold the database data
  const [recData, setRecData] = useState([]);
  // useState to hold API data
  const [apiData, setApiData] = useState([]);

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
  console.log(recData);

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
    console.log(geoData, "geoData");

    // take out from geo_data only the lat and lon using object destructuring
    const { lat, lon } = geoData.data;

    // use lat and lon to get xid from radius url dynamically
    const radiusData = await axios.get(
      `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${lon}&lat=${lat}&limit=20&apikey=${API_KEY}`
    );
    console.log(radiusData, "radiusData");

    // iterate the list through features to get all of the xid's
    const xid = radiusData.data.features.map((id) => {
      return id.properties.xid;
    });
    console.log(xid, "xid");

    // use the xid to get
    let places = [];

    let index = 0;

    while (index <= xid.length) {
      const minIndex = index;
      const maxIndex = minIndex + 5;

      const xidSubset = xid.slice(minIndex, maxIndex);
      index = maxIndex;
    }

    await new Promise((request) => {
      setTimeout(request, 1000);
    });
    const xidData = await axios.get(
      `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${API_KEY}`
    );
    places = [...places, ...xidData];
    console.log(places);
    console.log(xidData);
  }

  return (
    <>
      <h1>Our app</h1>
      <SearchBar handleClick={getApiData} />
      {/* passing the state variable as a prop */}
      <ResultsDisplay data={recData} />
    </>
  );
}
