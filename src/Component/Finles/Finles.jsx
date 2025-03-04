import React from 'react'
import Navbar from '../home/Navbar'
import Services from './Services'
import Footer from '../home/Footer'
import Blog from '../defaultblog/blogpage'
import Features from './Features'
import Schedule from '../home/Schedule'

const Finles = () => {
  return (
    <div>
        <Navbar />
        <Services />
        <Features />
        <Blog />
        <Schedule />
        <Footer /> 
    </div>
  )
}

export default Finles