import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'
import ResultsDisplay from '../components/ResultsDisplay'
import data from '../data/data'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1>Our app</h1>
      {/* <SearchBar/>
      <ResultsDisplay/> */}
    </>
  )
}
