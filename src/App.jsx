import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './Pages/About'
import Footer from './components/Footer'
import Contact from './Pages/Contact'
import {Routes,Route} from 'react-router'
import LocomotiveScroll from 'locomotive-scroll';
import Project from './Pages/Project'
import Services from './Pages/Services'
import SingleProject from './Pages/SingleProject'
const App = () => {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
   <Navbar/>
   <Routes>
<Route path='/' element={<Hero/>} ></Route>
<Route path='/about' element={<About/>} ></Route>
<Route path='/project' element={<Project/>} ></Route>
<Route path='/service' element={<Services/>} ></Route>
<Route path='/contactus' element={<Contact/>} ></Route>
<Route path='/project/:id' element={<SingleProject/>} ></Route>
   </Routes>
    <Footer/>
    </>
  )
}

export default App