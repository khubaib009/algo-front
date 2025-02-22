import React from "react";
import "./Services.css";

const Services = () => {
  const scheduleMeeting = () => {
    alert("Thank you for your interest! We will contact you soon to schedule a meeting.");
  };

  return (
    <div className="container">
      <div className="service-container">
        <div className="content">
          <h1>Quant as a Service</h1>
          <p>
          Empower your trading operations with AlgoEdge’s Quant SaaS. Receive real-time, algorithmic trading 
          signals through seamless API integration. Skip the complexities of developing strategies in-house and 
          focus on execution and performance enhancement with full control over your trading activities..
          </p>
          <button onClick={scheduleMeeting}>Schedule a meeting</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
