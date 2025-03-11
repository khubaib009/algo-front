
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
          </div >
          <p className="para" style={{color:"white"}}>Strategies trained on over 500 terabytes of historical market data, ensuring deep market insight.</p>
        </div>
        <hr />
        <div className="numbers-item">
        <div className="numbers">
            <h2>02</h2>
            <h2>|</h2>
          </div>
          <p className="para" style={{color:"white"}}>
          Executed over 10 million trades across global markets, refining edge through real-world performance.
          </p>
        </div>
        <hr />
        <div className="numbers-item">
        <div className="numbers">
            <h2>03</h2>
            <h2>|</h2>
          </div>
          <p className="para" style={{color:"white"}}>
            Backtested against 10+ years of historical market data, stress-testing strategies in all conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlgoEdgeNumbers;
