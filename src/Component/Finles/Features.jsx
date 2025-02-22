import React from "react";
import "./Features.css"; // Importing the external CSS file
import image1 from '../About/banner11.jpg'
const Features = () => {
  
  return (
    <div  className="features-container">
      <section className="feature-section feature-flex">
        <div className="feature-text">
          <h2>Key Features</h2>
          <ul>
            <li><strong>Fully Managed Portfolio Solutions:</strong> </li>
              <p>We partner with leading global institutions to manage portfolios tailored to your financial objectives, utilizing our proven quantitative models.</p>
            <li><strong>Customized Investment Strategies:</strong> </li>
              <p>Select from a variety of strategies optimized for risk-adjusted returns across multiple asset classes. We adapt your portfolio to match market conditions and long-term goals.</p>
            <li><strong>Seamless Execution:</strong> </li>
              <p>Choose a hands-off experience where we handle all trade execution, performance monitoring, and reporting.</p>
            <li><strong>Flexible Integration:</strong> </li>
              <p>If you prefer to work with your own broker, we’ll integrate via APIs to deliver strategy execution and market updates in real-time.</p>
          </ul>
        </div>
        <div className="feature-image">
          <img src={image1} alt="Quantitative Analysis Dashboard" />
        </div>
      </section>
        <section className="feature-section">
            <h2>Why Choose AlgoEdge Managed Funds?</h2>
            <ul>
                <li><strong>Expert Portfolio Management:</strong> </li>
                <p>Benefit from a fully hands-off solution. Let our experts handle all aspects of portfolio management—from strategy implementation to performance monitoring, allowing you to focus on your broader financial goals.</p>
                <li><strong>Fully Vetted Strategies:</strong> </li>
                <p>All strategies are developed using highly sophisticated, quant-based algorithmic models, optimized through years of historical market data to identify and capitalize on patterns. Every strategy is rigorously tested in live trading environments before being offered to clients.</p>
                <li><strong>Transparent Processes:</strong> </li>
                <p>We provide clear reporting, profit-sharing models, and adaptable portfolio management, giving you full visibility into your investments and returns.</p>
                
                <li><strong>Global Market Access:</strong> </li>
                <p>Reap the benefits of our partner funds' diverse locations and gain access to a suite of systematic investment strategies across various regional markets and asset classes for maximum diversification.</p>
                <p>Low research fees for cost-effective access to cutting-edge quantitative research.</p>
            </ul>
        </section>

    </div>
  );
};

export default Features;
