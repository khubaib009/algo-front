import React from 'react'
import Navbar from '../home/Navbar'
import Spsstartegys from '../About/Spsstartegy'
import Research from './Research'
import Risk from './Risk'
import Blogpage from '../defaultblog/blogpage'
import Footer from '../home/Footer'

const Investment = () => {
  return (
    <div>
        <Navbar />
        <Research />
        <Spsstartegys />
        <Risk />
        <Blogpage />
        <Footer />
    </div>
  )
}

export default Investment