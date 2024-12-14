import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);


  useEffect(() => {
   
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200); 
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor">
    
      <div className={`cursor-dot ${isClicked ? "grow" : ""}`}></div>
    </div>
  );
};

export default CustomCursor;
