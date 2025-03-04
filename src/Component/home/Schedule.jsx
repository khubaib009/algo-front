import React from 'react'
import './Schedule.css'
import { Link } from "react-router-dom";
const Schedule = () => {
  return (
    <div className="cta-container ">
      <h2>Interested to Learn More About Our Solutions?</h2>
      <p>Get in touch for details, we’ll reply back as soon as we see your message.</p>
      <Link to="/contact" className="menu-link">
        <button className="login-btn">
          Contact Us
        </button>
      </Link>
    </div>
  )
}

export default Schedule