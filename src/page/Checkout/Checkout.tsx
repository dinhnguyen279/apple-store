import React, { useState } from "react";
import iphone14 from "../../assets/images/iphone-14-pro-max-deeppurple-sel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Checkout.css";
const Checkout = () => {
  const [showListItem, setShowListItem] = useState<boolean>(true);
  const [showItemFirst, setShowItemFirst] = useState<boolean>(false);
  const [showItemSecond, setShowItemSecond] = useState<boolean>(false);
  const [showItemThird, setShowItemThird] = useState<boolean>(false);
  const [showItemTheEnd, setShowItemTheEnd] = useState<boolean>(false);
  const [showMethodCheckout, setShowMethodCheckout] = useState<number>(1);

  return (
    <div className="mt-12">
      <div className="transform-default">
        <div className="border-b-[1px] border-b-[#d2d2d7]">
          <h3 className="py-4 text-2xl">Thanh Toán</h3>
        </div>

        {/* method checkout 1 */}
        <div className={`${showMethodCheckout === 1 ? "block" : "hidden"}`}>
          <h1 className="text-center text-4xl pt-11 font-semibold">
            Bạn muốn nhận được hàng bằng cách nào?
          </h1>
          <div className="mt-1">
            <div className="pt-7 pb-6 text-center border-b-[1px] border-b-[#d2d2d7]">
              Giao hàng đến: {""}
              <a href="/cart" className="text-[#06c]">
                Thành Phố Hồ Chí Minh
              </a>
            </div>
            <div>
              <h3 className="py-4 text-2xl">Còn hàng</h3>
              <ul>
                <li className="mt-1 mb-8">
                  <div className="flex">
                    <img src={iphone14} alt="iphone14" />
                    <p>
                      iPhone 14 Pro Max 1TB
                      <br />
                      Tía Đậm
                    </p>
                  </div>
                </li>
                <li className="mt-1 mb-8">
                  <div className="flex">
                    <img src={iphone14} alt="iphone14" />
                    <p>
                      iPhone 14 Pro Max 1TB
                      <br />
                      Tía Đậm
                    </p>
                  </div>
                </li>
              </ul>

              <div className="pb-10 border-b-[1px] border-b-[#d2d2d7]">
                <p>Phương thức giao hàng:</p>
                <div className="mt-2 flex md:flex-row flex-col w-full space-y-4">
                  <div className="md:basis-1/2 basis-full">
                    <label
                      htmlFor="iPhone14"
                      className="flex justify-between rounded-lg p-3 border-2 border-[#0071e3] text-base"
                    >
                      <input
                        type="radio"
                        id="iPhone14"
                        className="appearance-none hidden"
                      />
                      <p className="pr-3 py-4">
                        <b>Giao hàng Th 4 02/08/2023</b>
                      </p>
                      <p className="uppercase py-4">Miễn Phí</p>
                    </label>
                  </div>
                  <div className="md:basis-1/2 basis-full md:ml-11 ml-0 space-y-2">
                    <span className="pt-11">Một số điều cần ghi nhớ:</span>
                    <ul className="list-disc pl-4 text-sm space-y-2">
                      <li className="">
                        Hãng chuyển phát có thể yêu cầu bạn ký tên khi giao
                        hàng.
                      </li>
                      <li>
                        Thời gian giao hàng tiêu chuẩn là từ 8 giờ sáng đến 8
                        giờ tối, từ Thứ Hai đến Thứ Bảy.Thời gian giao hàng tiêu
                        chuẩn là từ 8 giờ sáng đến 8 giờ tối, từ Thứ Hai đến Thứ
                        Bảy.
                      </li>
                    </ul>
                    <div>
                      <a href="/cart" className="text-[#06c] hover:underline">
                        Xem Chính Sách Giao Hàng của Apple {">"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full pt-10 pb-7">
                <button
                  onClick={() => setShowMethodCheckout(2)}
                  className="bg-[#0071e3] hover:bg-[#0076ede3] text-white py-4 px-7 rounded-xl md:w-1/2 w-full"
                >
                  Tiếp Tục đến Địa Chỉ Giao Hàng
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* method checkout 2 */}
        <div className={`${showMethodCheckout === 2 ? "block" : "hidden"}`}>
          <h1 className="text-4xl pt-11 font-semibold">
            Chúng tôi giao hàng cho bạn đến địa chỉ nào?
          </h1>
          <div className="pb-10">
            <fieldset>
              <legend>
                <h1 className="text-2xl pt-11">
                  <b>Nhập tên và địa chỉ của bạn</b>
                </h1>
              </legend>
              <div className="flex">
                <div className="basis-1/2">
                  <div className="pt-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder=" "
                        className="border border-black focus:border-2 focus:border-[#06c] w-full px-5 pt-6 pb-2 rounded-lg form-input outline-none"
                      />
                      <label
                        htmlFor="FistName"
                        className="absolute top-1/2 translate-y-[-50%] left-5 text-base select-none form-lable transition-all duration-300 ease-linear"
                      >
                        Tên
                      </label>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder=" "
                        className="border border-black focus:border-2 focus:border-[#06c] w-full px-5 pt-6 pb-2 rounded-lg form-input outline-none"
                      />
                      <label
                        htmlFor="Lastname"
                        className="absolute top-1/2 translate-y-[-50%] left-5 text-base select-none form-lable transition-all duration-300 ease-linear"
                      >
                        Họ
                      </label>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder=" "
                        className="border border-black focus:border-2 focus:border-[#06c] w-full px-5 pt-6 pb-2 rounded-lg form-input outline-none"
                      />
                      <label
                        htmlFor="Address"
                        className="absolute top-1/2 translate-y-[-50%] left-5 text-base select-none form-lable transition-all duration-300 ease-linear"
                      >
                        Địa Chỉ
                      </label>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder=" "
                        className="border border-black focus:border-2 focus:border-[#06c] w-full px-5 pt-6 pb-2 rounded-lg form-input outline-none"
                      />
                      <label
                        htmlFor="Province/City"
                        className="absolute top-1/2 translate-y-[-50%] left-5 text-base select-none form-lable transition-all duration-300 ease-linear"
                      >
                        Tỉnh/Thành phố
                      </label>
                    </div>
                  </div>
                  <div className="pt-3 flex space-x-4">
                    <div className="relative basis-3/5">
                      <input
                        type="text"
                        placeholder=" "
                        className="border border-black focus:border-2 focus:border-[#06c] w-full px-5 pt-6 pb-2 rounded-lg form-input outline-none"
                      />
                      <label
                        htmlFor="District/Ward"
                        className="absolute top-1/2 translate-y-[-50%] left-5 text-base select-none form-lable transition-all duration-300 ease-linear"
                      >
                        Quận/Huyện
                      </label>
                    </div>
                    <div className="relative basis-2/5">
                      <input
                        type="text"
                        placeholder=" "
                        className="border border-black focus:border-2 focus:border-[#06c] w-full px-5 pt-6 pb-2 rounded-lg form-input outline-none"
                      />
                      <label
                        htmlFor="Phuong"
                        className="absolute top-1/2 translate-y-[-50%] left-5 text-base select-none form-lable transition-all duration-300 ease-linear"
                      >
                        Phường
                      </label>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder=" "
                        className="border border-black focus:border-2 focus:border-[#06c] w-full px-5 pt-6 pb-2 rounded-lg form-input outline-none"
                      />
                      <label
                        htmlFor="ZipCode"
                        className="absolute top-1/2 translate-y-[-50%] left-5 text-base select-none form-lable transition-all duration-300 ease-linear"
                      >
                        Mã Zip
                      </label>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder=" "
                        className="border border-black focus:border-2 focus:border-[#06c] w-full px-5 pt-6 pb-2 rounded-lg form-input outline-none"
                        value="Việt Nam"
                      />
                      <label
                        htmlFor="Country/Region"
                        className="absolute top-1/2 translate-y-[-50%] left-5 text-base select-none form-lable transition-all duration-300 ease-linear"
                      >
                        Quốc Gia/Khu Vực
                      </label>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2"></div>
              </div>
              <div className="">
                <h1 className="text-2xl pt-11 pb-4">
                  <b>Thông tin liên hệ của bạn là gì?</b>
                </h1>
                <div className="pt-3 flex items-center">
                  <div className="relative basis-1/2">
                    <input
                      type="text"
                      placeholder=" "
                      className="border border-black focus:border-2 focus:border-[#06c] w-full px-5 pt-6 pb-2 rounded-lg form-input outline-none"
                    />
                    <label
                      htmlFor="Email"
                      className="absolute top-1/2 translate-y-[-50%] left-5 text-base select-none form-lable transition-all duration-300 ease-linear"
                    >
                      Địa Chỉ Email
                    </label>
                  </div>
                  <div className="basis-1/2 px-12 pt-1">
                    Chúng tôi sẽ gửi biên nhận cho bạn qua email và gửi thông
                    tin cập nhật về đơn hàng tới điện thoại di động của bạn qua
                    SMS hoặc iMessage.
                  </div>
                </div>
                <div className="pt-3 flex items-center">
                  <div className="relative basis-1/2">
                    <input
                      type="text"
                      placeholder=" "
                      className="border border-black focus:border-2 focus:border-[#06c] w-full px-5 pt-6 pb-2 rounded-lg form-input outline-none"
                    />
                    <label
                      htmlFor="Phone"
                      className="absolute top-1/2 translate-y-[-50%] left-5 text-base select-none form-lable transition-all duration-300 ease-linear"
                    >
                      Số Điện Thoại
                    </label>
                  </div>
                  <div className="basis-1/2 px-12 pt-1">
                    Bạn không thể thay đổi số điện thoại bạn nhập sau khi đặt
                    hàng, vì vậy hãy đảm bảo số điện thoại đó là chính xác.
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="border-t border-t-[#d2d2d7] pt-10 pb-7">
            <div className="w-full pt-10 pb-7">
              <button
                onClick={() => setShowMethodCheckout(3)}
                className="bg-[#0071e3] hover:bg-[#0076ede3] text-white py-4 px-7 rounded-xl md:w-1/2 w-full"
              >
                Tiếp Tục đến phần Thanh Toán
              </button>
            </div>
          </div>
        </div>

        {/* method checkout 3 */}
        <div className={`${showMethodCheckout === 3 ? "block" : "hidden"}`}>
          <h1 className="text-4xl pt-11 font-semibold">
            Chúng tôi giao hàng cho bạn đến địa chỉ nào?
          </h1>
          <fieldset className="pb-7">
            <legend>
              <h1 className="text-2xl pt-11">
                <b>Nhập tên và địa chỉ của bạn</b>
              </h1>
            </legend>
            <div className="mt-3 w-full">
              <div className="mt-3 flex flex-col justify-center items-center h-full w-full">
                <div className="flex w-full mt-3">
                  <input
                    className="hidden appearance-none input-radio"
                    type="radio"
                    name="Ví Điện Tử"
                    id="CreditCart"
                  />
                  <label
                    className=" input-label p-4 border border-black outline-none rounded-2xl h-auto md:w-1/2 w-full cursor-pointer flex items-center"
                    htmlFor="CreditCart"
                  >
                    <span>
                      <p className="text-base font-semibold">
                        Thẻ Tín Dụng hoặc Thẻ Ghi Nợ
                      </p>
                      <p className="text-xs font-light">
                        Visa, Mastercard, AMEX, UnionPay, JBC
                      </p>
                    </span>
                  </label>
                </div>
                <div className="flex md:flex-row flex-col w-full mt-3">
                  <input
                    className="hidden appearance-none input-radio"
                    type="radio"
                    name="Ví Điện Tử"
                    id="Momo"
                  />
                  <label
                    className="basis-1/2 text-base input-label p-4 border border-black outline-none rounded-2xl h-auto md:w-1/2 w-full cursor-pointer flex items-center"
                    htmlFor="Momo"
                    onClick={() => {}}
                  >
                    <span className="">
                      <p className="text-base font-semibold">Ví Điện Tử Momo</p>
                    </span>
                  </label>
                  <span className="basis-1/2 mt-1 md:pl-12 pl-0">
                    Bạn sẽ thanh toán sau khi kiểm tra đơn hàng và đặt.
                  </span>
                </div>
                <div className="flex w-full mt-3">
                  <input
                    className="hidden appearance-none input-radio"
                    type="radio"
                    name="Ví Điện Tử"
                    id="ATM"
                  />
                  <label
                    className="text-base input-label p-4 border border-black outline-none rounded-2xl h-auto md:w-1/2 w-full cursor-pointer flex items-center"
                    htmlFor="ATM"
                    onClick={() => {}}
                  >
                    <span className="">
                      <p className="text-base font-semibold">ATM</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="border-t border-t-[#d2d2d7]">
            <div className="w-full pt-10 pb-7">
              <button
                onClick={() => setShowMethodCheckout(3)}
                className="bg-[#0071e3] hover:bg-[#0076ede3] text-white py-4 px-7 rounded-xl md:w-1/2 w-full"
              >
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 border-y border-y-[#d2d2d7]">
        <div className="transform-default">
          <div className="py-5">
            Bạn cần hỗ trợ thêm?{" "}
            <a className="text-[#06c]" href="/">
              Chat ngay
            </a>{" "}
            hoặc gọi{" "}
            <a className="text-[#06c]" href="tel:1800-1192">
              1800-1192
            </a>
          </div>
        </div>
      </div>

      <section className="transform-default">
        <h2 className="text-3xl font-semibold">
          <button
            onClick={() => setShowListItem(!showListItem)}
            className="flex justify-between items-center py-8 w-full"
          >
            <span>Câu Hỏi Thường Gặp về Giao Hàng</span>
            <span
              className={`${
                showListItem ? "icon-rotate-x" : ""
              } text-5xl font-light w-8 flex justify-center m-0 text-[#86868b] transition-transform duration-300 ease-in-out`}
            >
              +
            </span>
          </button>
        </h2>
        <div
          className={`
          ${
            showListItem
              ? "h-full opacity-100 translate-y-0"
              : "translate-y-3 h-0 opacity-0 absolute left-0 bottom-0 -z-10"
          }
          transition-all ease-in-out duration-500
          `}
        >
          <ul className="text-sm">
            <li className="border-t-[1px] border-[#d2d2d7]">
              <h3 className="font-semibold hover:text-[#06c]">
                <button
                  onClick={() => setShowItemFirst(!showItemFirst)}
                  className="flex justify-between w-full py-6"
                >
                  <span className="">
                    Khi nào tôi sẽ nhận được hàng của mình?
                  </span>
                  <span
                    className={`${
                      showItemFirst ? "icon-rotate" : ""
                    }  w-8 flex justify-center m-0 text-[#86868b]`}
                  >
                    <svg
                      className="transition-all duration-300 ease-linear"
                      viewBox="0 0 17 8.85"
                      role="img"
                      aria-hidden="true"
                      width="17px"
                      height="17px"
                    >
                      <path fill="none" d="M0 0h35v35H0z"></path>
                      <path
                        fill="none"
                        stroke="#86868b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.25"
                        d="M15 1.13L8.5 7.72 2 1.13"
                      ></path>
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                className={`transition-all ease-in-out duration-500
                   ${
                     showItemFirst
                       ? "h-full opacity-100 translate-y-0 pb-6"
                       : "translate-y-3 h-0 opacity-0 relative top-0 left-0 -z-50"
                   }
                 `}
              >
                Bằng cách nhập tỉnh thành, bạn sẽ biết được ngày giao hàng ước
                tính cho các món hàng của mình. Sau khi đặt hàng, bạn sẽ nhận
                được email Xác Nhận Đơn Hàng để xác nhận chi tiết đơn hàng, bao
                gồm ngày gửi và thời gian giao hàng ước tính cho từng món hàng.
                Tất cả các ước tính tùy thuộc vào tình trạng sẵn có của sản phẩm
                và phương thức giao hàng bạn chọn. .{" "}
                <a className="text-[#06c]" href="/" target="_blank">
                  Tìm hiểu thêm về Phương Thức Giao Hàng của Apple{" "}
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            </li>

            <li className="border-t-[1px] border-[#d2d2d7]">
              <h3 className="font-semibold hover:text-[#06c]">
                <button
                  onClick={() => setShowItemSecond(!showItemSecond)}
                  className="flex justify-between w-full py-6"
                >
                  <span>Chi phí giao hàng là bao nhiêu?</span>
                  <span
                    className={`${
                      showItemSecond ? "icon-rotate" : ""
                    }  w-8 flex justify-center m-0 text-[#86868b]`}
                  >
                    <svg
                      className="transition-all duration-300 ease-linear"
                      viewBox="0 0 17 8.85"
                      role="img"
                      aria-hidden="true"
                      width="17px"
                      height="17px"
                    >
                      <path fill="none" d="M0 0h35v35H0z"></path>
                      <path
                        fill="none"
                        stroke="#86868b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.25"
                        d="M15 1.13L8.5 7.72 2 1.13"
                      ></path>
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                className={`transition-all ease-in-out duration-500
                   ${
                     showItemSecond
                       ? "h-full opacity-100 translate-y-0 pb-6 space-y-4"
                       : "translate-y-1 h-0 opacity-0 relative top-0 left-0 -z-50"
                   }
                 `}
              >
                <p>
                  Phương thức giao hàng tiêu chuẩn được miễn phí cho tất cả đơn
                  hàng trực tuyến.{" "}
                  <a
                    href="https://www.apple.com/vn/shop/help/payments"
                    className="text-[#06c]"
                  >
                    Tìm hiểu thêm về Phương Thức Giao Hàng của Apple {">"}
                  </a>
                </p>
              </div>
            </li>

            <li className="border-t-[1px] border-[#d2d2d7]">
              <h3 className="font-semibold hover:text-[#06c]">
                <button
                  onClick={() => setShowItemThird(!showItemThird)}
                  className="flex justify-between w-full py-6"
                >
                  <span>
                    Có thể giao hàng đến nơi nào khác ngoài nhà của tôi không?
                  </span>
                  <span
                    className={`${
                      showItemThird ? "icon-rotate" : ""
                    }  w-8 flex justify-center m-0 text-[#86868b]`}
                  >
                    <svg
                      className="transition-all duration-300 ease-linear"
                      viewBox="0 0 17 8.85"
                      role="img"
                      aria-hidden="true"
                      width="17px"
                      height="17px"
                    >
                      <path fill="none" d="M0 0h35v35H0z"></path>
                      <path
                        fill="none"
                        stroke="#86868b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.25"
                        d="M15 1.13L8.5 7.72 2 1.13"
                      ></path>
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                className={`transition-all ease-in-out duration-500
                   ${
                     showItemThird
                       ? "h-full opacity-100 translate-y-0 pb-6"
                       : "translate-y-1 h-0 opacity-0 relative top-0 left-0 -z-50"
                   }
                 `}
              >
                Có. Khi được nhắc tại thời điểm thanh toán, bạn có thể nhập địa
                chỉ mong muốn. {""}
                <a
                  href="https://www.apple.com/vn/shop/help/payments"
                  className="text-[#06c]"
                >
                  Tìm hiểu thêm về Phương Thức Giao Hàng của Apple {">"}
                </a>
              </div>
            </li>

            <li className="border-t-[1px] border-[#d2d2d7]">
              <h3 className="font-semibold hover:text-[#06c]">
                <button
                  onClick={() => setShowItemTheEnd(!showItemTheEnd)}
                  className="flex justify-between w-full py-6"
                >
                  <span>Apple có chiết khấu cho ngành giáo dục không?</span>
                  <span
                    className={`${
                      showItemTheEnd ? "icon-rotate" : ""
                    }  w-8 flex justify-center m-0 text-[#86868b]`}
                  >
                    <svg
                      className="transition-all duration-300 ease-linear"
                      viewBox="0 0 17 8.85"
                      role="img"
                      aria-hidden="true"
                      width="17px"
                      height="17px"
                    >
                      <path fill="none" d="M0 0h35v35H0z"></path>
                      <path
                        fill="none"
                        stroke="#86868b"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.25"
                        d="M15 1.13L8.5 7.72 2 1.13"
                      ></path>
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                className={`transition-all ease-in-out duration-500
                   ${
                     showItemTheEnd
                       ? "h-full opacity-100 translate-y-0 pb-6 space-y-4"
                       : "translate-y-1 h-0 opacity-0 relative top-0 left-0 -z-50"
                   }
                 `}
              >
                <p>
                  Khi mỗi món hàng được gửi đi, chúng tôi sẽ gửi thông báo cho
                  bạn qua email và tin nhắn SMS. Truy cập trang{" "}
                  <a
                    href="https://www.apple.com/vn/shop/help/payments"
                    className="text-[#06c]"
                  >
                    Trạng Thái Đơn Hàng
                  </a>{" "}
                  (Mở trong cửa sổ mới) trực tuyến của bạn để xem trạng thái cập
                  nhật của đơn hàng. {""}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
