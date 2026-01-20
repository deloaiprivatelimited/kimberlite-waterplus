import React from 'react'
import Hero from '../components/home/Hero'
import Solutions from '../components/home/Solutions'
import Industries from '../components/home/Industries'
import Partners from '../components/home/Partners'
import Sustainability from '../components/home/Sustainability'
import Contact from '../components/home/Contact'

const Home = () => {
  return (
    <div>
        <Hero />
        <Solutions />
        <Industries />
        <Partners />
        <Sustainability />
        <Contact /> 
    </div>
  )
}

export default Home