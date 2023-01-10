import React from 'react'
import image from 'next/image'

type props = {
    title: string,
    user_id: number,
    city: string, 
    country: string,
    suburb: string,
    description: string,
    image: string
}

export default function ResultCard({title, image, city}: props) {
  return (
    <>
    <p>{title}</p>
    </>
  )
}


