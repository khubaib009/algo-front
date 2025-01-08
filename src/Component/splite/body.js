import React from 'react'
import Banner from './bodypagesplit/Banner'
import TopCard from './bodypagesplit/TopCard'
import Whoweare from './bodypagesplit/Whoweare'
import UserExpriance from './bodypagesplit/UserExpriance'
import YourtubeVideo from './bodypagesplit/YourtubeVideo'
import Clients from './bodypagesplit/Clients'
import Ourservice from './bodypagesplit/Ourservice'
import Offers from './bodypagesplit/Offers'
import Tradingbanner from './bodypagesplit/Tradingbanner'
import Whychooseus from './bodypagesplit/Whychooseus'
import Clientslider from './bodypagesplit/Clientslider'
import DeviceExpriance from './bodypagesplit/DeviceExpriance'
import Content3 from './aboutus/splitaboutus/content3'
import Contact from './contact/contact'
import Who from './bodypagesplit/who'
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
import '../../index.css'
const Body = () => {
  return (
	<div data-elementor-type="wp-post" data-elementor-id="102" class="elementor elementor-102"
		data-elementor-post-type="envato_tk_templates">
      {/* <Banner />
      <TopCard />
      <Who /> */}
      <Navbar />
      <Header />
      <About />
      <Performance />
      <Startegy />
      <Multiassests />
      <Research />
      <Risk />
      <ContactForm />
      <Footer />
{/* <UserExpriance /> */}
{/* <YourtubeVideo /> */}
{/* <Clients /> */}
{/* <Ourservice /> */}
{/* <Offers />
<Tradingbanner /> */}
{/* <Whoweare />  */}

{/* <Whychooseus /> */}
{/* <Clientslider /> */}
{/* <Contact  /> */}
{/* <DeviceExpriance /> */}
        </div>
  )
}
    
export default Body