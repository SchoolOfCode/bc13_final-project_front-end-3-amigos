import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'
import ResultsDisplay from '../components/ResultsDisplay'
import data from '../data/data'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [recc, setRecc] = useState(data)
  return (
    <>
    <h1>Our app</h1>
      <SearchBar/>
      <ResultsDisplay data ={data}/>
    </>
  )
}
