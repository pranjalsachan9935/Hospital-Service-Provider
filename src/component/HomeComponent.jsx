import React from "react";
import image1 from "../assests/main-slider-1-1.webp";
import image2 from "../assests/main-slider-1-2.webp";
import image3 from "../assests/main-slider-1-3.webp";
import Card1 from "../assests/services-1-1.webp";
import Card2 from "../assests/services-1-2.webp";
import Card3 from "../assests/services-1-3.webp";
import Card4 from "../assests/services-1-4.webp";
import Card5 from "../assests/services-1-5.webp";
import Card6 from "../assests/services-1-6.webp";
import Card7 from "../assests/services-1-7.webp";
import Card8 from "../assests/services-1-8.webp";
import ArrowImg1 from "../assests/section-title-shape-1.webp";
import ArrowImg2 from "../assests/section-title-shape-2.webp";
import Animated from "./Animated";
import "./HomeComponent.css";
import Slider from "./Slider";
import Section3 from "./Section3";

const HomeComponent = ({ currentIndex, setCurrentIndex }) => {
  const images = [image1, image2, image3];

  return (
    <>
      <section className="section-1">
        <div className="slider-container">
          <Slider images={images} />
          <div className="text-overlay">
            <div className="top-overlay">
              <h2>
                <span className="fixed-line-1"></span>
                Insurance
                <br />
                for the better
                <br />
                family
                <span> life</span>
              </h2>
            </div>
            <div className="bottom-overlay">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ducimus natus.
              </p>
              <div className="started-button">
                <button>Let's get started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="section-2-cards">
          <div className="card">
            <div className="icon-container">
              <span>
                <i class="fa-solid fa-car-burst"></i>
              </span>
            </div>
            <div className="count">01</div>
            <div className="inner-text">
              <h3>Safe your life</h3>
              <p>
                Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod
                tempor incid idunt ut labore.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="icon-container">
              <span>
                <i class="fa-solid fa-piggy-bank"></i>
              </span>
            </div>
            <div className="count">02</div>
            <div className="inner-text">
              <h3>Get free quotes</h3>
              <p>
                Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod
                tempor incid idunt ut labore.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="icon-container">
              <span>
                <i class="fa-solid fa-house"></i>
              </span>
            </div>
            <div className="count">03</div>
            <div className="inner-text">
              <h3>Fast and relaible</h3>
              <p>
                Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod
                tempor incid idunt ut labore.
              </p>
            </div>
          </div>
        </div>
      </section>

     <Section3/>

      <section className="section-4">
        <div class="fixed-card-container">
          <div className="container">
            <div className="left">
              <div>
                <div className="left-dash">
                  <img src={ArrowImg1} alt="left-dash" />
                </div>
                <p>OUR SERVICES</p>
                <div className="right-dash">
                  <img src={ArrowImg2} alt="right-dash" />
                </div>
              </div>
              <h2>We’re covering all the insurance fields</h2>
            </div>
            <div className="right">
              <p>
                Nullam eu nibh vitae est tempor molestie id sed ex. Quisque
                dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget
                tincidunt ipsum.
              </p>
            </div>
          </div>

          <div class="fixed-card">
            <div class="fixed-card-image">
              <img src={Card1} alt="Card" />
              <div className="image-overlay"></div>
            </div>
            <div class="fixed-card-content">
              <p className="fixed-line"></p>
              <h3>Car Insurance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="logo-icon">
                <i className="fa-solid fa-car"></i>
              </span>
            </div>
          </div>
          <div class="fixed-card">
            <div class="fixed-card-image">
              <img src={Card2} alt="Card" />
              <div className="image-overlay"></div>
            </div>
            <div class="fixed-card-content">
              <p className="fixed-line"></p>
              <h3>Home Insurance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="logo-icon">
                <i class="fa-solid fa-heart"></i>
              </span>
            </div>
          </div>
          <div class="fixed-card">
            <div class="fixed-card-image">
              <img src={Card3} alt="Card" />
              <div className="image-overlay"></div>
            </div>
            <div class="fixed-card-content">
              <p className="fixed-line"></p>
              <h3>Life Insurance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="logo-icon">
                <i className="fa-solid fa-home"></i>
              </span>
            </div>
          </div>
          <div class="fixed-card">
            <div class="fixed-card-image">
              <img src={Card4} alt="Card" />
              <div className="image-overlay"></div>
            </div>
            <div class="fixed-card-content">
              <p className="fixed-line"></p>
              <h3>Health Insurance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="logo-icon">
                <i class="fa-solid fa-hand-holding-medical"></i>
              </span>
            </div>
          </div>
          <div class="fixed-card">
            <div class="fixed-card-image">
              <img src={Card5} alt="Card" />
              <div className="image-overlay"></div>
            </div>
            <div class="fixed-card-content">
              <p className="fixed-line"></p>
              <h3>Business Insurance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="logo-icon">
                <i className="fa-solid fa-dollar"></i>
              </span>
            </div>
          </div>
          <div class="fixed-card">
            <div class="fixed-card-image">
              <img src={Card6} alt="Card" />
              <div className="image-overlay"></div>
            </div>
            <div class="fixed-card-content">
              <p className="fixed-line"></p>
              <h3>Fire Insurance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="logo-icon">
                <i className="fa-solid fa-fire"></i>
              </span>
            </div>
          </div>

          <div class="fixed-card">
            <div class="fixed-card-image">
              <img src={Card7} alt="Card" />
              <div className="image-overlay"></div>
            </div>
            <div class="fixed-card-content">
              <p className="fixed-line"></p>
              <h3>Marriage Insurance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="logo-icon">
                <i className="fa-solid fa-ring"></i>
              </span>
            </div>
          </div>
          <div class="fixed-card">
            <div class="fixed-card-image">
              <img src={Card8} alt="Card" />
              <div className="image-overlay"></div>
            </div>
            <div class="fixed-card-content">
              <p className="fixed-line"></p>
              <h3>Travel Insurance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="logo-icon">
                <i className="fa-solid fa-car"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Animated />
    </>
  );
};

export default HomeComponent;
