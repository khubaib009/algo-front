import React from "react";
import "./IpHeader.css";

const IpHeader = () => {
  const scheduleMeeting = () => {
    alert("Thank you for your interest! We will contact you soon to schedule a meeting.");
  };

  return (
    <div className="container">
      <div className="service-container">
        <div className="content">
          <h1>Investment Strategies </h1>
          <p>
          Explore our suite of innovative, algorithmic investment 
          strategies designed to capture opportunities across multiple markets and asset classes.
          Each strategy is carefully tested to maximize returns while managing risk through advanced 
          quantitative models.
          </p>
          <button onClick={scheduleMeeting}>Schedule a meeting</button>
        </div>
      </div>
    </div>
  );
};

export default IpHeader;
