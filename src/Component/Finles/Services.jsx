import React from "react";
import "./Servicess.css";
import { Link } from "react-router-dom";
const Services = () => {
  const scheduleMeeting = () => {
    alert("Thank you for your interest! We will contact you soon to schedule a meeting.");
  };

  return (
    <div className="container">
      <div className="service-container">
        <div className="content">
          <h1>Expertly Managed Funds </h1>
          <p>
          Invest with ease through AlgoEdge’s trusted global partner funds. 
          Our managed fund solutions offer personalized, strategy-driven portfolios 
          designed to maximize returns while minimizing operational complexity. Whether 
          you're an institutional investor, managing a family office, or HNWI, we provide seamless
          access to high-performance quant trading strategies.

          </p>
          <Link to="/contact" className="menu-link">
            <button >
              Schedule a meeting
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
