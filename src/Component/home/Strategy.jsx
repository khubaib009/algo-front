import React from 'react';
import greenicon from '../home/Images/icon-green.svg';
import blackicon from '../home/Images/black-icon.svg';
import rectangle1 from '../home/Images/Rectangle-1.svg';
import rectangle2 from '../home/Images/Rectangle-2.svg';
import layer3 from '../home/Images/Layer_3.svg';
import layer2 from '../home/Images/Layer-2.svg';
import vector6 from '../home/Images/Vector 6.svg';
import polygon5 from '../home/Images/Polygon 5.svg';
import './startegy.css';

const Strategy = () => {
  return (
    <div className="strategy-container">
      <section className="strategy-section">
        <div className="strategy-content">
          {/* Top Section */}
          <div className="top-section">
          <div className="vertical-line"></div>
            <div className="top-text">
              
              <div className="heading-content">
                <h1 >
                  Access AlgoEdge's<br/> High-Performing & <br/>
                  <span className="highlight-heading">
                    Verified Market-Neutral <br />
                    Trading Strategies
                  </span>
                </h1>
              </div>
              <div className="top-image">
              <img src={greenicon} alt="green-icon" className="green-icon" />
            </div>
            </div>
           
          </div>
          {/* Subheading Section */}
          <div className="subheading">
            <img src={vector6} alt="vector" className="vector" />
          </div>
          {/* Center Content */}
          <div className="center-content">
            <h1 className="investment-title">
              For Investment Managers And{' '}
              <span className="investment-hni">HNIs</span>
            </h1>
            <p className="investment-subtitle">
              Access AlgoEdge's High-Performing Strategies.
            </p>
          </div>
          <div className="center-contents">
            <div className="investment-text">
              
              <div className="strategy-options">
                
                <div className="option middle-option">
                  <div className="middle-images">
                    <div className="image-layer-1">
                      <img src={layer3} alt="layer-1" className="layer1" />
                      <div className="option left-option"> 
                        <h3 className="option-title-left">
                          Invest Through Our Global Partners
                        </h3>
                        <p className="option-text-left">
                          For clients without infrastructure who prefer a fully managed solution.
                        </p>
                        <button className="strategy-button">More</button>
                      </div>
                    </div>
                    
                    <img src={rectangle1} alt="rectangle" className="rectangle1" />
                    <img src={blackicon} alt="black-icon" className="black-icon" />
                    <img src={rectangle2} alt="rectangle" className="rectangle2" />
                    <div className='image-layer'>
                    <img src={layer2} alt="layer-2" className="layer2" />
                      <div className="option right-option">

                        <h3 className="option-title-right">
                         Invest Through Our Global Partners
                        </h3>
                        <p className="option-text-right">
                         For clients without infrastructure who prefer a fully managed solution.
                        </p>
                        <button className="strategy-button">More</button>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
                <div className="api-content">
                {/* <div className="option left-option">
                  
                  <h3 className="option-title-left">
                    Invest Through Our Global Partners
                  </h3>
                  <p className="option-text-left">
                    For clients without infrastructure who prefer a fully managed solution.
                  </p>
                  <button className="strategy-button">More</button>
                </div> */}
                {/* <div className="option right-option">
                  <h3 className="option-title-right">
                    License Our Strategies Via APIs
                  </h3>
                  <p className="option-text-right">
                    For clients with their own infrastructure, receive real-time trading signals via APIs, and execute yourself.
                  </p>
                  <button className="strategy-button-1">More</button>
                </div> */}
                </div>
              </div>
            </div>
            <div className="vertical-divider"></div>
          </div>
        </div>
        <img src={polygon5} alt="polygon-4" className="polygon" />
      </section>
    </div>
  );
};

export default Strategy;
