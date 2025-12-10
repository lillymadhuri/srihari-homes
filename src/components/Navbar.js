import React, { useState } from "react";
import "./Navbar.css";
import sri1 from "../images/sri1.jpeg";
import { Link } from "react-router-dom";


function Navbar() {
  const [showResources, setShowResources] = useState(false);
   const [mobileOpen, setMobileOpen] = useState(false);
   const handlehireClick = () => {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })
    }
  return (
    <nav className="navbar">
        <div className="logo">
         <img src={sri1} alt="Logo" className="logoimg" />
        </div>
          <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        ☰
      </div>
        <ul className={`navlinks ${mobileOpen ? "active" : ""}`}>
        <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/nri">NRI</Link></li>
            <li><Link to="/carrers">Careers</Link></li>
           <li className="resources-menu"
  onMouseEnter={() => setShowResources(true)}
  onMouseLeave={() => setShowResources(false)}
  >

 Resources▼
  {showResources && (
    <ul className="dropdown-menu">
      <li><Link to="/resources/gallery">Gallery</Link></li>
      <li><Link to="/resources/blog">Blog</Link></li>
      <li><Link to="/resources/media">Media</Link></li>
    </ul>
  )}
</li>

            <li><Link to="/contact">contact</Link></li>
             <div className="button-container">
      <button className="phonebtn" onClick={handlehireClick}>
      +917032599541
      </button>
      </div>
        </ul>
    </nav>
  )
  }
  export default Navbar