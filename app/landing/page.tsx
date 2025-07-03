import React from 'react'
import HeroPage from '../components/HeroPage'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'

const page = () => {
  return (
    <div>
      <HeroPage />
      <Features />
      <HowItWorks />
      <Pricing/>
      {/* Add more sections as needed */}
    </div>
  )
}

export default page