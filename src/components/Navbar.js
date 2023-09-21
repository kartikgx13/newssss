import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './Navbarstyles.css'
import { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState("");


  //logic to change css of links after click
  const [click,setClick]=useState(false)
  const handleClick = (link) => {
    setActiveLink(link);
    setClick(!click);
  };

  return (
    <section className='nav-header-section'>
      <div className="navbar-container">
    <a className="navbar-logo" href="/">NewShortzzz</a>
      <ul className='nav-links-container'>
        <li><Link className={activeLink === "business" ? "nav-link-clicked" : ""}
            onClick={() => handleClick("business")} 
             to="/business">Business</Link></li>
        <li><Link className={activeLink === "entertainment" ? "nav-link-clicked" : ""}
            onClick={() => handleClick("entertainment")} 
             to="/entertainment">Entertainment</Link></li>
        <li><Link className={activeLink === "health" ? "nav-link-clicked" : ""}
            onClick={() => handleClick("health")} 
             to="/health">Health</Link></li>
        <li><Link className={activeLink === "science" ? "nav-link-clicked" : ""}
            onClick={() => handleClick("science")} 
             to="/science">Science</Link></li>
        <li><Link className={activeLink === "sports" ? "nav-link-clicked" : ""}
            onClick={() => handleClick("sports")} 
             to="/sports">Sports</Link></li>
        <li><Link className={activeLink === "technology" ? "nav-link-clicked" : ""}
            onClick={() => handleClick("technology")} 
             to="/technology">Technology</Link></li>
      </ul>
  </div>
      </section>
  )
}

export default Navbar