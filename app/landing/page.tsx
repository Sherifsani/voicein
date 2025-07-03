import React from 'react'
import HeroPage from '../components/HeroPage'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <HeroPage />
      <Features />
      <HowItWorks />
      <Pricing />
      <Faqs />
      <Footer />
    </div>
  )
}

export default page