import React from 'react'

function Hero({isDefault}) {
  return (
    <div className={isDefault? 'hero-styling' : "hero-styling minimal-theme"}></div>
  )
}

export default Hero