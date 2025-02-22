import React from 'react'
import Navbar from '../home/Navbar'
import Services from './Services'
import Footer from '../home/Footer'
import Blog from '../defaultblog/blogpage'
import Features from './Features'

const Qaas = () => {
  return (
    <div>
        <Navbar />
        <Services />
        <Features />
        <Blog />
        <Footer /> 
    </div>
  )
}

export default Qaas