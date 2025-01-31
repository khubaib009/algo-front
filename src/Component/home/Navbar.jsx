import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Added useNavigate and useLocation
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // For smooth scrolling
import logo from "./Images/logo-icon.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // For navigation
  const location = useLocation(); // Get current URL path

  const handleContactClick = () => {
    if (location.pathname === "/") {
      // If already on the home page, just scroll to contact
      scroll.scrollTo(document.getElementById("contact").offsetTop, {
        duration: 500,
        smooth: "easeInOutQuad",
      });
    } else {
      // Navigate to home first, then scroll to contact after the page loads
      navigate("/");
      setTimeout(() => {
        scroll.scrollTo(document.getElementById("contact").offsetTop, {
          duration: 500,
          smooth: "easeInOutQuad",
        });
      }, 500); // Delay scrolling to ensure page has loaded
    }
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <div className="logo-circle">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <span className="logo-text">AlgoEdge</span>
          </Link>
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
          <button className="login-btn" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
