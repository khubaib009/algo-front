import React from 'react'
import greenicon from '../home/Images/icon-green.svg'
import blackicon from '../home/Images/black-icon.svg'
import rectangle1 from '../home/Images/Rectangle-1.svg'
import rectangle2 from '../home/Images/Rectangle-2.svg'
import layer3 from '../home/Images/Layer_3.svg'
import layer2 from '../home/Images/Layer-2.svg'
import vector6 from '../home/Images/Vector 6.svg'
import polygon5 from '../home/Images/Polygon 5.svg';

const Strategy = () => {
  return (
    <div>
       <section className="relative mt-20">
          <div className="relative overflow-visible w-[85%] bg-[#F4FFFB] mx-auto py-20 max-w-full">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-row items-start justify-start flex-1">
                <div className="w-[4px] md:h-80 bg-[#3B8F6E] h-52"></div>
                {/* Text Content */}
                <div className="ml-4 md:ml-10">
                  <h1 className="text-[28px] sm:text-[32px] md:text-[60px] text-[#142929] font-['gayathri'] font-bold text-left">
                    Access AlgoEdge's <br />
                    High-Performing &<br />
                    <span className="text-[28px] sm:text-[32px] md:text-[60px] font-['gayathri'] text-[#3B8F6E]">
                      Verified Market-Neutral
                      <br />
                      Trading Strategies
                    </span>
                  </h1>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end mt-4 md:mt-0">
                <img
                  src={greenicon}
                  alt="green-icon"
                  className="w-[200px] sm:w-[250px] md:w-[300px] h-auto max-h-[300px]"
                />
              </div>
            </div>
            {/* Subheading Section */}
            <div className="flex justify-center items-center mt-4 ">
              <img src={vector6} alt="vector" className="hidden md:block vector" />
            </div>
            <div className="text-center ">
             
              <div className="flex text-right sm:text-right md:text-center mt-12">
                <div className="className">
                  <span className="text-[28px] sm:text-[32px] md:text-[50px] leading-[30px] sm:leading-[60px] font-bold font-['gayathri']">
                    For Investment Managers And{' '}
                    <span className="font-['gayathri'] text-[#3B8F6E] mr-4">HNIs</span>
                  </span>
                  <p className="text-[24px] md:text-[24px] leading-[30px] sm:leading-[60px] font-['gayathri'] font-bold text-[#3B8F6E] mr-4 mt-2">
                    Access AlgoEdge's High-Performing Strategies.
                  </p>
                  
                <div className="flex flex-col md:flex-row md:items-center justify-around relative md:mt-2">
                  <div className="w-full md:w-1/3 px-4 text-left md:text-right z-10 md:mr-16 md:transform translate-y-16">
                    <img
                      src={layer3}
                      alt="layer-1"
                      className="layer-1 translate-y-[px] md:ml-auto" // Left aligned for mobile, auto for larger screens
                    />
                    <h3 className="text-[16px] sm:text-[16px] w-[100%] md:w-[85%] mt-4 md:text-[24px] md:ml-8 font-['gayathri'] text-[#000000] font-bold text-left md:text-right">
                      Invest Through Our Global Partners
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-[#142929] md:ml-2 font-400 md:mt-2 mr-4 md:text-right">
                      For clients without infrastructure who prefer a fully managed solution.
                    </p>
                  </div>
                  <div className="w-full md:w-auto flex relative items-center justify-center ">
                    <img
                      src={rectangle1}
                      alt="rectangle"
                      className="hidden md:block absolute right-[148px] w-30" // Adjusted size and position
                    />
                    <img
                      src={blackicon}
                      alt="black-icon"
                      className="hidden md:block w-[160px] sm:w-[150px]"
                    />
                    <img
                      src={rectangle2}
                      alt="rectangle"
                      className="hidden md:block absolute left-[150px]  w-30" // Adjusted size and position
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-4 text-left md:text-left z-10 md:ml-16 transform translate-y-20">
                    <img
                      src={layer2}
                      alt="layer-2"
                      className="layer-2 translate-y-[-10px] md:mr-auto" // Left aligned for mobile, right aligned for larger screens
                    />
                    <h3 className="text-[16px] w-[100%] md:w-[85%] md md:text-[24px] md:ml-2 font-['gayathri']  text-[#000000] font-bold ">
                      
                      License Our Strategies Via APIs
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-[#142929] md:ml-2 font-400 mt-2 text-left">
                      For clients with their own infrastructure, receive real-time trading
                      signals via APIs, and execute yourself.
                    </p>
                  </div>
                </div>
                </div>
                <div className="w-[8px] md:h-[450px] bg-[#3B8F6E] h-[130px] "></div>
              </div>
            </div>
          </div>
          <img
            src={polygon5}
            alt="polygon-4"
            className="hidden md:block absolute right-10 bottom-16"
          />
        </section>
    </div>
  )
}

export default Strategy
