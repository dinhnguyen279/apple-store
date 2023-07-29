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
// Trong hộp có gì?
import iphone14tronghop from "../../assets/images/iphone14tronghop.png";
import congsaclight from "../../assets/images/congsaclight.png";
import buyIphone14 from "../../assets/images/Buy-iPhone144.png";

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
  const [showListItem, setShowListItem] = useState<boolean>(true);
  const [showItemFirst, setShowItemFirst] = useState<boolean>(false);
  const [showItemSecond, setShowItemSecond] = useState<boolean>(false);
  const [showItemThird, setShowItemThird] = useState<boolean>(false);
  const [showItemTheEnd, setShowItemTheEnd] = useState<boolean>(false);
  const [showFormAddToCart, setShowFormAddToCart] = useState<boolean>(false);
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

  // const handleShowItems = () => {};

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
      <section className="container-detail">
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
                Trả góp theo tháng với lãi suất 1.67% sau khi thanh toán lần đầu
                20%
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

      <section className="container-detail">
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
              <div className="md:hidden block space-y-10">
                <div className="flex flex-nowrap snap-x snap-mandatory overflow-scroll w-[90vw] mx-auto scroller-none">
                  {dataImgProduct.map((val, idx) => {
                    return (
                      <div
                        className="snap-center flex-shrink-0 flex justify-center items-center h-full w-full bg-[#fbfbfb]"
                        key={idx + 1}
                      >
                        <div className="h-[246px] rounded-3xl overflow-hidden">
                          <img
                            src={val.img}
                            alt={val.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    );
                  })}
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
                      Khám phá sự khác biệt về kích thước màn hình và thời lượng
                      pin.
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
                    <label className="color-item_label" htmlFor="Đen Ánh Thép">
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

      <section className="container-detail">
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
                    setShowFormAddToCart(false);
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
                  id="BuyNewIphone"
                  checked={textRadio === "BuyNewIphone" ? true : false}
                />
                <label
                  className="column-right-first-label rounded-2xl h-auto w-full cursor-pointer flex items-center justify-center"
                  htmlFor="BuyNewIphone"
                  onClick={() => {
                    setTextRadio("BuyNewIphone");
                    setChooseIphone(false);
                    setReNew(true);
                  }}
                >
                  <span className="text-center">
                    <p className="text-lg font-semibold">
                      Không đổi cũ và muốn lấy mới
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
          className={`relative grid md:grid-cols-4 grid-cols-1 trade-in-under transition-all duration-1000 ease-in-out
            ${
              chooseIphone
                ? "h-full opacity-100"
                : "h-0 opacity-0 top-0 left-0 -z-50"
            }
            `}
        >
          <hr
            className={`absolute bottom-0 left-0 w-full bg-white transition-all duration-1000 ease-in-out
              ${chooseIphone ? "h-0 border-transparent" : "h-full"}
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
                      <option className="text-black" value="iPhone 14 Pro Max">
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
        {/* Buy iPhone */}
        <div
          className={`grid md:grid-cols-4 grid-cols-1 trade-in transition-all duration-300 ease-in-out
            ${reNew ? "h-full block" : "h-0 hidden"}
            `}
        >
          <div className="w-full text-2xl font-semibold col-span-3 trade-in-header">
            <h2>
              <span>Gói bảo hành AppleCare+.</span>
              <span className="text-[#6e6e73]">Bảo vệ iPhone mới của bạn.</span>
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
                    setShowFormAddToCart(true);
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
                        Ở mức lãi xuất 1.67%, sau khi thanh toán lần đầu 20% là
                        1.060.000đ
                      </p>
                    </span>
                  </span>
                  <div className="border-t-[1px] p-4 border-[#86868b]">
                    <ul className="text-sm list-disc font-light">
                      <li>
                        Nay đã có dịch vụ sửa chữa không hạn chế cho trường hợp
                        hư hỏng do sự cố bất ngờ.
                      </li>
                      <li>
                        Dịch vụ sửa chữa được Apple chứng nhận sử dụng linh kiện
                        Apple chính hãng
                      </li>
                      <li>
                        Dịch Vụ Thay Thế Cấp Tốc — Chúng tôi sẽ gửi cho bạn một
                        thiết bị thay thế để bạn không phải chờ sửa chữa
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
                  onClick={() => {
                    setTextRadio("NoAppleCare");
                    setShowFormAddToCart(true);
                  }}
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
      {/* Add To Cart*/}
      <div
        className={`add-to-cart bg-[#f5f5f7] px-5
            ${
              showFormAddToCart
                ? "h-full opacity-100"
                : "h-0 opacity-0 relative top-0 left-0 -z-50"
            }
      `}
      >
        <div className="container-detail trade-in w-full pt-10 grid md:grid-cols-3 grid-cols-1 transition-all duration-300 ease-in-out">
          <div className="w-full text-4xl font-semibold pr-5 flex flex-col justify-between">
            <h2>
              <span>iPhone 14 Pro Max mới của bạn.</span>
              <p className="text-[#6e6e73]">Theo cách bạn muốn.</p>
            </h2>
            <div className="md:pt-0 pt-10 md:mx-0 mx-auto">
              <img
                src={buyIphone14}
                alt="buyIphone14"
                className="md:max-w-full max-w-xs w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:pt-0 pt-9 pr-5">
            <div className="flex flex-col w-full space-y-2 border-b-[1px] border-[#d2d2d7] pb-10">
              <div className="text-base">
                <p>iPhone 14 Pro Max 1TB Tía Đậm</p>
              </div>
              <div className="text-base">
                <span>
                  <b>Tổng cộng 45.249.000đ</b>
                </span>
                <p>hoặc</p>
              </div>
              <div className="">
                <span className="pb-1 text-base">
                  <b>
                    1.842.000đ <span aria-hidden>/tháng cho 24 tháng*</span>
                  </b>
                </span>
                <p className="text-xs">
                  Ở mức lãi suất 1.67%, sau khi thanh toán lần đầu 20% là
                  9.050.000đ
                </p>
              </div>
              <div className="pt-5 text-sm">
                <p>Bao gồm giá thuế GTGT khoảng 4.113.545đ</p>
                <a href="/product" className="text-[#06c]">
                  Khám phá thêm các lựa chọn trả góp hàng tháng
                </a>
              </div>
              <div className="md:hidden block">
                <div className="py-6">
                  <button className="bg-[#0071e3] hover:bg-[#0071e3e1] py-3 px-6 text-white w-full rounded-lg">
                    Thêm vào giỏ hàng
                  </button>
                </div>
                <div className="flex items-start gap-x-3">
                  <span>
                    <svg
                      viewBox="0 0 25 25"
                      role="img"
                      aria-hidden="true"
                      width="25px"
                      height="25px"
                    >
                      <path fill="none" d="M0 0h25v25H0z"></path>
                      <path
                        d="M23.482 12.847l-2.92-3.209A1.947 1.947 0 0018.985 9H17V6.495a2.5 2.5 0 00-2.5-2.5h-11a2.5 2.5 0 00-2.5 2.5v9.75a2.5 2.5 0 002.5 2.5h.548A2.746 2.746 0 006.75 21.02 2.618 2.618 0 009.422 19h6.681a2.744 2.744 0 005.347-.23h.735A1.656 1.656 0 0024 16.98v-2.808a1.937 1.937 0 00-.518-1.325zM8.426 18.745a1.74 1.74 0 01-3.352 0 1.577 1.577 0 01.015-1 1.738 1.738 0 013.322 0 1.578 1.578 0 01.015 1zM9.447 18a2.726 2.726 0 00-5.394-.255H3.5a1.502 1.502 0 01-1.5-1.5v-9.75a1.502 1.502 0 011.5-1.5h11a1.502 1.502 0 011.5 1.5V18zm10.972.77a1.738 1.738 0 01-3.337 0 1.573 1.573 0 010-1 1.742 1.742 0 113.337 1zM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0017 16.165V10h1.986a.976.976 0 01.838.314l2.927 3.214a.95.95 0 01.249.644zm-1.324-3.36a.512.512 0 01.174.38h-3.306a.499.499 0 01-.544-.528V11h1.073a.76.76 0 01.594.268z"
                        fill="#1d1d1f"
                      ></path>
                    </svg>
                  </span>
                  <div>
                    <p>Đặt hàng trước 3:00 chiều. Giao hàng đến</p>
                    <span className="text-[#06c]">Hồ Chí Minh</span>
                    <p>
                      <b>Th 3 01/08/2023 - Miễn Phí</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5 pb-10 text-sm space-y-1 border-b-[1px] border-[#d2d2d7]">
              <h2 className="font-semibold">Vẫn chưa thể quyết định?</h2>
              <p>
                Thêm sản phẩm này vào danh sách và dễ dàng quay lại xem sau đó.
              </p>
              <p className="text-[#06c] hover:underline flex items-center cursor-pointer">
                <svg width="21" height="21" role="img" aria-hidden="true">
                  <path fill="none" d="M0 0h21v21H0z"></path>
                  <path
                    d="M12.8 4.25a1.202 1.202 0 011.2 1.2v10.818l-2.738-2.71a1.085 1.085 0 00-1.524 0L7 16.269V5.45a1.202 1.202 0 011.2-1.2h4.6m0-1H8.2A2.2 2.2 0 006 5.45v11.588a.768.768 0 00.166.522.573.573 0 00.455.19.644.644 0 00.38-.128 5.008 5.008 0 00.524-.467l2.916-2.885a.084.084 0 01.118 0l2.916 2.886a6.364 6.364 0 00.52.463.628.628 0 00.384.131.573.573 0 00.456-.19.768.768 0 00.165-.522V5.45a2.2 2.2 0 00-2.2-2.2z"
                    fill="#06c"
                  ></path>
                </svg>
                <span>Lưu để dùng sau</span>
              </p>
            </div>
            <div className="py-8 text-sm">
              Chi tiết giao hàng cho khu vực của bạn sẽ được hiển thị trong phần
              Thanh Toán.
            </div>
          </div>
          <div className="md:block hidden">
            <div className="flex items-start gap-x-3">
              <span>
                <svg
                  viewBox="0 0 25 25"
                  role="img"
                  aria-hidden="true"
                  width="25px"
                  height="25px"
                >
                  <path fill="none" d="M0 0h25v25H0z"></path>
                  <path
                    d="M23.482 12.847l-2.92-3.209A1.947 1.947 0 0018.985 9H17V6.495a2.5 2.5 0 00-2.5-2.5h-11a2.5 2.5 0 00-2.5 2.5v9.75a2.5 2.5 0 002.5 2.5h.548A2.746 2.746 0 006.75 21.02 2.618 2.618 0 009.422 19h6.681a2.744 2.744 0 005.347-.23h.735A1.656 1.656 0 0024 16.98v-2.808a1.937 1.937 0 00-.518-1.325zM8.426 18.745a1.74 1.74 0 01-3.352 0 1.577 1.577 0 01.015-1 1.738 1.738 0 013.322 0 1.578 1.578 0 01.015 1zM9.447 18a2.726 2.726 0 00-5.394-.255H3.5a1.502 1.502 0 01-1.5-1.5v-9.75a1.502 1.502 0 011.5-1.5h11a1.502 1.502 0 011.5 1.5V18zm10.972.77a1.738 1.738 0 01-3.337 0 1.573 1.573 0 010-1 1.742 1.742 0 113.337 1zM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0017 16.165V10h1.986a.976.976 0 01.838.314l2.927 3.214a.95.95 0 01.249.644zm-1.324-3.36a.512.512 0 01.174.38h-3.306a.499.499 0 01-.544-.528V11h1.073a.76.76 0 01.594.268z"
                    fill="#1d1d1f"
                  ></path>
                </svg>
              </span>
              <div>
                <p>Đặt hàng trước 3:00 chiều. Giao hàng đến</p>
                <span className="text-[#06c]">Hồ Chí Minh</span>
                <p>
                  <b>Th 3 01/08/2023 - Miễn Phí</b>
                </p>
              </div>
            </div>
            <div className="pt-6">
              <button className="bg-[#0071e3] hover:bg-[#0071e3e1] py-3 px-6 text-white w-full rounded-lg">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="container-detail">
        <div className="text-center pt-16 pb-10 z-50">
          <h2>
            <span className="font-semibold text-4xl">Trong hộp có gì</span>
          </h2>
        </div>
        <div className="wrapper-content scroller-none">
          <div className="flex flex-nowrap w-full">
            <ul className="flex flex-wrap justify-center items-center w-full wrapper-list">
              <li className="text-center grow wrapper-item">
                <div className="pl-60 text-center">
                  <img
                    src={iphone14tronghop}
                    className="h-[339px] w-auto object-cover mx-auto"
                    alt="iphone14tronghop"
                  />
                </div>
                <p className="pl-64 px-4 pt-6">iPhone 14 Pro Max</p>
              </li>
              <li className="text-center grow wrapper-item">
                <div className="pr-60 text-center">
                  <img
                    src={congsaclight}
                    className="h-[339px] w-auto object-cover mx-auto"
                    alt="congsaclight"
                  />
                </div>
                <p className="pr-60 px-4 pt-6">Cáp USB-C sang Lightning</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full text-[#6e6e73] text-base font-light text-center mt-4 pt-10 space-y-4">
          <p className="font-semibold">
            <strong>Các mục tiêu về môi trường của chúng tôi.</strong>
          </p>
          <p>
            Là một phần trong nỗ lực của chúng tôi nhằm đạt được{" "}
            <a href="/" className="text-[#06c]">
              trạng thái trung hòa carbon vào năm 2030
            </a>
            , iPhone 14 Pro và iPhone 14 Pro Max không đi kèm bộ tiếp hợp nguồn
            hoặc EarPods. Trong hộp có cáp chuyển đổi từ USB-C sang Lightning hỗ
            trợ sạc nhanh và tương thích với bộ tiếp hợp nguồn USB‑C cũng như
            cổng máy tính.
          </p>
          <p>
            Chúng tôi khuyến khích bạn sử dụng lại cáp chuyển từ USB‑A sang
            Lightning, bộ tiếp hợp nguồn và tai nghe hiện tại của bạn tương
            thích với các phiên bản iPhone này. Nhưng nếu cần bất kỳ bộ tiếp hợp
            nguồn hoặc tai nghe mới nào của Apple, bạn đều có thể mua.
          </p>
        </div>
      </section>

      <hr className="my-10 border-[1px] border-[#d2d2d7]" />

      <section className="transform-default">
        <h2 className="text-3xl font-semibold">
          <button
            onClick={() => setShowListItem(!showListItem)}
            className="flex justify-between items-center py-8 w-full"
          >
            <span>Câu Hỏi Thường Gặp</span>
            <span
              className={`${
                showListItem ? "icon-rotate" : ""
              }  w-8 flex justify-center m-0 text-[#86868b]`}
            >
              <svg
                className="transition-all duration-300 ease-linear"
                viewBox="0 0 17 8.85"
                role="img"
                aria-hidden="true"
                width="35px"
                height="35px"
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
                    Tại sao tôi nên mua iPhone không có SIM trên apple.com?
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
                Tại sao tôi nên mua iPhone không có SIM trên apple.com? Một
                iPhone chưa kết nối được mua từ apple.com sẽ được mở khóa. Điều
                này có nghĩa là bạn sẽ không bị ràng buộc với một nhà cung cấp
                mạng hoặc một hợp đồng dịch vụ nhiều năm nào. Bạn có thể chọn
                mạng và giá cước phù hợp với mình. Sau khi được kích hoạt,
                iPhone mới của bạn vẫn được mở khóa, có nghĩa là bạn có thể sử
                dụng thiết bị này với bất kỳ nhà mạng nào cung cấp dịch vụ cho
                iPhone.
              </div>
            </li>

            <li className="border-t-[1px] border-[#d2d2d7]">
              <h3 className="font-semibold hover:text-[#06c]">
                <button
                  onClick={() => setShowItemSecond(!showItemSecond)}
                  className="flex justify-between w-full py-6"
                >
                  <span>
                    Việc chuyển dữ liệu và thiết lập iPhone mới có dễ không?
                  </span>
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
                  Có, iCloud giúp di chuyển cài đặt, ảnh, ứng dụng và tài liệu
                  của bạn sang thiết bị mới một cách mượt mà. Chỉ cần đăng nhập
                  vào iCloud khi bạn thiết lập thiết bị mới, truy cập vào bản
                  sao lưu iCloud trên thiết bị trước đó và tất cả sẽ sẵn sàng
                  chỉ sau vài phút.
                </p>
                <p>
                  Bạn không có đủ dung lượng iCloud để hoàn tất quá trình sao
                  lưu? iCloud sẽ cấp cho bạn đủ dung lượng tạm thời để đảm bảo
                  bạn có thể sao lưu thiết bị và truyền tất cả dữ liệu, miễn phí
                  (cần sử dụng iOS 15).
                </p>
                <p>
                  Với tính năng Bắt Đầu Nhanh, bạn có thể khôi phục dữ liệu và
                  nội dung từ bản sao lưu iCloud sang iPhone mới. Đối với điện
                  thoại sử dụng iOS 12.4 trở lên, tính năng Bắt Đầu Nhanh có tùy
                  chọn sử dụng chế độ di chuyển từ thiết bị này sang thiết bị
                  khác, cho phép bạn truyền tất cả dữ liệu của mình từ thiết bị
                  hiện tại sang thiết bị mới thông qua mạng không dây.
                </p>
                <p>
                  Nếu bạn đang chuyển từ Android, trước tiên bạn cần tải xuống
                  ứng dụng Chuyển sang iOS và làm theo quy trình thiết lập trên
                  iPhone mới.
                </p>
                <p>
                  Để tìm hiểu cách truyền dữ liệu sang iPhone mới, hãy truy cập{" "}
                  <a
                    href="support.apple.com/vi-vn/HT201269"
                    className="text-[#06c]"
                  >
                    support.apple.com/vi-vn/HT201269.
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
                    iPhone của tôi có hoạt động trên toàn thế giới không?
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
                Các phiên bản iPhone hiện được bán trên apple.com có thể kết nối
                với mạng tương thích trên thế giới, bao gồm mạng 5G và 4G LTE.
                Hãy kiểm tra với nhà cung cấp mạng gia đình của bạn về phí
                chuyển vùng quốc tế, hoặc mua SIM nano tương thích ở nơi bạn
                sinh sống.
              </div>
            </li>

            <li className="border-t-[1px] border-[#d2d2d7]">
              <h3 className="font-semibold hover:text-[#06c]">
                <button
                  onClick={() => setShowItemTheEnd(!showItemTheEnd)}
                  className="flex justify-between w-full py-6"
                >
                  <span>
                    Tôi có thể chọn phương thức giao hàng nào và khi nào tôi sẽ
                    nhận được hàng?
                  </span>
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
                  Thời gian giao hàng ước tính tùy thuộc vào tình trạng sẵn có
                  của sản phẩm và phương thức giao hàng bạn chọn. Bạn sẽ được
                  biết ngày giao hàng chính xác sau khi đặt hàng.
                </p>
                <p>
                  Phương thức giao hàng tiêu chuẩn được miễn phí cho tất cả đơn
                  hàng trực tuyến.
                </p>
                <p>
                  Đơn hàng đặt qua <a href="apple.com">apple.com</a> chỉ có thể
                  được vận chuyển trong quốc gia hoặc khu vực mua. Truy cập cửa
                  hàng trực tuyến của địa điểm mà bạn muốn sản phẩm được giao
                  đến.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Detail;
