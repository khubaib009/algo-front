import React from 'react'
import Navbar from '../home/Navbar'
import Footer from '../home/Footer'
import Blog from '../defaultblog/blogpage'
import Schedule from '../home/Schedule'

const Article = () => {
  return (
    <div>
        <Navbar />
        <Blog />
        <Schedule />
        <Footer />
        
    </div>
  )
}

export default Article