import React from "react";
import iPhone14Pro from "../../../assets/images/iPhone14.jpg";
import Tv4k from "../../../assets/images/remote.png";
import Card from "../../../assets/images/card-section.jpg";
import WatchBlack from "../../../assets/images/applewatch.png";
import Watch from "../../../assets/images/applewatch2.jpg";
import Season from "../../../assets/images/end-section.jpg";

const ProductsChild = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-col-1 md:grid-cols-2 p-0 space-x-0 md:p-5 md:space-x-5 gap-4">
        {dataProducts2.map((val, idx) => {
          return (
            <div className="hover:scale-95 transition-transform " key={idx + 1}>
              <div className="relative">
                <div className="absolute top-[1%] left-[50%] -translate-x-[50%] text-center text-black">
                  <h1 className="text-6xl font-semibold">{val.title}</h1>
                  <h2 className="text-red-700 ">{val.underTitle}</h2>
                  <p className="text-xl font-normal ">{val.content}</p>
                  <div className="space-x-10 text-blue-600 text-xl font-normal">
                    <a href="/" className="hover:underline">
                      {val.urlBuy} {""} {val.urlmore}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center item-center">
                  <img
                    src={val.images}
                    alt={val.title}
                    className="object-cover w-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 p-0 space-x-0 md:p-5 md:space-x-5 gap-4">
        {dataProducts1.map((val, idx) => {
          return (
            <div
              className="cursor-pointer hover:scale-95 transition-transform"
              key={idx + 1}
            >
              <div className="relative">
                <div className="absolute top-[1%] left-[50%] -translate-x-[50%] text-center text-white">
                  <h1 className="text-6xl font-semibold ">{val.title}</h1>
                  <h2 className="text-red-700 ">{val.underTitle}</h2>
                  <p className="text-xl font-normal ">{val.content}</p>
                  <div className="space-x-10 text-blue-600 text-xl font-normal">
                    <a href="/" className="hover:underline">
                      {val.urlBuy} {""} {val.urlmore}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center item-center">
                  <img
                    src={val.images}
                    alt={val.title}
                    className="object-cover w-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsChild;

export const dataProducts1 = [
  {
    id: 1,
    images: iPhone14Pro,
    title: "iPhone 14 Pro",
    underTitle: "",
    content: "Pro. Beyond",
    urlmore: "Learn more >",
    urlBuy: "Buy",
  },
  {
    id: 2,
    images: Watch,
    title: "WATCH",
    underTitle: "SERIES 8",
    content: "A healthy leap ahead",
    urlmore: "Learn more >",
    urlBuy: "Buy",
  },
];

const dataProducts2 = [
  {
    id: 1,
    images: WatchBlack,
    title: "WATCH",
    underTitle: "ULTRA",
    content: "Adventure awaits",
    urlmore: "Learn more >",
    urlBuy: "Buy",
  },
  {
    id: 2,
    images: Tv4k,
    title: "tv 4K",
    underTitle: "",
    content: "The Apple experience. Cinematic in very sense",
    urlmore: "Learn more >",
    urlBuy: "Buy",
  },
  {
    id: 3,
    images: Card,
    title: "Card",
    underTitle: "",
    content: "Get up to 3% Daily Cash back",
    urlmore: "Learn more >",
    urlBuy: "Apply now >",
  },
  {
    id: 4,
    images: Season,
    title: "Season Pass",
    underTitle: "",
    content: "AirPods",
    urlmore: "Shop >",
    urlBuy: "",
  },
];
