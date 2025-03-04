import React from "react";
import "./Number.css";

const AlgoEdgeNumbers = () => {
  return (
    <div className="numbers-container">
      {/* Left Section */}
      <div className="numbers-text">
        <h1>AlgoEdge by the Numbers</h1>
        <p>
         
        </p>
      </div>

      {/* Right Section */}
      <div className="numbers-box">
        <div className="numbers-item">
          <div className="numbers">
            <h2>01</h2>
            <h2>|</h2>
          </div>
          <p>Verified Performance of 50%+ Annual Returns.</p>
        </div>
        <hr />
        <div className="numbers-item">
        <div className="numbers">
            <h2>02</h2>
            <h2>|</h2>
          </div>
          <p>
          Data from Over 20,000 active Traders and
          Algorithms.
          </p>
        </div>
        <hr />
        <div className="numbers-item">
        <div className="numbers">
            <h2>03</h2>
            <h2>|</h2>
          </div>
          <p>
          Data from Over 20,000 active Traders and
          Algorithms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlgoEdgeNumbers;