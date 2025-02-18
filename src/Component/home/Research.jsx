import React, { useState } from "react";
import polygon7 from "./Images/Polygon 7.svg";
import icon11 from "./Images/S-Icon.svg";
import icon2 from './Images/Picture1.png'
import icon3 from './Images/Picture2.png'
import icon4 from './Images/Picture3.png'
import icon5 from './Images/Picture4.png'
import icon6 from './Images/Picture5.png'


const Research = () => {
  const [activeStep, setActiveStep] = useState(null); // Default to null (show first step by default)

  const steps = [
    {
      number: "01",
      title: "Research",
      description:
        "Analyze market trends and asset classes to identify trading opportunities.",
      icon: (
        <img
          src={icon11}
          alt="icon11"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
    },
    {
      number: "02",
      title: "Whitepaper Development",
      description:
        "Document strategies, expected outcomes, and risks for transparency.",
      icon: (
        <img
          src={icon2}
          alt="icon11"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
    },
    {
      number: "03",
      title: "Backtesting",
      description:
        "Test strategies on historical data to assess performance and uncover weaknesses.",
      icon: (
        <img
          src={icon3}
          alt="icon11"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
    },
    {
      number: "04",
      title: "Refinement",
      description: "Adjust strategies to fix inefficiencies based on backtest results.",
      icon: (
        <img
          src={icon4}
          alt="icon11"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
    },
    {
      number: "05",
      title: "Live Trading",
      description:
        "Deploy strategies in live markets, adjusting based on real-time conditions.",
      icon: (
        <img
          src={icon5}
          alt="icon11"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
    },
    {
      number: "06",
      title: "Continual Refinement",
      description:
        "Continuously improve strategies to stay aligned with market trends.",
      icon: (
        <img
          src={icon6}
          alt="icon11"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      ),
    },
  ];

  return (
    <div>
      <section className="relative md:mt-20">
        <img
          src={polygon7}
          alt="polygon-7"
          className="hidden md:block absolute left-10 bottom-48"
        />
        <div className="max-w-[85%] mx-auto bg-[#F4FFFB] mt-10 py-10">
          <h2 className="text-[28px] sm:text-[40px] md:text-[64px] font-['gayathri'] ml-4 sm:ml-10 md:ml-16 font-bold text-left">
            Our Proprietary Strategy
          </h2>
          <h3 className="text-[28px] sm:text-[40px] md:text-[64px] font-['gayathri'] ml-4 sm:ml-10 md:ml-16 font-bold text-left text-[#3B8F6E]">
            Research & Launch Methodology
          </h3>
          <div className="relative px-4 sm:px-10 md:px-16 space-y-4">
            {steps.map((step, index) => (
              <div
              key={index}
              className={`relative flex flex-col sm:flex-row items-start p-4 sm:p-7 rounded-lg shadow-sm border border-[#E4E4E4] transition-all duration-300 ${
                activeStep === index || (activeStep === null && index === 0)
                  ? "bg-white sm:p-6" // Active state
                  : "bg-[#F4FFFB] sm:p-7" // Inactive state
              }`}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Icon Section */}
              {step.icon && (activeStep === index || (activeStep === null && index === 0)) && (
                <div className="absolute flex items-center justify-center bg-[#3B8F6E] w-12 h-[140px] sm:w-28 md:h-[113px] right-0 top-0 rounded-lg">
                  {step.icon}
                </div>
              )}
            
              {/* Step Details */}
              <div className="flex relative items-center">
                <div className="w-[1px] h-4 bg-[#3B8F6E]"></div>
                <div className="flex items-center">
                  <span className="text-[#142929] text-[20px] sm:text-[24px] ml-2 font-semi-bold">{step.number}</span>
                </div>
              </div>
            
              {/* Title and Description */}
              <div className="flex-1 sm:ml-12 text-left w-full  sm:w-[80%]">
                <h4 className="text-[16px] md:text-[20px] font-['gayathri'] font-bold text-[#142929]">
                  {step.title}
                </h4>
                {(activeStep === index || (activeStep === null && index === 0)) && (
                  <div className="mt-2 flex flex-col">
                    <p className="text-[14px] md:text-[16px] font-['Radio Canada Big'] font-semibold text-[#142929] sm:w-[80%] w-[80%]">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
