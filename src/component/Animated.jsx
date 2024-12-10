import React from "react";
import TrackingImg from "../assests/tracking-shape-1.webp";
import './Animated.css';

const Animated = () => {
  return (
    <div className="animated-most-outer">
    <div className="animated-container">
      {/* Animated images */}
      <div className="tracking-img tracking-img-1">
        <img src={TrackingImg} alt="image1" />
      </div>
      <div className="tracking-img tracking-img-2">
        <img src={TrackingImg} alt="image2" />
      </div>
      <div className="tracking-img tracking-img-3">
        <img src={TrackingImg} alt="image3" />
      </div>
      <div className="tracking-img tracking-img-4">
        <img src={TrackingImg} alt="image4" />
      </div>

      {/* Left Section */}
      <div className="tracking-left">
        <div className="folder-icon">
          <i className="fa-solid fa-folder-closed"></i>
        </div>
        <div className="animated-content">
          <p>QUISQUE VEL ORTOR</p>
          <h3>Start tracking your claims</h3>
        </div>
      </div>

      {/* Button */}
      <button className="track-btn">Track Your Claim</button>
    </div>
    </div>
  );
};

export default Animated;
