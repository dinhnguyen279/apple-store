import React from "react";
import holiday from "../../../assets/images/holiday.png";
const GiveNow = () => {
  return (
    <div className="bg-[#020028] pb-10 cursor-pointer">
      <div className="mx-auto w-full">
        <img
          src={holiday}
          alt="holiday"
          className="w-1/5 mx-auto object-cover"
        />
        <div className="text-center text-zinc-300 space-y-3 w-full">
          <h1 className="text-7xl font-medium">Give WOW</h1>
          <h3 className="text-xl font-normal max-w-lg m-auto">
            This holiday season, find the perfect gift for everyone on your
            list.
          </h3>

          <h4 className="space-x-10 text-blue-600 text-xl font-normal">
            <a href="/" className="hover:underline">
              Shop the gift guide {">"}
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GiveNow;
