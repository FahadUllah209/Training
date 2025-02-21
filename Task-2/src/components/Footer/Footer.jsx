import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer-container">
            <div className="footer-content">
                <p>&copy;  Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                <nav className="footer-nav">
                <NavLink
        to="/"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        Contact
      </NavLink>
                </nav>
            </div>
    </footer>
  )
}

export default Footer
