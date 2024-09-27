import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Research from './images/seo.png'
import whitepaper from './images/papers.png'
import Strategypage from './images/analysis.png'
import Refine from './images/selective.png'
import Redeploy from './images/startup.png'
import Optimizing from './images/optimizing.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from "react-awesome-reveal";
import { faParagraph, faSearch, faLaptop, faUpload, faPager, faDashboard, faArrowDown, faArrowRight, faRecycle } from '@fortawesome/free-solid-svg-icons';
const Strategy = () => {
    const isMobile = window.innerWidth < 600;
    const [CardOne, setCardOne] = React.useState(false)
    const [CardTwo, setCardTwo] = React.useState(false)
    const [indian, setindian] = React.useState(false)
    const [Canadian, setCanadian] = React.useState(true)
    const [CardThree, setCardThree] = React.useState(false)
    const [Cardfour, setCardfour] = React.useState(false)
    const [Cardfive, setCardfive] = React.useState(false)
    const [Equities, setEquities] = React.useState(false)
    const [indianEquities, setindianEquities] = React.useState(false)

    const [Crypto, setCrypto] = React.useState(false)
    const [Options, setOptions] = React.useState(false)
    const [indianOptions, setindianOptions] = React.useState(false)

    const [Commodities, setCommodities] = React.useState(false)
    return (
        <div>
            <Header />
            <div data-elementor-type="archive" data-elementor-id={16} className="elementor elementor-16 elementor-location-archive" data-elementor-post-type="elementor_library"  >
                <div className="elementor-element elementor-element-22b2af8b e-flex e-con-boxed e-con e-parent" data-id="22b2af8b" data-element_type="container" data-settings='{"background_background":"classic"}' data-core-v316-plus="true" >
                    <div className="e-con-inner" style={{ width: '100%' }}>
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
                                    <h1 className="elementor-heading-title elementor-size-default">Strategy Building Process</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-2eaab58a e-flex e-con-boxed e-con e-parent" data-id="2eaab58a" data-element_type="container" data-core-v316-plus="true" >
                    <div>
                        <div className="elementor-element elementor-element-11e590bc elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-card-shadow-yes elementor-posts__hover-gradient load-more-align-center elementor-widget elementor-widget-archive-posts" data-id="11e590bc" data-element_type="widget" data-settings='{"archive_cards_row_gap_tablet":{"unit":"px","size":21,"sizes":[]},"pagination_type":"load_more_on_click","archive_cards_columns":"3","archive_cards_columns_tablet":"2","archive_cards_columns_mobile":"1","archive_cards_row_gap":{"unit":"px","size":35,"sizes":[]},"archive_cards_row_gap_mobile":{"unit":"px","size":"","sizes":[]},"load_more_spinner":{"value":"fas fa-spinner","library":"fa-solid"}}' data-widget_type="archive-posts.archive_cards" >
                            <div className='d-flex' style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '6%' }}>
                                <h3>How We Build a Strategy Within a Month</h3>
                            </div>
                            <div data-elementor-type="wp-post" data-elementor-id="102" class="elementor elementor-102"
                                data-elementor-post-type="envato_tk_templates" style={{ marginTop: '10%', marginBottom: '10%' }} >
                                <div className="elementor-element elementor-element-11198c0f e-flex e-con-boxed elementor-invisible e-con e-child" >
                                <div className="e-con-inner" style={{justifyContent:'space-evenly'}} >
                                        <div className={`elementor-element elementor-element-${CardOne ? '5278f28' : '129277b0'} e-con-full e-flex e-con e-child`}
                                            onMouseEnter={() => setCardOne(true)}
                                            onMouseLeave={() => setCardOne(false)}
                                            style={{ width: isMobile ? '100' : '20%', boxShadow: 'gray 2px 2px 20px 1px' }} >
                                            <div className={`elementor-element elementor-element-${CardOne ? '71ebd269' : '74eca519'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`} >
                                                <div className="elementor-widget-container">
                                                    <div className="elementor-icon-box-wrapper">
                                                        <div className="elementor-icon-box-icon">
                                                            <span className="elementor-icon elementor-animation-">
                                                                <FontAwesomeIcon icon={faSearch} />
                                                            </span>
                                                        </div>
                                                        <div className="elementor-icon-box-content">
                                                            <div className="elementor-icon-box-title">
                                                                <span>Research</span>
                                                            </div>
                                                            <p className="elementor-icon-box-description">
                                                                Our journey begins with in-depth market research. We harness cutting-edge technology and comprehensive data analysis to identify potential trading opportunities and craft the foundation of our strategies.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {!isMobile && <div style={{ display: "flex", alignItems: "center", color: "black" }} >
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div> }
                                        <div className={`elementor-element elementor-element-${CardTwo ? '5278f28' : '129277b0'} e-con-full e-flex e-con e-child`} onMouseEnter={() => setCardTwo(true)} onMouseLeave={() => setCardTwo(false)} style={{ width: isMobile ? '100' : '20%', boxShadow: 'gray 2px 2px 20px 1px' }} >
                                            <div className={`elementor-element elementor-element-${CardTwo ? '71ebd269' : '74eca519'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`} >
                                                <div className="elementor-widget-container">
                                                    <div className="elementor-icon-box-wrapper">
                                                        <div className="elementor-icon-box-icon">
                                                            <span className="elementor-icon elementor-animation-">  <FontAwesomeIcon icon={faPager} /> </span>
                                                        </div>
                                                        <div className="elementor-icon-box-content">
                                                            <div className="elementor-icon-box-title">
                                                                <span>Whitepaper</span>
                                                            </div>
                                                            <p className="elementor-icon-box-description">
                                                                Each strategy is rigorously documented in a whitepaper. This document details our trading logic, expected outcomes, and risk assessments, ensuring transparency and a clear roadmap for implementation.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {!isMobile && <div style={{ display: "flex", alignItems: "center", color: "black" }} >
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div> }
                                        <div className={`elementor-element elementor-element-${CardThree ? '5278f28' : '129277b0'} e-con-full e-flex e-con e-child`}
                                            onMouseEnter={() => setCardThree(true)}
                                            onMouseLeave={() => setCardThree(false)}
                                            style={{ width: isMobile ? '100' : '20%', boxShadow: 'gray 2px 2px 20px 1px' }} >
                                            <div className={`elementor-element elementor-element-${CardThree ? '71ebd269' : '74eca519'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}>
                                                <div className="elementor-widget-container">
                                                    <div className="elementor-icon-box-wrapper">
                                                        <div className="elementor-icon-box-icon">
                                                            <span className="elementor-icon elementor-animation-">
                                                                <FontAwesomeIcon icon={faDashboard} />
                                                            </span>
                                                        </div>
                                                        <div className="elementor-icon-box-content" >
                                                            <div className="elementor-icon-box-title" >
                                                                <span>Deployment of strategy</span>
                                                            </div>
                                                            <p className="elementor-icon-box-description">
                                                                Strategies move from theory to practice. We deploy them in real-world environments, utilizing robust platforms that support high-frequency trading to capture market efficiencies.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {!isMobile && <div style={{ display: "flex", alignItems: "center", color: "black" }} >
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div> }
                                        <div className={`elementor-element elementor-element-${Cardfour ? '5278f28' : '129277b0'} e-con-full e-flex e-con e-child`}
                                            onMouseEnter={() => setCardfour(true)} onMouseLeave={() => setCardfour(false)}
                                            style={{ width: isMobile ? '100' : '20%', boxShadow: 'gray 2px 2px 20px 1px'}} >
                                            <div className={`elementor-element elementor-element-${Cardfour ? '71ebd269' : '74eca519'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}>
                                                <div className="elementor-widget-container">
                                                    <div className="elementor-icon-box-wrapper">
                                                        <div className="elementor-icon-box-icon">
                                                            <span className="elementor-icon elementor-animation-"> <FontAwesomeIcon icon={faRecycle} /> </span>
                                                        </div>
                                                        <div className="elementor-icon-box-content" >
                                                            <div className="elementor-icon-box-title" >
                                                                <span>Refine</span>
                                                            </div>
                                                            <p className="elementor-icon-box-description">
                                                                Continuous improvement is key. We monitor the performance and tweak our algorithms as needed, adapting to market conditions to optimize results.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {!isMobile && <div style={{ display: "flex", alignItems: "center", color: "black" }} >
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </div> }
                                        <div className={`elementor-element elementor-element-${Cardfive ? '5278f28' : '129277b0'} e-con-full e-flex e-con e-child`} onMouseEnter={() => setCardfive(true)} onMouseLeave={() => setCardfive(false)} style={{ width: isMobile ? '100' : '20%', boxShadow: 'gray 2px 2px 20px 1px', marginTop: isMobile ? '0' : '5%' }} >
                                            <div className={`elementor-element elementor-element-${Cardfive ? '71ebd269' : '74eca519'} elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}>
                                                <div className="elementor-widget-container">
                                                    <div className="elementor-icon-box-wrapper">
                                                        <div className="elementor-icon-box-icon">
                                                            <span className="elementor-icon elementor-animation-"> <FontAwesomeIcon icon={faUpload} /> </span>
                                                        </div>
                                                        <div className="elementor-icon-box-content" >
                                                            <div className="elementor-icon-box-title" >
                                                                <span>Redeploy</span>
                                                            </div>
                                                            <p className="elementor-icon-box-description">
                                                                After refinement, strategies are redeployed with enhancements. This iterative process ensures our approaches remain competitive and aligned with current market dynamics.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div data-elementor-type="archive" data-elementor-id={16} className="elementor elementor-16 elementor-location-archive" data-elementor-post-type="elementor_library" >
                                <div className="elementor-element elementor-element-2eaab58a e-flex e-con-boxed e-con e-parent" data-id="2eaab58a" data-element_type="container" data-core-v316-plus="true" >
                                    <Fade direction='up'>
                                        <h3 style={{ textAlign: 'center', marginTop: '0%' }}>Featured Trading Strategy</h3>
                                    </Fade>
                                    <div className="e-con-inner">
                                        <div className="elementor-element elementor-element-11e590bc elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-card-shadow-yes elementor-posts__hover-gradient load-more-align-center elementor-widget elementor-widget-archive-posts"
                                            data-id="11e590bc"
                                            data-element_type="widget"
                                            data-settings='{"archive_cards_row_gap_tablet":{"unit":"px","size":21,"sizes":[]},"pagination_type":"load_more_on_click","archive_cards_columns":"3","archive_cards_columns_tablet":"2","archive_cards_columns_mobile":"1","archive_cards_row_gap":{"unit":"px","size":35,"sizes":[]},"archive_cards_row_gap_mobile":{"unit":"px","size":"","sizes":[]},"load_more_spinner":{"value":"fas fa-spinner","library":"fa-solid"}}'
                                            data-widget_type="archive-posts.archive_cards"
                                        >
                                            <div className="elementor-widget-container">
                                                <link rel="stylesheet" href="wp-content/plugins/elementor-pro/assets/css/widget-posts.min.css" />
                                                <div className="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid">
                                                    <article className="elementor-post elementor-grid-item post-123 post type-post status-publish format-standard has-post-thumbnail hentry category-investment" style={{ width: isMobile ? '100%' : '35%' }}>
                                                        <Fade direction='left'>
                                                            <div className="elementor-post__card">
                                                                <a className="elementor-post__thumbnail__link"

                                                                    tabIndex={-1}
                                                                >
                                                                    <div className="elementor-post__thumbnail">
                                                                        <img style={{ height: '300px' }}
                                                                            fetchpriority="high"
                                                                            width={1280}
                                                                            height={687}
                                                                            src='/wp-content/banner11.jpg'
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
                                                                        <a onClick={() => { window.location.href = '/sp-strategy' }} >
                                                                        The Optimized S&P Strategy                                                                        </a>
                                                                    </div>
                                                                    <div className="elementor-post__excerpt">
                                                                        <p>
                                                                        Explore our "Optimized S&P Strategy," meticulously crafted by our Quant Team to transform your investment approach. Set against the backdrop of the S&P 400, 500, and 600 indexes, our strategy challenges tradition with targeted interventions, harnessing advanced quantitative analysis for a personalized investment journey.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="elementor-post__meta-data">
                                                                    <button className="elementor-post-date" onClick={() => { window.location.href = '/sp-strategy' }}>
                                                                        LEARN MORE
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Fade>
                                                    </article>
                                                    <article className="elementor-post elementor-grid-item post-123 post type-post status-publish format-standard has-post-thumbnail hentry category-investment" style={{ width: isMobile ? '100%' : '35%' }}>
                                                        <Fade direction='right'>
                                                            <div className="elementor-post__card">
                                                                <a className="elementor-post__thumbnail__link"

                                                                    tabIndex={-1}
                                                                >
                                                                    <div className="elementor-post__thumbnail">
                                                                        <img style={{ height: '300px' }}
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
                                                                        <a onClick={() => { window.location.href = '/Crypto_Market_making_Strategy' }} >
                                                                        Crypto Market Making Strategy </a>
                                                                    </div>
                                                                    <div className="elementor-post__excerpt">
                                                                        <p>
                                                                        Employing automated algorithms, Crypto Market Making Strategies capitalize on cryptocurrency market volatility, optimizing liquidity provision and profit generation,
                                                                        a Crypto Market Making Strategy strategically places buy and sell orders to provide liquidity and profit from price differentials cryptocurrency.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="elementor-post__meta-data">
                                                                    <button className="elementor-post-date" onClick={() => { window.location.href = '/Crypto_Market_making_Strategy' }}>
                                                                        LEARN MORE
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Fade>
                                                    </article>
                                                    {/* //blog Three */}
                                                </div>
                                                <span className="e-load-more-spinner">
                                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"  >
                                                        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-elementor-type="wp-post" data-elementor-id="102" class="elementor elementor-102"
                                data-elementor-post-type="envato_tk_templates" style={{ marginTop: '5%', marginBottom: '20%' }} >
                                <div className="elementor-element elementor-element-11198c0f e-flex e-con-boxed elementor-invisible e-con e-child" >
                            <div className="e-con-inner" style={{ justifyContent: 'center' }}>
                                        <div className={`elementor-element e-con-full e-flex e-con e-child  pt-3 py-4  px-4`}  onClick={() =>{ setCanadian(!Canadian)
                                        setindian(false)
                                        }}
                                            // onMouseEnter={() => setEquities(true)}
                                            // onMouseLeave={() => setEquities(false)}
                                            style={{ width: isMobile ? '100%' : '25%', height:"80px", cursor: 'pointer', boxShadow:'#3c8b6c 2px 2px 10px 1px',backgroundColor:Canadian?"#1a4539":"",borderRadius:"10px" }} >
                                            <div className={`elementor-element elementor-element-74eca519 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`} >
                                                <div className="elementor-widget-container">
                                                    <div className="elementor-icon-box-wrapper">
                                                        <div className="elementor-icon-box-content" style={{ display: 'flex', justifyContent:Canadian ? "space-between" :"center" }}>
                                                            <div className="elementor-icon-box-title">
                                                            <img src='../wp-content/icons/dollar.png' style={{ width: "9%",display: Canadian ? 'none' : '' }} />
                                                            <img src='../wp-content/icons/dollar (1).png' style={{ width: "9%",display: Canadian ? '' : 'none' }} />
                                                                <span style={{color:Canadian?"white":"black",marginLeft:"2%"}}>North American Fund</span>
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: Canadian ? 'block' : 'none',color:"white" }} > <FontAwesomeIcon icon={faArrowDown} /> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                            
                                        </div>
                                        <div className={`elementor-element  e-con-full e-flex e-con e-child pt-3 py-4  px-4`}  onClick={() =>{setindian(!indian)
                                        setCanadian(false)
                                        }}
                                            // onMouseEnter={() => setCrypto(true)}
                                            // onMouseLeave={() => setCrypto(false)}
                                            style={{ width: isMobile ? '100%' : '25%', height:"80px", cursor: 'pointer', boxShadow: '#3c8b6c 2px 2px 10px 1px',backgroundColor:indian?"#1a4539":"",borderRadius:"10px"  }} >
                                            <div className={`elementor-element elementor-element-74eca519 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`} >
                                                <div className="elementor-widget-container">
                                                    <div className="elementor-icon-box-wrapper">
                                                        <div className="elementor-icon-box-content" style={{ display: 'flex', justifyContent:indian ?'space-between':"center" }}>
                                                            <div className="elementor-icon-box-title">
                                                            <img src='../wp-content/icons/rupee.png' style={{ width: "10%", display: indian ? 'none' : '' }} />
                                                            <img src='../wp-content/icons/rupee (1).png' style={{ width: "10%",display: indian ? '' : 'none' }} />
                                                                <span style={{color:indian?"white":"black",marginLeft:"2%"}}>Emerging Markets fund</span>
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: indian ? 'block' : 'none',color:"white" }} ><FontAwesomeIcon icon={faArrowDown} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        </div>

                                        </div>

                                        </div>

                            <div data-elementor-type="wp-post" data-elementor-id="102" class="elementor elementor-102"
                                data-elementor-post-type="envato_tk_templates" style={{ marginTop: '15%', marginBottom: '15%',display:Canadian?"block":'none'  }} >
                                <div className="elementor-element elementor-element-11198c0f e-flex e-con-boxed elementor-invisible e-con e-child" >
                                    <div className="e-con-inner" style={{ justifyContent: 'center' }}>
                                        <div className={`elementor-element  e-con-full e-flex e-con e-child pt-3 py-4  px-4`} 
                                       onClick={() => setCommodities(!Commodities)}
                                       onMouseEnter={() => setCommodities(true)}
                                       onMouseLeave={() => setCommodities(false)}
                                            style={{ width: isMobile ? '100%' : '30%', height: Commodities ? "fit-content" : "80px", cursor: 'pointer', boxShadow: '#3c8b6c 2px 2px 10px 1px',borderRadius:"10px" }} >
                                            <div className={`elementor-element elementor-element-74eca519 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`} >
                                                <div className="elementor-widget-container">
                                                    <div className="">
                                                        <div className="elementor-icon-box-content" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <div className="elementor-icon-box-title">
                                                            <img src='../wp-content/icons/purchasing.png' style={{ width: "13%" }} />
                                                                <span style={{marginLeft:"2%"}}>Commodity</span>
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: Commodities ? 'none' : 'block' }} ><FontAwesomeIcon icon={faArrowRight} /> </div>
                                                            <div className="elementor-icon-box-title" style={{ display: Commodities ? 'block' : 'none' }} > <FontAwesomeIcon icon={faArrowDown} /> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${Commodities ? 'd-block' : 'd-none'}`}>
                                            {[ { title: "Reversal Pattern", hrefT: "/Reversal_Pattern" },{ title: "Commodities Market Making", hrefT: "/Commodities_Market_Making" }].map((item) => (
                                                    <div className='border border-secondary card p-3 w-100 elementor-icon-box-title my-2 text-white'
                                                        onClick={() => { window.location.href = item.hrefT }}
                                                        style={{ backgroundColor: '#388366', cursor: 'pointer' }}>
                                                        {item.title}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={`elementor-element  e-con-full e-flex e-con e-child pt-3 py-4  px-4`} onClick={() => setCrypto(!Crypto)}
                                            onMouseEnter={() => setCrypto(true)}
                                            onMouseLeave={() => setCrypto(false)}
                                            style={{ width: isMobile ? '100%' : '30%', height: Crypto ? "fit-content" : "80px", cursor: 'pointer', boxShadow: '#3c8b6c 2px 2px 10px 1px',borderRadius:"10px"  }} >
                                            <div className={`elementor-element elementor-element-74eca519 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`} >
                                                <div className="elementor-widget-container">
                                                    <div className="">
                                                        <div className="elementor-icon-box-content" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                      
                                                            <div className="elementor-icon-box-title">
                                                            <img src='../wp-content/icons/bitcoin.png' style={{ width: "10%" }} />
                                                                <span    style={{marginLeft:"2%"}}>Crypto</span>
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: Crypto ? 'none' : 'block' }} > <FontAwesomeIcon icon={faArrowRight} /></div>
                                                            <div className="elementor-icon-box-title" style={{ display: Crypto ? 'block' : 'none' }} ><FontAwesomeIcon icon={faArrowDown} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${Crypto ? 'd-block' : 'd-none'}`}>
                                                {[{ title: "Crypto Market Making", hrefT: "/Crypto_Market_making_Strategy" }].map((item) => (
                                                    <div className='border border-secondary card p-3 w-100 elementor-icon-box-title  my-2 text-white' style={{ backgroundColor: '#388366', cursor: 'pointer' }} onClick={() => { window.location.href = item.hrefT }} >{item.title}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={`elementor-element  e-con-full e-flex e-con e-child pt-3 py-4  px-4`} onClick={() => setOptions(!Options)}
                                            onMouseEnter={() => setOptions(true)}
                                            onMouseLeave={() => setOptions(false)}
                                            style={{ width: isMobile ? '100%' : '30%', height: Options ? "fit-content" : "80px", cursor: 'pointer', boxShadow: '#3c8b6c 2px 2px 10px 1px',borderRadius:"10px"  }} >
                                            <div className={`elementor-element elementor-element-74eca519 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}>
                                                <div className="elementor-widget-container">
                                                    <div className="">
                                                        <div className="elementor-icon-box-content" style={{ display: 'flex', justifyContent: 'space-between' }} >
                                                            <div className="elementor-icon-box-title" >
                                                            <img src='../wp-content/icons/option.png' style={{ width: "10%" }} />
                                                                <span style={{marginLeft:'2%'}}>Options</span>
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: Options ? 'none' : 'block' }} >
                                                                <FontAwesomeIcon icon={faArrowRight} />
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: Options ? 'block' : 'none' }} >
                                                                <FontAwesomeIcon icon={faArrowDown} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${Options ? 'd-block' : 'd-none'}`}>
                                                {[{ title: "Long/Short ML Classifer", hrefT: "/Options_Long_Straddle " }, { title: "Garch Volatility Forecast", hrefT: "/Garch_Vol_Strategy" }].map((item) => (
                                                    <div className='border border-secondary card p-3 w-100 elementor-icon-box-title  text-white my-2' style={{ backgroundColor: '#388366', cursor: 'pointer' }} onClick={() => { window.location.href = item.hrefT }}>
                                                        {item.title}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={`elementor-element  e-con-full e-flex e-con e-child pt-3 py-4  px-4`} onClick={() => setEquities(!Equities)}  onMouseEnter={() => setEquities(true)}
                                            onMouseLeave={() => setEquities(false)}
                                            style={{ width: isMobile ? '100%' : '30%', height: Equities ? "fit-content" : "80px", marginTop: isMobile ? '0%' : '5%', cursor: 'pointer', boxShadow: '#3c8b6c 2px 2px 10px 1px',borderRadius:"10px"  }} >
                                            <div className={`elementor-element elementor-element-74eca519 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}  >
                                                <div className="elementor-widget-container">
                                                    <div className="">

                                                        <div className="elementor-icon-box-content" style={{ display: 'flex', justifyContent: 'space-between' }} >
                                                            <div className="elementor-icon-box-title" >
                                                            <img src='../wp-content/icons/equity.png' style={{ width: "10%" }} />
                                                                <span style={{marginLeft:"2%"}}>Equities</span>
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: Equities ? 'none' : 'block' }} >
                                                                <FontAwesomeIcon icon={faArrowRight} />
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: Equities ? 'block' : 'none' }} >
                                                                <FontAwesomeIcon icon={faArrowDown} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${Equities ? 'd-block' : 'd-none'}`}>
                                                {[{ title: "Optimized S&P Strategy", hrefT: "/sp-strategy" }].map((item) => (
                                                    <div className='border border-secondary card p-3 w-100 elementor-icon-box-title my-2  text-white' style={{ backgroundColor: '#388366', cursor: 'pointer' }} onClick={() => { window.location.href = item.hrefT }}>
                                                        {item.title}</div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-elementor-type="wp-post" data-elementor-id="102" class="elementor elementor-102"
                                data-elementor-post-type="envato_tk_templates" style={{ marginTop: '15%', marginBottom: '15%', display:indian?"block":'none' }} >
                                <div className="elementor-element elementor-element-11198c0f e-flex e-con-boxed elementor-invisible e-con e-child" >
                                    <div className="e-con-inner" style={{ justifyContent: 'center' }}>
                                        
                                    
                                       
                                        <div className={`elementor-element  e-con-full e-flex e-con e-child pt-3 py-4  px-4`} onClick={() => setindianEquities(!indianEquities)}
                                            onMouseEnter={() => setindianEquities(true)}
                                            onMouseLeave={() => setindianEquities(false)}
                                            style={{ width: isMobile ? '100%' : '30%', height: indianEquities ? "fit-content" : "80px", cursor: 'pointer', boxShadow: '#3c8b6c 2px 2px 10px 1px',borderRadius:"10px"  }} >
                                            <div className={`elementor-element elementor-element-74eca519 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}>
                                                <div className="elementor-widget-container">
                                                    <div className="">
                                                        <div className="elementor-icon-box-content" style={{ display: 'flex', justifyContent: 'space-between' }} >
                                                        <div className="elementor-icon-box-title" >
                                                            <img src='../wp-content/icons/equity.png' style={{ width: "10%" }} />
                                                                <span style={{marginLeft:"2%"}}>Equities</span>
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: indianEquities ? 'none' : 'block' }} >
                                                                <FontAwesomeIcon icon={faArrowRight} />
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: indianEquities ? 'block' : 'none' }} >
                                                                <FontAwesomeIcon icon={faArrowDown} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${indianEquities ? 'd-block' : 'd-none'}`}>
                                                {[{ title: "High Frequency Order Quoting (Indian Fund)", hrefT: "/High_Frequency_Quoting " }, { title: "Nifty 500 Equities (Indian Fund)", hrefT: "/Nifty_500_Equities" }].map((item) => (
                                                    <div className='border border-secondary card p-3 w-100 elementor-icon-box-title  text-white my-2' style={{ backgroundColor: '#388366', cursor: 'pointer' }} onClick={() => { window.location.href = item.hrefT }}>
                                                        {item.title}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={`elementor-element  e-con-full e-flex e-con e-child pt-3 py-4  px-4`} onClick={() => setOptions(!Options)}
                                            onMouseEnter={() => setOptions(true)}
                                            onMouseLeave={() => setOptions(false)}
                                            style={{ width: isMobile ? '100%' : '30%', height: Options ? "fit-content" : "80px", cursor: 'pointer', boxShadow: '#3c8b6c 2px 2px 10px 1px',borderRadius:"10px"  }} >
                                            <div className={`elementor-element elementor-element-74eca519 elementor-view-stacked elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box`}>
                                                <div className="elementor-widget-container">
                                                    <div className="">
                                                        <div className="elementor-icon-box-content" style={{ display: 'flex', justifyContent: 'space-between' }} >
                                                            <div className="elementor-icon-box-title" >
                                                            <img src='../wp-content/icons/option.png' style={{ width: "10%" }} />

                                                                <span style={{marginLeft:"2%"}}>Options</span>
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: Options ? 'none' : 'block' }} >
                                                                <FontAwesomeIcon icon={faArrowRight} />
                                                            </div>
                                                            <div className="elementor-icon-box-title" style={{ display: Options ? 'block' : 'none' }} >
                                                                <FontAwesomeIcon icon={faArrowDown} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${Options ? 'd-block' : 'd-none'}`}>
                                                {[{ title: "BankNifty Precision Gamma (Indian Fund)", hrefT: "/BankNiftyPrecision " }, { title: "Expiry Convergence Theta (Indian Fund)", hrefT: "/ExpiryConvergence" }, { title: "High Frequency Options Market Making (Indian Fund)", hrefT: "/HighFrequencyOptions" }].map((item) => (
                                                    <div className='border border-secondary card p-3 w-100 elementor-icon-box-title  text-white my-2' style={{ backgroundColor: '#388366', cursor: 'pointer' }} onClick={() => { window.location.href = item.hrefT }}>
                                                        {item.title}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20%', marginTop: '10%', marginLeft: '10%' }}>
                                <div style={{marginRight:'1%'}}>
                                    <img src={Research} alt='research' width='30%' />
                                    <p style={{ color: 'black' }}>
                                        Research
                                    </p>

                                </div>
                                <div style={{ borderTop: '3px solid black', width: '350px', marginLeft: '-14%', marginTop: '2%' }}>

                                </div>
                                <div>
                                    <img src={whitepaper} alt='research' width='30%' />
                                    <p style={{ color: 'black' }}>
                                        Whitepaper
                                    </p>
                                </div>
                                <div style={{ borderTop: '3px solid black', width: '350px', marginLeft: '-14%', marginTop: '2%' }}>

                                </div>

                                <div style={{ borderTop: '3px solid black', width: '350px', marginLeft: '-14%', marginTop: '2%' }}>

                                </div>
                                <div style={{ marginLeft: '1%',marginRight:'1%' }}>
                                    <img src={Strategypage} alt='research' width='30%' />
                                    <p style={{ color: 'black' }}>Deployment of strategy</p>
                                </div>
                                <div style={{ borderTop: '3px solid black', width: '350px', marginLeft: '-14%', marginTop: '2%' }}>

                                </div>
                                <div>
                                    <img src={Refine} alt='research' width='30%' />
                                    <p style={{ color: 'black' }}>
                                        Refine
                                    </p>
                                </div>
                                <div style={{ borderTop: '3px solid black', width: '400px', marginLeft: '-14%', marginTop: '2%' }}>

                                </div>
                                <div>
                                    <img src={Redeploy} alt='research' width='30%' />
                                    <p style={{ color: 'black' }}>
                                        Redeploy
                                    </p>
                                </div>
                            </div> */}

                            {/* <div className="elementor-widget-container" style={{display:'flex',justifyContent:'space-between'}}> */}
                            {/* <div style={{border:'1px solid gray',padding:'10px',width:'20%',height:'50px'}}>
    <h5>Equities</h5>
</div>

<div style={{border:'1px solid gray',padding:'10px',width:'20%',height:'50px'}}>
    <h5>Crypto</h5>
</div>
<div style={{border:'1px solid gray',padding:'10px',width:'20%',height:'50px'}}>
    <h5>Options</h5>
</div> */}
                            {/* </div> */}








                            {/* <div className="elementor-widget-container">
                                <link rel="stylesheet" href="wp-content/plugins/elementor-pro/assets/css/widget-posts.min.css" />
                                <div className="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid">
                                    <article className="elementor-post elementor-grid-item post-123 post type-post status-publish format-standard has-post-thumbnail hentry category-investment" style={{ width: isMobile ? '100%' : '30%' }}>
                                        <div className="elementor-post__card">
                                            <a className="elementor-post__thumbnail__link"
                                                onClick={() => { window.location.href = '/sp-strategy' }}
                                                tabIndex={-1}
                                            >
                                                <div className="elementor-post__thumbnail">
                                                    <img
                                                        style={{ height: '250px' }}
                                                        fetchpriority="high"
                                                        width={1280}
                                                        height={687}
                                                        src={Optimizing}
                                                        className="attachment-full size-full wp-image-118"
                                                        alt="Business people, coach and stock market presentation in meeting for trading, graph and chart monito"
                                                        decoding="async"
                                                        sizes="(max-width: 1280px) 100vw, 1280px"
                                                    />
                                                </div>
                                            </a>
                                            <div className="elementor-post__text">
                                                <div className="elementor-post__title">
                                                    <a onClick={() => { window.location.href = '/sp-strategy' }} >
                                                        Welcome to the Future of Investing: The Optimized S&P Strategy
                                                    </a>
                                                </div>
                                                <div className="elementor-post__excerpt">
                                                    <p>
                                                        Explore our "Optimized S&P Strategy," meticulously crafted by our Quant Team to transform your investment approach. Set against the backdrop of the S&P 400, 500, and 600 indexes, our strategy challenges tradition with targeted interventions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <span className="e-load-more-spinner">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"  >
                                        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                                    </svg>{" "}
                                </span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Strategy