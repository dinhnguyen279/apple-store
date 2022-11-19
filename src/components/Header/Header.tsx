import React, { useRef, useState } from "react";
import logo from "../../assets/images/logomain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBagShopping,
  faSearch,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
const Header = () => {
  const navRef = useRef<HTMLUListElement | null>(null);
  const [show, setShow] = useState<boolean>(true);
  const showNav = () => {
    navRef.current?.classList.toggle("responsive-nav");
    setShow(!show);
    console.log("click");
  };

  return (
    <div className="bg-black text-zinc-300 py-2 text-xs ">
      <div className="flex justify-center items-center gap-10 container mx-auto nav-main">
        <button
          className="lg:hidden flex justify-start btn-bar"
          onClick={showNav}
        >
          {show ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faRefresh} />
          )}
        </button>
        <div className=" lg:m-0 m-auto">
          <img src={logo} alt="logo" className="h-6 w-6" />
        </div>
        <div className="">
          <ul
            className="flex  justify-evenly items-center gap-10 w-full "
            ref={navRef}
          >
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

            <FontAwesomeIcon icon={faSearch} className="lg:block hidden" />
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
