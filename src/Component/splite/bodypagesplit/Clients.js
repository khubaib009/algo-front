import React from 'react';
import CountUp from 'react-countup'; 

function Clients() {


  return (
<div className="elementor-element elementor-element-0b8a2e0 e-flex e-con-boxed e-con e-parent" >
  <div className="e-con-inner">
    <div className="elementor-element elementor-element-f18d5d7 elementor-widget__width-initial elementor-widget elementor-widget-counter" >
      <div className="elementor-widget-container">
        <div className="elementor-counter">
          <div className="elementor-counter-number-wrapper">
            <span className="elementor-counter-number-prefix" />
              <CountUp className="elementor-counter-number" start={0} end={6} duration={5} separator=","  redraw={true} />
            <span className="elementor-counter-number-suffix">M+</span>
          </div>
          <div className="elementor-counter-title">Happy Client</div>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-a51106b elementor-widget__width-initial elementor-widget elementor-widget-counter" >
      <div className="elementor-widget-container">
        <div className="elementor-counter">
          <div className="elementor-counter-number-wrapper">
            <span className="elementor-counter-number-prefix" />
            <CountUp className="elementor-counter-number"  start={0}  end={11}  duration={5} separator=","  redraw={true}  />
            <span className="elementor-counter-number-suffix">K+</span>
          </div>
          <div className="elementor-counter-title">Project Done</div>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-0fa082b elementor-widget__width-initial elementor-widget elementor-widget-counter" >
      <div className="elementor-widget-container">
        <div className="elementor-counter">
          <div className="elementor-counter-number-wrapper">
            <span className="elementor-counter-number-prefix" />
            <CountUp className="elementor-counter-number"  start={0}  end={711}  duration={5} separator=","  redraw={true} />
            <span className="elementor-counter-number-suffix">+</span>
          </div>
          <div className="elementor-counter-title">Expert Team</div>
        </div>
      </div>
    </div>
    <div className="elementor-element elementor-element-b0e8ee3 elementor-widget__width-initial elementor-widget elementor-widget-counter" >
      <div className="elementor-widget-container">
        <div className="elementor-counter">
          <div className="elementor-counter-number-wrapper">
            <span className="elementor-counter-number-prefix" />
            <CountUp className="elementor-counter-number" start={0} end={25}  duration={5} separator="," redraw={true}  />
            <span className="elementor-counter-number-suffix">+</span>
          </div>
          <div className="elementor-counter-title">Years of Experience</div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Clients