import React from 'react'
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from 'react-type-animation';
import './style.css'
const Banner = () => {
  return (
<div className="elementor-element elementor-element-50062efb e-flex e-con-boxed e-con e-parent bannertop11" >
{/* <div style={{ position: 'relative', display: 'inline-block'}}> */}
    <video autoPlay loop muted className="background-video">
        <source src="wp-content/market.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#00000042', // Light gray color with 50% opacity
        zIndex: 1 // Ensure the overlay is above the video
    }}></div>
{/* </div> */}
  <div className="e-con-inner" style={{position: 'absolute', top: 0, left: 0, zIndex: 2 }}>
    <div className="elementor-element elementor-element-4528a2b3 e-con-full e-flex e-con e-child mobiltopcontent">
      <div className="elementor-element elementor-element-7f647e81 elementor-widget elementor-widget-heading" >
        <div className="elementor-widget-container">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\t\t\t\t\t\t\t\t/*! elementor - v3.20.0 - 13-03-2024 */\n\t\t\t\t\t\t\t\t.elementor-heading-title {\n\t\t\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\t\tline-height: 1\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {\n\t\t\t\t\t\t\t\t\tcolor: inherit;\n\t\t\t\t\t\t\t\t\tfont-size: inherit;\n\t\t\t\t\t\t\t\t\tline-height: inherit\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-small {\n\t\t\t\t\t\t\t\t\tfont-size: 15px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-medium {\n\t\t\t\t\t\t\t\t\tfont-size: 19px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-large {\n\t\t\t\t\t\t\t\t\tfont-size: 29px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xl {\n\t\t\t\t\t\t\t\t\tfont-size: 39px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xxl {\n\t\t\t\t\t\t\t\t\tfont-size: 59px\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t"
            }}
          />
          <Fade direction='left'>
          {/* <h1 className="elementor-heading-title elementor-size-default">
            Making Your Worldwide Trading Easy
          </h1> */}
          </Fade>
        </div>
      </div>
      <div  className="elementor-element elementor-element-3af53480 elementor-widget elementor-widget-text-editor" >
        <div className="elementor-widget-container">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\t\t\t\t\t\t\t\t/*! elementor - v3.20.0 - 13-03-2024 */\n\t\t\t\t\t\t\t\t.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\tbackground-color: #69727d;\n\t\t\t\t\t\t\t\t\tcolor: #fff\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\tcolor: #69727d;\n\t\t\t\t\t\t\t\t\tborder: 3px solid;\n\t\t\t\t\t\t\t\t\tbackground-color: transparent\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\tmargin-top: 8px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {\n\t\t\t\t\t\t\t\t\twidth: 1em;\n\t\t\t\t\t\t\t\t\theight: 1em\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-text-editor .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\tfloat: left;\n\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t\t\t\t\tfont-size: 50px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-text-editor .elementor-drop-cap-letter {\n\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t"
            }}
          />
          <Fade direction='left'>
                     {/* <span className="headertext" style={{color:'#ffff',fontWeight:'600',fontSize:"5.5vw"}}>
          AlgoEdge</span> */}
              <span className="headertext" style={{color:'#ffff',fontWeight:'600',fontSize:"5.5vw",lineHeight:"6vw"}}>
              Quantitative Research</span> 
              {/* <p style={{color:'#ffff',fontWeight:'400',fontSize:"1.5vw",lineHeight:"1.7rem",marginTop:"3%"}}>
                
                
                Democratizing Algorithmic Trading: Empowering individuals to engage in automated trading strategies, leveling the playing field in financial markets.
                
                </p> */}
                <p style={{color:'#ffff',fontWeight:'400',fontSize:"1.5vw",lineHeight:"1.7rem",marginTop:"3%"}}>
                
                
                With the world’s brightest quantitative talent, we deliver advanced quantitative solutions that optimize trading, risk management, and portfolio performance.
                
                </p>
 
          {/* <h3 className="headertext animated" style={{color:'#ffff',fontWeight:'600',fontSize:"30px"}}>
          <TypeAnimation
          
          sequence={[
            'Democratizing Algorithmic Trading',
            2000,
            '', 
            1000, 
            'Democratizing Algorithmic Trading',
            2000,
            '', 
            1000, 

        ]}
          wrapper="span"
      speed={-100}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
          /></h3> */}
          {/* <p className="midtext">
          At the helm is our exceptional team, led by founder Kunal Dhawan, boasting diverse expertise from various domains. We are driven by a commitment to success, fueled by robust financial projections and an unwavering dedication to addressing customer needs.
          </p> */}
          </Fade>
        </div>
      </div>
      <div className="elementor-element elementor-element-578fe5e3 e-flex e-con-boxed e-con e-child"  style={{marginTop:"-2%"}}>
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-66843023 elementor-mobile-align-justify elementor-widget elementor-widget-button" >
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-md" href='#ContactUS' >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text" style={{color:'white'}}>
                    Contact Us
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* <div  className="elementor-element elementor-element-4367bd44 elementor-mobile-align-justify elementor-widget elementor-widget-button">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-md"  onClick={()=>{window.location.href = '/aboutus';}}>
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">Learn more</span>
                  </span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
 
    {/* <div className="elementor-element elementor-element-7b559d14 e-con-full e-flex e-con e-child image-container mobilebackground" style={{display:'flex',justifyContent:'center',flexDirection:"row",margin:'auto'}} > */}
     {/* <Fade direction='left' duration='1000'>
<img src='wp-content\img1.png' alt='gif' style={{width:'100%'}} />
</Fade>
<Fade direction='down' duration='1000'>
<img src='wp-content\img2.png' alt='gif' style={{width:'100%'}}  
</Fade>
<Fade direction='right' duration='1000'>
<img src='wp-content\img3.png' alt='gif' style={{width:'100%'}}  />
</Fade>  */} 
{/*     
    <div className="image-wrapper">
        <img src='wp-content\img1.png' alt='gif' />
    </div>
    <div className="image-wrapper">
        <img src='wp-content\img2.png' alt='gif' />
    </div>
    <div className="image-wrapper">
        <img src='wp-content\img3.png' alt='gif' />
    </div> */}

    {/* </div> */}
  </div>
  
</div>

  )
}

export default Banner