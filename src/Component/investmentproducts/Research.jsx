import React, { useState } from "react";
import "./Research.css";
import polygon7 from "../home/Images/Polygon 7.svg";
import icon11 from "../home/Images/S-Icon.svg";
import icon2 from "../home/Images/Picture1.png";
import icon3 from "../home/Images/Picture2.png";
import icon4 from "../home/Images/Picture3.png";
import icon5 from "../home/Images/Picture4.png";
import icon6 from "../home/Images/Picture5.png";

const Research = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Research",
      description:
        "Our journey begins with in-depth market research. We harness cutting-edge technology and comprehensive data analysis to identify potential trading opportunities and craft the foundation of our strategies.",
      icon: icon11,
    },
    {
      number: "02",
      title: "Whitepaper Development",
      description:
        "Each strategy is rigorously documented in a whitepaper. This document details our trading logic, expected outcomes, and risk assessments, ensuring transparency and a clear roadmap for implementation.",
      icon: icon2,
    },
    {
      number: "03",
      title: "Backtesting",
      description:
        "Testing a strategy on past data is crucial to evaluate its performance and identify weaknesses. It helps refine signals, risk rules, and parameters to avoid overfitting and improve real-world results.",
      icon: icon3,
    },
    {
      number: "04",
      title: "Refinement",
      description:
        "Continuous improvement is key. We monitor the performance and tweak our algorithms as needed, adapting to market conditions to optimize results.",
      icon: icon4,
    },
    {
      number: "05",
      title: "Live Trading",
      description:
        "Deploy strategies in live markets, monitor performance closely, and adjust based on real-time conditions to optimize results and manage risks effectively.",
      icon: icon5,
    },
    {
      number: "06",
      title: "Continual Refinement",
      description:
        "Continuously improve strategies to stay aligned with market trends.",
      icon: icon6,
    },
  ];

  return (
    <section className="research-container">
      <img src={polygon7} alt="polygon-7" className="polygon-image" />
      <div className="content-box">
        <h2 className="main-title">Our Proprietary Strategy</h2>
        <h3 className="sub-title">Research & Launch Methodology</h3>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-card ${
                hoveredStep === index ? "expanded" : ""
              }`}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                height: hoveredStep === index ? "auto" : "100px",
              }}
            >
              <div className="step-header">
                <div className="vertical-liner"></div>
                <div className="step-number">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
              </div>
              <div className="step-icon">
                <img src={step.icon} alt={`icon${index}`} className="icon-size" />
              </div>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
