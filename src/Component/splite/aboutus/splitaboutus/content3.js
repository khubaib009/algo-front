import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe ,faChartBar,faMoneyCheck} from '@fortawesome/free-solid-svg-icons';

const Content3 = () => {
  const [firstcard,setfirstcard] = React.useState(false)
  const [secondcard,setsecondcard] = React.useState(false)
  const [Thirdcard,setThirdcard] = React.useState(false)
  return (
    <div
    className="elementor-element elementor-element-757393e e-flex e-con-boxed e-con e-parent"
  >
    <div className="e-con-inner">
      <div className="elementor-element elementor-element-5c9a54c e-flex e-con-boxed e-con e-child" >
        <div className="e-con-inner">
          <div className={`elementor-element elementor-element-${firstcard?'6df205d':'7be2be8'} e-con-full e-flex e-con e-child`}
         onMouseEnter={()=>{setfirstcard(true)}}
         onMouseLeave={()=>{setfirstcard(false)}}
          >
            <div  className={`elementor-element elementor-element-${firstcard?'f0413d8':'f9f55b2'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}   >
              <div className="elementor-widget-container">
                <link
                  rel="stylesheet"
                  href="../../wp-content/plugins/elementor/assets/css/widget-icon-box.min.css"
                />
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon elementor-animation-">
                    <FontAwesomeIcon icon={faGlobe} />
                    
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <div className="elementor-icon-box-title">
                      <span>
                      A World of Opportunity: The Algorithmic Trading Market
                      </span>
                    </div>
                    <p className="elementor-icon-box-description">
                    The global algorithmic trading market, valued at $15 billion and projected to reach $23.74 billion by 2028, offers significant growth opportunities for AlgoEdge, highlighting the increasing demand for algorithmic trading solutions worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`elementor-element elementor-element-${secondcard?'6df205d':'7be2be8'} e-con-full e-flex e-con e-child`}
            onMouseEnter={()=>{setsecondcard(true)}}
            onMouseLeave={()=>{setsecondcard(false)}}
          >
            <div className={`elementor-element elementor-element-${secondcard?'f0413d8':'f9f55b2'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}  >
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon elementor-animation-">
                    <FontAwesomeIcon icon={faChartBar} />
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <div className="elementor-icon-box-title">
                      <span>
                      Crafting Solutions for a Thriving Market
                      </span>
                    </div>
                    <p className="elementor-icon-box-description">
                    AlgoEdge's subscription-based SaaS platform, tailored for the growing algorithmic trading market, offers advanced tools for traders of all levels. Our mission is to democratize access to algorithmic trading, empowering investors from various backgrounds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`elementor-element elementor-element-${Thirdcard?'6df205d':'7be2be8'} e-con-full e-flex e-con e-child`}
            onMouseEnter={()=>{setThirdcard(true)}}
            onMouseLeave={()=>{setThirdcard(false)}}
          >
            <div  className={`elementor-element elementor-element-${Thirdcard?'f0413d8':'f9f55b2'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`} >
              <div className="elementor-widget-container">
                <div className="elementor-icon-box-wrapper">
                  <div className="elementor-icon-box-icon">
                    <span className="elementor-icon elementor-animation-">
                    <FontAwesomeIcon icon={faMoneyCheck} />
                    </span>
                  </div>
                  <div className="elementor-icon-box-content">
                    <div className="elementor-icon-box-title">
                      <span>Our Dedication, Strategy, and Vision </span>
                    </div>
                    <p className="elementor-icon-box-description">
                    AlgoEdge combines a strategic approach and a clear vision with team dedication to transform algorithmic trading and broaden financial prosperity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="elementor-element elementor-element-5e6bd21 e-con-full e-flex e-con e-child"
        data-id="5e6bd21"
        data-element_type="container"
      >
        <div
          className="elementor-element elementor-element-d523594 elementor-widget elementor-widget-image-carousel"
          data-id="d523594"
          data-element_type="widget"
          data-settings='{"slides_to_show":"6","slides_to_show_tablet":"5","slides_to_show_mobile":"3","slides_to_scroll":"1","navigation":"none","autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","autoplay_speed":5000,"infinite":"yes","speed":500}'
          data-widget_type="image-carousel.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-image-carousel-wrapper swiper" dir="ltr">
              <div
                className="elementor-image-carousel swiper-wrapper"
                aria-live="off"
              >
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="1 of 6"
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="../../wp-content/uploads/sites/17/2024/02/logo-1.png"
                      alt="logo-1"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="2 of 6"
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="../../wp-content/uploads/sites/17/2024/02/logo-2.png"
                      alt="logo-2"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="3 of 6"
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="wp-content/uploads/sites/17/2024/02/logo-3.png"
                      alt="logo-3"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="4 of 6"
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="../../wp-content/uploads/sites/17/2024/02/logo-4.png"
                      alt="logo-4"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="5 of 6"
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="../../wp-content/uploads/sites/17/2024/02/logo-5.png"
                      alt="logo-5"
                    />
                  </figure>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label="6 of 6"
                >
                  <figure className="swiper-slide-inner">
                    <img
                      decoding="async"
                      className="swiper-slide-image"
                      src="../../wp-content/uploads/sites/17/2024/02/logo-11.png"
                      alt="logo-11"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>  
  )
}

export default Content3