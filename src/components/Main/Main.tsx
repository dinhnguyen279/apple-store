import React from "react";
import GiveNow from "./Section-1/GiveNow";
import IPad from "./Section-1/iPad";
import Iphone from "./Section-1/iPhone";
import Products from "./Section-2/Products";
const Main = () => {
  return (
    <div className="space-y-5">
      <IPad />
      <Iphone />
      <GiveNow />
      <Products />
    </div>
  );
};

export default Main;
