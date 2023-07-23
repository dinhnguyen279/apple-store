import React, { useEffect, useState } from "react";
import "./Detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import iPhone14_1 from "../../assets/images/iphone-14-pro-1.png";
import iPhone14_2 from "../../assets/images/iphone-14-pro-2.png";
import iPhone14_3 from "../../assets/images/iphone-14-pro-3.png";

// color
import spaceblack from "../../assets/images/spaceblack.png";
import gold from "../../assets/images/gold.png";
import silver from "../../assets/images/silver.png";
import deeppurple from "../../assets/images/deeppurple.png";
export const dataImgProduct = [
  {
    id: 1,
    img: iPhone14_1,
    name: "img1",
  },
  {
    id: 2,
    img: iPhone14_2,
    name: "img2",
  },
  {
    id: 3,
    img: iPhone14_3,
    name: "img3",
  },
];

export const dataInfoProduct = {
  iPhone_14: [
    {
      id: 1,
      nameProduct: "iPhone 14 Pro",
      sizeScreen: "Màn hình 6.1 inch",
      price: "27.999.000",
      installment: "1.140.000",
      storage: [
        {
          id: 1,
          gb: "128GB",
          price: "27.999.000",
          installment: "1.140.000",
        },
        {
          id: 2,
          gb: "256GB",
          price: "30.849.000",
          installment: "1.256.000",
        },
        {
          id: 3,
          gb: "512GB",
          price: "36.549.000",
          installment: "1.488.000",
        },
        {
          id: 4,
          gb: "1T",
          price: "42.249.000",
          installment: "1.720.000",
        },
      ],
    },
    {
      id: 2,
      nameProduct: "iPhone 14 Pro Max",
      sizeScreen: "Màn hình 6.1 inch",
      price: "30.999.000",
      installment: "1.262.000",
      storage: [
        {
          id: 1,
          gb: "128GB",
          price: "30.999.000",
          installment: "1.262.000",
        },
        {
          id: 2,
          gb: "256GB",
          price: "33.849.000",
          installment: "1.378.000",
        },
        {
          id: 3,
          gb: "512GB",
          price: "39.549.000",
          installment: "1.610.000",
        },
        {
          id: 4,
          gb: "1T",
          price: "45.249.000",
          installment: "1.842.000",
        },
      ],
    },
  ],
  inforInstallment: [
    {
      id: 1,
      inFor:
        "Trả góp theo tháng với lãi suất 1.67%, sau khi thanh toán lần đầu 20%. Có thêm tùy chọn thanh toán khi hoàn tất giao dịch.",
    },
  ],
};
const Detail = () => {
  const [current, setCurrent] = useState<number>(0);
  const [indexItem, setIndexItem] = useState<number>(0);
  const [textRadio, setTextRadio] = useState<string>("");
  const [chooseIphone, setChooseIphone] = useState<boolean>(false);
  const [reNew, setReNew] = useState<boolean>(false);
  const length = dataImgProduct.length;

  useEffect(() => {
    // set Title
    const nameProduct = dataInfoProduct.iPhone_14[0].nameProduct;
    if (nameProduct.length !== 0) {
      document.title = nameProduct;
    }
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const handleSelectProduct = (idProduct: number) => {
    console.log("idProduct", idProduct);
  };

  // GET Dung luong luu tru cua tung san pham
  const storageProduct =
    dataInfoProduct.iPhone_14.map((val) => val.storage) ?? "";

  const handleShowStoragePrduct = (idx: number) => {
    setIndexItem(idx);
  };

  const handleSelectStorageProduct = (idStorageProduct: number) => {
    console.log("idStorageProduct", idStorageProduct);
  };

  return (
    <div className="mt-12">
      <div className="py-4 bg-[#f5f5f7] text-center">
        <div className="transform-default text-sm flex flex-col items-center justify-center">
          Thanh toán với lãi suất thấp, thời hạn lên đến 24 tháng và chỉ cần trả
          trước 20% khi bạn chọn Trả Góp Hàng Tháng với MoMo.*
          <a href="/" className="text-[#007cd9] hover:underline">
            Tìm hiểu thêm{" "}
            <FontAwesomeIcon className="text-[10px]" icon={faChevronRight} />{" "}
          </a>
        </div>
      </div>
      <div className="container-detail">
        <section>
          <div className="pt-14 pb-6 flex flex-wrap items-start justify-between">
            <div>
              <div>
                <span className="text-[#bf4800] text-lg">Mới</span>
                <h1 className="text-5xl font-semibold">Mua iPhone 14 Pro</h1>
              </div>
              <div className="py-4">
                <p className="text-sm">
                  Tổng cộng 45.249.000đ hoặc 1.842.000đ/tháng cho 24 tháng
                </p>
                <span className="text-xs">
                  Trả góp theo tháng với lãi suất 1.67% sau khi thanh toán lần
                  đầu 20%
                </span>
              </div>
            </div>
            <div>
              <button className="py-2 px-4 bg-[#f5f5f7] gap-x-1 rounded-full text-sm flex items-center icon-plus">
                Nhận 1.000.000đ-19.100.00đ khi đổi.** {""}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12px"
                  width="12px"
                  viewBox="0 0 448 512"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-4 grid-cols-1">
            <div className="detail-column-left col-span-3 py-10">
              <div className="relative overflow-hidden rounded-2xl">
                {/* Show Product Desktop */}
                <div
                  className="md:flex hidden items-center transition-transform duration-300 ease-in-out h-auto w-[100%]"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {dataImgProduct.map((val, idx) => {
                    return (
                      <img
                        key={idx + 1}
                        src={val.img}
                        alt={val.name}
                        className="object-cover w-full h-full"
                      />
                    );
                  })}
                </div>
                {/* Show Product Mobile */}
                <div className="md:hidden block">
                  <div className="overflow-x-auto scroller-product">
                    <div className="flex flex-nowrap w-full">
                      {dataImgProduct.map((val, idx) => {
                        return (
                          <div className="scroll-product-mobile" key={idx + 1}>
                            <div className="scroll-product-mobile-item">
                              <div className="h-[246px]">
                                <img
                                  src={val.img}
                                  alt={val.name}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="md:block hidden">
                  {current === 0 ? (
                    ""
                  ) : (
                    <button
                      onClick={() => prevSlide()}
                      className="text-1xl h-12 w-12 rounded-full bg-[#dedee2] hover:bg-[#fbfbfd] absolute top-1/2 translate-y-[-50%] left-[18px]"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                  )}

                  {current === length - 1 ? (
                    ""
                  ) : (
                    <button
                      onClick={() => nextSlide()}
                      className="text-1xl h-12 w-12 rounded-full bg-[#dedee2] hover:bg-[#fbfbfd] absolute top-1/2 translate-y-[-50%] right-[18px]"
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  )}
                </div>
                <div className="md:flex hidden absolute right-1/2 bottom-4 translate-x-[50%]  justify-center items-center gap-x-3">
                  {dataImgProduct.map((val, idx) => {
                    return (
                      <div className="flex" key={idx + 1}>
                        <input
                          type="radio"
                          checked={idx === current ? true : false}
                          readOnly
                          className="input-radio hidden appearance-none"
                        />
                        <label
                          className="label-radio h-2 w-2 rounded-full bg-[#dedee2] outline-none transition-all delay-300 ease-in-out"
                          htmlFor={val.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="detail-column-right">
              <div className="column-right-first">
                <legend className="text-2xl font-semibold mb-3">
                  <h2>
                    <span>Phiên bản.</span>
                    <span className="text-[#6e6e73]">
                      {" "}
                      Mẫu nào phù hợp nhất với bạn?
                    </span>
                  </h2>
                </legend>
                <div className="mt-4">
                  {dataInfoProduct.iPhone_14.map((val, idx) => {
                    return (
                      <>
                        <div
                          className="relative flex mt-3"
                          key={idx + 1}
                          onClick={() => handleShowStoragePrduct(idx)}
                        >
                          <input
                            className="column-right-first-radio"
                            type="radio"
                            name="product"
                            id={val.nameProduct}
                            defaultChecked={
                              dataInfoProduct.iPhone_14[0].nameProduct ===
                              val.nameProduct
                                ? true
                                : false
                            }
                          />
                          <label
                            onClick={() => handleSelectProduct(val.id)}
                            className="column-right-first-label rounded-2xl h-auto w-full font-normal cursor-pointer"
                            htmlFor={val.nameProduct}
                          >
                            <span className="flex items-center flex-row w-full">
                              <span className="label-item-left">
                                <p className="font-semibold text-lg">
                                  {val.nameProduct}
                                </p>
                                <span className="text-xs">
                                  {val.sizeScreen} <sup>1</sup>
                                </span>
                              </span>
                              <span className="label-item-right text-xs">
                                <span>
                                  Từ <span>{val.price}đ</span>
                                </span>
                                <p>hoặc</p>
                                <span>
                                  {val.installment}đ{" "}
                                  <span aria-hidden>/tháng</span>
                                  <span> trong 24 tháng*</span>
                                </span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="text-sm p-4">
                  {dataInfoProduct.inforInstallment.map((val, idx) => {
                    return (
                      <>
                        <p key={idx + 1}>{val.inFor}</p>
                      </>
                    );
                  })}
                </div>
                <div className="bg-[#f5f5f7] p-4 mt-4 rounded-2xl">
                  <button className="relative text-sm icon-plus w-full">
                    <div className="text-start pr-3">
                      <p className="font-semibold">
                        Bạn cần trợ giúp chọn một phiên bản?
                      </p>
                      <div>
                        Khám phá sự khác biệt về kích thước màn hình và thời
                        lượng pin.
                      </div>
                    </div>
                    <svg
                      className="absolute top-0 right-0"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14px"
                      width="14px"
                      viewBox="0 0 448 512"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="column-right-second">
                <fieldset>
                  <legend className="text-2xl font-semibold mb-3">
                    <h2>
                      <span>Màu.</span>
                      <span className="text-[#6e6e73]">
                        {" "}
                        Chọn màu bạn yêu thích.
                      </span>
                    </h2>
                  </legend>
                  <p className="text-base font-semibold pt-5">Màu - Tía Đậm</p>
                  <ul className="color-list py-3 gap-x-3">
                    <li className="color-item">
                      <input type="radio" name="color" id="Tía Đậm" />
                      <label className="color-item_label" htmlFor="Tía Đậm">
                        <img
                          src={spaceblack}
                          alt="spaceblack"
                          className="w-[32px] h-[32px] object-cover"
                        />
                      </label>
                    </li>
                    <li className="color-item">
                      <input type="radio" name="color" id="Gold" />
                      <label className="color-item_label" htmlFor="Gold">
                        <img
                          src={gold}
                          alt="gold"
                          className="w-[32px] h-[32px] object-cover"
                        />
                      </label>
                    </li>
                    <li className="color-item">
                      <input type="radio" name="color" id="Bạc" />
                      <label className="color-item_label" htmlFor="Bạc">
                        <img
                          src={silver}
                          alt="silver"
                          className="w-[32px] h-[32px] object-cover"
                        />
                      </label>
                    </li>
                    <li className="color-item">
                      <input type="radio" name="color" id="Đen Ánh Thép" />
                      <label
                        className="color-item_label"
                        htmlFor="Đen Ánh Thép"
                      >
                        <img
                          src={deeppurple}
                          alt="deeppurple"
                          className="w-[32px] h-[32px] object-cover"
                        />
                      </label>
                    </li>
                  </ul>
                </fieldset>
              </div>
              <div className="column-right-third">
                <div>
                  {storageProduct[indexItem].map((val, idx) => {
                    return (
                      <>
                        <div className="relative flex mt-3" key={idx + 1}>
                          <input
                            className="column-right-first-radio"
                            type="radio"
                            name="storageProduct"
                            id={val.gb}
                            defaultChecked={
                              dataInfoProduct.iPhone_14[0].storage[0].gb ===
                              val.gb
                                ? true
                                : false
                            }
                          />
                          <label
                            onClick={() => handleSelectStorageProduct(val.id)}
                            className="column-right-first-label rounded-2xl h-auto w-full font-normal cursor-pointer"
                            htmlFor={val.gb}
                          >
                            <span className="flex items-center flex-row w-full">
                              <span className="label-item-left">
                                <p className="font-semibold text-lg">
                                  {val.gb}
                                  <sup>2</sup>
                                </p>
                              </span>
                              <span className="label-item-right text-xs">
                                <span>
                                  Từ <span>{val.price}đ</span>
                                </span>
                                <p>hoặc</p>
                                <span>
                                  {val.installment}đ{" "}
                                  <span aria-hidden>/tháng</span>
                                  <span> trong 24 tháng*</span>
                                </span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="text-sm p-4">
                  {dataInfoProduct.inforInstallment.map((val, idx) => {
                    return (
                      <>
                        <p key={idx + 1}>{val.inFor}</p>
                      </>
                    );
                  })}
                </div>
                <div className="bg-[#f5f5f7] p-4 mt-4 rounded-2xl">
                  <button className="relative text-sm icon-plus w-full">
                    <div className="text-start pr-3">
                      <p className="font-semibold">
                        Bạn không chắc mình cần bao nhiêu dung lượng?
                      </p>
                      <div>Hiểu rõ hơn về dung lượng bạn cần.</div>
                    </div>
                    <svg
                      className="absolute top-0 right-0"
                      xmlns="http://www.w3.org/2000/svg"
                      height="14px"
                      width="14px"
                      viewBox="0 0 448 512"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-4 grid-cols-1 trade-in">
            <div className="w-full text-2xl font-semibold col-span-3 trade-in-header">
              <h2>
                <span>Apple Trade In.</span>
                <span className="text-[#6e6e73]">
                  {" "}
                  Nhận 1.000.000đ–19.100.000đ điểm tín dụng để sử dụng khi mua
                  iPhone mới.**
                </span>
              </h2>
              <div className="flex md:flex-row flex-col w-full gap-5 mt-5">
                <div className="flex basis-1/2">
                  <input
                    className="column-right-first-radio"
                    type="radio"
                    name="SelectIphone"
                    id="TradeInIphone"
                    checked={textRadio === "TradeInIphone" ? true : false}
                  />
                  <label
                    className="column-right-first-label rounded-2xl h-auto w-full cursor-pointer"
                    htmlFor="TradeInIphone"
                    onClick={() => {
                      setTextRadio("TradeInIphone");
                      setChooseIphone(true);
                      setReNew(false);
                    }}
                  >
                    <span className="text-center">
                      <p className="text-lg font-semibold">Chọn iPhone</p>
                      <p className="text-xs font-light">
                        Trả lời một số câu hỏi để nhận được giá trị ước tính của
                        bạn
                      </p>
                    </span>
                  </label>
                </div>
                <div className="flex basis-1/2">
                  <input
                    className="column-right-first-radio"
                    type="radio"
                    name="ChangePhone"
                    id="ChangeNewPhone"
                    checked={textRadio === "ChangeNewPhone" ? true : false}
                  />
                  <label
                    className="column-right-first-label rounded-2xl h-auto w-full cursor-pointer"
                    htmlFor="ChangeNewPhone"
                    onClick={() => {
                      setTextRadio("ChangeNewPhone");
                      setChooseIphone(false);
                      setReNew(true);
                    }}
                  >
                    <span className="text-center">
                      <p className="text-lg font-semibold">
                        Không đổi cũ lấy mới
                      </p>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f7] p-4 rounded-2xl w-full h-min md:my-0 my-5">
              <button className="relative text-sm icon-plus w-full">
                <div className="text-start pr-3">
                  <p className="font-semibold">
                    Chương trình đổi cũ lấy mới hoạt động như thế nào?
                  </p>
                  <div>
                    Chúng tôi sẽ hướng dẫn bạn thông qua quy trình từng bước.
                  </div>
                </div>
                <svg
                  className="absolute top-0 right-0"
                  xmlns="http://www.w3.org/2000/svg"
                  height="14px"
                  width="14px"
                  viewBox="0 0 448 512"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
            </div>
          </div>
          {/* chooseIphone */}
          <div
            className={`relative grid md:grid-cols-4 grid-cols-1 trade-in-under transition-all duration-300 ease-in-out delay-300
            ${chooseIphone ? "h-full opacity-100" : "h-0 opacity-0"}
            `}
          >
            <div
              className={`absolute bottom-0 left-0 w-full bg-white transition-all duration-300 ease-in-out delay-300
              ${chooseIphone ? "h-0 opacity-0" : "h-full opacity-100"}
              `}
            />
            <div className="trade-in-header col-span-3">
              <div className="rounded-2xl bg-[#f5f5f7] pt-3 pb-5 px-5 w-full">
                <div className="space-y-4">
                  <p className="text-sm font-normal">
                    Bạn sử dụng phiên bản nào?
                  </p>
                  <div className="flex gap-x-5">
                    <div className="basis-1/2 text-lg text-[#86868b]">
                      <select
                        name=""
                        className="py-4 px-2 w-full border-[1px] rounded-2xl"
                      >
                        <option value="Chọn">Chọn Phiên Bản Sản Phẩm</option>
                        <option className="text-black" value="iPhone 14">
                          iPhone 14
                        </option>
                        <option className="text-black" value="iPhone 14 Pro">
                          iPhone 14 Pro
                        </option>
                        <option
                          className="text-black"
                          value="iPhone 14 Pro Max"
                        >
                          iPhone 14 Pro Max
                        </option>
                      </select>
                    </div>
                    <div className="font-light text-xs basis-1/2 px-10">
                      Trên iPhone, hãy vào mục Cài đặt {">"} Tên của bạn. Cuộn
                      xuống để xem phiên bản.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Goi Bao Hanh */}
          <div
            className={`grid md:grid-cols-4 grid-cols-1 trade-in transition-all duration-300 ease-in-out
            ${reNew ? "h-full opacity-100" : "h-0 opacity-0"}
            `}
          >
            <div className="w-full text-2xl font-semibold col-span-3 trade-in-header">
              <h2>
                <span>Gói bảo hành AppleCare+.</span>
                <span className="text-[#6e6e73]">
                  {" "}
                  Bảo vệ iPhone mới của bạn.
                </span>
              </h2>
              <div className="flex md:flex-row flex-col w-full gap-5 mt-5">
                <div className="flex basis-1/2">
                  <input
                    className="column-right-first-radio"
                    type="radio"
                    name="SelectIphone"
                    id="AppleCare"
                    checked={textRadio === "AppleCare" ? true : false}
                  />
                  <label
                    className="column-right-first-label rounded-2xl h-auto w-full cursor-pointer"
                    htmlFor="AppleCare"
                    onClick={() => {
                      setTextRadio("AppleCare");
                    }}
                  >
                    <span className="flex flex-col pb-4">
                      <span className="flex items-center text-base">
                        <svg
                          viewBox="0 0 25 25"
                          role="img"
                          aria-hidden="true"
                          width="25px"
                          height="25px"
                          fill="#e30000"
                        >
                          <path fill="none" d="M0 0h25v25H0z"></path>
                          <path d="M18.4 8.146a3.5 3.5 0 00-1.675 2.948 3.411 3.411 0 002.075 3.129 8.151 8.151 0 01-1.063 2.2c-.662.953-1.354 1.905-2.407 1.905s-1.324-.612-2.537-.612c-1.183 0-1.6.632-2.567.632s-1.634-.882-2.407-1.965A9.5 9.5 0 016.2 11.255c0-3.008 1.955-4.6 3.881-4.6 1.023 0 1.875.672 2.517.672.612 0 1.564-.712 2.727-.712A3.648 3.648 0 0118.4 8.146zM12.68 6.442a1.152 1.152 0 01-.211-.02 1.376 1.376 0 01-.03-.281 3.362 3.362 0 01.852-2.1 3.464 3.464 0 012.276-1.173 1.486 1.486 0 01.03.311 3.458 3.458 0 01-.822 2.156 3 3 0 01-2.095 1.107z"></path>
                        </svg>
                        <p>AppleCare+</p>
                      </span>
                      <span className="font-light text-sm">
                        <p>5.299.000đ hoặc 216.000đ/tháng cho 24 tháng*</p>
                        <p>
                          Ở mức lãi xuất 1.67%, sau khi thanh toán lần đầu 20%
                          là 1.060.000đ
                        </p>
                      </span>
                    </span>
                    <div className="border-t-[1px] p-4 border-[#86868b]">
                      <ul className="text-sm list-disc font-light">
                        <li>
                          Nay đã có dịch vụ sửa chữa không hạn chế cho trường
                          hợp hư hỏng do sự cố bất ngờ.
                        </li>
                        <li>
                          Dịch vụ sửa chữa được Apple chứng nhận sử dụng linh
                          kiện Apple chính hãng
                        </li>
                        <li>
                          Dịch Vụ Thay Thế Cấp Tốc — Chúng tôi sẽ gửi cho bạn
                          một thiết bị thay thế để bạn không phải chờ sửa chữa
                        </li>
                        <li>Ưu tiên tiếp cận các chuyên gia Apple</li>
                      </ul>
                    </div>
                  </label>
                </div>
                <div className="flex basis-1/2">
                  <input
                    className="column-right-first-radio"
                    type="radio"
                    name="ChangePhone"
                    id="NoAppleCare"
                    checked={textRadio === "NoAppleCare" ? true : false}
                  />
                  <label
                    className="column-right-first-label rounded-2xl h-auto w-full cursor-pointer"
                    htmlFor="NoAppleCare"
                    onClick={() => setTextRadio("NoAppleCare")}
                  >
                    <span>
                      <p className="text-base">Không có bảo hành AppleCare+</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="bg-[#f5f5f7] p-4 rounded-2xl w-full h-min md:my-0 my-5">
              <button className="relative text-sm icon-plus w-full">
                <div className="text-start pr-3">
                  <p className="font-semibold">
                    AppleCare+ hoạt động như thế nào?
                  </p>
                  <div>
                    Bảo hành cho sự cố bị rơi hay đổ nước và hơn thế nữa cho
                    iPhone của bạn. Xem dịch vụ đi kèm.
                  </div>
                </div>
                <svg
                  className="absolute top-0 right-0"
                  xmlns="http://www.w3.org/2000/svg"
                  height="14px"
                  width="14px"
                  viewBox="0 0 448 512"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
