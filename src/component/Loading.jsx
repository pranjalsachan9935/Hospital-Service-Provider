import React from "react";
import './Loading.css';
import LoadingImg from "../assests/header-logo.webp"

const Loading = () => {
  return (
    <>
      <img className="loading-image" src={LoadingImg} alt="Loading" />
    </>
  );
};

export default Loading;
