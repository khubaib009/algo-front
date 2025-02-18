import React from "react";
import line from './Images/Line 4.png';
import footerlogo from './Images/Footer-Icon.svg';
import location from './Images/Location (2).svg';
import email from './Images/Email-Icon.svg';
import phone from './Images/Layer_1.svg';
import linkedIN from './Images/LinkedIN.svg';
import { Link, useNavigate, useLocation } from "react-router-dom";
import './PerformanceS.css'

const Footer = () => {
  return (
    <footer className="relative bg-[#001f1e] text-white py-12 footer-eclipse">
      {/* Left Section: Logo and Description */}
      <div className="max-w-[90%] md:max-w-[85%] mx-auto mb-8">
        <div className="flex gap-4 items-center justify-center md:justify-start md:text-left text-center">
          <img src={footerlogo} alt="footer-logo" className="footer-logo w-10 h-10" />
          <h1 className="md:text-left text-[29.95px] font-['Roboto Mono'] font-500">AlgoEdge</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-[14px] md:text-[16px] md:ml-0 ml-2 md:[400px] md:w-[400px] font-['radio canada big'] text-[14px] md:text-[16px] mt-4 text-[#a2a9a9] font-medium">
            Providing advanced quantitative and algorithmic strategies to
            investment managers and HNIs.
          </p>
          <a href="https://www.linkedin.com/company/algoedge-cad/people/" target="_blank" rel="noopener noreferrer">
            <img src={linkedIN} alt="LinkedIn" className="md:mb-8 mt-2 md:mt-0" />
          </a>
        </div>
        
      </div>
      <img src={line} alt="alt" className="mb-6 mt-6 w-full md:w-auto" />
      <img src={line} alt="alt" className="absolute hidden mt-[45px] md:block" />
      {/* Center Section: Navigation Links */}
      <div className="flex flex-row md:block gap-2 max-w-[85%] mx-auto">
  
          <div className="flex flex-col md:flex-row gap-4 max-w-[60%] md:max-w-[60%]">
            <h2 className="text-[14px] md:text-[16px] font-semibold text-[#ffffff]">Company</h2>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-8 font-['Radio Canada Big'] md:text-[16px] font-normal text-[14px] md:text-left">
              <li>
                <a href="/home" className="md:mb-0 hover:text-green-500 text-[#a2a9a9]">
                  Home
                </a>
              </li>
               <li>
                  <Link to="/strategies" className="hover:text-green-500 text-[#a2a9a9]">
                    Strategies
                  </Link>
                </li>
              <li> 
                <Link to="/Institutional_Investors" className="hover:text-green-500 text-[#a2a9a9]">
                  Institutional Investors
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-green-500 text-[#a2a9a9]">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-green-500 text-[#a2a9a9]">
                  Blog
                </Link>
                
              </li>
            </ul>
          </div>

         

          {/* Right Section: Contact Details */}
          <div className="flex flex-col md:flex-row gap-4 md:mt-[50px] max-w-[45%] md:max-w-[80%] ">
            <h2 className="text-[14px] md:text-[16px] font-semibold text-[#ffffff] font-semibold md:text-center md:text-left">Get in Touch</h2>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-8 font-['Radio Canada Big'] md:text-[16px] font-normal text-[14px]">
              <li className="flex items-center gap-2 flex-wrap">
                <img src={location} alt="capa2" className="w-4 h-4" />
                <p className="text-[#a2a9a9]">Delaware, US</p>
              </li>
              <li className="flex items-center gap-2 flex-wrap">
                <img src={email} alt="capa2" className="w-4 h-4" />
                <p className="text-[#a2a9a9]">info@algoedge.io</p>
              </li>
              <li className="flex items-center gap-2 flex-wrap">
                <img src={phone} alt="capa2" className="w-4 h-4" />
                <a href="tel:+15878798880" className="hover:text-green-500">
                  <p className="text-[#a2a9a9]">(587)879-8880</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      
      <img src={line} alt="alt" className="mb-6 mt-6 w-full md:w-auto" />

      {/* Bottom Section */}
      <div className="max-w-[90%] md:max-w-[85%] mx-auto font-['Radio Canada Big'] md:text-[16px] text-[16px] font-medium mt-8 pt-4 text-sm text-[#a2a9a9]">
        <p>Copyright © 2024 AlgoEdge, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
