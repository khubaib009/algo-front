import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe,faLaptop } from '@fortawesome/free-solid-svg-icons';


const TopCard = () => {
  library.add(faGlobe,faLaptop);

  const [CardOne,setCardOne] = React.useState(false)
  const [CardTwo,setCardTwo] = React.useState(false)
  const [CardThree,setCardThree] = React.useState(false)

  // hover effect 5278f28
  // not hover effect 5278f28
  return (
<div
  className="elementor-element elementor-element-11198c0f e-flex e-con-boxed elementor-invisible e-con e-child"
>
  <div className="e-con-inner">
    <div className={`elementor-element elementor-element-${CardOne?'5278f28':'129277b0'} e-con-full e-flex e-con e-child`}
onMouseEnter={()=>setCardOne(true)}
onMouseLeave={()=>setCardOne(false)}
style={{boxShadow:'#27614d 2px 2px 20px 1px' }}

>
    <div className={`elementor-element elementor-element-${CardOne?'71ebd269':'74eca519'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`} >
        <div className="elementor-widget-container">
          <div className="elementor-icon-box-wrapper">
            <div className="elementor-icon-box-icon">
              <span className="elementor-icon elementor-animation-">
              <FontAwesomeIcon icon={faGlobe} />
              </span>
            </div>
            <div className="elementor-icon-box-content">
              <div className="elementor-icon-box-title">
                <span>Who We Are</span>
              </div>
              <p className="elementor-icon-box-description">
              AlgoEdge is a pioneering quantitative research firm at the forefront of high-performance algorithmic trading. We leverage cutting-edge technology to demystify the financial markets, making quantitative strategies accessible to all institutional investment managers.
              {/* AlgoEdge is a pioneering fintech at the forefront of high-performance algorithmic trading. We leverage cutting-edge technology to demystify the financial markets, making sophisticated trading tools accessible to everyone from novice traders to institutional investors. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`elementor-element elementor-element-${CardTwo?'5278f28':'129277b0'} e-con-full e-flex e-con e-child`} 
    onMouseEnter={()=>setCardTwo(true)}
    onMouseLeave={()=>setCardTwo(false)}
    style={{boxShadow:'#27614d 2px 2px 20px 1px' }} >
      <div className={`elementor-element elementor-element-${CardTwo?'71ebd269':'74eca519'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`} >
        <div className="elementor-widget-container">
          <div className="elementor-icon-box-wrapper">
            <div className="elementor-icon-box-icon">
              <span className="elementor-icon elementor-animation-">
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-fas-search-dollar"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505.04 442.66l-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99zm-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98zm27.11-152.54l-45.01-13.5c-5.16-1.55-8.77-6.78-8.77-12.73 0-7.27 5.3-13.19 11.8-13.19h28.11c4.56 0 8.96 1.29 12.82 3.72 3.24 2.03 7.36 1.91 10.13-.73l11.75-11.21c3.53-3.37 3.33-9.21-.57-12.14-9.1-6.83-20.08-10.77-31.37-11.35V112c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v16.12c-23.63.63-42.68 20.55-42.68 45.07 0 19.97 12.99 37.81 31.58 43.39l45.01 13.5c5.16 1.55 8.77 6.78 8.77 12.73 0 7.27-5.3 13.19-11.8 13.19h-28.1c-4.56 0-8.96-1.29-12.82-3.72-3.24-2.03-7.36-1.91-10.13.73l-11.75 11.21c-3.53 3.37-3.33 9.21.57 12.14 9.1 6.83 20.08 10.77 31.37 11.35V304c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-16.12c23.63-.63 42.68-20.54 42.68-45.07 0-19.97-12.99-37.81-31.59-43.39z"></path>
                </svg>{" "}
              </span>
            </div>
            <div className="elementor-icon-box-content">
              <div className="elementor-icon-box-title">
                <span>What is Algorithmic Trading</span>
              </div>
              <p className="elementor-icon-box-description">
              Algorithmic trading harnesses computer algorithms to execute trades automatically, optimizing speed and frequency based on set rules. Through our proprietary technology, AlgoEdge is revolutionizing the trading landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`elementor-element elementor-element-${CardThree?'5278f28':'129277b0'} e-con-full e-flex e-con e-child`}
    onMouseEnter={()=>setCardThree(true)}
    onMouseLeave={()=>setCardThree(false)}
    style={{boxShadow:'#27614d 2px 2px 20px 1px' }}
    >
      <div className={`elementor-element elementor-element-${CardThree?'71ebd269':'74eca519'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}>
        <div className="elementor-widget-container">
          <div className="elementor-icon-box-wrapper">
            <div className="elementor-icon-box-icon">
              <span className="elementor-icon elementor-animation-"><FontAwesomeIcon icon={faLaptop} /></span>
            </div>
            <div className="elementor-icon-box-content" >
              <div className="elementor-icon-box-title" >
                <span>Our Mission</span>
              </div>
              <p className="elementor-icon-box-description">
              Our mission is to make cutting-edge, quantitative trading, exclusive only to larger quant funds, accessible to funds of all sizes. We put all the pieces together so you can activate quant trading in no time.
              {/* Our mission is to democratize trading by delivering advanced, user-friendly algorithmic strategies with real-time analytics to empower both individual traders and institutional investors. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div style={{marginTop:'5%'}}>
    <h3>What is Algorithmic Trading?</h3>
    <p>Algorithmic trading is the use of computer algorithms to execute trading 
strategies automatically, often at high speeds and frequencies, based on 
predefined criteria or rules. Through our proprietary platform, AlgoEdge 
has become a household name in the algorithmic trading space.</p>
</div> */}
    {/* <div
      className="elementor-element elementor-element-19d0dc7c e-con-full e-flex e-con e-child"
      data-id="19d0dc7c"
      data-element_type="container"
    style={{background:"classic"}}
    >
      <div
        className="elementor-element elementor-element-7129ae9b elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
        data-id="7129ae9b"
        data-element_type="widget"
        data-widget_type="icon-box.default"
      >
        <div className="elementor-widget-container">
          <div className="elementor-icon-box-wrapper">
            <div className="elementor-icon-box-icon">
              <span className="elementor-icon elementor-animation-">
                <i
                  aria-hidden="true"
                  className="icon icon-customer-support-2"
                />{" "}
              </span>
            </div>
            <div className="elementor-icon-box-content">
              <div className="elementor-icon-box-title">
                <span>Dedicated Support </span>
              </div>
              <p className="elementor-icon-box-description">
                Aliquet mus maximus sociosqu pede magna libero{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</div>
  
  )
}

export default TopCard 