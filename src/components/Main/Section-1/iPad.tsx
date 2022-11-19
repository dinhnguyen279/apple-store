import React from "react";
import iPad from "../../../assets/images/iPad.png";

const IPad = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse items-center justify-center cursor-pointer p-10">
        <div className="">
          <img src={iPad} alt="iPad" className="w-full object-cover" />
        </div>
        <div className="">
          <div className="text-center">
            <h1 className="text-7xl font-semibold">iPad</h1>
            <p className="text-xl font-normal">Lovable. Drawable. Magical.</p>
            <div className="space-x-10 text-blue-600 text-xl font-normal">
              <a href="/" className="hover:underline">
                Learn more {""}
              </a>
              {">"}
              <a href="/" className="hover:underline">
                Buy {""}
              </a>
              {">"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IPad;
