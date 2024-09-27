import React from 'react'
import Header from '../splite/header'
import Footer from '../splite/footer'


const Blogpage = () => {
  const isMobile = window.innerWidth < 600;

  return (
    <div>
    <Header />
    <div data-elementor-type="archive" data-elementor-id={16}  className="elementor elementor-16 elementor-location-archive"   data-elementor-post-type="elementor_library" >
      <div
        className="elementor-element elementor-element-22b2af8b e-flex e-con-boxed e-con e-parent"
        data-id="22b2af8b"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
        data-core-v316-plus="true"
      >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-79ebda9b e-con-full e-flex e-con e-child" data-id="79ebda9b" data-element_type="container" >
            <div className="elementor-element elementor-element-4a84a3c2 elementor-invisible elementor-widget elementor-widget-heading"
              data-id="4a84a3c2"
              data-element_type="widget"
              data-settings='{"_animation":"fadeInLeft"}'
              data-widget_type="heading.default" >
              <div className="elementor-widget-container">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\t\t\t\t\t\t\t\t/*! elementor - v3.20.0 - 13-03-2024 */\n\t\t\t\t\t\t\t\t.elementor-heading-title {\n\t\t\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\t\tline-height: 1\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {\n\t\t\t\t\t\t\t\t\tcolor: inherit;\n\t\t\t\t\t\t\t\t\tfont-size: inherit;\n\t\t\t\t\t\t\t\t\tline-height: inherit\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-small {\n\t\t\t\t\t\t\t\t\tfont-size: 15px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-medium {\n\t\t\t\t\t\t\t\t\tfont-size: 19px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-large {\n\t\t\t\t\t\t\t\t\tfont-size: 29px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xl {\n\t\t\t\t\t\t\t\t\tfont-size: 39px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xxl {\n\t\t\t\t\t\t\t\t\tfont-size: 59px\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t"
                  }}
                />
                <h1 className="elementor-heading-title elementor-size-default">
                  Article &amp; News
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-2eaab58a e-flex e-con-boxed e-con e-parent"  data-id="2eaab58a" data-element_type="container" data-core-v316-plus="true" >
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
                  <article className="elementor-post elementor-grid-item post-123 post type-post status-publish format-standard has-post-thumbnail hentry category-investment" style={{width:isMobile?'100%':'30%'}}>
                    <div className="elementor-post__card">
                      <a className="elementor-post__thumbnail__link"
                        onClick={() =>{window.location.href='/Algorithmic_Trading'}}
                        tabIndex={-1}
                      >
                        <div className="elementor-post__thumbnail">
                          <img
                            style={{ height: '250px' }}
                            fetchpriority="high"
                            width={1280}
                            height={687}
                            src='/trade.jpg'
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
                          <a onClick={() =>{window.location.href='/Algorithmic_Trading'}} >
                        What is Algorithmic Trading? Understanding the Future of Investing
                          </a>
                        </div>
                        <div className="elementor-post__excerpt">
                          <p>
                          Introduction Algorithmic Trading, a cornerstone of modern Financial Technology (FinTech), is transforming how we approach the stock market. This method leverages soph
                          </p>
                        </div>
                      </div>
                      <div className="elementor-post__meta-data">
                        <span className="elementor-post-date">
                       April 24, 2024
                        </span>
                      </div>
                    </div>
                  </article>
                  <article className="elementor-post elementor-grid-item post-123 post type-post status-publish format-standard has-post-thumbnail hentry category-investment"style={{width:isMobile?'100%':'30%'}}>
                    <div className="elementor-post__card">
                      <a className="elementor-post__thumbnail__link" onClick={() =>{window.location.href='/Backtesting'}} tabIndex={-1} >
                        <div className="elementor-post__thumbnail">
                          <img
                            style={{ height: '250px' }}
                            fetchpriority="high"
                            width={1280}
                            height={687}
                            src='/trade2.jpg'
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
                          <a onClick={() =>{window.location.href='/Backtesting'}} >
                         What is Backtesting and Why is it Important for Algorithmic Trading?
                          </a>
                        </div>
                        <div className="elementor-post__excerpt">
                          <p>
                          What is Backtesting and Why is it Important for Algorithmic Trading? Algorithmic trading operates at light-speed and every millisecond counts towards achieving the des                          </p>
                        </div>
                      </div>
                      <div className="elementor-post__meta-data">
                        <span className="elementor-post-date">
                        April 25, 2024                   
                      </span>
                      </div>
                    </div>
                  </article>

                  {/* //blog Three */}
                  <article className="elementor-post elementor-grid-item post-123 post type-post status-publish format-standard has-post-thumbnail hentry category-investment"style={{width:isMobile?'100%':'30%'}}>
                    <div className="elementor-post__card">
                      <a className="elementor-post__thumbnail__link" onClick={() =>{window.location.href='/long-straddle'}} tabIndex={-1} >
                        <div className="elementor-post__thumbnail">
                          <img
                            style={{ height: '250px' }}
                            fetchpriority="high"
                            width={1280}
                            height={687}
                            src='/wp-content/img/blogthree.png'
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
                          <a onClick={() =>{window.location.href='/long-straddle'}} >
                          Introducing AlgoEdge's Upcoming Long Straddle Strategy
                          </a>
                        </div>
                        <div className="elementor-post__excerpt">
                          <p>
                          Long straddle is an options trading strategy that involves purchasing both a call option and a put 
option on the same underlying asset with the same expiration date and strike price.
                        </p>
                        </div>
                      </div>
                      <div className="elementor-post__meta-data">
                        <span className="elementor-post-date">
                        May 03, 2024                   
                      </span>
                      </div>
                    </div>
                  </article>
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
    <Footer />
  </div>
  )
}

export default Blogpage