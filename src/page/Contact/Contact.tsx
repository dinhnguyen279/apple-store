import hero_banner from "../../assets/images/hero-banner-homepage.png";
import hero_banner_small from "../../assets/images/hero-banner-homepage-small.png";

import iPhone from "../../assets/images/iphone-store.png";
import Mac from "../../assets/images/mac-store.png";
import iPad from "../../assets/images/ipad-store.png";
import AppleWatchSmall from "../../assets/images/watch-store.png";
import AirPods from "../../assets/images/airpods.png";
import AppleTV from "../../assets/images/appletv.png";
import PhuKien from "../../assets/images/phukien.png";
import tilefeatureios from "../../assets/images/tile-feature-ios.png";
import getsupport from "../../assets/images/getsuppport.png";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const dataContact = [
  {
    id: 1,
    name: "iPhone",
    url: iPhone,
  },
  {
    id: 2,
    name: "Mac",
    url: Mac,
  },
  {
    id: 3,
    name: "iPad",
    url: iPad,
  },
  {
    id: 4,
    name: "Watch",
    url: AppleWatchSmall,
  },
  {
    id: 5,
    name: "AirPods",
    url: AirPods,
  },
  {
    id: 6,
    name: "AppleTV",
    url: AppleTV,
  },
  {
    id: 7,
    name: "Phụ Kiện",
    url: PhuKien,
  },
];

