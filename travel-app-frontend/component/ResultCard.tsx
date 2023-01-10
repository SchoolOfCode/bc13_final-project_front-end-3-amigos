import React from 'react'
import image from 'next/image'

type resultCardProps = {
  id: number,
    user_id: number,
    title: string,
    city: string, 
    country: string,
    suburb: string,
    description: string,
    image: string
}

export default function ResultCard(props: resultCardProps) {
  return (
    <>
    <p>{title}</p>
    </>
  )
}


