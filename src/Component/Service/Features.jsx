import React from "react";
import "./Features.css"; // Importing the external CSS file
import image1 from '../About/banner11.jpg'
import image2 from './anne-nygard-t0rMooxmZc0-unsplash.jpg'
import image3 from "./anne-nygard-x07ELaNFt34-unsplash.jpg";
const Features = () => {
  return (
    <div  className="features-container">
        <section className="feature-section feature-flex">
        <div className="feature-text">
          <h2>Key Features</h2>
          <ul>
            <li><strong>API-Driven Trading Signals:</strong> </li>
              <p>Instant access to AlgoEdge's high-performance quant models, optimized for speed and precision.</p>
            <li><strong>Custom Strategy Flexibility:</strong> </li>
              <p>Select from multiple pre-tested strategies tailored to a variety of asset classes, allowing for maximum diversification</p>
            <li><strong>Infrastructure Compatibility:</strong> </li>
              <p>Easily integrate our services with your trading systems. We ensure low-latency connectivity and fully scalable solutions.</p>
            <li><strong>Operational Independence:</strong> </li>
              <p>Retain full control over your trade execution, risk protocols, and reporting processes to align with your investment mandates</p>
          </ul>
        </div>
        <div className="feature-image">
          <img src={image2} alt="Quantitative Analysis Dashboard" className="image-expert" />
        </div>
      </section>
        <section className="feature-section">
        <div className="feature-image">
          <img src={image3} alt="Quantitative Analysis Dashboard" className="image-expert"/>
        </div>
        <div className="feature-text">
          <h2>Why Choose AlgoEdge Managed Funds?</h2>
          <ul>
          <li><strong>Rapid Strategy Deployment:</strong> </li>
                <p>Start using high-performing quant-based strategies in as little as one day. Leverage our infrastructure to deploy strategies without delay.</p>
                <li><strong>Cutting-Edge Infrastructure:</strong> </li>
                <p>Our advanced technology stack, built for scalability and efficiency, includes real-time data processing and enhanced risk management systems. Designed to reduce operational overhead, our infrastructure is optimized to support low-latency, high-frequency trading.</p>
                <li><strong>Performance Optimization:</strong> </li>
                <p>Real-time, precision-based data processing.</p>
                <p>Integrated, high-performance systems designed to maximize trading speed and reliability.</p>
                <li><strong>Client-Centered Solutions:</strong> </li>
                <p>Stay liquid with flexible lock-in terms based on your fund’s needs.</p>
                <p>Transparent, tailored profit-sharing models</p>
                <p>Low research fees for cost-effective access to cutting-edge quantitative research.</p>
            </ul>
        </div>
        </section>
    </div>
  );
};

export default Features;
