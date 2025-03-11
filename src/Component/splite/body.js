import React from 'react'
import Navbar from '../home/Navbar'
import Header from '../home/Header'
import Startegy from '../home/Strategy'
import Multiassests from '../home/Multiassets'
import Footer from '../home/Footer'
import Number from '../home/Number'
import Logo from '../home/Logos'
import Schedule from '../home/Schedule'
import '../../index.css'
import DefaultBlog from '../defaultblog/blogpage'
const Body = () => {
  return (
	<div data-elementor-type="wp-post" data-elementor-id="102" class="elementor elementor-102"
		data-elementor-post-type="envato_tk_templates">

      <Navbar />
      {/* <Heading /> */}
      
      <Header />
      {/* <About /> */}
      <Logo />
      {/* <Performance /> */}
      <Startegy />
      <Number />
      <Multiassests />
      
      <Schedule /> 
      
      {/* <ContactForm /> */}
      <DefaultBlog />
      <Footer />

        </div>
  )
}
    
export default Body