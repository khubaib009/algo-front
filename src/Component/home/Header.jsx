import React from "react";
import polygon1 from "./Images/Polygon 1.svg";
import polygon2 from "./Images/Polygon 2.svg";
import polygon3 from "./Images/Polygon 3.svg";
import map from "./Images/Map.svg"; 
import "./Header.css"; // Link to your CSS file

const Header = () => {
  return (
    <div>
      <section className="header-section">
        {/* Decorative Polygons */}
        <img src={polygon1} alt="Polygon 1" className="polygon polygon1" />
        <img src={polygon2} alt="Polygon 2" className="polygon polygon2" />

        {/* Header Content */}
        <div className="header-content">
          <h1 className="header-title">
            Quantitative Trading{" "}
            <span className="highlight">Research</span>
          </h1>
          <p className="header-description">
            With the world's brightest quantitative talent, we deliver advanced
            quantitative solutions that optimize trading, risk management, and
            portfolio performance.
          </p>
          {/* <button className="header-button">
            <Link to="contact" smooth={true} duration={500} className="menu-link">Contact us</Link></button> */}
        </div>

        {/* Map Section */}
        <div className="map-container">
          <img src={map} alt="Map" className="map-image" />
        </div>

        {/* Additional Decorative Polygon */}
        <img src={polygon3} alt="Polygon 3" className="polygon3" />
      </section>
    </div>
  );
};

export default Header;
