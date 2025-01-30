import React from 'react'
import Navbar from '../home/Navbar'
import Header from '../home/Header'
import About from '../home/Aboutus'
import Performance from '../home/Performance'
import Startegy from '../home/Strategy'
import Multiassests from '../home/Multiassets'
import Research from '../home/Research'
import Risk from '../home/Risk'
import ContactForm from '../home/contact'
import Footer from '../home/Footer'
import Heading from './header'
import '../../index.css'
const Body = () => {
  return (
	<div data-elementor-type="wp-post" data-elementor-id="102" class="elementor elementor-102"
		data-elementor-post-type="envato_tk_templates">

      <Navbar />
      {/* <Heading /> */}
      <Header />
      <About />
      <Performance />
      <Startegy />
      <Multiassests />
      <Research />
      <Risk />
      <ContactForm />
      <Footer />
        </div>
  )
}
    
export default Body