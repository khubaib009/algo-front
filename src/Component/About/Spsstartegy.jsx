import React from 'react';
import './Spsstartegy.css';
import simage from './image.png';
import image2 from './images (2).jpeg'
import image3 from './stock2.jpg'
import image4 from './banner11.jpg'
import image5 from './stock3.jpg'
import image6 from './trad1.avif'
import image7 from './business.gif'
// Strategy Card Component
const Spsstartegy = ({ strategy }) => {
  return (
    <div className="strategy-card mt-10">
      <img src={strategy.image} alt="Strategy" className="strategy-image" />
      <div className="card-content">
        <h3>{strategy.title}</h3>
        <p>{strategy.description}</p>
        <div className="borderline"></div>
        <button className="tag">{strategy.tag}</button>
      </div>
    </div>
  );
};

// Strategy List Component
const Spsstartegys = () => {
  const strategies = [
    {
      title: "Investment Strategies Overview",
      description: "Explore our suite of innovative, algorithmic investment strategies designed to capture opportunities across multiple markets and asset classes. Each strategy is carefully tested to maximize returns while managing risk through advanced quantitative models.",
      tag: "Learn More",
      image: simage,
    },
    {
      title: "US TQQQ Spot & Put",
      description: "This strategy buys the TQQQ Spot ETF to capitalize on bullish market trends while simultaneously purchasing put options as a hedge. This approach combines exposure to upward price movements with downside protection.",
      tag: "Learn More",
      image: image2,
    },
    {
      title: "US QQQ Straddle",
      description: "Designed to capture volatility in the NASDAQ-100 Index, this strategy involves buying both call and put options on the QQQ ETF. It seeks to profit from large price movements in either direction and is managed on a monthly basis.",
      tag: "Learn More",
      image: image3,
    },
    {
      title: "US TSLA Put & Call",
      description: "This strategy leverages TSLA’s market volatility by purchasing call options to profit from bullish movements and put options to guard against declines. It provides flexibility to capitalize on both upward and downward market scenarios.",
      tag: "Learn More",
      image: image4,
    },
    {
      title: "EM Arb (Con-Rev) + Fut Long Short",
      description: "Our emerging markets strategy utilizes arbitrage between futures and synthetic futures in a combination of long and short positions to take advantage of market inefficiencies.",
      tag: "Learn More",
      image: image5,
    },
    {
      title: "EM Order Book Momentum",
      description: "This strategy analyzes order book snapshots to dynamically place and adjust orders, capitalizing on momentum-driven market behavior.",
      tag: "Learn More",
      image: image6,
    },
    {
      title: "DA Market-Neutral Strategies",
      description: "A range of market-neutral strategies across CEX (centralized exchanges) and DEX (decentralized exchanges), including Spot Arbitrage, Implied Volatility Arbitrage, and Cross-Exchange Market Making.",
      tag: "Learn More",
      image: image7,
    },
  ];

  return (
    <div className="strategy-container">
      {strategies.map((strategy, index) => (
        <Spsstartegy key={index} strategy={strategy} />
      ))}
    </div>
  );
};

export default Spsstartegys;
