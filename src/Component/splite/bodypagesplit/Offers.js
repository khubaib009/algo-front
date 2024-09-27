import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCells,faObjectGroup,faSackDollar,faCity,faCoins} from '@fortawesome/free-solid-svg-icons';
import { Fade } from "react-awesome-reveal";

const Offers = () => {
  return (
    <div className="elementor-element elementor-element-90f3bfd e-flex e-con-boxed e-con e-parent" >
    <div className="e-con-inner">
      <div className="elementor-element elementor-element-b6d92e8 e-flex e-con-boxed e-con e-child" >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-4ce338d elementor-widget elementor-widget-heading" >
            <div className="elementor-widget-container" >
              <h6 className="elementor-heading-title elementor-size-default" >
                F E A T U R E S
              </h6>
            </div>
          </div>
          <div className="elementor-element elementor-element-5050417 elementor-widget elementor-widget-heading" >
            <div className="elementor-widget-container" >
            <Fade direction='up'>
              <h2 className="elementor-heading-title elementor-size-default" >
              Currently covering the following asset classes
              </h2>
              </Fade>
            </div>
          </div>
          <div className="elementor-element elementor-element-09f597b elementor-widget elementor-widget-text-editor" >
            <div className="elementor-widget-container" >  
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-b11dfbd e-flex e-con-boxed e-con e-child" >
        <div className="e-con-inner" style={{justifyContent:'center'}}>
          <div className="elementor-element elementor-element-ed2974a e-con-full e-flex e-con e-child" >
            <div className="elementor-element elementor-element-6835dc6 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" >
              <div className="elementor-widget-container" >
                <div className="elementor-icon-box-wrapper" >
                  <div className="elementor-icon-box-icon" >
                    <span className="elementor-icon elementor-animation-" >
                    <FontAwesomeIcon icon={faCoins} />

                    </span>
                  </div>
                  <div className="elementor-icon-box-content" >
                    <div className="elementor-icon-box-title" >
                    <Fade direction='up'>
                      <span>Equities</span>
                      </Fade>
                    </div>
                    <p className="elementor-icon-box-description" >
                    Our proprietary trading platform provides lightning-fast execution 
                    and analysis tools for trading equities on major global exchanges.
                     {" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-47ce7d8 elementor-align-left elementor-widget elementor-widget-button"
            >
              <div className="elementor-widget-container" >
                <div className="elementor-button-wrapper" >
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm"
                    onClick={()=>{window.location.href = '/sp-strategy'}}
                 >
                    <span className="elementor-button-content-wrapper" >
                      <span className="elementor-button-text" style={{color:'white'}} >Learn More</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div  className="elementor-element elementor-element-b654d33 e-con-full e-flex e-con e-child" >
            <div className="elementor-element elementor-element-5954eb5 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" >
              <div className="elementor-widget-container" >
                <div className="elementor-icon-box-wrapper" >
                  <div className="elementor-icon-box-icon" >
                    <span className="elementor-icon elementor-animation-" >
                    <FontAwesomeIcon icon={faTableCells} />
                    </span>
                  </div>
                  <div className="elementor-icon-box-content" >
                    <div className="elementor-icon-box-title" >
                    <Fade direction='up'>
                      <span>Options</span>
                      </Fade>
                    </div>
                    <p className="elementor-icon-box-description" >
                    Leverage our advanced trading platform to dive into options 
markets whether your goal is hedging risk or seeking alpha.
                    {" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-2cebb78 elementor-align-left elementor-widget elementor-widget-button" >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm"   onClick={()=>{window.location.href = '/sp-strategy'}} >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text" style={{color:'white'}}>Learn More</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-ee90d53 e-con-full e-flex e-con e-child" >
            <div className="elementor-element elementor-element-1c9a3fb elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" >
              <div className="elementor-widget-container" >
                <div className="elementor-icon-box-wrapper" >
                  <div className="elementor-icon-box-icon" >
                    <span className="elementor-icon elementor-animation-">
                    <FontAwesomeIcon icon={faObjectGroup} />
                    </span>
                  </div>
                  <div className="elementor-icon-box-content" >
                    <div className="elementor-icon-box-title" >
                    <Fade direction='up'>
                      <span>Futures</span>
                      </Fade>
                    </div>
                    <p className="elementor-icon-box-description" >
                    Execute high-frequency trades in the futures market across 
various commodities and financial instruments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-6c1c393 elementor-align-left elementor-widget elementor-widget-button" >
              <div className="elementor-widget-container" >
                <div className="elementor-button-wrapper" >
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm"
                    onClick={()=>{window.location.href = '/sp-strategy'}}
                  >
                    <span className="elementor-button-content-wrapper" >
                      <span className="elementor-button-text" style={{color:'white'}}>Learn More</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div  className="elementor-element elementor-element-ee8e993 e-con-full e-flex e-con e-child" >
            <div className="elementor-element elementor-element-5dd863b elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" >
              <div className="elementor-widget-container" >
                <div className="elementor-icon-box-wrapper" >
                  <div className="elementor-icon-box-icon" >
                    <span className="elementor-icon elementor-animation-" >
                    <FontAwesomeIcon icon={faCity} />
                    </span>
                  </div>
                  <div className="elementor-icon-box-content" >
                    <div className="elementor-icon-box-title" >
                    <Fade direction='up'>
                      <span>Cryptocurrencies</span>
                      </Fade>
                    </div>
                    <p className="elementor-icon-box-description" >
                    Trade Bitcoin, Ethereum, and other forms of cryptocurrencies 
combined with the power of high-frequency trading algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-575985c elementor-align-left elementor-widget elementor-widget-button" >
              <div className="elementor-widget-container" >
                <div className="elementor-button-wrapper" >
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm"
                    onClick={()=>{window.location.href = '/sp-strategy'}}
                  >
                    <span className="elementor-button-content-wrapper" >
                      <span className="elementor-button-text" style={{color:'white'}}>Learn More</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-af22bf4 e-con-full e-flex e-con e-child" >
            <div className="elementor-element elementor-element-af1f4ea elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" >
              <div className="elementor-widget-container" >
                <div className="elementor-icon-box-wrapper" >
                  <div className="elementor-icon-box-icon" >
                    <span className="elementor-icon elementor-animation-" >
                    <FontAwesomeIcon icon={faSackDollar} />
                    </span>
                  </div>
                  <div className="elementor-icon-box-content" >
                    <div className="elementor-icon-box-title" >
                      <Fade direction='up'>
                      <span>Forex</span>
                      </Fade>
                    </div>
                    <p className="elementor-icon-box-description" >
                    Navigate the global currency markets combined with high-frequency trading using our advanced Forex trading tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-3d33787 elementor-align-left elementor-widget elementor-widget-button"
            >
              <div className="elementor-widget-container" >
                <div className="elementor-button-wrapper" >
                  <a className="elementor-button elementor-button-link elementor-size-sm"   onClick={()=>{window.location.href = '/sp-strategy'}} >
                    <span className="elementor-button-content-wrapper" >
                      <span className="elementor-button-text" style={{color:'white'}} >Learn More</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="elementor-element elementor-element-8f32223 e-con-full e-flex e-con e-child" >
            <div className="elementor-element elementor-element-631d8ba elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box" >
              <div className="elementor-widget-container" >
                <div className="elementor-icon-box-wrapper" >
                  <div className="elementor-icon-box-icon" >
                    <span className="elementor-icon elementor-animation-" >
                    <FontAwesomeIcon icon={faSackDollar} />
                    </span>
                  </div>
                  <div className="elementor-icon-box-content" >
                    <div className="elementor-icon-box-title" >
                      <span>Speed and Efficiency</span>
                    </div>
                    <p className="elementor-icon-box-description" > 
                    By leveraging our SaaS platform and proprietary trading 
technology, investors can more efficiently trade while leveraging 
high-frequency trading strategies.
 </p>
                  </div>
                </div>
              </div>
            </div>
            <div  className="elementor-element elementor-element-e35d1e1 elementor-align-left elementor-widget elementor-widget-button" >
              <div className="elementor-widget-container" >
                <div className="elementor-button-wrapper" >
                  <a className="elementor-button elementor-button-link elementor-size-sm"    onClick={()=>{window.location.href = '/sp-strategy'}}>
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text" style={{color:'white'}}>Learn More</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Offers