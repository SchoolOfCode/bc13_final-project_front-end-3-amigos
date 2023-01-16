import Head from 'next/head'
import Image from 'next/image'
import backgroundImg from '../public/minimalistBG.jpg'
import { Inter, M_PLUS_1 } from '@next/font/google'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'
import ResultsDisplay from '../components/ResultsDisplay'
import Carousel from '../components/Carousel'
import data from '../data/data'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

// what's going on???
console.log("what's going on?");

export default function Home() {
  const [recc, setRecc] = useState(data)
  return (
    <>
    {/* This div is just here as these styling props can't be given directly to Image component */}
    <div className="bg-light-green -z-10 fixed w-full h-full ">
    <Image src={backgroundImg} alt="Mountain landscape"  className="h-4/6"
               priority={true}
               />
    </div>
      <SearchBar/>
      {/* <Carousel data={data} /> */}
      <ResultsDisplay data ={data}/>
     
    </>
  )
}
