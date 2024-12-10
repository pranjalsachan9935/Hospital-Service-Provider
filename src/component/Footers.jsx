import React from "react";
import Footerlogo from "../assests/footer-logo.webp";
import FooterWidget from "../assests/footer-widget-gallery-img-1.webp";
import FooterWidget2 from '../assests/footer-widget-gallery-img-2.webp';
import FooterWidget3 from '../assests/footer-widget-gallery-img-6.webp';


import "./Footer.css";
const Footers = ({handleTop}) => {

  return (
    <div className="mostouter-footer">
      <footer>
        <div className="footer-cart-1">
          <img src={Footerlogo} alt="footer_logo" />
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt.
          </p>

          <a
            href="https://www.xyz.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.xyz.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.xyz.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a
            href="https://www.xyz.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <div className="footer-cart-2">
          <h3>Contact</h3>
          <address className="third-address">
            <p className="australia">
              <span className="location">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              30 commercial road fratton, lorem epsum, cortany - new like Australia
            </p>
            <p>
              <span className="message">
                <i className="fa-solid fa-message"></i>
              </span>
              needhelp@company.com
            </p>
          </address>
          <div className="open-hour-address">
          <h4>Open Hours</h4>
          <p>Mon - Sat: 8:00 am to 6:00 pm Sunday: Closed</p>
          </div>
        </div>

        <div className="footer-cart-3">
  <h3>Instagram</h3>
  <div>
    <div className="footer-hover-img">
      <img src={FooterWidget2} alt="image_1" height={70} width={70} />
      <div className="footer-image-overlay">
        <i onClick={handleTop} className="fa-solid fa-link"></i>
      </div>
    </div>
    <div className="footer-hover-img">
      <img src={FooterWidget} alt="image_2" height={70} width={70} />
      <div className="footer-image-overlay">
        <i onClick={handleTop} className="fa-solid fa-link"></i>
      </div>
    </div>
    <div className="footer-hover-img">
      <img src={FooterWidget2} alt="image_3" height={70} width={70} />
      <div className="footer-image-overlay">
        <i onClick={handleTop} className="fa-solid fa-link"></i>
      </div>
    </div>

    <div className="footer-hover-img">
      <img src={FooterWidget} alt="image_4" height={70} width={70} />
      <div className="footer-image-overlay">
        <i onClick={handleTop} className="fa-solid fa-link"></i>
      </div>
    </div>
    
    <div className="footer-hover-img">
      <img src={FooterWidget3} alt="image_5" height={70} width={70} />
      <div className="footer-image-overlay">
        <i onClick={handleTop} className="fa-solid fa-link"></i>
      </div>
    </div>

    <div className="footer-hover-img">
      <img src={FooterWidget} alt="image_6" height={70} width={70} />
      <div className="footer-image-overlay">
        <i onClick={handleTop} className="fa-solid fa-link"></i>
      </div>
    </div>
    
  </div>
</div>


        <div className="footer-cart-4">
          <h3>Newsletter</h3>
          <p>Subscribe our newsletter to get our latest update & news glad to listen you are here hope everything going well.</p>

          <div className="input-email">
            <input type="text" placeholder="Email address" />
            <i class="fa-solid fa-paper-plane"></i>
          </div>
          <div className="footer2">
            <i className="fa-solid fa-phone"></i>
            <div className="footer2-right">
              <a href="ww.xyz.com" className="phone-no">+92(003) 68-090</a>
              <p className="phone-text">Call to Our Expert</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <hr />
          <p>&copy; All Copyright 2024 by Insur.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
