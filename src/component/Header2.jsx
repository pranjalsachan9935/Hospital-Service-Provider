import React, { useState } from "react";
import Headerlogo from "../assests/header-logo.webp";
import "./Header2.css";
import { Link } from "react-router-dom";
import SearchPortal from "../Portal/SearchPortal";
import Sidebar from "./Sidebar";

const Header2 = () => {
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  function openSidebar() {
    setSidebar(true);
  }

  const handleClick = () => {
    setShow(true);
  };

  return (
    <header>
      <div className="small-header">
        <img
          className="small-nav-img"
          src={Headerlogo}
          alt="logo"
          height={40}
          width={40}
        />
        <i onClick={openSidebar} className="fa-solid fa-bars"></i>
      </div>

      <img
          className="nav-img"
          src={Headerlogo}
          alt="logo"
          height={40}
          width={40}
        />

      <div className="hamburger">
        <i onClick={openSidebar} className="fa-solid fa-bars"></i>
      </div>

      <nav>
        <ul>
          <li>
            <span>NEW</span>
            <a className="hover-item" href="#0">
              Demos
            </a>
          </li>
          <li>
            <a href="#0">Pages</a>
            <ul>
              <li>
                <a href="#0">Portfolio</a>
              </li>
              <li>
                <a href="#0">Product Detail</a>
              </li>
              <li>
                <a href="#0">Privacy Policy</a>
              </li>
              <li>
                <a href="#0">Disclaimer</a>
              </li>
              <li>
                <a href="#0">Team Details</a>
              </li>
              <li>
                <a href="#0">Team Goals</a>
              </li>
              <li>
                <a href="#0">Services</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#0">Insurance</a>
            <ul>
              <li>
                <a href="#0">Insurance 1</a>
              </li>
              <li>
                <a href="#0">Insurance 2</a>
              </li>
              <li>
                <a href="#0">Insurance 3</a>
              </li>
              <li>
                <a href="#0">Insurance 4</a>
              </li>
              <li>
                <a href="#0">Insurance 5</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#0">Shop</a>
            <ul>
              <li>
                <a href="#0">Shop 1</a>
              </li>
              <li>
                <a href="#0">Shop 2</a>
              </li>
              <li>
                <a href="#0">Shop 3</a>
              </li>
              <li>
                <a href="#0">Shop 4</a>
              </li>
              <li>
                <a href="#0">Shop 5</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#0">News</a>
            <ul>
              <li>
                <a href="#0">News1</a>
              </li>
              <li>
                <a href="#0">News2</a>
              </li>
              <li>
                <a href="#0">News3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#0">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="nav-right">
        <i onClick={handleClick} class="fa-solid fa-magnifying-glass"></i>
        <Link to="/cart">
          {" "}
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
        <div className="nav-qoute">
          <p>Get a Quote</p>
        </div>
      </div>

      <div className="header2">
        <i className="fa-solid fa-phone"></i>
        <div className="header2-right">
          <p className="phone-no">
            <b>+92(003) 68-090</b>
          </p>
          <p style={{ fontSize: "14px" }}>Call to Our Expert</p>
        </div>
      </div>
      <SearchPortal show={show} setShow={setShow} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </header>
  );
};

export default Header2;
