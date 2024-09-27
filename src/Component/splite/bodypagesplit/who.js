import React from 'react'
import { Fade } from "react-awesome-reveal";

const Who = () => {
    const isMobile = window.innerWidth < 600;
  return (
<div data-elementor-type="archive" data-elementor-id={16}  className="elementor elementor-16 elementor-location-archive"   data-elementor-post-type="elementor_library" >
      <div className="elementor-element elementor-element-2eaab58a e-flex e-con-boxed e-con e-parent"  data-id="2eaab58a" data-element_type="container" data-core-v316-plus="true" >
        <Fade direction='up'>
        <h2 style={{textAlign:'center',marginTop:'10%'}}><span>Who </span><span>we </span><span>work with</span></h2>
        </Fade>
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-11e590bc elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-card-shadow-yes elementor-posts__hover-gradient load-more-align-center elementor-widget elementor-widget-archive-posts"
            data-id="11e590bc"
            data-element_type="widget"
            data-settings='{"archive_cards_row_gap_tablet":{"unit":"px","size":21,"sizes":[]},"pagination_type":"load_more_on_click","archive_cards_columns":"3","archive_cards_columns_tablet":"2","archive_cards_columns_mobile":"1","archive_cards_row_gap":{"unit":"px","size":35,"sizes":[]},"archive_cards_row_gap_mobile":{"unit":"px","size":"","sizes":[]},"load_more_spinner":{"value":"fas fa-spinner","library":"fa-solid"}}'
            data-widget_type="archive-posts.archive_cards"
          >
            <div className="elementor-widget-container">
              <link rel="stylesheet"   href="wp-content/plugins/elementor-pro/assets/css/widget-posts.min.css" />
              <div className="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid">
                  <article className="elementor-post elementor-grid-item post-123 post type-post status-publish format-standard has-post-thumbnail hentry category-investment" style={{width:isMobile?'100%':'40%'}}>
                    <Fade direction='left'>
                    <div className="elementor-post__card">
                      <a className="elementor-post__thumbnail__link"
                
                        tabIndex={-1}
                      >
                        <div className="elementor-post__thumbnail">
                          <img
                            style={{ height: '300px' }}
                            fetchpriority="high"
                            width={1280}
                            height={687}
                            src='/wp-content/Backtesting.jpeg'
                            className="attachment-full size-full wp-image-118"
                            alt="Business people, coach and stock market presentation in meeting for trading, graph and chart monito"
                            decoding="async"
                            sizes="(max-width: 1280px) 100vw, 1280px"
                          />
                        </div>
                      </a>
                      {/* <div className="elementor-post__badge">{list.blog_category}</div> */}
                      <div className="elementor-post__text">
                        <div className="elementor-post__title">
                          <a onClick={() =>{window.location.href='/Institutional_Investors'}} >
                          Institutional Investors
                          </a>
                        </div>
                        <div className="elementor-post__excerpt">
                          <p>
                          Institutional investors such as hedge funds, proprietary trading firms, boutique investment firms, and family offices rely on AlgoEdge for cutting-edge algorithmic strategies. Our solutions empower these institutions to manage and grow their large-scale investments with precision and innovative technology.
                          </p>
                        </div>
                      </div>
                      <div className="elementor-post__meta-data">
                        <button className="elementor-post-date" onClick={() =>{window.location.href='/Institutional_Investors'}}>
                        LEARN MORE
                        </button>
                      </div>
                    </div>
                    </Fade>
                  </article>
                

                  {/* //blog Three */}
                  {/* <article className="elementor-post elementor-grid-item post-123 post type-post status-publish format-standard has-post-thumbnail hentry category-investment"style={{width:isMobile?'100%':'40%'}}>
                  <Fade direction='right'>
                    <div className="elementor-post__card" style={{height:"575px"}}>
                      <a className="elementor-post__thumbnail__link" tabIndex={-1} >
                        <div className="elementor-post__thumbnail">
                          <img
                            style={{ height: '300px' }}
                            fetchpriority="high"
                            width={1280}
                            height={687}
                            src='/wp-content/stock3.jpg'
                            className="attachment-full size-full wp-image-118"
                            alt="Business people, coach and stock market presentation in meeting for trading, graph and chart monito"
                            decoding="async"
                            sizes="(max-width: 1280px) 100vw, 1280px"
                          />
                        </div>
                      </a>
                   
                      <div className="elementor-post__text">
                        <div className="elementor-post__title">
                          <a >
                          Individual Traders
                          </a>
                        </div>
                        <div className="elementor-post__excerpt">
                          <p>
                          Individual traders choose AlgoEdge for its advanced trading tools that elevate their personal investment strategies. With us, traders can confidently navigate market fluctuations, capitalizing on our sophisticated algorithms to enhance their portfolio performance.
                        </p>
                        </div>
                      </div>
                      <div className="elementor-post__meta-data">
                        <button className="elementor-post-date" onClick={() =>{window.location.href='/Individual_Traders'}} >
                            LEARN MORE
                      </button>
                      </div>
                    </div>
                    </Fade>
                  </article> */}
              </div>
              <span className="e-load-more-spinner">
                <svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"  >
                  <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                </svg>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Who