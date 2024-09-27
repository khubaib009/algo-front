import React from 'react'
import { Fade, Rotate } from "react-awesome-reveal";


const Whoweare = () => {
  return (
    <div
      className="elementor-element elementor-element-4ebfdcbe e-flex e-con-boxed e-con e-parent"
    >
      <div className="e-con-inner" style={{ marginTop: '-5%' }}>
        <div
          className="elementor-element elementor-element-5c97bcde e-con-full e-flex elementor-invisible e-con e-child"
        >
          <div
            className="elementor-element elementor-element-d86f19d elementor-widget elementor-widget-heading"
          >
            <Fade direction='left'>
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  About us
                </h2>
              </div>
            </Fade>
          </div>
          <div
            className="elementor-element elementor-element-6f5caefa elementor-widget elementor-widget-heading"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
              </h2>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-808671a elementor-widget elementor-widget-heading"
          >
            <Fade direction='left'>
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default">
                  We are revolutionizing algorithmic trading, offering a top-tier SaaS platform to both experienced traders and small businesses. Our goal is to disrupt the financial industry, combining a skilled team and strong financial projections to meet customer needs and open global trading opportunities.
                  AlgoEdge's success stems from our expert team, a blend of visionaries from finance, technology, and business, dedicated to transforming algorithmic trading and adept at meeting the dynamic needs of the financial industry.
                </div>
              </div>
            </Fade>
          </div>
          <div
            className="elementor-element elementor-element-32ae9cc3 elementor-widget elementor-widget-button"
          >
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a className="elementor-button elementor-button-link elementor-size-md"
                  onClick={() => { window.location.href = '/team' }}
                >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text" style={{ color: 'white' }}>Discover More</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-53f264f6 e-con-full e-flex elementor-invisible e-con e-child"
        >
          <Fade direction='right'>
            <div
              className="elementor-element elementor-element-443d3753 elementor-widget elementor-widget-image"

            >
              <div className="elementor-widget-container">
                <img
                  fetchpriority="high"
                  decoding="async"
                  width={1280}
                  height={853}
                  src="wp-content/banner11.jpg"
                  className="attachment-full size-full wp-image-114"
                  alt="Bitcoin BTC coins in the shopping cart on the financial diagram."
                  //   srcSet="wp-content/banner11.jpg 1280w, ../../wp-content/uploads/sites/17/2024/02/bitcoin-btc-coins-in-the-shopping-cart-on-the-financial-diagram-1-1-300x200.jpg 300w, ../../wp-content/uploads/sites/17/2024/02/bitcoin-btc-coins-in-the-shopping-cart-on-the-financial-diagram-1-1-1024x682.jpg 1024w, ../../wp-content/uploads/sites/17/2024/02/bitcoin-btc-coins-in-the-shopping-cart-on-the-financial-diagram-1-1-768x512.jpg 768w, ../../wp-content/uploads/sites/17/2024/02/bitcoin-btc-coins-in-the-shopping-cart-on-the-financial-diagram-1-1-1536x1024.jpg 1536w, ../../wp-content/uploads/sites/17/2024/02/bitcoin-btc-coins-in-the-shopping-cart-on-the-financial-diagram-1-1-800x533.jpg 800w"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
            </div>
            {/* <div
            className="elementor-element elementor-element-af21f69 elementor-widget__width-initial elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-cryptocurrency-elementor-widget"
            data-id="af21f69"
            data-element_type="widget"
            data-settings='{"_position":"absolute"}'
            data-widget_type="cryptocurrency-elementor-widget.default"
            >
            <div className="elementor-widget-container">
                <div className="ccew_html_container" id="ccew-wrap905492008">
                <div className="ph-item">
                    <div className="ph-col-12">
                    <div className="ph-row">
                        <div className="ph-col-6 big" />
                        <div className="ph-col-4  big" />
                        <div className="ph-col-2 big" />
                        <div className="ph-col-4" />
                        <div className="ph-col-8 " />
                        <div className="ph-col-6" />
                        <div className="ph-col-6 " />
                        <div className="ph-col-12" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div> */}
          </Fade>
        </div>



      </div>
      <Fade direction='left'>
        <h3 className="elementor-heading-title elementor-size-default d-flex" style={{ marginLeft: '8%' }}>
          What Drives Us
        </h3>
      </Fade>
    </div>
  )
}

export default Whoweare