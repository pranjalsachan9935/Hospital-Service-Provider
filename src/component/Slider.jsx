import React, { useState, useEffect } from "react";
import "./Slider.css";


const ZoomEffectImage = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [images]);

  function handleChange(){
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <div className="slider-container">
      <div className="slides">
        <img
          src={images[currentIndex]}
          alt={`Offer ${currentIndex + 1}`}
          className="zoom-effect-image"
        />
      </div>
      <div class="button-container">
            <button>
              <i onClick={handleChange} class="fa-solid fa-arrow-left"></i>
            </button>
            <button>
              <i onClick={handleChange} class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
    </div>
  );
};

export default ZoomEffectImage;
