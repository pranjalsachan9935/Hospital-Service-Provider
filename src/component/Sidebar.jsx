import React, { useState } from "react";
import Footerlogo from "../assests/footer-logo.webp";
import "./Sidebar.css";

const Sidebar = ({ sidebar, setSidebar }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  function sidebarClose() {
    setSidebar(false);
  }

  function toggleDropdown(menu) {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  }

  if (!sidebar) return null;

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${sidebar ? "visible" : ""}`}
        onClick={sidebarClose}
      ></div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebar ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={Footerlogo} alt="Logo" className="logo" />
          <button onClick={sidebarClose} className="close-btn">
            &times;
          </button>
        </div>
        <ul className="sidebar-menu">
          <hr />
          <li className="menu-item">Demos</li>
          <hr />
          <li className="menu-item" onClick={() => toggleDropdown("Pages")}>
            Pages
            <span
              className={`dropdown-icon ${
                activeDropdown === "Pages" ? "rotate" : ""
              }`}
            >
              ▶
            </span>
            {activeDropdown === "Pages" && (
              <ul className="dropdown-menu">
                <hr />
                <li>Privacy Page</li>
                <hr />
                <li>About Page</li>
                <hr />
                <li>Home Page</li>
                <hr />
                <li>Disclaimer Page</li>
              </ul>
            )}
          </li>
          <hr />

          <li className="menu-item" onClick={() => toggleDropdown("Insurance")}>
            Insurance
            <span
              className={`dropdown-icon ${
                activeDropdown === "Insurance" ? "rotate" : ""
              }`}
            >
              ▶
            </span>
            {activeDropdown === "Insurance" && (
              <ul className="dropdown-menu">
                <hr />
                <li>Health Insurance</li>
                <hr />
                <li>Life Insurance</li>
                <hr />
                <li>Car Insurance</li>
              </ul>
            )}
          </li>
          <hr />

          <li className="menu-item" onClick={() => toggleDropdown("Shop")}>
            Shop
            <span
              className={`dropdown-icon ${
                activeDropdown === "Shop" ? "rotate" : ""
              }`}
            >
              ▶
            </span>
            {activeDropdown === "Shop" && (
              <ul className="dropdown-menu">
                <hr />
                <li>Products</li>
                <hr />
                <li>Categories</li>
                <hr />
                <li>Deals</li>
              </ul>
            )}
          </li>
          <hr />

          <li className="menu-item" onClick={() => toggleDropdown("News")}>
            News
            <span
              className={`dropdown-icon ${
                activeDropdown === "News" ? "rotate" : ""
              }`}
            >
              ▶
            </span>
            {activeDropdown === "News" && (
              <ul className="dropdown-menu">
                <hr />
                <li>Latest News</li>
                <hr />
                <li>Articles</li>
                <hr />
                <li>Events</li>
                <hr />
                <li>News Adda</li>
              </ul>
            )}
          </li>
          <hr />

          <li className="menu-item">Contact</li>
          <hr />
        </ul>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fa fa-envelope"></i>
            <p>needhelp@insur.com</p>
          </div>
          <div className="contact-item">
            <i className="fa fa-phone"></i>
            <p>666 888 00000</p>
          </div>
          <div className="social-icons">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