const Contact = () => {
  const [showInputSearch, setShowInputSearch] = useState<boolean>(false);
  return (
    <div className="">
      <section>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative left-1/2 md:w-[2000px] w-[800px] md:ml-[-1000px] ml-[-400px] min-h-[340px] md:max-h-[690px] max-h-[560px] h-auto">
              <img
                src={hero_banner}
                alt="hero_banner"
                className="w-[2000px] h-auto align-middle hidden md:block"
              />
              <img
                src={hero_banner_small}
                alt="hero_banner"
                className="w-[1400px] h-auto align-middle block md:hidden"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="transform-default">
          <div className="md:text-6xl text-4xl text-center mt-16 font-semibold">
            <h1>Hỗ trợ của Apple</h1>
          </div>
          <div className="mt-14">
            <div className="flex flex-wrap">
              {dataContact.map((val, idx) => {
                return (
                  <div
                    key={idx + 1}
                    className="text-center space-y-3 size-dataContact flex flex-col flex-wrap px-2 h-auto"
                  >
                    <img
                      src={val.url}
                      alt={val.name}
                      className="md:max-w-full sm:max-w-[140px] max-w-[100px] h-auto block mx-auto"
                    />
                    <p>{val.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="transform-default">
          <div className="flex justify-between items-center gap-6 md:flex-row flex-col w-full">
            <div className="whitespace-nowrap text-ellipsis overflow-hidden md:basis-1/3 basis-full flex flex-col items-center text-center text-base text-[#06c] hover:underline hover:scale-105 transition-all duration-300 ease-in-out py-8 px-[5.3333%] bg-[#f5f5f7] shadow-3xl hover:shadow-3xlHover rounded-2xl break-words cursor-pointer w-full">
              <div>
                <img
                  src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/tile-topic-password_2x.svg"
                  alt="svg content"
                  className="w-14 h-14 align-bottom mb-4"
                />
              </div>
              <p>Quên ID Apple hoặc mật khẩu</p>
            </div>
            <div className="whitespace-nowrap text-ellipsis overflow-hidden md:basis-1/3 basis-full flex flex-col items-center text-center text-base text-[#06c] hover:underline hover:scale-105 transition-all duration-300 ease-in-out py-8 px-[5.3333%] bg-[#f5f5f7] shadow-3xl hover:shadow-3xlHover rounded-2xl break-words cursor-pointer w-full">
              <div>
                <img
                  src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/tile-topic-repair_2x.svg"
                  alt="svg content"
                  className="w-14 h-14 align-bottom mb-4"
                />
              </div>
              <p>Dịch vụ sửa chữa Apple</p>
            </div>
            <div className="whitespace-nowrap text-ellipsis overflow-hidden md:basis-1/3 basis-full flex flex-col items-center text-center text-base text-[#06c] hover:underline hover:scale-105 transition-all duration-300 ease-in-out py-8 px-[5.3333%] bg-[#f5f5f7] shadow-3xl hover:shadow-3xlHover rounded-2xl break-words cursor-pointer w-full">
              <div>
                <img
                  src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/tile-topic-billing_2x.svg"
                  alt="svg content"
                  className="w-14 h-14 align-bottom mb-4"
                />
              </div>
              <p>Thanh toán và đăng ký</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="transform-default">
          <div className="md:text-4xl text-2xl text-center mt-16 font-semibold">
            <h1>Tìm kiếm các chủ đề khác</h1>
          </div>
          <div className="mt-14">
            <div className="relative">
              <label htmlFor="Search" className="">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-slate-300 text-xl absolute left-5 top-1/2 translate-y-[-50%] select-none"
                />
                <input
                  onFocus={() => setShowInputSearch(true)}
                  onBlur={() => setShowInputSearch(false)}
                  type="search"
                  placeholder=" "
                  className="border focus:rounded-b-none focus:border-[#0071e3] focus:border-4 w-full px-12 pt-6 pb-2 rounded-lg form-input outline-none"
                />
                <p className="text-slate-500 absolute left-12 top-1/2 translate-y-[-50%] form-lable transition-all ease-linear">
                  Tìm kiếm ở đây
                </p>

                {showInputSearch && (
                  <div className="absolute py-4  border border-t-0 top-full bg-white w-full rounded-b-lg transition-all duration-500 ease-in-out">
                    <p className="pl-12 text-sm text-gray-400">
                      Liên kết nhanh
                    </p>
                    <ul className="py-2 space-y-2 text-sm w-full">
                      <li className="hover:bg-gray-300 pl-14 py-2 hover:text-[#06c] cursor-pointer">
                        Nếu bạn quên mật khẩu ID Apple
                      </li>
                      <li className="hover:bg-gray-300 pl-14 py-2 hover:text-[#06c] cursor-pointer">
                        Cách hủy đăng ký khỏi Apple
                      </li>
                      <li className="hover:bg-gray-300 pl-14 py-2 hover:text-[#06c] cursor-pointer">
                        Cập nhật iOS trên thiết bị
                      </li>
                      <li className="hover:bg-gray-300 pl-14 py-2 hover:text-[#06c] cursor-pointer">
                        Liên hệ bộ phận hỗ trợ của Apple
                      </li>
                    </ul>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="bg-[#f5f5f7]">
          <div className="transform-default pt-6 pb-14">
            <div className="bg-white rounded-xl flex flex-col space-y-4 items-center py-6">
              <h1 className="md:text-4xl text-2xl font-semibold">
                Nhận phiên bản mới nhất
              </h1>
              <p className="md:text-base text-sm">
                Cập nhật iPhone hoặt iPad lên phiên bản iOS hoặc iPadOS mới
                nhất.
              </p>
              <a href="/" className="text-[#06c] hover:underline">
                Tìm hiểu cách thực hiện
              </a>
              <img src={tilefeatureios} alt="" />
            </div>
          </div>
          <div>
            <div className="text-center space-y-4 bg-white py-6">
              <h1 className="md:text-4xl text-2xl font-semibold">
                Nhận hỗ trợ
              </h1>
              <p className="md:text-base text-sm">
                Hãy cung cấp một vài thông tin chi tiết để chúng tôi đưa ra giải
                pháp tốt nhất cho bạn. Kết nối qua điện thoại, tính năng trò
                chuyện, email và các phương thức khác.
              </p>
              <button className="rounded-full px-4 py-2 bg-black text-white">
                <a href="/">Bắt đầu ngay</a>
              </button>
              <img src={getsupport} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
