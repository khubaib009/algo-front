import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use react-router-dom for navigation
import logo from "./Images/logo-icon.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <div className="logo-circle">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <span className="logo-text">AlgoEdge</span>
        </div>

        {/* Hamburger Menu (Visible on Mobile) */}
        <div className="hamburger-menu">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-btn"
          >
            <svg
              className="hamburger-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Menu Section */}
        <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/strategies" className="menu-link">
                Strategies
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/Institutional_Investors" className="menu-link">
                Institutional Investors
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/team" className="menu-link">
                Team
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/blog" className="menu-link">
                Blog
              </Link>
            </li>
          </ul>
          <button className="login-btn">
            <Link to="/contact" className="menu-link">
              Contact Us
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
