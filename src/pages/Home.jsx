import React from 'react'
import Hero from '../components/Hero'
import Trusted from '../components/Trusted'
import Features from '../components/Features'
import User from '../components/user'
import Plans from '../components/Plans'
import Trustedby from '../components/Trustedby'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Trusted/>
      <Features/>
      <User/>
      <Plans/>
      <Trustedby/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
