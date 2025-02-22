import React, { useState } from 'react';
import polygon6 from './Images/Polygon 6.svg';
import './PerformanceS.css';
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Multiassets = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);  // Set the hovered section index
  };

  const handleMouseLeave = () => {
    setHovered(null);  // Reset the hovered section
  };

  return (
    <div>
      <section className="mx-auto mt-20 relative">
        
        <img
          src={polygon6}
          alt="polygon-5"
          className="hidden md:block absolute left-10 top-16" // Places the image at the bottom-left corner
        />
        <div className="w-[85%] bg-[#142929] rounded-lg shadow-lg p-8 mx-auto background-eclipse">
          <h1 className="text-[32px] md:text-[64px] font-['gayathri'] text-center text-[#FFFFFF] font-bold">
            Covering Multi-Asset Classes
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6">
            {/* Commodities Section */}
            <div
              className="border-2 border-dashed border-[#3B8F6E] gap-[5px] text-white shadow-md w-[250px] h-[56px] mx-auto flex justify-center items-center text-center md:w-[300px] md:h-[89px]"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <IoMdArrowDropdownCircle className="text-1xl md:text-2xl mb-1 md:mt-1 md:mb-0" /> {/* Increased icon size */}
              <h2 className="text-[16px] md:text-[24px] font-['gayathri'] md:mt-4 text-[#ffffff] font-bold">Commodities</h2>
            </div>
            {/* Digital Assets Section */}
            <div
              className="border-2 border-dashed border-[#3B8F6E] gap-[5px] text-white shadow-md w-[250px] h-[56px] mx-auto flex justify-center items-center text-center md:w-[300px] md:h-[89px]"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <IoMdArrowDropdownCircle className="text-1xl md:text-2xl mb-1 md:mt-1 md:mb-0" /> {/* Increased icon size */}
              <h2 className="text-[16px] md:text-[24px] font-['gayathri'] md:mt-4 text-[#ffffff] font-bold">Digital Assets</h2>
            </div>
            {/* Derivatives Section */}
            <div
              className="border-2 border-dashed border-[#3B8F6E] gap-[5px] text-white shadow-md w-[250px] h-[56px] mx-auto flex justify-center items-center text-center md:w-[300px] md:h-[89px]"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <IoMdArrowDropdownCircle className="text-1xl md:text-2xl mb-1 md:mt-1 md:mb-0" /> {/* Increased icon size */}
              <h2 className="text-[16px] md:text-[24px] font-['gayathri'] md:mt-4 text-[#ffffff] font-bold">Derivatives</h2>
            </div>
          </div>

          {/* Conditionally render content and increase section height */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 justify-center items-start gap-6 mt-4 transition-all duration-300 ${
              hovered !== null ? 'h-[auto]' : 'h-[0px]'
            }`}
          >
            {/* First List (Commodities) */}
            
            {hovered === 0 && (
              <div className="w-full flex justify-center md:col-span-1 ">
                <ul className="flex flex-row items-center justify-center text-[16px] font-['Radio Canada Big'] text-[#FAFAFA] bg-[#3F9A761C] font-400 p-4 shadow-md w-[400px] h-[56px] mx-auto md:w-[300px] md:h-[150px] md:items-start md:justify-start md:flex-col md:space-x-6 md:space-y-4">
                  <li className="flex md:ml-6 md:mt-3 items-center space-x-1 mr-4 ">
                    <span>✔</span>
                    <span>Futures</span>
                  </li>
                  <li className="flex items-center space-x-1 mr-4">
                    <span>✔</span>
                    <span>Options</span>
                  </li>
                  <li className="flex items-center space-x-1 ">
                    <span>✔</span>
                    <span>CFDs</span>
                  </li>
                </ul>
              </div>
            )}
            
            {/* Second List (Digital Assets) */}
            <div className=""></div>
            {hovered === 1 && (
              <div className="w-full flex justify-center md:col-span-1">
                <ul className="flex flex-row items-center justify-center text-[16px] font-['Radio Canada Big'] text-[#FAFAFA] bg-[#3F9A761C] font-400 p-4 shadow-md w-[250px] h-[56px] mx-auto md:w-[300px] md:h-[150px] md:items-start md:justify-start md:flex-col md:space-x-6 md:space-y-4">
                  <li className="flex md:ml-6 md:mt-3 items-center space-x-1 mr-4 ">
                    <span>✔</span>
                    <span>Spot</span>
                  </li>
                  <li className="flex items-center space-x-1 mr-4">
                    <span>✔</span>
                    <span>Futures</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span>✔</span>
                    <span>Options</span>
                  </li>
                </ul>
              </div>
            )}
            <div className=""></div>
            {/* Third List (Derivatives) */}
            {hovered === 2 && (
              <div className="w-full flex items-end md:col-span-1">
                <ul className="flex flex-row items-center justify-center text-[16px] font-['Radio Canada Big'] text-[#FAFAFA] bg-[#3F9A761C] font-400 p-4 shadow-md w-[250px] h-[56px] mx-auto md:w-[300px] md:h-[150px] md:items-start md:justify-start md:flex-col md:ml-102 md:space-x-6 md:space-y-4">
                  <li className="flex md:ml-6 md:mt-3 items-center space-x-1 mr-4">
                    <span>✔</span>
                    <span>Index Options</span>
                  </li>
                </ul>
              </div>
            )}
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Multiassets;
