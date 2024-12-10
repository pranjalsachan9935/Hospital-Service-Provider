import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Cart from "./page/Cart";
import About from "./page/About";
import FAQ from "./page/FAQ";
import Claim from "./page/Claim";
import SlidetoTop from "./component/SlidetoTop";
import Sidebar from "./component/Sidebar";
const App = () => {

  function handleTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout handleTop={handleTop}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/claim" element={<Claim />} />
        </Routes>
      </BrowserRouter>
      <Sidebar />
      <SlidetoTop handleTop={handleTop}/>
    </>
  );
};

export default App;
