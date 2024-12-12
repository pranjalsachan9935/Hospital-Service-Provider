import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Cart from "./page/Cart";
import About from "./page/About";
import FAQ from "./page/FAQ";
import Claim from "./page/Claim";
import SlidetoTop from "./component/SlidetoTop";
import Sidebar from "./component/Sidebar";
import Loading from "./component/Loading";
const App = () => {

  
  function handleTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout handleTop={handleTop} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/claim" element={<Claim />} />
          </Routes>
          <Sidebar />
          <SlidetoTop handleTop={handleTop} />
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
