import React from "react";
import GiveNow from "./Section-1/GiveNow";
import IPad from "./Section-1/iPad";
import Iphone from "./Section-1/iPhone";
import Products from "./Section-2/Products";
import Slider from "./Section-3/Slider";
const Main = () => {
  return (
    <div className="space-y-5">
      <IPad />
      <Iphone />
      <GiveNow />
      <Products />
      <Slider />
    </div>
  );
};

export default Main;
