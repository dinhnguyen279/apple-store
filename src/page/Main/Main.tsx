import React from "react";
import GiveNow from "../../components/Main/Section-1/GiveNow";
import IPad from "../../components/Main/Section-1/iPad";
import Iphone from "../../components/Main/Section-1/iPhone";
import Products from "../../components/Main/Section-2/Products";
import Slider from "../../components/Main/Section-3/Slider";
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
