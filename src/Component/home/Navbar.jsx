import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "./Images/logo-icon.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1030);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1030);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };

  const dropdownStyle = {
    maxHeight: isDropdownOpen ? "300px" : "0px",
    opacity: isDropdownOpen ? 1 : 0,
    overflow: "hidden",
    transition: "max-height 0.7s ease-in-out, opacity 0.7s ease-in-out",
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <div className="logo-circle">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <span className="logo-text">AlgoEdge</span>
          </Link>
        </div>

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
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu-item dropdown" ref={dropdownRef}>
              <span
                className="menu-link dropdown-toggle"
                onClick={() => {
                  closeMenu();
                  toggleDropdown();
                }}
              >
                Solutions
              </span>
              <div className="dropdown-card" style={dropdownStyle}>
                <Link to="/finles-service" className="menu-link-1" onClick={closeMenu}>
                  <div className="dropdown-item">
                    <h1>Expertly Managed Funds</h1>
                    <p className="item-description">
                      Hands-off investment approach <br /> through AlgoEdge’s trusted global <br /> partner funds.
                    </p>
                  </div>
                </Link>
                <Link to="/Qaas-service" className="menu-link-1" onClick={closeMenu}>
                  <div className="dropdown-item">
                    <h1>Quant Trading SaaS</h1>
                    <p className="item-description">
                      Empower your trading operations <br /> with AlgoEdge’s Quant SaaS without the need <br /> in-house team.
                    </p>
                  </div>
                </Link>
              </div>
            </li>
            <li className="menu-item">
              <Link to="/Investment-Products" className="menu-link" onClick={closeMenu}>
                Investment Products
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/article-news" className="menu-link" onClick={closeMenu}>
                Article & Insights
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/team" className="menu-link" onClick={closeMenu}>
                About Us
              </Link>
            </li>
          </ul>
          <Link to="/contact" className="menu-link" onClick={closeMenu}>
            <button className="login-btn">Contact Us</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
