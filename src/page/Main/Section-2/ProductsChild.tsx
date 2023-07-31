import React, { useEffect, useState } from "react";
import iPhone14Pro from "../../../assets/images/iPhone14.jpg";
import Tv4k from "../../../assets/images/remote.png";
import Card from "../../../assets/images/card-section.jpg";
import WatchBlack from "../../../assets/images/applewatch.png";
import Watch from "../../../assets/images/applewatch2.jpg";
import Season from "../../../assets/images/end-section.jpg";
import { Link } from "react-scroll";
const ProductsChild = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById("animatedComponent");
      if (component) {
        const componentTop = component.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (componentTop < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);
  return (
    <div className="space-y-4" id="animatedComponent">
      <Link
        activeClass="active"
        to="animatedComponent"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      />
      {isVisible && (
        <>
          <div className="grid grid-col-1 md:grid-cols-2 p-0 md:px-5 gap-4 animate__animated animate__bounceInUp">
            {dataProducts1.map((val, idx) => {
              return (
                <a href="/product" className="cursor-pointer" key={idx + 1}>
                  <div className="relative">
                    <div className="absolute top-[1%] left-[50%] -translate-x-[50%] text-center text-black">
                      <h1 className="lg:text-6xl text-lg font-semibold">
                        {val.title}
                      </h1>
                      <h2 className="text-red-700">{val.underTitle}</h2>
                      <p className="text-xl font-normal hidden lg:block">
                        {val.content}
                      </p>
                      <div className="space-x-10 text-blue-600 text-xl font-normal hidden lg:block">
                        <a href="/product" className="hover:underline">
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
                </a>
              );
            })}
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 p-0 md:px-5 gap-4 animate__animated animate__bounceInUp">
            {dataProducts2.map((val, idx) => {
              return (
                <a
                  // className="cursor-pointer hover:scale-95 transition-transform"
                  href="/product"
                  className="cursor-pointer"
                  key={idx + 1}
                >
                  <div className="relative">
                    <div className="absolute top-[1%] left-[50%] -translate-x-[50%] text-center text-white">
                      <h1 className="lg:text-6xl text-lg font-semibold">
                        {val.title}
                      </h1>
                      <h2 className="text-red-700 ">{val.underTitle}</h2>
                      <p className="text-xl font-normal hidden lg:block">
                        {val.content}
                      </p>
                      <div className="space-x-10 text-blue-600 text-xl font-normal hidden lg:block">
                        <a href="/product" className="hover:underline">
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
                </a>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsChild;

export const dataProducts1 = [
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

export const dataProducts2 = [
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
