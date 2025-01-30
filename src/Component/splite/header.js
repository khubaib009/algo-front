import React, { useState,useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose,faBars} from '@fortawesome/free-solid-svg-icons';
import Plx from 'react-plx';

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [CardOne, setCardOne] = React.useState(false)
  const [dropdown, setDropdown] = React.useState(false)


  return (
    <>      

    <div
        data-elementor-type="header"
        data-elementor-id={23}
        className="elementor elementor-23 elementor-location-header" >

        <div className="elementor-element elementor-element-4daabab4 e-flex e-con-boxed e-con e-parent" style={{ background: window.location.pathname == "/team" ? "black" : "", marginBottom: window.location.pathname == "/team" ? "0.5%" : "",backgroundColor:'#142929' }} >
          <div className="e-con-inner" >
            <div className="elementor-element elementor-element-3ce28c09 e-con-full e-flex e-con e-child"   >
              <div className="elementor-element elementor-element-1c2ffb94 elementor-widget__width-initial elementor-widget elementor-widget-image"  >
                <div className="elementor-widget-container"
                 onClick={()=>{
                  window.location.href ='/'
                }}
                style={{cursor:"pointer"}}
                >
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n\t\t\t\t\t\t\t\t/*! elementor - v3.20.0 - 13-03-2024 */\n\t\t\t\t\t\t\t\t.elementor-widget-image {\n\t\t\t\t\t\t\t\t\ttext-align: center\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-image a {\n\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-image a img[src$=".svg"] {\n\t\t\t\t\t\t\t\t\twidth: 48px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-image img {\n\t\t\t\t\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t'
                    }}
                  />
                  <a >
                   <img src="/wp-content/logo3.png"  title="logo_vestrade_1png" alt="logo_vestrade_1png" loading="lazy" style={{zIndex:-99999}} />{" "}

                
               
                   {/* <img src="wp-content/logo2.png"  title="logo_vestrade_1png" alt="logo_vestrade_1png" loading="lazy" />{" "}  */}

                  
                    
                  </a>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-32881349 e-con-full e-flex e-con e-child" >
              <div  className="elementor-element elementor-element-49498c67 elementor-nav-menu--stretch elementor-nav-menu__align-end elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" >
                <div className="elementor-widget-container">
                <Plx
                  parallaxData={[
                    {
                      start: 0,
                      end: 150,
                      properties: [
                        {
                          startValue: 0,
                          endValue: -170,
                          property: "translateX",
                        
                        },
                      ],
                    },
                  ]}
                  style={{
                    zIndex: 1,
                  }}
                >
                  <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none" style={{backgroundColor:'#142929'}}>
                    <ul id="menu-1-49498c67" className="elementor-nav-menu" >
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-126">
                        <a href="/" aria-current="page" className="elementor-item elementor-item-active" >
                          Home
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-127">
                        <a
                          href="/aboutus"
                          className="elementor-item"
                        >
                          About
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-137">
                        <a href="/Strategies" className="elementor-item" >
                        Strategies
                        </a>
                      </li>
                       <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-127">
                        <a
                          href="/Institutional_Investors"
                          className="elementor-item"
                        >
                         Institutional Investors
                        </a>
                      </li> 
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-127">
                        <a
                          href="/Individual_Traders"
                          className="elementor-item"
                        >
                         Individual Traders
                        </a>
                      </li> 
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-137">
                        <ul className="sub-menu elementor-nav-menu--dropdown" style={{ display: dropdown ? 'block' : 'none',width:'150px' }}>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-129">
                            <a href="/b2b" className="elementor-sub-item" tabIndex={-1} >
                                 B2b
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-129">
                            <a href="/b2c" className="elementor-sub-item" tabIndex={-1} >
                              B2c
                            </a>
                          </li>
                        </ul>
                        {/* <a onClick={() => { setDropdown(true) }} className="elementor-item" >
                          Our Offerings
                        </a> */}
                      </li>

                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-128">
                        <a href="/team" className="elementor-item" >
                        Team
                        </a>
                      </li>
                      {/* <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-137">
                        <a href="/Data-Innovation" className="elementor-item" >
                         Data Innovation
                        </a>
                      </li> */}


                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-137">
                        <a href="/blog" className="elementor-item" >
                        Blog
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-137">
                        <a
                          href="/contact"
                          className="elementor-item"
                        >
                          Contact
                        </a>
                      </li>

                    </ul>
                  </nav>
               
                </Plx>
                 
                  <div
                    className="elementor-menu-toggle"
                    role="button"
                    tabIndex={0}
                    aria-label="Menu Toggle"
                    aria-expanded="false"
                  >        
                  <FontAwesomeIcon icon={faBars} style={{color:'white',display: isChecked ? 'none' : 'block',width:'20px'}} 
                  onClick={() => { setIsChecked(true) }} />

                  <FontAwesomeIcon icon={faClose} style={{color:'white',display: isChecked ? 'block' : 'none',width:'20px'}} 
                   onClick={() => { setIsChecked(false) }} />
                  <span className="elementor-screen-only">Menu</span>
                  </div>
                  <nav
                    className="elementor-nav-menu--dropdown"
                    style={{ display: isChecked ? 'block' : 'none',position:'absolute', right:"10%",
                    top: "42px" ,width:'150px'}}
                    // style={{ display: isChecked ? 'block' : 'none'}}
                    aria-hidden="true"
                  >
                    <ul id="menu-2-49498c67" className="elementor-nav-menu">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-126">
                        <a
                          href="/"
                          aria-current="page"
                          className="elementor-item elementor-item-active"
                          tabIndex={-1}
                        >
                          Home
                        </a>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-137">
                       
                        <a
                          onClick={() => { setCardOne(true) }}
                          className="elementor-item"
                        >
                          Our Offerings
                        </a>
                        <ul className="sub-menu elementor-nav-menu--dropdown" style={{ display: CardOne ? 'block' : 'none' }}>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-129">
                            <a
                              href="/b2b"
                              className="elementor-sub-item"
                              tabIndex={-1}
                            >
                              B2b
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-129">
                            <a
                              href="/b2c"
                              className="elementor-sub-item"
                              tabIndex={-1}
                            >
                              B2c
                            </a>
                          </li>
                        </ul>
                      </li>
        
                      </li>


                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-130">
                        <a
                          href="/Strategies"
                          className="elementor-item"
                          tabIndex={-1}
                        >
                          Strategies    
                       </a>
                      </li>


                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-130">
                        <a href="/Institutional_Investors" className="elementor-item" tabIndex={-1} >
                       Institutional Investors
                  </a>
                      </li> 
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-130">
                        <a href="/Individual_Traders" className="elementor-item"  tabIndex={-1}  >
                         Individual Traders
                  </a>
                      </li>
                      
                      
                      
                       <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-130">
                        <a
                          href="/Data-Innovation"
                          className="elementor-item"
                          tabIndex={-1}
                        >
                          Data Innovation
                  </a>
                      </li> 
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-127">
                        <a
                          href="/aboutus"
                          className="elementor-item"
                          tabIndex={-1}
                        >
                          About Us
                        </a>
                      </li> 
                        
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-128">
                        <a href="/team" className="elementor-item" tabIndex={-1} >
                          Team
                        </a>
                        <ul className="sub-menu elementor-nav-menu--dropdown">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-129">
                        <a
                          href="#"
                          className="elementor-sub-item"
                          tabIndex={-1}
                        >
                       Strategy                        
                      </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-138">
                        <a
                          href="#"
                          className="elementor-sub-item"
                          tabIndex={-1}
                        >
                          Contact
                        </a>
                      </li>
                    </ul> 
                      </li>
                     
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-130">
                        <a
                          href="/Data-Innovation"
                          className="elementor-item"
                          tabIndex={-1}
                        >
                          Data Innovation
                  </a>
                      </li>
  
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-130">
                        <a href="/blog" className="elementor-item" tabIndex={-1} >
                         Blog
                        </a>
                      </li>

                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-130">
                        <a
                          href="/contact"
                          className="elementor-item"
                          tabIndex={-1}
                        >
                          Contact
                        </a>
                      </li>


                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-137">
                    <a
                      href="#"
                      className="elementor-item"
                      tabIndex={-1}
                    >
                      Product
                    </a>
                  </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-130">
                    <a
                      href="#"
                      className="elementor-item"
                      tabIndex={-1}
                    >
                      Contact
                    </a>
                  </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-131">
                    <a
                      href="#"
                      className="elementor-item elementor-item-anchor"
                      tabIndex={-1}
                    >
                      Pages
                    </a>
                    <ul className="sub-menu elementor-nav-menu--dropdown">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-132">
                        <a
                          href="#"
                          className="elementor-sub-item"
                          tabIndex={-1}
                        >
                          Team
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-134">
                        <a
                          href="#"
                          className="elementor-sub-item"
                          tabIndex={-1}
                        >
                          FAQ
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-133">
                        <a
                          href="#"
                          className="elementor-sub-item"
                          tabIndex={-1}
                        >
                          Blog
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-135">
                        <a
                          href="#"
                          className="elementor-sub-item"
                          tabIndex={-1}
                        >
                          Single Blog
                        </a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-136">
                        <a
                          href="#"
                          className="elementor-sub-item"
                          tabIndex={-1}
                        >
                          404 Page
                        </a>
                      </li>
                    </ul>
                  </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-19856dec elementor-hidden-mobile elementor-widget elementor-widget-button" style={{marginLeft:'auto'}} >
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-button-link elementor-size-sm" onClick={() => { window.open('https://app.algoedge.io/', '_self'); }} >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text" style={{ color: 'white' }}>Log In</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
             
            </div>
            
          </div>
          
        </div>
      </div>

    </>

  )
}         

export default Header