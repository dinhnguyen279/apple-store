import React from "react";
import logo from "../../assets/images/logomain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBagShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="bg-[#323232] text-zinc-300 py-2 text-xs">
      <div className="flex justify-center items-center gap-10 container mx-auto">
        <button className=" lg:hidden flex justify-start ">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className=" lg:m-0 m-auto">
          <img src={logo} alt="logo" className="h-6 w-6" />
        </div>
        <div>
          <ul className="hidden justify-evenly items-center gap-10 lg:flex">
            <li>
              <a href="/">Store</a>
            </li>
            <li>
              <a href="/">Mac</a>
            </li>
            <li>
              <a href="/">iPad</a>
            </li>
            <li>
              <a href="/">iPhone</a>
            </li>
            <li>
              <a href="/">Watch</a>
            </li>
            <li>
              <a href="/">AirPods</a>
            </li>
            <li>
              <a href="/">TV & Home</a>
            </li>
            <li>
              <a href="/">Only on Apple</a>
            </li>
            <li>
              <a href="/">Accessories</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <FontAwesomeIcon icon={faSearch} />
          </ul>
        </div>
        <button type="submit" className="text-sm">
          <FontAwesomeIcon icon={faBagShopping} />
        </button>
      </div>
    </div>
  );
};

export default Header;
