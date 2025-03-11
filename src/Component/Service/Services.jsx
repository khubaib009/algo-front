import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
const Services = () => {
 
  return (
    <div className="container">
      <div className="service-container">
        <div className="content">
          <h1>Quant as a Service</h1>
          <p>
          Empower your trading operations with AlgoEdge’s Quant SaaS. Receive real-time, algorithmic trading 
          signals through seamless API integration. Skip the complexities of developing strategies in-house and 
          focus on execution and performance enhancement with full control over your trading activities.
          </p>
          <Link to="/contact" className="menu-link" >
            <button>Schedule a meeting</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
