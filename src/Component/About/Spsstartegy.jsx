import React from "react";
import "./Spsstartegy.css";
import { Link } from "react-router-dom";
const CardSection = () => {
  const cards = [
    {
      title: "US TQQQ Spot & Put",
      subtitle: "TQQQ",
      description: [
        "This strategy buys the TQQQ Spot ETF to capitalize on bullish market trends while simultaneously purchasing put options as a hedge. This approach combines exposure to upward price movements with downside protection.",
        
      ],
      bgColor: "#007272",
    },
    {
      title: "US QQQ Straddle",
      subtitle: "QQQ",
      description: [
       "Designed to capture volatility in the NASDAQ-100 Index, this strategy involves buying both call and put options on the QQQ ETF. It seeks to profit from large price movements in either direction and is managed on a monthly basis.",
      ],
      bgColor: "#E3EEF3",
    },
    {
      title: "US TSLA Put & Call",
      subtitle: "TSLA",
      description: [
        "This strategy leverages TSLA’s market volatility by purchasing call options to profit from bullish movements and put options to guard against declines. It provides flexibility to capitalize on both upward and downward market scenarios.",
      ],
      bgColor: "#F4F4F4",
    },
    {
      title: "EM Arb (Con-Rev) + Fut Long Short",
      subtitle: "EM ARB",
      description: [
        "Our emerging markets strategy utilizes arbitrage between futures and synthetic futures in a combination of long and short positions to take advantage of market inefficiencies.",
      ],
      bgColor: "#C5E3E5",
    },
    {
      title: "EM Order Book Momentum",
      subtitle: "EM MOM",
      description: [
        "This strategy analyzes order book snapshots to dynamically place and adjust orders, capitalizing on momentum-driven market behavior.",
      ],
      bgColor: "#DDE6F5",
    },
    {
      title: "DA Market-Neutral Strategies",
      subtitle: "DA NEUTRAL",
      description: [
        "A range of market-neutral strategies across CEX (centralized exchanges) and DEX (decentralized exchanges), including Spot Arbitrage, Implied Volatility Arbitrage, and Cross-Exchange Market Making.",
      ],
      bgColor: "#F7E8D0",
    },
  ];

  return (
    <div className="card-section">
      {cards.map((card, index) => (
        <div className="card" key={index} style={{ backgroundColor: card.bgColor }}>
          <h3 className="card-title">{card.title}</h3>
          <h2 className="card-subtitle">{card.subtitle}</h2>
          <ul className="card-description">
            {card.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
          <Link to="/contact" className="menu-link">
           <button className="card-button">Learn More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardSection;


