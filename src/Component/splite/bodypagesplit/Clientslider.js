import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe ,faChartBar,faMoneyCheck} from '@fortawesome/free-solid-svg-icons';

const Clientslider = () => {
  const [firstcard,setfirstcard] = React.useState(false)
  const [secondcard,setsecondcard] = React.useState(false)
  const [Thirdcard,setThirdcard] = React.useState(false)
  // const sliderRef = useRef(null);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Advance to the next set of slides
  //     sliderRef.current.slickNext();
  //   }, 3000); // Change interval as needed (in milliseconds)

  //   return () => clearInterval(intervalId);
  // }, []); // Run th
    
 
  return (
    <div
  className="elementor-element elementor-element-39d5e06 e-flex e-con-boxed e-con e-parent"
>
  <div className="e-con-inner">
    <div
      className="elementor-element elementor-element-63042dc e-flex e-con-boxed e-con e-child"
    >
      <div className="e-con-inner">
        <div
          className={`elementor-element elementor-element-${firstcard ?'fba7dde':'b5c017d'}  e-con-full e-flex e-con e-child`}
          onMouseEnter={()=>{setfirstcard(true)}}
         onMouseLeave={()=>{setfirstcard(false)}}
        >
          <div
            className={`elementor-element elementor-element-${firstcard ?'86d97b8':'4195e7b'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}
          >
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper">
                <div className="elementor-icon-box-icon" style={{display:'flex',justifyContent:'center',marginBottom:'5%'}}>
                  <span className="elementor-icon elementor-animation-">
                  <FontAwesomeIcon icon={faGlobe} />
                 
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <div className="elementor-icon-box-title ">
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
        <div
          className={`elementor-element elementor-element-${secondcard ?'fba7dde':'b5c017d'} e-con-full e-flex e-con e-child`}
          onMouseEnter={()=>{setsecondcard(true)}}
          onMouseLeave={()=>{setsecondcard(false)}}
        >
          <div
            className={`elementor-element elementor-element-${secondcard ?'86d97b8':'4195e7b'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}
          >
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper">
                <div className="elementor-icon-box-icon" style={{display:'flex',justifyContent:'center',marginBottom:'5%'}}>
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
        <div
          className={`elementor-element elementor-element-${Thirdcard ?'fba7dde':'b5c017d'} e-con-full e-flex e-con e-child`}
          onMouseEnter={()=>{setThirdcard(true)}}
          onMouseLeave={()=>{setThirdcard(false)}}
        >
          <div
            className={`elementor-element elementor-element-${Thirdcard ?'86d97b8':'4195e7b'}  elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}
          >
            <div className="elementor-widget-container">
              <div className="elementor-icon-box-wrapper">
                <div className="elementor-icon-box-icon" style={{display:'flex',justifyContent:'center',marginBottom:'5%'}}>
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
      className="elementor-element elementor-element-e6f8377 e-con-full e-flex e-con e-child"
    >
      <div
        className="elementor-element elementor-element-31fd392 elementor-widget elementor-widget-image-carousel"
      >
        <Slider 
         ref={sliderRef}
         dots={false}
         infinite={true}
         arrows={false}
         speed={500}
         slidesToShow={5}
         slidesToScroll={2}>
      <div>
        <img src="../../wp-content/uploads/sites/17/2024/02/logo-1.png" alt="logo-1" />
      </div>
      <div>
        <img src="../../wp-content/uploads/sites/17/2024/02/logo-2.png" alt="logo-2" />
      </div>
      <div>
        <img src="../../wp-content/uploads/sites/17/2024/02/logo-3.png" alt="logo-3" />
      </div>
      <div>
        <img src="../../wp-content/uploads/sites/17/2024/02/logo-4.png" alt="logo-4" />
      </div>
      <div>
        <img src="../../wp-content/uploads/sites/17/2024/02/logo-5.png" alt="logo-5" />
      </div>
      <div>
        <img src="../../wp-content/uploads/sites/17/2024/02/logo-11.png" alt="logo-11" />
      </div>
    </Slider>
        <div className="elementor-widget-container">
          <div className="elementor-image-carousel-wrapper swiper" dir="ltr">
            <div
              className="elementor-image-carousel swiper-wrapper"
              aria-live="off"
            >
               
              
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</div>

  )
}

export default Clientslider