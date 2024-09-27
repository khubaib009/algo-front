import React from 'react'
import "./aboutus.css"
import Header from '../header';
import Fooder from '../footer'
import Banner from './splitaboutus/banner'
import Whoweare from './splitaboutus/whoweare'
import Content3 from './splitaboutus/content3'
import Content4 from './splitaboutus/content4'
import Content5 from './splitaboutus/content5'
import Content6 from './splitaboutus/content6'
import Content7 from './splitaboutus/content7'


const Aboutus = () => {
  return (
<div data-elementor-type="wp-post" data-elementor-id="30" className="elementor elementor-30"
		data-elementor-post-type="envato_tk_templates">
            <Header />
<Banner />
<Whoweare />
<Content3 />
{/* <Content4 /> */}
 {/* <Content5 />
<Content6 />  */}
{/* <Content7 /> */}
<Fooder />
</div>
  )
}

export default Aboutus