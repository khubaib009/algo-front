import React from 'react'
import Navbar from '../home/Navbar'
import Spsstartegys from '../About/Spsstartegy'
import Research from './Research'
import IpHeader from './IpHeader'
import Risk from './Risk'
import Blogpage from '../defaultblog/blogpage'
import Footer from '../home/Footer'
import Schedule from '../home/Schedule'

const Investment = () => {
  return (
    <div>
        <Navbar />
        <IpHeader />
        <Research />
        <Spsstartegys />
        <Risk />
        <Blogpage />
        <Schedule />
        <Footer />
    </div>
  )
}

export default Investment