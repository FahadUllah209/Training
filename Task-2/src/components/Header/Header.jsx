import React from 'react'
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <nav className="navbar">
    <div className="logo-container">
      <NavLink to="/" className={"logo-link"}>
        <h1>Logo</h1>
      </NavLink>
    
    </div>

    <div className="nav-links" >
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
    </div>


  </nav>
  )
}

export default Header
