import React from "react";
import { Home } from "../page/Home";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Footers from "./Footers";

const Layout = ({handleTop }) => {
  return (
    <div>
      <Header1 />
      <Header2 />
      <main>
        <Home />
      </main>
      <Footers handleTop ={handleTop }/>
    </div>
  );
};

export default Layout;
