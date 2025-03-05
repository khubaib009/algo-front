import React from "react";
import "./IpHeader.css";
import { Link } from "react-router-dom";
const IpHeader = () => {

  return (
    <div className="container">
      <div className="service-container">
        <div className="content">
          <h1>Investment Products </h1>
          <p>
          Explore our suite of innovative, algorithmic investment 
          strategies designed to capture opportunities across multiple markets and asset classes.
          Each strategy is carefully tested to maximize returns while managing risk through advanced 
          quantitative models.
          </p>
          <Link to="/contact" className="menu-link" >
            <button>Schedule a meeting</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IpHeader;
