import Head from "next/head";
import Image from "next/image";
// import { Inter } from '@next/font/google'
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import ResultsDisplay from "../components/ResultsDisplay";
// import data from "../data/data";
import { useEffect, useState } from "react";

// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ['latin'] })

/**
 * connect frontend with backend with connection string
 * create .env file at the root level and save the backend url
 * use NEXT_PUBLIC to expose the environment variable
 * fetch data from database using useEffect
 * render data on the landing page
 * pass data as props to ResultCard component
 */

export default function Home() {
  // useState to hold the data coming from fetch
  const [recData, setRecData] = useState([]);

  const URL = process.env.NEXT_PUBLIC_POSTGRES_URL;
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3001/userfavourites/1");
      // parse the data from JSON to JS object
      const data = await response.json();
      // console.log(data);
      // data.payload.city
      console.log(data.payload[0].city);
      // assign the data to setData function
      setRecData(data.payload);
    }
    getData();
  }, []);
  console.log(recData);

  return (
    <>
      <h1>Our app</h1>
      <SearchBar />
      <ResultsDisplay data={recData} />
    </>
  );
}
