import React from 'react';
import { FaLinkedin, FaYoutube, FaTimes } from 'react-icons/fa';
import './Footer.css'; // Link to your CSS file
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-eclipse">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div>
            <h2 className="newsletter-title">Join our newsletter</h2>
            <p className="newsletter-text">We care about your data in our privacy policy.</p>
          </div>
            
          {/* <button className="newsletter-buttons"></button> */}
        </div>

        {/* Footer Main Content */}
        <div className="footer-main">
          {/* Company Info Section */}
          <div className="footer-section company-info">
            <h2 className="footer-title">ALGOEDGE</h2>
            <p className="footer-text">
              AlgoEdge is a pioneering quantitative research firm at the forefront of high-performance algorithmic trading. We leverage cutting-edge technology to demystify the financial markets, making quantitative strategies accessible to all investment managers.
            </p>
          </div>
          <div className="footer-menu">
          {/* Solutions Section */}
            <div className="footer-section">
              <h3 className="section-title">Solutions</h3>
              <ul className="footer-list">
                <li>Invest Through Our Global Partners</li>
                <li>License our Strategies</li>
                <li>Quant as a Service</li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="footer-section">
             
                <h3 className="section-title">Company</h3>
              
              <ul className="footer-list">
                <li>News & Insights</li>
                  <Link to="/team" className="menu-link">
                <li>About Us</li>
                </Link>
                <Link to="/contact" className="menu-link">
                  <li>Contact</li>
                </Link>
                <Link to="/Investment-Products" className="menu-link">
                  <li>Investment Products</li>
                </Link>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="footer-section contact-info">
              <h3 className="section-title">Contact Us</h3>
              <p className="footer-text">
                Delaware, US </p>
               <p className="footer-text"><a href=" info@algoedge.io" className="footer-link"> info@algoedge.io</a></p> 
                <p className="footer-text">(587)879-8880</p>
              
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <span>Copyright© 2024 Algoedge, All rights reserved.</span>
          <div className="footer-icons">
          <a href="https://www.linkedin.com/company/algoedge-cad/people/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
            
            <FaYoutube className="icon" />
            <FaTimes className="icon" />
          </div>
        </div>
      </div>
      <div className="footer-border"></div>
    </footer>
  );
};

export default Footer;
