import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Projects from './components/Projects'
import FAQs from './components/FAQs'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
   <Navbar/>
    <Hero/>
    <Slider/>
    <Projects/>
    <FAQs/>
    <Footer/>
    </>
  )
}

export default App