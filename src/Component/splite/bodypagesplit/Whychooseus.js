import React from 'react'
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignIn ,faTools,faBitcoinSign ,faCoins ,faComment} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Whychooseus = () => {
  library.add(faTools,faSignIn,faBitcoinSign,faCoins,faComment);

  return (
    
    <div className="elementor-element elementor-element-3c79fc7 e-flex e-con-boxed e-con e-parent" > 
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-e0d1be0 e-con-full e-flex e-con e-child" style={{display:'flex',justifyContent:'space-evenly'}} >
          <Fade direction='left'>
          <div className="elementor-element elementor-element-8379aeb elementor-invisible elementor-widget elementor-widget-heading" >
            <div className="elementor-widget-container">
              <h3 className="elementor-heading-title elementor-size-default">
              How It Works
              </h3>
            </div>
          </div>
          {/* <div
            className="elementor-element elementor-element-8379aeb elementor-invisible elementor-widget elementor-widget-heading"
       
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
              How It Works
              </h2>
            </div>
          </div> */}
          {/* <div
            className="elementor-element elementor-element-050510c elementor-invisible elementor-widget elementor-widget-heading"
            
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
            
              </h2>
            </div>
          </div> */}
           {/* <div
            className="elementor-element elementor-element-001e3f0 elementor-invisible elementor-widget elementor-widget-heading"
         
          >
            <div className="elementor-widget-container">
               <div className="elementor-heading-title elementor-size-default">
                Aliquam iaculis augue sed metus scelerisque parturient lobortis
                velit. Facilisis molestie ridiculus porta dictumst consectetur
                nascetur ut mus.
              </div> 
            </div>
          </div> */}
          <div className="elementor-element elementor-element-37218a6 elementor-widget elementor-widget-progress" >
            <div className="elementor-widget-container">
              <span className="elementor-title" id="elementor-progress-bar-37218a6">
              1.Sign up
              </span>
              <div aria-labelledby="elementor-progress-bar-37218a6" className="elementor-progress-wrapper"  role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={80}
              >
                {/* <div className="elementor-progress-bar" data-max={80}>
                  <span className="elementor-progress-text" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-37218a6 elementor-widget elementor-widget-progress" >
            <div className="elementor-widget-container">
              <span className="elementor-title" id="elementor-progress-bar-37218a6">2.Explore enhanced tool</span>
              <div aria-labelledby="elementor-progress-bar-37218a6"  className="elementor-progress-wrapper"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={80}
              >
                {/* <div className="elementor-progress-bar" data-max={80}>
                  <span className="elementor-progress-text" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-37218a6 elementor-widget elementor-widget-progress" >
            <div className="elementor-widget-container">
              <span className="elementor-title" id="elementor-progress-bar-37218a6">3.Optimize your strategy</span>
              <div aria-labelledby="elementor-progress-bar-37218a6" className="elementor-progress-wrapper"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={80}
              >
                {/* <div className="elementor-progress-bar" data-max={80}>
                  <span className="elementor-progress-text" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-0d69c47 elementor-widget elementor-widget-progress" >
            <div className="elementor-widget-container">
              <span className="elementor-title" id="elementor-progress-bar-0d69c47">4.Connect with the community</span>
              <div aria-labelledby="elementor-progress-bar-0d69c47" className="elementor-progress-wrapper" role="progressbar"
                aria-valuemin={0}
                aria-valuemax={40}
                aria-valuenow={70}
              >
                {/* <div className="elementor-progress-bar" data-max={90}>
                  <span className="elementor-progress-text" />
                </div> */}
              </div>
            </div>
          </div>
          <div  className="elementor-element elementor-element-c0a5ebf elementor-widget elementor-widget-progress"  >
            <div className="elementor-widget-container">
              <span className="elementor-title" id="elementor-progress-bar-c0a5ebf">5.Experience the results
              </span>
              <div aria-labelledby="elementor-progress-bar-c0a5ebf" className="elementor-progress-wrapper" role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={95}
              >
              {/* <div className="elementor-progress-bar" data-max={95} >
                  <span className="elementor-progress-text" />
                </div> */}
              </div>
            </div>
          </div>
          </Fade>
        </div>
        <div className="elementor-element elementor-element-105b73b e-con-full e-flex elementor-invisible e-con e-child" style={{ animation: "fadeInRight", animationTablet: "fadeInRight" }} >
      <Fade direction='right'>
          <div className="elementor-element elementor-element-55eb110 elementor-view-stacked elementor-position-left elementor-mobile-position-left elementor-shape-circle elementor-vertical-align-top elementor-widget elementor-widget-icon-box" >
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper" style={{ display: 'flex' }} >
                <div className="elementor-icon-box-icon" style={{ marginRight: '5%' }} >
                  <span className="elementor-icon elementor-animation-">
                  <FontAwesomeIcon icon={faSignIn}  />

                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <div className="elementor-icon-box-title"><span>Sign up</span> </div>
                  <p className="elementor-icon-box-description"> Join the AlgoEdge community by signing up for our subscription-based SaaS platform. It's your gateway to high-frequency trading tools and features. </p>
                </div>
              </div>
            </div>
          </div>
          <div  className="elementor-element elementor-element-0926e69 elementor-view-stacked elementor-position-left elementor-mobile-position-left elementor-shape-circle elementor-vertical-align-top elementor-widget elementor-widget-icon-box"  >
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper" style={{ display: 'flex' }}>
                <div className="elementor-icon-box-icon" style={{ marginRight: '5%' }}>
                  <span className="elementor-icon elementor-animation-">
                  <FontAwesomeIcon icon={faTools}  />
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <div className="elementor-icon-box-title">
                    <span> Explore enhanced tools</span>
                  </div>
                  <p className="elementor-icon-box-description"> Dive into a world of advanced tools designed for both seasoned algorithmic traders and individual investors. Tailor your experience to meet your unique trading goals. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-d7967f1 elementor-view-stacked elementor-position-left elementor-mobile-position-left elementor-shape-circle elementor-vertical-align-top elementor-widget elementor-widget-icon-box" >
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper" style={{ display: 'flex' }}>
                <div className="elementor-icon-box-icon" style={{ marginRight: '5%' }}>
                  <span className="elementor-icon elementor-animation-">
                  <FontAwesomeIcon icon={faBitcoinSign}  />
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <div className="elementor-icon-box-title">
                    <span>Optimize your strategy </span>
                  </div>
                  <p className="elementor-icon-box-description"> Leverage our platform to refine and optimize your trading strategy. Stay ahead of market trends and make informed decisions with cutting-edge tools at your disposal. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-1c77418 elementor-view-stacked elementor-position-left elementor-mobile-position-left elementor-shape-circle elementor-vertical-align-top elementor-widget elementor-widget-icon-box" >
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper" style={{ display: 'flex' }}>
                <div className="elementor-icon-box-icon" style={{ marginRight: '5%' }}>
                  <span className="elementor-icon elementor-animation-">
                  <FontAwesomeIcon icon={faComment}  />
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <div className="elementor-icon-box-title">
                    <span>Connect with the community</span>
                  </div>
                  <p className="elementor-icon-box-description"> Join a community of like-minded traders and investors. Share insights, strategies, and experiences to enhance your trading journey.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-1c77418 elementor-view-stacked elementor-position-left elementor-mobile-position-left elementor-shape-circle elementor-vertical-align-top elementor-widget elementor-widget-icon-box" >
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper" style={{ display: 'flex' }}>
                <div className="elementor-icon-box-icon" style={{ marginRight: '5%' }}>
                  <span className="elementor-icon elementor-animation-">
                  <FontAwesomeIcon icon={faCoins}  />
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <div className="elementor-icon-box-title">
                    <span>Experience the results </span>
                  </div>
                  <p className="elementor-icon-box-description">Witness the impact of algorithmic trading on your portfolio. Experience the potential for financial growth as you navigate the markets with AlgoEdge. </p>
                </div>
              </div>
            </div>
          </div>
          </Fade>
        </div>

      </div>
    </div>

  )
}

export default Whychooseus