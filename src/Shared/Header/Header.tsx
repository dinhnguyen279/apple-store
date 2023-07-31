import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBagShopping,
  faSearch,
  faClose,
  faAngleRight,
  faArrowRight,
  faHistory,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import data from "../../data.json";
import ItemCategories from "./ItemCategories";
import iphone14 from "../../assets/images/iphone-14-pro-max-deeppurple-sel.png";
import { faUser } from "@fortawesome/free-regular-svg-icons";
interface Item {
  itemTitle: string;
  itemName: string;
}

const Header: React.FC = () => {
  const navRef = useRef<HTMLUListElement | null>(null);
  const [show, setShow] = useState<boolean>(true);
  const showNav = () => {
    navRef.current?.classList.toggle("responsive-nav");
    setShow(!show);
  };
  const [showItem, setShowItem] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [cartNavbar, setCartNavbar] = useState<string>("");
  const [valueSearch, setValueSearch] = useState<string>("");
  const [listItems, setListItems] = useState<
    { itemTitle: string; items: Item[] }[]
  >([]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValueSearch(newValue);
  };

  useEffect(() => {
    const itemTitleMap: { [key: string]: Item[] } = {};

    data.categories.forEach((category) => {
      if (category.name === showItem) {
        category.items?.forEach((item: Item) => {
          const itemTitle = item.itemTitle;
          if (!itemTitleMap[itemTitle]) {
            itemTitleMap[itemTitle] = [];
          }
          itemTitleMap[itemTitle].push(item);
        });
      }
    });

    const listItems: { itemTitle: string; items: Item[] }[] = [];
    for (const itemTitle in itemTitleMap) {
      if (itemTitleMap[itemTitle].length > 1) {
        listItems.push({
          itemTitle,
          items: itemTitleMap[itemTitle],
        });
      }
    }
    setListItems(listItems);
  }, [showItem]);

  return (
    <>
      <div
        className={`text-zinc-300 py-2 text-xs fixed top-0 w-full z-50 outline-none border-none h-12
        ${
          show === false ||
          showItem.length ||
          search.length ||
          cartNavbar.length > 0
            ? "bg-black"
            : "bg-[#434344]"
        }
      `}
      >
        <div className="flex lg:justify-center justify-between items-center gap-x-10 px-4 nav-main relative h-full">
          <div className="flex items-center gap-x-10">
            <a href="/">
              <img src={data.logo} alt="logo" className="h-6 w-6" />
            </a>
            <ul
              className="flex justify-evenly items-center gap-x-16 w-full lg:h-full h-[100vh]"
              ref={navRef}
            >
              {data.categories !== undefined &&
                data.categories.map((val, idx) => {
                  return (
                    <a href="/store" className="w-full">
                      <li
                        key={idx + 1}
                        className={`cursor-pointer flex justify-between`}
                        onMouseMove={() => {
                          setShowItem(val.name);
                          setSearch("");
                          setCartNavbar("");
                        }}
                      >
                        <p>{val.name}</p>
                        <span className="pr-5 lg:hidden block">
                          <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                      </li>
                    </a>
                  );
                })}
            </ul>
          </div>
          <div className="flex lg:gap-10 gap-5 text-base">
            <button
              className=""
              onClick={() => {
                setSearch("Search");
                setShowItem("");
                setCartNavbar("");
              }}
            >
              <FontAwesomeIcon icon={faSearch} className="inline-block" />
            </button>
            <div className="relative">
              <button
                className="quantity-cart"
                data-order={"2"}
                onClick={() => {
                  setCartNavbar("Cart");
                  setSearch("");
                  setShowItem("");
                }}
              >
                <FontAwesomeIcon icon={faBagShopping} />
              </button>
            </div>
            <button className="lg:hidden block btn-bar" onClick={showNav}>
              {show ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faClose} />
              )}
            </button>
          </div>

          {/* input search navbar */}
          <div
            className={`
        ${
          search.length > 0
            ? "translate-y-0 opacity-100"
            : "-translate-y-[100vh] opacity-0"
        } 
           bg-black h-[30vh] w-full transition-all ease-in-out duration-500 py-6 lg:block hidden mt-2 absolute top-[100%] left-0
          `}
            onMouseLeave={() => setSearch("")}
          >
            <div className="container mx-auto xl:px-80 px-14 flex-grow">
              <div className="flex justify-center items-center text-xl">
                <FontAwesomeIcon icon={faSearch} className="text-xl" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Tìm kiếm sản phẩm"
                  onChange={(e) => onChangeSearch(e)}
                  value={valueSearch}
                  className="w-full py-4 pr-4 pl-2 focus:outline-none text-slate-200 bg-transparent"
                  id="input-search"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400">Liên kết nhanh</p>
                <ul className="py-2 space-y-2 text-sm">
                  <li className="hover:bg-gray-600 hover:text-white cursor-pointer">
                    <FontAwesomeIcon
                      className="mr-2 text-gray-400 "
                      icon={faArrowRight}
                    />
                    Mua sắm Apple trực tuyến
                  </li>
                  <li className="hover:bg-gray-600 hover:text-white cursor-pointer">
                    <FontAwesomeIcon
                      className="mr-2 text-gray-400 "
                      icon={faArrowRight}
                    />
                    Phụ kiện
                  </li>
                  <li className="hover:bg-gray-600 hover:text-white cursor-pointer">
                    <FontAwesomeIcon
                      className="mr-2 text-gray-400 "
                      icon={faArrowRight}
                    />
                    AirPods
                  </li>
                  <li className="hover:bg-gray-600 hover:text-white cursor-pointer">
                    <FontAwesomeIcon
                      className="mr-2 text-gray-400 "
                      icon={faArrowRight}
                    />
                    Iphone 14
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Giỏ hàng navbar */}
          <div
            className={`
        ${
          cartNavbar.length > 0
            ? "translate-y-0 opacity-100"
            : "-translate-y-[100vh] opacity-0"
        } 
           bg-black h-[30vh] w-full transition-all ease-in-out duration-500 py-6 lg:block hidden mt-2 absolute top-[100%] left-0
          `}
            onMouseLeave={() => setCartNavbar("")}
          >
            <div className="flex justify-between container mx-auto xl:px-80 px-14 flex-grow">
              <div>
                <p className="text-2xl font-semibold">Giỏ Hàng</p>
                <a href={"/product"} className="py-2 flex items-center gap-x-5">
                  <img src={iphone14} alt="iPhone14" />
                  <strong>iPhone 14 Pro Max 1TB Tím</strong>
                </a>
                <div className="py-2">
                  <p className="text-sm text-gray-400">Hồ Sơ Của Tôi</p>
                  <ul className="space-y-2 py-2">
                    <li className="cursor-pointer">
                      <FontAwesomeIcon icon={faHistory} className="mr-2" />
                      Đơn hàng
                    </li>
                    <li className="cursor-pointer">
                      <FontAwesomeIcon icon={faSave} className="mr-2" />
                      Mục đã lưu
                    </li>
                    <li className="cursor-pointer">
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                      Tài Khoản
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <button className="bg-[#0572e4] hover:bg-[#0578e4] py-2 px-4 rounded-full text-lg text-white font-normal outline-none border-none">
                  <a href="cart">Xem Giỏ Hàng</a>
                </button>
              </div>
            </div>
          </div>

          {/* Show List Category */}
          <div
            className={`
          ${
            showItem.length > 0
              ? "translate-y-0 opacity-100"
              : "-translate-y-[100vh] opacity-0"
          }
           bg-black max-h-max w-[100%] transition-all ease-in-out duration-500 py-6 lg:block hidden mt-2 absolute top-[100%] left-0 
          `}
            onMouseLeave={() => setShowItem("")}
          >
            <div
              className={`flex flex-wrap justify-start items-start gap-20 container mx-auto px-11 xl:px-72`}
            >
              {listItems.length > 0 &&
                listItems.map((val, idx) => {
                  return (
                    <div className="p-5" key={idx + 1}>
                      <h1 className="mb-4 text-gray-400">{val.itemTitle}</h1>
                      <ul className="font-semibold text-xl space-y-2">
                        {val.items.map((item: Item, idx) => (
                          <ItemCategories
                            key={idx + 1}
                            itemName={item.itemName}
                          />
                        ))}
                      </ul>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
