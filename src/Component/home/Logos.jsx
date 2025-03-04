import React from "react";
import './Logo.css';
import logo1 from './Images/delta-exchange.svg'
import logo2 from './Images/icon-3.png'
import logo3 from './Images/WhatsApp Image 2025-02-05 at 7.11.35 PM (3).jpeg'
import logo4 from './Images/icon-4.png'

const TrustedBy = () => {
  const logos = [
    { src: logo1, alt: "Delta Exchange" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Bison Fund" },
  ];

  return (
    <div className="trusted-by-container">
      <h3 className="trusted-by-title">Trusted by</h3>
      <div className="trusted-by-logos">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="trusted-logo" />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;