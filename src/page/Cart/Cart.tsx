import React, { useState } from "react";
import iphoneCart from "../../assets/images/iphoneCart.png";
import logoAppleCare from "../../assets/images/APPLECARE-plus_ICON.png";
import sanphamlienquan from "../../assets/images/sanphamlienquan.png";
// color
import spaceblack from "../../assets/images/spaceblack.png";
import gold from "../../assets/images/gold.png";
import silver from "../../assets/images/silver.png";
import deeppurple from "../../assets/images/deeppurple.png";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
const Cart = () => {
  const [showListItem, setShowListItem] = useState<boolean>(true);
  const [showItemFirst, setShowItemFirst] = useState<boolean>(false);
  const [showItemSecond, setShowItemSecond] = useState<boolean>(false);
  const [showItemThird, setShowItemThird] = useState<boolean>(false);
  const [showItemTheEnd, setShowItemTheEnd] = useState<boolean>(false);
  return (
    <div className="mt-12">
      <div className="transform-default text-base">
        <div className="pt-6 text-center">
          <p>
            Xin lưu ý rằng chúng tôi không chấp nhận đổi trả đối với các đơn
            hàng trực tuyến.
          </p>
        </div>
        <div className="pt-12 text-center">
          <div className="pt-3 pb-14 border-b-[1px] border-b-[#d2d2d7]">
            <h1 className="text-4xl font-semibold">
              Tổng giá trị giỏ hàng của bạn là 46.678.000đ.
            </h1>
            <div className="pt-3">
              <p>Vận chuyển miễn phí đối với mọi đơn hàng.</p>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="md:w-[290px] w-full">
                <button className="bg-[#0071e3] hover:bg-[#0076ede3] text-white py-2 px-4 rounded-xl w-full">
                  <a href="/checkout">Thanh toán</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ol className="">
          <li>
            <div className="flex md:flex-row flex-col justify-center py-16 border-b-[1px] border-b-[#d2d2d7]">
              <div className="basis-1/4">
                <img
                  src={iphoneCart}
                  alt="iphoneCart"
                  className="w-full h-full max-w-[203px] max-h-[203px] object-cover mx-auto"
                />
              </div>
              <div className="basis-3/4">
                <div className="flex md:flex-row flex-col flex-wrap w-full md:text-2xl text-xl font-semibold">
                  <div className="flex md:w-1/2 w-full">
                    <h1 className="">iPhone 14 Pro Max 1TB Tía Đậm</h1>
                  </div>
                  <div className="md:w-1/2 w-full flex">
                    <div className="w-1/2 text-left">
                      <select className="" name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10+">10+</option>
                      </select>
                    </div>
                    <p className="w-1/2 text-right">45.249.000đ</p>
                  </div>
                </div>
                <div className="flex-row text-sm pb-10 border-b-[1px] border-b-[#d2d2d7]">
                  <div className="flex justify-between items-end mt-4 mb-2">
                    <p>
                      Thanh toán 1.67% lãi trong 24
                      <br />
                      tháng sau khi thanh toán lần đầu 20% là 9.050.000đ
                    </p>
                    <p>1.842.000đ/tháng*</p>
                  </div>
                  <div className="text-right text-base">
                    <button className="text-[#06c]">Xóa</button>
                  </div>
                </div>
                <div className="flex pt-5">
                  <div className="pr-2">
                    <img
                      src={logoAppleCare}
                      alt="logoAppleCare"
                      className="h-auto w-5 mt-1"
                    />
                  </div>
                  <div className="pb-5 border-b-[1px] border-b-[#d2d2d7] space-y-2">
                    <div className="flex justify-between text-base">
                      <h3 className="font-semibold">
                        Thêm AppleCare+ cho iPhone 14 Pro Max cho mức giá{" "}
                        <span className="nowrap">5.299.000đ</span>
                      </h3>
                      <button className="text-[#06c]">Thêm</button>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                      <li>
                        Nay đã có dịch vụ sửa chữa không hạn chế cho trường hợp
                        hư hỏng do sự cố bất ngờ.
                      </li>
                      <li>
                        Dịch vụ sửa chữa được Apple chứng nhận sử dụng linh kiện
                        Apple chính hãng
                      </li>
                      <li>
                        Dịch Vụ Thay Thế Cấp Tốc không áp dụng cho trường hợp
                        vượt quá phí thay màn hình hoặc hỏng kính mặt sau
                      </li>
                      <li>Ưu tiên tiếp cận các chuyên gia Apple</li>
                    </ul>
                    <button className="text-[#06c]">Tìm hiểu thêm {">"}</button>
                  </div>
                </div>

                <div className="pt-5 flex">
                  <svg
                    viewBox="0 0 25 25"
                    role="img"
                    aria-hidden="true"
                    width="25px"
                    height="25px"
                  >
                    <path fill="none" d="M0 0h25v25H0z"></path>
                    <path d="M19.69 7.154l-6-3.245a2.5 2.5 0 00-2.38 0l-6 3.245A2.5 2.5 0 004 9.354v6.269a2.5 2.5 0 001.311 2.2l6 3.245a2.5 2.5 0 002.379 0l6-3.245a2.5 2.5 0 001.31-2.2V9.354a2.5 2.5 0 00-1.31-2.2zm-7.9-2.365a1.492 1.492 0 011.427 0l6 3.244a1.454 1.454 0 01.151.11l-2.931 1.665-6.743-3.886zM8.661 6.48l6.768 3.9-2.929 1.666-6.864-3.9a1.456 1.456 0 01.151-.11zM5.787 16.941A1.5 1.5 0 015 15.622V9.354a1.5 1.5 0 01.053-.39L12 12.912v7.358a1.463 1.463 0 01-.213-.083zM20 15.622a1.5 1.5 0 01-.786 1.319l-6 3.245a1.5 1.5 0 01-.214.084v-7.358l6.947-3.949a1.508 1.508 0 01.053.391z"></path>
                  </svg>
                  <div>
                    <p className="">
                      <span>Còn hàng</span>
                    </p>
                    Tùy chọn giao hàng cho:{" "}
                    <button className="text-[#06c]">Chọn quận</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex md:flex-row flex-col justify-center py-16 border-b-[1px] border-b-[#d2d2d7]">
              <div className="basis-1/4">
                <img
                  src={iphoneCart}
                  alt="iphoneCart"
                  className="w-full h-full max-w-[203px] max-h-[203px] object-cover mx-auto"
                />
              </div>
              <div className="basis-3/4">
                <div className="flex w-full md:text-2xl text-xl font-semibold">
                  <div className="flex flex-wrap w-3/4">
                    <h1 className="mr-5">iPhone 14 Pro Max 1TB Tía Đậm</h1>
                    <div className="w-[14%] text-right">
                      <select className="" name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10+">10+</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-1/4 text-right">
                    <p className="">45.249.000đ</p>
                  </div>
                </div>
                <div className="flex-row text-sm pb-10 border-b-[1px] border-b-[#d2d2d7]">
                  <div className="flex justify-between items-end mt-4 mb-2">
                    <p>
                      Thanh toán 1.67% lãi trong 24
                      <br />
                      tháng sau khi thanh toán lần đầu 20% là 9.050.000đ
                    </p>
                    <p>1.842.000đ/tháng*</p>
                  </div>
                  <div className="text-right text-base">
                    <button className="text-[#06c]">Xóa</button>
                  </div>
                </div>
                <div className="flex pt-5">
                  <div className="pr-2">
                    <img
                      src={logoAppleCare}
                      alt="logoAppleCare"
                      className="h-auto w-5 mt-1"
                    />
                  </div>
                  <div className="pb-5 border-b-[1px] border-b-[#d2d2d7] space-y-2">
                    <div className="flex justify-between text-base">
                      <h3 className="font-semibold">
                        Thêm AppleCare+ cho iPhone 14 Pro Max cho mức giá{" "}
                        <span className="nowrap">5.299.000đ</span>
                      </h3>
                      <button className="text-[#06c]">Thêm</button>
                    </div>
                    <ul className="list-disc pl-6 text-sm">
                      <li>
                        Nay đã có dịch vụ sửa chữa không hạn chế cho trường hợp
                        hư hỏng do sự cố bất ngờ.
                      </li>
                      <li>
                        Dịch vụ sửa chữa được Apple chứng nhận sử dụng linh kiện
                        Apple chính hãng
                      </li>
                      <li>
                        Dịch Vụ Thay Thế Cấp Tốc không áp dụng cho trường hợp
                        vượt quá phí thay màn hình hoặc hỏng kính mặt sau
                      </li>
                      <li>Ưu tiên tiếp cận các chuyên gia Apple</li>
                    </ul>
                    <button className="text-[#06c]">Tìm hiểu thêm {">"}</button>
                  </div>
                </div>

                <div className="pt-5 flex">
                  <svg
                    viewBox="0 0 25 25"
                    role="img"
                    aria-hidden="true"
                    width="25px"
                    height="25px"
                  >
                    <path fill="none" d="M0 0h25v25H0z"></path>
                    <path d="M19.69 7.154l-6-3.245a2.5 2.5 0 00-2.38 0l-6 3.245A2.5 2.5 0 004 9.354v6.269a2.5 2.5 0 001.311 2.2l6 3.245a2.5 2.5 0 002.379 0l6-3.245a2.5 2.5 0 001.31-2.2V9.354a2.5 2.5 0 00-1.31-2.2zm-7.9-2.365a1.492 1.492 0 011.427 0l6 3.244a1.454 1.454 0 01.151.11l-2.931 1.665-6.743-3.886zM8.661 6.48l6.768 3.9-2.929 1.666-6.864-3.9a1.456 1.456 0 01.151-.11zM5.787 16.941A1.5 1.5 0 015 15.622V9.354a1.5 1.5 0 01.053-.39L12 12.912v7.358a1.463 1.463 0 01-.213-.083zM20 15.622a1.5 1.5 0 01-.786 1.319l-6 3.245a1.5 1.5 0 01-.214.084v-7.358l6.947-3.949a1.508 1.508 0 01.053.391z"></path>
                  </svg>
                  <div>
                    <p className="">
                      <span>Còn hàng</span>
                    </p>
                    Tùy chọn giao hàng cho:{" "}
                    <button className="text-[#06c]">Chọn quận</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ol>
        <div className="flex mt-14">
          <div className="basis-1/4 md:block hidden"></div>
          <div className="md:basis-3/4 basis-full">
            <div className="flex justify-between pb-4 border-b-[1px] border-b-[#d2d2d7]">
              <div>
                <p>Tổng phụ</p>
                <p>Vận chuyển</p>
              </div>
              <div className="uppercase text-right">
                <p>45.450.000đ</p>
                <p>Miễn Phí</p>
              </div>
            </div>
            <div className="flex justify-between text-xl font-semibold pt-5">
              <p>Thanh toán toàn bộ</p>
              <p>45.450.000đ</p>
            </div>
            <p>hoặc</p>
            <div className="flex justify-between text-xl font-semibold">
              <p>Thanh toán hàng tháng</p>
              <p>3.684.000đ/tháng*</p>
            </div>
            <div className="text-sm">
              <p>Thanh toán lãi suất 1.67% cho 24 tháng</p>
            </div>
            <div className="text-sm">
              <p className="text-end">
                <b>Số tiền trả trước cần thanh toán hôm nay: 18.100.000đ</b>
              </p>
              <p className="font-light pb-7 md:text-end text-start">
                Bao gồm thuế GTGT 8.227.090đ
              </p>
              <div className="w-full md:text-right text-center">
                <button className="md:w-1/2 w-full text-lg py-4 px-7 bg-[#0077ed] hover:bg-[#0076ede3] text-white rounded-xl">
                  <a href="/checkout">Thanh toán</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 border-y border-y-[#d2d2d7]">
        <div className="py-5 w-[87.5%] mx-auto">
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
      <div className="border-b-[#d2d2d7] border-b">
        <div className="transform-default">
          <h1 className="pt-16 text-center text-4xl font-semibold">
            Có thể bạn cũng sẽ thích
          </h1>
          <div className="w-full">
            <ul className="grid md:grid-cols-3 grid-cols-1 h-full w-full gap-5">
              <li className="py-14 flex flex-col justify-between">
                <div className="w-[194px] h-[194px] mx-auto mb-5 mt-0">
                  <img
                    src={sanphamlienquan}
                    alt="sanphamlienquan"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3>
                    <a href="/cart">
                      Ốp Lưng Trong Suốt MagSafe cho iPhone 14 Pro Max
                    </a>
                  </h3>
                  <p className="mb-4">1.429.000đ</p>
                </div>
                <div>
                  <fieldset className="text-left">
                    <legend>Màu - Đêm Xanh Thẳm</legend>
                    <ul className="color-list py-3 gap-x-3">
                      <li className="color-item">
                        <input type="radio" name="color" id="Tía Đậm" />
                        <label className="color-item_label" htmlFor="Tía Đậm">
                          <img
                            src={spaceblack}
                            alt="spaceblack"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="gold" />
                        <label className="color-item_label" htmlFor="gold">
                          <img
                            src={gold}
                            alt="gold"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="silver" />
                        <label className="color-item_label" htmlFor="silver">
                          <img
                            src={silver}
                            alt="silver"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="deeppurple" />
                        <label
                          className="color-item_label"
                          htmlFor="deeppurple"
                        >
                          <img
                            src={deeppurple}
                            alt="deeppurple"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                    </ul>
                  </fieldset>
                </div>
                <div className="pt-5">
                  <button className="rounded-xl bg-[#0071e3] hover:bg-[#0076ede3] text-white w-full py-4 px-7">
                    Thêm giỏ hàng
                  </button>
                </div>
              </li>
              <li className="py-14 flex flex-col justify-between">
                <div className="w-[194px] h-[194px] mx-auto mb-5 mt-0">
                  <img
                    src={sanphamlienquan}
                    alt="sanphamlienquan"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3>
                    <a href="/cart">
                      Ốp Lưng Trong Suốt MagSafe cho iPhone 14 Pro Max
                    </a>
                  </h3>
                  <p className="mb-4">1.429.000đ</p>
                </div>
                <div>
                  <fieldset className="text-left">
                    <legend>Màu - Đêm Xanh Thẳm</legend>
                    {/* <ul className="color-list py-3 gap-x-3">
                      <li className="color-item">
                        <input type="radio" name="color" id="Tía Đậm" />
                        <label className="color-item_label" htmlFor="Tía Đậm">
                          <img
                            src={spaceblack}
                            alt="spaceblack"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="gold" />
                        <label className="color-item_label" htmlFor="gold">
                          <img
                            src={gold}
                            alt="gold"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="silver" />
                        <label className="color-item_label" htmlFor="silver">
                          <img
                            src={silver}
                            alt="silver"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="deeppurple" />
                        <label
                          className="color-item_label"
                          htmlFor="deeppurple"
                        >
                          <img
                            src={deeppurple}
                            alt="deeppurple"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                    </ul> */}
                  </fieldset>
                </div>
                <div className="pt-5">
                  <button className="rounded-xl bg-[#0071e3] hover:bg-[#0076ede3] text-white w-full py-4 px-7">
                    Thêm giỏ hàng
                  </button>
                </div>
              </li>
              <li className="py-14 flex flex-col justify-between">
                <div className="w-[194px] h-[194px] mx-auto mb-5 mt-0">
                  <img
                    src={sanphamlienquan}
                    alt="sanphamlienquan"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3>
                    <a href="/cart">
                      Ốp Lưng Trong Suốt MagSafe cho iPhone 14 Pro Max
                    </a>
                  </h3>
                  <p className="mb-4">1.429.000đ</p>
                </div>
                <div>
                  <fieldset className="text-left">
                    <legend>Màu - Đêm Xanh Thẳm</legend>
                    <ul className="color-list py-3 gap-x-3">
                      <li className="color-item">
                        <input type="radio" name="color" id="Tía Đậm" />
                        <label className="color-item_label" htmlFor="Tía Đậm">
                          <img
                            src={spaceblack}
                            alt="spaceblack"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="gold" />
                        <label className="color-item_label" htmlFor="gold">
                          <img
                            src={gold}
                            alt="gold"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="silver" />
                        <label className="color-item_label" htmlFor="silver">
                          <img
                            src={silver}
                            alt="silver"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="deeppurple" />
                        <label
                          className="color-item_label"
                          htmlFor="deeppurple"
                        >
                          <img
                            src={deeppurple}
                            alt="deeppurple"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                    </ul>
                  </fieldset>
                </div>
                <div className="pt-5">
                  <button className="rounded-xl bg-[#0071e3] hover:bg-[#0076ede3] text-white w-full py-4 px-7">
                    Thêm giỏ hàng
                  </button>
                </div>
              </li>
              <li className="py-14 flex flex-col justify-between">
                <div className="w-[194px] h-[194px] mx-auto mb-5 mt-0">
                  <img
                    src={sanphamlienquan}
                    alt="sanphamlienquan"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3>
                    <a href="/cart">
                      Ốp Lưng Trong Suốt MagSafe cho iPhone 14 Pro Max
                    </a>
                  </h3>
                  <p className="mb-4">1.429.000đ</p>
                </div>
                <div>
                  <fieldset className="text-left">
                    <legend>Màu - Đêm Xanh Thẳm</legend>
                    <ul className="color-list py-3 gap-x-3">
                      <li className="color-item">
                        <input type="radio" name="color" id="Tía Đậm" />
                        <label className="color-item_label" htmlFor="Tía Đậm">
                          <img
                            src={spaceblack}
                            alt="spaceblack"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="gold" />
                        <label className="color-item_label" htmlFor="gold">
                          <img
                            src={gold}
                            alt="gold"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="silver" />
                        <label className="color-item_label" htmlFor="silver">
                          <img
                            src={silver}
                            alt="silver"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="deeppurple" />
                        <label
                          className="color-item_label"
                          htmlFor="deeppurple"
                        >
                          <img
                            src={deeppurple}
                            alt="deeppurple"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                    </ul>
                  </fieldset>
                </div>
                <div className="pt-5">
                  <button className="rounded-xl bg-[#0071e3] hover:bg-[#0076ede3] text-white w-full py-4 px-7">
                    Thêm giỏ hàng
                  </button>
                </div>
              </li>
              <li className="py-14 flex flex-col justify-between">
                <div className="w-[194px] h-[194px] mx-auto mb-5 mt-0">
                  <img
                    src={sanphamlienquan}
                    alt="sanphamlienquan"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3>
                    <a href="/cart">
                      Ốp Lưng Trong Suốt MagSafe cho iPhone 14 Pro Max
                    </a>
                  </h3>
                  <p className="mb-4">1.429.000đ</p>
                </div>
                <div>
                  <fieldset className="text-left">
                    <legend>Màu - Đêm Xanh Thẳm</legend>
                    <ul className="color-list py-3 gap-x-3">
                      <li className="color-item">
                        <input type="radio" name="color" id="Tía Đậm" />
                        <label className="color-item_label" htmlFor="Tía Đậm">
                          <img
                            src={spaceblack}
                            alt="spaceblack"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="gold" />
                        <label className="color-item_label" htmlFor="gold">
                          <img
                            src={gold}
                            alt="gold"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="silver" />
                        <label className="color-item_label" htmlFor="silver">
                          <img
                            src={silver}
                            alt="silver"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="deeppurple" />
                        <label
                          className="color-item_label"
                          htmlFor="deeppurple"
                        >
                          <img
                            src={deeppurple}
                            alt="deeppurple"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                    </ul>
                  </fieldset>
                </div>
                <div className="pt-5">
                  <button className="rounded-xl bg-[#0071e3] hover:bg-[#0076ede3] text-white w-full py-4 px-7">
                    Thêm giỏ hàng
                  </button>
                </div>
              </li>
              <li className="py-14 flex flex-col justify-between">
                <div className="w-[194px] h-[194px] mx-auto mb-5 mt-0">
                  <img
                    src={sanphamlienquan}
                    alt="sanphamlienquan"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3>
                    <a href="/cart">
                      Ốp Lưng Trong Suốt MagSafe cho iPhone 14 Pro Max
                    </a>
                  </h3>
                  <p className="mb-4">1.429.000đ</p>
                </div>
                <div>
                  <fieldset className="text-left">
                    <legend>Màu - Đêm Xanh Thẳm</legend>
                    <ul className="color-list py-3 gap-x-3">
                      <li className="color-item">
                        <input type="radio" name="color" id="Tía Đậm" />
                        <label className="color-item_label" htmlFor="Tía Đậm">
                          <img
                            src={spaceblack}
                            alt="spaceblack"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="gold" />
                        <label className="color-item_label" htmlFor="gold">
                          <img
                            src={gold}
                            alt="gold"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="silver" />
                        <label className="color-item_label" htmlFor="silver">
                          <img
                            src={silver}
                            alt="silver"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                      <li className="color-item">
                        <input type="radio" name="color" id="deeppurple" />
                        <label
                          className="color-item_label"
                          htmlFor="deeppurple"
                        >
                          <img
                            src={deeppurple}
                            alt="deeppurple"
                            className="w-[30px] h-[30px] object-cover"
                          />
                        </label>
                      </li>
                    </ul>
                  </fieldset>
                </div>
                <div className="pt-5">
                  <button className="rounded-xl bg-[#0071e3] hover:bg-[#0076ede3] text-white w-full py-4 px-7">
                    Thêm giỏ hàng
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="transform-default">
        <h2 className="text-3xl font-semibold">
          <button
            onClick={() => setShowListItem(!showListItem)}
            className="flex justify-between items-center py-8 w-full"
          >
            <span>Thắc Mắc Về Việc Mua Hàng</span>
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
                và phương thức giao hàng bạn chọn.{" "}
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
                  <span>Tôi có thể chọn phương thức thanh toán nào?</span>
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
                  Chúng tôi chấp nhận hầu hết các loại thẻ tín dụng, thẻ ATM và
                  Ví Điện Tử. Một số tùy chọn thanh toán không khả dụng đối với
                  một số sản phẩm Bạn có thể gọi đến 1800-1192 để biết thêm
                  thông tin.{" "}
                  <a
                    href="https://www.apple.com/vn/shop/help/payments"
                    className="text-[#06c]"
                  >
                    Tìm hiểu thêm về Apple Payment & Thuế GTGT
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
                  <span>Tôi có thể sử dụng lựa chọn hỗ trợ tài chính nào?</span>
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
                Bạn có thể thanh toán bằng hình thức Trả Góp Hàng Tháng Với MoMo
                Xem các điều khoản. {""}
                <a
                  href="https://www.apple.com/vn/shop/help/payments"
                  className="text-[#06c]"
                >
                  Tìm hiểu thêm về Phương Thức Thanh Toán tại Apple
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
                  Có. Apple có áp dụng mức giá đặc biệt cho sinh viên, giáo
                  viên, cán bộ đào tạo và nhân viên. Nếu bạn nghĩ rằng mình hội
                  đủ điều kiện, hãy truy cập {""}
                  <a
                    href="https://www.apple.com/vn/shop/help/payments"
                    className="text-[#06c]"
                  >
                    Tìm hiểu thêm về Phương Thức Thanh Toán tại Apple
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Cart;
