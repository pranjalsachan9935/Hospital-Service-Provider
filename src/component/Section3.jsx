import React from 'react'
import AboutBase from "../assests/about-one-shape-1.webp";
import AboutMid from "../assests/about-one-img-1.webp";
import AboutTop from "../assests/about-one-img-2.webp";
import ArrowImg1 from "../assests/section-title-shape-1.webp";
import ArrowImg2 from "../assests/section-title-shape-2.webp";
import './Section3.css'

const Section3 = () => {


  return (
    <section className="section-3">
    <div className="section-3-left">
      <img src={AboutBase} alt="base_image" />
      <img src={AboutMid} alt="base_image" />
      <img src={AboutTop} alt="base_image" />
    </div>
    <img className='hidden-image-mid' src={AboutMid} alt="base_image" />
    <div className="experience-label-hidden">
      <h2>30</h2>
      <p>Years of 
      <br/>
      Experience
      </p>
    </div>
    <div className="experience-label">
      <h2>30</h2>
      <p>Years of 
      <br/>
      Experience
      </p>
    </div>
   

    <div className="section-3-right">
      <div className="right-title">
        <div className="left-dash-1">
          <img src={ArrowImg1} alt="left-dash" />
        </div>
        <p className="title-text">ABOUT COMPANY</p>
        <div className="right-dash">
          <img src={ArrowImg2} alt="right-dash-2" />
        </div>
      </div>

      <h2>We provide the best insurance policy</h2>
      <div className="blue-highlight">
        <p>
          Duis aute irure dolor in reprehenderit in velit esse cillum dolore
          eu nulla pariatur.
        </p>
      </div>
      <ul>
        <li>Refresing to get such a personal touch.</li>
        <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
        <li>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
      </ul>

      <div className="bottom-para">
        <p>
          Nullam eu nibh vitae est tempor molestie id sed ex. Quisque
          dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget
          tincidunt ipsum.
        </p>
      </div>

      <div className="bottom-box">
        <div className="discover">
          <button className="discover-botton">Discover More</button>
          <i className="fa-solid fa-phone"></i>
          <div className="discover-right">
            <p>
              <b>+92(003) 68-090</b>
            </p>
            <p style={{ fontSize: "14px" }}>Call to Our Expert</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section3