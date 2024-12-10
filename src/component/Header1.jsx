import React from "react";
import './Header1.css'
import { Link } from "react-router-dom";
const Header1 = () => {
  return (
    <div className="header-1-container">
      <div className="header1-left">
        <address>
        <p className="commercial-p"><span><i className="fa-solid fa-location-dot"></i> </span>30 Commercial Road Fratton, Australia</p>
        <a href="https://www.xyz.com" rel="noopener noreferrer"  target="_blank">
          <span><i className="fa-solid fa-message"></i> </span>needhelp@company.com
        </a>
        </address>
      </div>

      <div className="header1-right">
      <Link to="/claim">
          Make a claim
        </Link>
        <Link to="/faq">
          FAQ
        </Link>
        <Link to="/about">
          About
        </Link>

        <a href="https://www.xyz.com" rel="noopener noreferrer" target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.xyz.com" rel="noopener noreferrer" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.xyz.com" rel="noopener noreferrer" target="_blank">
          <i className="fa-brands fa-pinterest"></i>
        </a>
        <a href="https://www.xyz.com" rel="noopener noreferrer" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Header1;
