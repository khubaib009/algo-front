import React from 'react'
import { Fade } from "react-awesome-reveal";
const Banner = () => {
  return (
    <div
    className="elementor-element elementor-element-445c34c e-flex e-con-boxed e-con e-parent"
  >
    <div className="e-con-inner">
      <div
        className="elementor-element elementor-element-4860fa7 e-con-full e-flex e-con e-child"
      >
        <div
          className="elementor-element elementor-element-25d16c5 elementor-invisible elementor-widget elementor-widget-heading"
        >
          <div className="elementor-widget-container">
            {/* <h1 className="elementor-heading-title elementor-size-default">
              About Us
            </h1> */}
          </div>
        </div>
        <div
          className="elementor-element elementor-element-8814d5c elementor-widget elementor-widget-heading"
        >
           <Fade direction='left'>
          <div className="elementor-widget-container">
            <h4 className="elementor-heading-title elementor-size-default">
              Join our community to share experiences, gain valuable insights, and
              build a network for successful investing.
            </h4>
          </div>
          </Fade> 
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Banner