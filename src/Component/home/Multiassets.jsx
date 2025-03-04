import React from "react";
import polygon6 from "./Images/Polygon 6.svg";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import "./Multiassests.css"; // Ensure correct path

const Multiassets = () => {
  return (
    <div className="multiassets-container" >
      {/* <img src={polygon6} alt="polygon" className="polygon-image" /> */}
      <section className=" multiassets-section background-eclipse">
        <div className="multiassets-box background-eclipse">
          <h1 className="multiassets-title">Covering Multi-Asset Classes</h1>
          <div className="multiassets-grid">
            {["Commodities", "Digital Assets", "Derivatives"].map((item, index) => (
              <div key={index} className="multiassets-item">
                <div className="multiassets-card">
                  <IoMdArrowDropdownCircle className="dropdown-icon" />
                  <h2>{item}</h2>
                </div>
                <div className="multiassets-details">
                  <ul className="details-list">
                    {index === 0 && (
                      <>
                        <li>✔ Futures</li>
                        <li>✔ Options</li>
                        <li>✔ CFDs</li>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <li>✔ Spot</li>
                        <li>✔ Futures</li>
                        <li>✔ Options</li>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <li>✔ Index Options</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Multiassets;
