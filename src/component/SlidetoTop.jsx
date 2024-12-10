import React, { useEffect, useState } from "react";
import "./SlidetoTop.css";

const SlidetoTop = ({handleTop}) => {

  const [showButton, setShowButton] = useState('false')

useEffect(()=>{
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  window.addEventListener("scroll",handleScroll)
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
},[])



  return (

 
    <div className={showButton ? "to-top" : "stop-showing"}>
      <i onClick={handleTop} class="fa-solid fa-caret-up"></i>
    </div>
  
  
   
  );
};

export default SlidetoTop;
