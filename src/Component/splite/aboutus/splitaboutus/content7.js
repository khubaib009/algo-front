import React from "react";
import { Reveal, Flip } from "react-awesome-reveal";
const Content7 = () => {
  const isMobile = window.innerWidth < 600;

  const [Kunal, setKunal] = React.useState(false);
  const [CardTwo, setCardTwo] = React.useState(false);
  const [CardThree, setCardThree] = React.useState(false);
  return (
    <div className="elementor-element elementor-element-abafb5a e-flex e-con-boxed e-con e-parent">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-fcc308e e-flex e-con-boxed e-con e-child">
          <div className="e-con-inner" style={{ marginTop: "-8%" }}>
            <div className="elementor-element elementor-element-2f3ab4f elementor-invisible elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                {/* <h6 className="elementor-heading-title elementor-size-default">
                  Meet Our Expert Team
                </h6> */}
              </div>
            </div>
            <div className="elementor-element elementor-element-2788e1e elementor-invisible elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default mt-5">
                  Meet Our Expert Team
                </h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-bc20896 elementor-invisible elementor-widget elementor-widget-text-editor">
              <div className="elementor-widget-container">
                {/* <p>
                Welcome to 
the heart of AlgoEdge – our talented and dedicated team. Composed of industry, 
technology, and financial wizards, our team is committed to revolutionizing the 
world of high-frequency trading. Get to know the faces behind the code, the minds 
driving our innovations, and the passion fueling our success. From algorithmic 
geniuses to customer service champions, each member plays a vital role in our 
mission to redefine the future of finance.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-fa8bc6c e-flex e-con-boxed e-con e-child">
          <h3
            className="elementor-heading-title elementor-size-default"
            style={{
              backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
              padding: "0.1%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
              marginBottom: "1%",
              marginTop: "-2%",
            }}
          >
            Founder
          </h3>
          <div
            className="e-con-inner"
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/KunalDhawan.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>Kunal Dhawan</span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              CEO
                            </p>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Legal & Business Development )</span> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3
            className="elementor-heading-title elementor-size-default"
            style={{
              backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
              padding: "0.1%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
              marginBottom: "2%",
              marginTop: "1%",
            }}
          >
            Quantitative Team
          </h3>
          {/* <h3 className="elementor-heading-title elementor-size-default" style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '0.1%', color: 'white', display: 'flex', justifyContent: 'center', borderRadius: '10px',marginBottom:'2%',marginTop:'1%'}}>
            Quantitative Research
          </h3> */}
          <div className="e-con-inner" style={{ marginBottom: "10px" }}>
            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/NishantKalia.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>
                              Nishant Kalia
                            </span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Macro Quant Advisor
                            </p>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Head of Quantitative Research )</span> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/abishake.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>
                              Abhishek Singh
                            </span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Crypto Lead
                            </p>
                          </div>

                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Quantitative Research)</span> */}
                          <p
                            className=""
                            style={{
                              color: "#fff",
                              fontSize: "18px",
                              fontFamily: "sans-serif",
                              textAlign: "justify",
                            }}
                          >
                            {/* Quantitative Trading, Cryptocurrencies, Python, C ++, Java, machine learning, MATLAB, Linux, hedge funds */}
                            {/* Crypto Lead */}
                          </p>
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/viney1.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                      x
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>
                              Viney Dhankhar
                            </span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Index Derivatives Lead
                            </p>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Quantitative Research)</span> */}
                          {/* <p className="" style={{ color: '#fff', fontSize: '18px', fontFamily: 'sans-serif', textAlign: 'justify' }}>
                          Index Derivatives Lead
                          </p> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/Satvik.jpg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>Satvik Gupta</span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Commodities Lead
                            </p>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>(Quantitative Research)</span> */}
                          <p
                            className=""
                            style={{
                              color: "#fff",
                              fontSize: "18px",
                              fontFamily: "sans-serif",
                              textAlign: "justify",
                            }}
                          >
                            {/* Machine learning, statistics, econometrics, financial mathematics, reinforcement learning */}

                            {/* Commodities Lead */}
                          </p>
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }}
            >
              <div
                className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image"
              >
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{ borderRadius: '220px', width: '45%', border: '3px solid  white' }}
                      src="wp-content/img/default.png"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }}
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: 'white' }}>Akshat Chaudhary</span>
                          </div>
                          <p className="" style={{ color: 'white', fontSize: '12px', fontFamily: 'sans-serif', textAlign: 'justify' }}>
                            AI, game theory, Junior at IIT Delhi
                          </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div
            className="e-con-inner"
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
              gap: isMobile ? "" : "1.5%",
            }}
          >
            {/* <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }}
            >
              <div
                className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image"
              >
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{ borderRadius: '220px', width: '45%', border: '3px solid  white' }}
                      src="wp-content/img/Madhav.webp"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }}
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: 'white' }}>Madhav Goel</span>
                          </div>
                          <span style={{ color: 'white', fontSize: '12px' }}>(Quantitative Research )</span> 
                          <p className="" style={{ color: 'white', fontSize: '12px', fontFamily: 'sans-serif', textAlign: 'justify' }}>
                            Portfolio Management, derivative trading, strategy development
                          </p>
                        </div>
                      </div>
                 
                    </div>
                  </div>

                </div>
              </div>
            </div> */}

            {/* <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image" >
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{ borderRadius: '220px', width: '45%', border: '3px solid  white' }}
                      src="wp-content/img/Nikhil.jpg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }}
              >
                <div className="e-con-inner">
                  <div  className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box" >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: 'white' }}>Nikhil Garg</span>
                          </div>
                          <p className="" style={{ color: 'white', fontSize: '12px', fontFamily: 'sans-serif', textAlign: 'justify' }}>
                      Derivatives Modelling JPMC Quant Challenge 23, Mathematics and Computing at IIT(BHU)
                          </p>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <h3 className="elementor-heading-title elementor-size-default" style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '0.1%', color: 'white', display: 'flex', justifyContent: 'center', borderRadius: '10px',marginBottom:'2%',marginTop:'1%' }}>
            Quantitative Implementation
          </h3> */}
          <div
            className="e-con-inner"
            style={{ marginBottom: "5px", justifyContent: "center" }}
          >
            {/* <div className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }}
            >
              <div  className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image" >
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{ borderRadius: '220px', width: '45%', border: '3px solid  white' }}
                      src="wp-content/img/DakshKhandelwal.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div  className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"  style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }} >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box" >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: 'white' }}>Daksh Khandelwal</span>
                          </div>
                          <p className="" style={{ color: 'white', fontSize: '12px', fontFamily: 'sans-serif', textAlign: 'justify' }}>
                            PCA, data analysis, ML, Python scripting
                          </p>
                        </div>
                      </div>
                  
                    </div>
                  </div>

                </div>
              </div>
            </div> */}
            {/* <div  className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child" style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }}  >
              <div  className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image" >
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{ borderRadius: '220px', width: '45%', border: '3px solid  white' }}
                      src="wp-content/img/Sujal.webp"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div  className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"  style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }} >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box" >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: 'white' }}>Sujal Harkut</span>
                          </div>
                          <p className="" style={{ color: 'white', fontSize: '12px', fontFamily: 'sans-serif', textAlign: 'justify' }}>
                            Advanced mathematics, complex problem-solving
                          </p>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/Keshav.jpg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>Keshav Todi</span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Crypto
                            </p>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Quantitative Research)</span> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/AdityaAnand.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>Aditya Anand</span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Derivatives
                            </p>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Quantitative Implementation )</span> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3
            className="elementor-heading-title elementor-size-default"
            style={{
              backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
              padding: "0.1%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
              marginBottom: "2%",
              marginTop: "1%",
            }}
          >
            Legal & Business Development
          </h3>
          <div className="e-con-inner" style={{ marginBottom: "10px " }}>
            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/Shashank.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>
                              Shashank Roheria
                            </span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              Legal Principal
                            </p>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Legal & Business Development )</span> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/Badri.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>
                              Badri Venkataraman
                            </span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Project Manager
                            </p>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Legal & Business Development )</span> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/jean-Luc1.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>
                              Jean-Luc Choufani
                            </span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Director - Americas
                            </p>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Legal & Business Development )</span> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/Vineet.jpg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>
                              Vineet Kaushal
                            </span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Legal Advisor
                            </p>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Legal & Business Development )</span> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }}
            >
              <div
                className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image"
              >
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{ borderRadius: '220px', width: '45%', border: '3px solid  white' }}
                      src="wp-content/img/default.png"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{ backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)", padding: '1%' }}
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: 'white' }}>Douglas Peterson</span>
                          </div>
                          <span style={{ color: 'white',fontSize:'12px' }}>( Advisory Board)</span>
                          <p className="" style={{ color: 'white', fontSize: '12px', fontFamily: 'sans-serif', textAlign: 'justify' }}>
                          International regulatory affairs, intellectual property, international finance
                          </p>
                        </div>
                      </div>
                      <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div
            className="e-con-inner"
            style={{ marginBottom: "5px", justifyContent: "center" }}
          >
            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px",
                marginBottom: isMobile ? "3%" : "",
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/Sahil.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>Sahil</span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Director - APAC
                            </p>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}></span>
                          <p className="" style={{ color: 'white', fontSize: '12px', fontFamily: 'sans-serif', textAlign: 'justify' }}>
                          UI/UX Development, MERN, Full Stack Development.
                          </p> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/MUAZZIM.JPG"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>
                              Muazzim Hussain
                            </span>
                            <p
                              className="mt-0"
                              style={{
                                color: "#F8F9FA",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Developer
                            </p>
                          </div>
                          <span
                            style={{ color: "white", fontSize: "12px" }}
                          ></span>
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3
            className="elementor-heading-title elementor-size-default"
            style={{
              backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
              padding: "0.1%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
              marginBottom: "1%",
              marginTop: "1%",
            }}
          >
            Advisory Board
          </h3>
          <div
            className="e-con-inner"
            style={{
              marginBottom: "10px",
              justifyContent: "center",
              gap: isMobile ? "" : "1.5%",
            }}
          >
            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/Damien.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>
                              Damien Iggiotti
                            </span>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Advisory Board)</span> */}
                          {/* <p className="" style={{ color: 'white', fontSize: '12px', fontFamily: 'sans-serif', textAlign: 'justify' }}>
                            Risk Management Analytics & Data Science Thought/Do Leader
                          </p> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-be68dc2 e-con-full e-flex e-con e-child"
              style={{
                backgroundImage: "linear-gradient(to right, #3b8f6e, #194136)",
                padding: "1%",
                height:"250px"
              }}
            >
              <div className="elementor-element elementor-element-b4f6d20 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Reveal>
                    <img
                      loading="lazy"
                      decoding="async"
                      style={{
                        borderRadius: "220px",
                        width: "45%",
                        border: "3px solid  white",
                      }}
                      src="wp-content/img/Evren.jpeg"
                      className="attachment-full size-full wp-image-36"
                      alt=""
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </Reveal>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-47be089 e-flex e-con-boxed e-con e-child"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b8f6e, #194136)",
                  padding: "1%",
                }}
              >
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-5d8bb35 elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-content">
                          <div className="elementor-icon-box-title">
                            <span style={{ color: "white" }}>
                              Evren Cubukgil
                            </span>
                          </div>
                          {/* <span style={{ color: 'white', fontSize: '12px' }}>( Advisory Board)</span> */}
                          {/* <p className="" style={{ color: 'white', fontSize: '12px', fontFamily: 'sans-serif', textAlign: 'justify' }}>
                            Risk management, financial modeling, quantitative analytics
                          </p> */}
                        </div>
                      </div>
                      {/* <ul style={{ color: 'white', fontSize: '11px' }} >
                        <li>Machine learning</li>           
                        <li>Probability and Stochastic Processes in Quantitative trading</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content7;
