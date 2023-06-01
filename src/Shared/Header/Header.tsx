import React, { useRef, useState } from "react";
import logo from "../../assets/images/logomain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBagShopping,
  faSearch,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
const Header = () => {
  const navRef = useRef<HTMLUListElement | null>(null);
  const [show, setShow] = useState<boolean>(true);
  const showNav = () => {
    navRef.current?.classList.toggle("responsive-nav");
    setShow(!show);
  };
  const [showItem, setShowItem] = useState<string>("");
  const [closeItem, setCloseItem] = useState<boolean>(true);

  return (
    <div
      className={`text-zinc-300 py-2 text-xs fixed w-full z-50 outline-none border-none h-10
        ${!closeItem ? "bg-black" : "bg-[#434344]"}
      `}
    >
      <div className="flex justify-between lg:justify-center items-center gap-10 container mx-auto px-4 nav-main">
        <div className="flex gap-x-10">
          <a href="/">
            <img src={logo} alt="logo" className="h-5 w-5" />
          </a>
          <ul
            className="flex justify-evenly items-center gap-16 w-full"
            ref={navRef}
          >
            <li
              className={`cursor-pointer
            `}
              onMouseMove={() => {
                setShowItem("Store");
                setCloseItem(false);
              }}
            >
              <p>Store</p>
            </li>
            <li
              className={`store cursor-pointer `}
              onMouseMove={() => {
                setShowItem("Mac");
                setCloseItem(false);
              }}
            >
              <p>Mac</p>
            </li>
            <li
              className={`store cursor-pointer `}
              onMouseMove={() => {
                setShowItem("iPad");
                setCloseItem(false);
              }}
            >
              <p>iPad</p>
            </li>
            <li
              className={`store cursor-pointer `}
              onMouseMove={() => {
                setShowItem("iPhone");
                setCloseItem(false);
              }}
            >
              <p>iPhone</p>
            </li>
            <li
              className={`store cursor-pointer `}
              onMouseMove={() => {
                setShowItem("Watch");
                setCloseItem(false);
              }}
            >
              <p>Watch</p>
            </li>
            <li
              className={`store cursor-pointer `}
              onMouseMove={() => {
                setShowItem("AirPods");
                setCloseItem(false);
              }}
            >
              <p>AirPods</p>
            </li>
            <li
              className={`store cursor-pointer `}
              onMouseMove={() => {
                setShowItem("Accessories");
                setCloseItem(false);
              }}
            >
              <p>Accessories</p>
            </li>
            <li
              className={`store cursor-pointer `}
              onMouseMove={() => {
                setShowItem("Support");
                setCloseItem(false);
              }}
            >
              <p>Support</p>
            </li>
          </ul>
        </div>
        <div className="flex lg:gap-10 gap-5 text-base">
          <button className="">
            <FontAwesomeIcon icon={faSearch} className="inline-block" />
          </button>
          <button className="">
            <FontAwesomeIcon icon={faBagShopping} />
          </button>
          <button className="lg:hidden block btn-bar" onClick={showNav}>
            {show ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faClose} />
            )}
          </button>
        </div>
      </div>

      {/* Store */}
      {showItem === "Store" ? (
        <>
          {!closeItem ? (
            <div
              className={`
            ${
              closeItem
                ? "-translate-y-[110vh]"
                : "bg-black translate-none mt-2 py-4"
            }
            `}
              onMouseMove={() => setCloseItem(false)}
              onMouseOut={() => setCloseItem(true)}
            >
              <div
                className={`flex flex-wrap lg:justify-center justify-start items-start gap-20 mx-auto px-4`}
              >
                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Mua Hàng</h1>
                  <ul className="font-semibold text-2xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> Mua Sản Phẩm Mới Nhất </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Mac </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iPad </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iPhone </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Apple Watch </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Phụ Kiện </a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Liên Kết Nhanh</h1>
                  <ul className="font-semibold text-lg space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> Tình Trạng Đơn Hàng </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Apple Trade In </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Tài Chính </a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">
                    Mua Tại Cửa Hàng Đặt Biệt
                  </h1>
                  <ul className="font-semibold text-lg space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> Giáo Dục </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Doanh Nghiệp </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {/* Mac */}
      {showItem === "Mac" ? (
        <>
          {!closeItem ? (
            <div
              className={`
              ${
                closeItem
                  ? "-translate-y-[110vh]"
                  : "bg-black translate-none mt-2 py-4"
              }
              `}
              onMouseMove={() => setCloseItem(false)}
              onMouseOut={() => setCloseItem(true)}
            >
              <div className="flex flex-wrap lg:justify-center justify-start items-start gap-20 mx-auto px-4">
                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Khám Phá Mac</h1>
                  <ul className="font-semibold text-2xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> MacBook Air </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> MacBook Pro </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iMac </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Mac mini </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Mac Studio </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Mac Pro </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Màn Hình </a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Tìm Hiểu Về Mac</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> Tình Trạng Đơn Hàng </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Apple Trade In </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Tài Chính </a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Mua Mac</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> Giáo Dục </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Doanh Nghiệp </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {/* iPad */}
      {showItem === "iPad" ? (
        <>
          {!closeItem ? (
            <div
              className={`
              ${
                closeItem
                  ? "-translate-y-[110vh]"
                  : "bg-black translate-none mt-2 py-4"
              }
              `}
              onMouseMove={() => setCloseItem(false)}
              onMouseOut={() => setCloseItem(true)}
            >
              <div className="flex flex-wrap lg:justify-center justify-start items-start gap-20 mx-auto px-4">
                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Khám Phá iPad</h1>
                  <ul className="font-semibold text-2xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> iPad Pro </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iPad Air </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iPad </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iPad mini </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Apple Pencil </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Bàn Phím </a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Mua iPad</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> Phụ Kiện iPad </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Mua iPad </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Apple Trade In </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Tài Chính </a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Tìm Hiểu Thêm Về iPad</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> Hỗ Trợ iPad </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iPadOS 16 </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iCloud </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Giáo Dục </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {/* iPhone */}
      {showItem === "iPhone" ? (
        <>
          {!closeItem ? (
            <div
              className={`
              ${
                closeItem
                  ? "-translate-y-[110vh]"
                  : "bg-black translate-none mt-2 py-4"
              }
              `}
              onMouseMove={() => setCloseItem(false)}
              onMouseOut={() => setCloseItem(true)}
            >
              <div className="flex flex-wrap lg:justify-center justify-start items-start gap-20 mx-auto px-4">
                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Khám Phá iPhone</h1>
                  <ul className="font-semibold text-2xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> iPhone 14 Pro </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iPhone 14 </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iPhone 13 </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iPhone 12 </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iPhone SE </a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Tìm Hiểu iPhone</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> Phụ Kiện iPhone </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Mua iPhone </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Apple Trade In </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Tài Chính </a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Mua iPhone</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/"> Hỗ Trợ iPhone </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> iOS 16 </a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Quyền Riêng Tư Trên iPhone</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/"> Ví </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {/* Watch */}
      {showItem === "Watch" ? (
        <>
          {!closeItem ? (
            <div
              className={`
              ${
                closeItem
                  ? "-translate-y-[110vh]"
                  : "bg-black translate-none mt-2 py-4"
              }
              `}
              onMouseMove={() => setCloseItem(false)}
              onMouseOut={() => setCloseItem(true)}
            >
              <div className="flex flex-wrap lg:justify-center justify-start items-start gap-20 mx-auto px-4">
                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Khám Phá Watch</h1>
                  <ul className="font-semibold text-2xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/">Apple Watch Ultra</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Apple Watch Series 8</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Apple Watch SE</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Apple Watch Nike</a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Mua Watch</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/">Mua Apple Watch</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Apple Watch Studio</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Dây Đeo Apple Watch</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Apple Trade In</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Tài Chính</a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Tìm Hiểu Thêm về Watch</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/">Hỗ Trợ Watch</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">WatchOS 9</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {/* AirPods */}
      {showItem === "AirPods" ? (
        <>
          {!closeItem ? (
            <div
              className={`
              ${
                closeItem
                  ? "-translate-y-[110vh]"
                  : "bg-black translate-none mt-2 py-4"
              }
              `}
              onMouseMove={() => setCloseItem(false)}
              onMouseOut={() => setCloseItem(true)}
            >
              <div className="flex flex-wrap lg:justify-center justify-start items-start gap-20 mx-auto px-4">
                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Khám Phá AirPods</h1>
                  <ul className="font-semibold text-2xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/">AirPods (Thế Hệ Thứ 2)</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">AirPods (Thế Hệ Thứ 3)</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">AirPods Pro (Thế Hệ Thứ 2)</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">AirPods Max</a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Mua AirPods</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/">Mua AirPods</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Phụ Kiện AirPods</a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">
                    Tìm Hiểu Thêm về AirPods
                  </h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/">Hỗ Trợ AirPods</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Apple Music</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {/* Accessories */}
      {showItem === "Accessories" ? (
        <>
          {!closeItem ? (
            <div
              className={`
              ${
                closeItem
                  ? "-translate-y-[110vh]"
                  : "bg-black translate-none mt-2 py-4"
              }
              `}
              onMouseMove={() => setCloseItem(false)}
              onMouseOut={() => setCloseItem(true)}
            >
              <div className="flex flex-wrap lg:justify-center justify-start items-start gap-20 mx-auto px-4">
                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Mua Phụ Kiện</h1>
                  <ul className="font-semibold text-2xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/">Mac</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">iMac</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">iPhone</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Apple Watch</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">AirPods</a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Khám Phá Phụ Kiện</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/">Mua AirPods</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Phụ Kiện AirPods</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {/* Support */}
      {showItem === "Support" ? (
        <>
          {!closeItem ? (
            <div
              className={`
              ${
                closeItem
                  ? "-translate-y-[110vh]"
                  : "bg-black translate-none mt-2 py-4"
              }
              `}
              onMouseMove={() => setCloseItem(false)}
              onMouseOut={() => setCloseItem(true)}
            >
              <div className="flex flex-wrap lg:justify-center justify-start items-start gap-20 mx-auto px-4">
                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Khám Phá Hỗ Trợ</h1>
                  <ul className="font-semibold text-2xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/">iPhone</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">iMac</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Mac</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Apple Watch</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">AirPods</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Music</a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Trợ Giúp</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/">Cộng Đồng</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Kiểm Tra Bảo Hành</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Sửa Chữa</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Liên Hệ Chúng Tôi</a>
                    </li>
                  </ul>
                </div>

                <div className="p-5">
                  <h1 className="mb-4 text-gray-400">Chủ Đề Hữu Ích</h1>
                  <ul className="font-semibold text-xl space-y-2">
                    <li className="cursor-pointer">
                      <a href="/">ID Apple & Mật Khẩu</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Thanh Toán & Gói Đăng Ký</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Tìm Kiếm</a>
                    </li>
                    <li className="cursor-pointer">
                      <a href="/">Trợ Năng</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
