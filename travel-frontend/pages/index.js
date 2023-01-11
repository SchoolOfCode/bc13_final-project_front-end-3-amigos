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
  // useState to hold the data coming from fetch
  const [recData, setRecData] = useState([]);

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

  return (
    <>
      <h1>Our app</h1>
      <SearchBar />
      {/* passing the state variable as a prop */}
      <ResultsDisplay data={recData} />
    </>
  );
}
