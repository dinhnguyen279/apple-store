import React, { useEffect, useState } from 'react'
// Phukien
import Mac from "../../assets/images/mac-store.png"
import iPhone from "../../assets/images/iphone-store.png"
import iPad from "../../assets/images/ipad-store.png"
import AppleWatchSmall from "../../assets/images/watch-store.png"
import AirPods from "../../assets/images/airpods.png"
import AirTag from "../../assets/images/airtags-store.png"
import AppleTV from "../../assets/images/appletv.png"
import PhuKien from "../../assets/images/phukien.png"
// Store
import iPHONE14PRO from "../../assets/images/store-card-40-iphone-14-pro-2023.png"
import KHOANGTHANHTOAN from "../../assets/images/store-card-50-monthly-payments-2.png"
import MACBOOKAIR from "../../assets/images/store-card-40-macbook-air-202306.png"
import IPADAIR from "../../assets/images/store-card-40-ipad-air-202203.png"
import APPLEWATCH from "../../assets/images/store-card-40-watch-s8-202303_GE.png"
import WATCHSERIES from "../../assets/images/store-card-40-watch-se-pride-202.png"
import IHONE14 from "../../assets/images/store-card-40-iphone-14-202303_G.png"
import IPADPRO from "../../assets/images/store-card-40-ipad-pro-202210.png"
import IPAD from "../../assets/images/store-card-40-ipad-202210.png"
// Chuyengia
import SERVICE from "../../assets/images/store-card-50-genius-202108.png"
import CHUYENGIA from "../../assets/images/store-card-50-specialist-help-20.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
//Phu kien tao net rieng
import Accessories from "../../assets/images/store-card-40-accessories-202303.png"
import iPhoneYello from "../../assets/images/MQUG3.png"
import iPhoneRed from "../../assets/images/MPT63.png"
import Tainghekhongday from "../../assets/images/MQLK3.png"
import DayappleWatch from "../../assets/images/MRTN3ref.png"
// To rõ, trong trẻo, tia phone
import free6thang from "../../assets/images/free6thang.png"
import taiphoneRed from "../../assets/images/taiphoneRed.png"
import taiphonePink from "../../assets/images/taiphonePink.png"
import airpordRed from "../../assets/images/airpordRed.png"
import taiphoneYellow from "../../assets/images/taiphoneYellow.png"

import "./Store.css"
import data from "../../data.json"
const Store = () => {
    const [current, setCurrent] = useState(0)
    const length = data['content-wrapper'].length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    useEffect(() => {
        setTimeout(() => {
            nextSlide()
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current]);

    return (
        <div className='mt-12 bg-[#f5f5f7]'>
            <section>
                <div className='py-4 bg-white text-center'>
                    <div className='transform-default relative flex flex-col items-center justify-center'>
                        <button onClick={() => prevSlide()} className='z-10 absolute left-0 top-1/2 translate-y-[-50%] p-5'> <FontAwesomeIcon icon={faChevronLeft} /> </button>
                        <button onClick={() => nextSlide()} className='z-10 absolute right-0 top-1/2 translate-y-[-50%] p-5'> <FontAwesomeIcon icon={faChevronRight} /> </button>
                        {
                            data['content-wrapper'].map((val, idx) => {
                                return (
                                    <>
                                        <div className={`mx-5 
                                        ${idx === current ? "translate-x-[0] transition-all ease-linear z-0" : "z-0 translate-x-[-20px]"}
                                    `} key={idx}>
                                            {
                                                idx === current && (
                                                    <>
                                                        <p className='text-sm'>{val.title}</p>
                                                        <a href={"/"} className='text-sm hover:underline hover:text-blue-500'>{val.subTitle} <FontAwesomeIcon icon={faChevronRight} className='text-[10px]' /></a>
                                                    </>

                                                )
                                            }
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>

            <section>
                <div className='transform-default'>
                    <div className='grid grid-cols-1 md:grid-cols-2 relative'>
                        <div className='text-3xl font-semibold py-2 md:py-16'>
                            <h1 className=''>Cửa Hàng.
                                <span className='text-[#6e6e73]'>{" "}Cách tốt nhất để mua sản phẩm bạn thích.</span>
                            </h1>
                        </div>
                        <div className='flex items-center justify-start md:justify-end space-x-2 py-2 md:py-16'>
                            <img src="https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png" alt=""
                                className='h-9 w-9 rounded-full bg-black overflow-hidden object-fill outline-none border-none' />
                            <div>
                                <p>Bạn cần trợ giúp mua sắm?</p>
                                <a href="/" title='A&W'>Hỏi Chuyên Gia</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='overflow-hidden'>
                    <div className='scroller-overflow'>
                        <div className='scroll_list'>
                            <div className='scroll_item'>
                                <div className='card-content-small space-y-2'>
                                    <div className='w-full'>
                                        <img src={Mac} alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>Mac</p>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card-content-small space-y-2'>
                                    <div className='w-full'>
                                        <img src={iPhone} alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>iPhone</p>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card-content-small space-y-2'>
                                    <div className='w-full'>
                                        <img src={iPad} alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>iPad</p>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card-content-small space-y-2'>
                                    <div className='w-full'>
                                        <img src={AppleWatchSmall} alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>Apple Watch</p>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card-content-small space-y-2'>
                                    <div className='w-full'>
                                        <img src={AirPods} alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>AirPods</p>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card-content-small space-y-2'>
                                    <div className='w-full'>
                                        <img src={AirTag} alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>AirTag</p>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card-content-small space-y-2'>
                                    <div className='w-full'>
                                        <img src={AppleTV} alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>Apple TV 4K</p>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card-content-small space-y-2'>
                                    <div className='w-full'>
                                        <img src={PhuKien} alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <p>Phụ Kiện</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The he moi */}
            <section>
                <div className='transform-default text-3xl font-semibold py-4'>
                    <h1 className=''>Thế hệ mới nhất.
                        <span className='text-[#6e6e73]'>{" "}Xem ngay có gì mới.</span>
                    </h1>
                </div>
                <div className='pb-4 overflow-hidden'>
                    <div className='scroller-overflow'>
                        <div className='scroll_list'>
                            <div className='scroll_item'>
                                <div className='relative card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='w-full card-content-img'>
                                            <img src={iPHONE14PRO} alt="img-apple" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-white space-y-2'>
                                            <h3 className='font-semibold text-xs'>IPHONE 14 PRO</h3>
                                            <div className='text-2xl font-semibold'>
                                                <a href="/">Pro. Vượt trội.</a>
                                            </div>
                                            <div>
                                                {"Từ"} <b>27.990.000đ</b>
                                                {" hoặc 1.140.000đ"}
                                                <span aria-hidden={true}>/tháng</span>
                                                <span> mõi tháng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='relative card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='w-full card-content-img'>
                                            <img src={KHOANGTHANHTOAN} alt="img-apple" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-black space-y-2'>
                                            <h3 className='font-semibold text-xs'>IPHONE 14 PRO</h3>
                                            <div className='text-2xl font-semibold'>
                                                <a href="/">Pro. Vượt trội.</a>
                                            </div>
                                            <div>
                                                {"Từ"} <b>27.990.000đ</b>
                                                {" hoặc 1.140.000đ"}
                                                <span aria-hidden={true}>/tháng</span>
                                                <span> mõi tháng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='relative card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='w-full card-content-img'>
                                            <img src={MACBOOKAIR} alt="" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-black space-y-2'>
                                            <h3 className=' font-semibold text-xs'>IPHONE 14 PRO</h3>
                                            <div className='text-2xl font-semibold'>
                                                <a href="/">Pro. Vượt trội.</a>
                                            </div>
                                            <div>
                                                {"Từ"} <b>27.990.000đ</b>
                                                {" hoặc 1.140.000đ"}
                                                <span aria-hidden={true}>/tháng</span>
                                                <span> mõi tháng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='relative card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='w-full card-content-img'>
                                            <img src={IPADAIR} alt="" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-white space-y-2'>
                                            <h3 className=' font-semibold text-xs'>IPHONE 14 PRO</h3>
                                            <div className='text-2xl font-semibold'>
                                                <a href="/">Pro. Vượt trội.</a>
                                            </div>
                                            <div>
                                                {"Từ"} <b>27.990.000đ</b>
                                                {" hoặc 1.140.000đ"}
                                                <span aria-hidden={true}>/tháng</span>
                                                <span> mõi tháng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='relative card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='w-full card-content-img'>
                                            <img src={APPLEWATCH} alt="" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-white space-y-2'>
                                            <h3 className=' font-semibold text-xs'>IPHONE 14 PRO</h3>
                                            <div className='text-2xl font-semibold'>
                                                <a href="/">Pro. Vượt trội.</a>
                                            </div>
                                            <div>
                                                {"Từ"} <b>27.990.000đ</b>
                                                {" hoặc 1.140.000đ"}
                                                <span aria-hidden={true}>/tháng</span>
                                                <span> mõi tháng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='relative card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='w-full card-content-img'>
                                            <img src={IHONE14} alt="" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-black space-y-2'>
                                            <h3 className=' font-semibold text-xs'>IPHONE 14 PRO</h3>
                                            <div className='text-2xl font-semibold'>
                                                <a href="/">Pro. Vượt trội.</a>
                                            </div>
                                            <div>
                                                {"Từ"} <b>27.990.000đ</b>
                                                {" hoặc 1.140.000đ"}
                                                <span aria-hidden={true}>/tháng</span>
                                                <span> mõi tháng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='relative card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='w-full card-content-img'>
                                            <img src={IPAD} alt="" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-black space-y-2'>
                                            <h3 className=' font-semibold text-xs'>IPHONE 14 PRO</h3>
                                            <div className='text-2xl font-semibold'>
                                                <a href="/">Pro. Vượt trội.</a>
                                            </div>
                                            <div>
                                                {"Từ"} <b>27.990.000đ</b>
                                                {" hoặc 1.140.000đ"}
                                                <span aria-hidden={true}>/tháng</span>
                                                <span> mõi tháng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='relative card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='w-full card-content-img'>
                                            <img src={WATCHSERIES} alt="" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-black space-y-2'>
                                            <h3 className=' font-semibold text-xs'>IPHONE 14 PRO</h3>
                                            <div className='text-2xl font-semibold'>
                                                <a href="/">Pro. Vượt trội.</a>
                                            </div>
                                            <div>
                                                {"Từ"} <b>27.990.000đ</b>
                                                {" hoặc 1.140.000đ"}
                                                <span aria-hidden={true}>/tháng</span>
                                                <span> mõi tháng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='relative card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='w-full card-content-img'>
                                            <img src={IPADPRO} alt="" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-white space-y-2'>
                                            <h3 className=' font-semibold text-xs'>IPHONE 14 PRO</h3>
                                            <div className='text-2xl font-semibold'>
                                                <a href="/">Pro. Vượt trội.</a>
                                            </div>
                                            <div>
                                                {"Từ"} <b>27.990.000đ</b>
                                                {" hoặc 1.140.000đ"}
                                                <span aria-hidden={true}>/tháng</span>
                                                <span> mõi tháng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support */}
            <section>
                <div className='transform-default text-3xl font-semibold py-4'>
                    <h1 className=''>Hỗ trợ tại đây.
                        <span className='text-[#6e6e73]'>{" "}Ngay khi bạn muốn, mọi việc bạn cần.</span>
                    </h1>
                </div>
                <div className='pb-4 overflow-hidden'>
                    <div className='scroller-overflow'>
                        <div className='scroll_list'>
                            <div className='scroll_item'>
                                <div className='relative card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='w-full card-content-support'>
                                            <img src={CHUYENGIA} alt="img-apple" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-black space-y-2'>
                                            <h3 className='font-semibold text-xs'>CHUYÊN GIA APPLE</h3>
                                            <div className='text-xl font-semibold'>
                                                <p>Mua hàng với tư vấn trực tiếp từ</p>
                                                <span>Chuyên gia trực tuyến.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='relative card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='w-full card-content-support'>
                                            <img src={SERVICE} alt="img-apple" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-black space-y-2'>
                                            <div className='text-xl font-semibold pt-6'>
                                                <p>Dịch vụ và hỗ trợ. Chúng tôi</p>
                                                <span>luôn sẵn sàng hỗ trợ.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apple store tao nen moi khac biet */}
            <section>
                <div className='transform-default text-3xl font-semibold py-4'>
                    <h1 className=''>Apple Store tạo nên mọi khác biệt.
                        <span className='text-[#6e6e73]'>{" "}Thêm nhiều lý do để mua sắm cùng chúng tôi.</span>
                    </h1>
                </div>
                <div className='pb-4 overflow-hidden'>
                    <div className='scroller-overflow'>
                        <div className='scroll_list'>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content card-content-other rounded-2xl p-8 pb-0'>
                                        <div className='pb-2 icon-svg'>
                                            <svg className='object-cover' width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                                <g id="Frictionless-Notification-AOS-Store-Card" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="Card-L-V1" transform="translate(-30.000000, -28.000000)" fill="#0066CC">
                                                        <g id="applestoreapp.logo_elevated" transform="translate(30.000000, 28.000000)">
                                                            <path d="M14.1387,11 C14.3327,9.15 15.9797,7.695 17.9997,7.695 C20.0207,7.695 21.6667,9.15 21.8617,11 L14.1387,11 Z M17.9837,16.698 C17.9837,16.257 18.1447,15.851 18.4747,15.469 C18.6437,15.274 18.8477,15.122 19.1017,14.995 C19.3467,14.868 19.5837,14.792 19.8137,14.783 C19.8217,14.842 19.8217,14.902 19.8217,14.961 C19.8217,15.41 19.6597,15.842 19.3387,16.232 C18.9497,16.698 18.4997,16.91 17.9917,16.867 C17.9837,16.816 17.9837,16.757 17.9837,16.698 L17.9837,16.698 Z M21.5407,21.849 C21.4067,22.163 21.2447,22.451 21.0677,22.722 C20.8217,23.086 20.6177,23.34 20.4567,23.476 C20.2197,23.705 19.9567,23.823 19.6777,23.832 C19.4827,23.832 19.2377,23.772 18.9567,23.654 C18.6777,23.535 18.4147,23.476 18.1777,23.476 C17.9327,23.476 17.6697,23.535 17.3817,23.654 C17.0937,23.772 16.8657,23.832 16.6867,23.84 C16.4237,23.849 16.1607,23.73 15.8907,23.476 C15.7207,23.323 15.5087,23.069 15.2547,22.696 C14.9847,22.298 14.7637,21.849 14.5857,21.324 C14.3997,20.765 14.3057,20.214 14.3057,19.688 C14.3057,19.087 14.4337,18.57 14.6877,18.13 C14.8817,17.782 15.1537,17.503 15.4837,17.299 C15.8227,17.096 16.1787,16.994 16.5687,16.986 C16.7807,16.986 17.0597,17.045 17.4077,17.181 C17.7457,17.316 17.9657,17.384 18.0677,17.384 C18.1447,17.384 18.3897,17.308 18.8047,17.147 C19.1947,17.003 19.5337,16.943 19.8047,16.969 C20.5417,17.028 21.0927,17.325 21.4647,17.867 C20.8047,18.282 20.4737,18.858 20.4827,19.595 C20.4917,20.171 20.6947,20.654 21.0837,21.027 C21.2707,21.205 21.4737,21.341 21.6947,21.434 C21.6517,21.578 21.5917,21.713 21.5407,21.849 L21.5407,21.849 Z M25.4997,11 L22.9617,11 C22.7677,8.54 20.6327,6.595 17.9997,6.595 C15.3677,6.595 13.2327,8.54 13.0377,11 L10.4997,11 C9.1187,11 7.9997,12.119 7.9997,13.5 L7.9997,27.5 C7.9997,28.881 9.1187,30 10.4997,30 L25.4997,30 C26.8807,30 27.9997,28.881 27.9997,27.5 L27.9997,13.5 C27.9997,12.119 26.8807,11 25.4997,11 L25.4997,11 Z M28.9997,0 L6.9997,0 C3.1337,0 -0.0003,3.134 -0.0003,7 L-0.0003,29 C-0.0003,32.866 3.1337,36 6.9997,36 L28.9997,36 C32.8667,36 35.9997,32.866 35.9997,29 L35.9997,7 C35.9997,3.134 32.8667,0 28.9997,0 L28.9997,0 Z M28.9997,2 C31.7567,2 33.9997,4.243 33.9997,7 L33.9997,29 C33.9997,31.757 31.7567,34 28.9997,34 L6.9997,34 C4.2427,34 1.9997,31.757 1.9997,29 L1.9997,7 C1.9997,4.243 4.2427,2 6.9997,2 L28.9997,2 L28.9997,2 Z" id="Fill-1"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className='text-black space-y-2'>
                                            <div className='text-xl font-semibold'>
                                                <p>Trải nghiệm <span className='text-[#007aff]'> mua sắm được cá nhân hóa</span> với <span className='text-[#007aff]'> ứng dụng Apple Store </span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content card-content-other rounded-2xl p-8 pb-0'>
                                        <div className='pb-2 icon-svg'>
                                            <svg className='object-cover' height="56" viewBox="0 0 40 56" width="40" class="as-svgicon as-svgicon-elevated" aria-hidden="true" role="img">
                                                <path d="m0 0h40v56h-40z" fill="none">
                                                </path>
                                                <path d="m20 10.7c9.5393 0 17.3 7.7607 17.3 17.3s-7.7607 17.3-17.3 17.3-17.3-7.7607-17.3-17.3 7.7607-17.3 17.3-17.3m0-2.2c-10.7696 0-19.5 8.7305-19.5 19.5s8.7304 19.5 19.5 19.5 19.5-8.7305 19.5-19.5-8.7304-19.5-19.5-19.5zm-1.3278 14.2374c1.6211 0 3.0078.7031 3.8477 1.875v-3.3984h-3.5742c-.4492 0-.7812-.3125-.7812-.7812 0-.4297.3125-.7617.7812-.7617h3.5742v-1.0742c0-.6055.3711-.9961.9766-.9961.5859 0 .9766.3906.9766.9961v1.0742h1.3281c.4688 0 .7617.332.7617.7617 0 .4688-.3125.7812-.7617.7812h-1.3281v12.3047c0 .5859-.3711.957-.9375.957s-.9375-.3711-.9375-.957v-1.0938c-.8594 1.2305-2.2852 1.9141-3.9062 1.9141-2.9883 0-5.2734-2.3438-5.2734-5.8008s2.2852-5.8008 5.2539-5.8008zm-3.6133 12.8516h9.2188c.4688 0 .7812.332.7812.8008 0 .4492-.332.7812-.7812.7812h-9.2188c-.4492 0-.7812-.332-.7812-.7812 0-.4688.3125-.8008.7812-.8008zm3.9062-3.0664c2.0312 0 3.5352-1.6992 3.5352-3.9648 0-2.2852-1.5039-3.9844-3.5352-3.9844-2.0508 0-3.5547 1.582-3.5547 3.9844s1.5039 3.9648 3.5547 3.9648z" fill="#6CCA4E">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className='text-black space-y-2'>
                                            <div className='text-xl font-semibold'>
                                                <p>Thanh toán</p>
                                                <span className='text-[#68cc45] fill-[#68cc45]'>lãi xuất thấp,</span>
                                                <p>thời gian đến 24 tháng. Tùy bạn chọn.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content card-content-other rounded-2xl p-8 pb-0'>
                                        <div className='pb-2 icon-svg'>
                                            <svg className='object-cover' width="29" height="56"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 56" class="as-svgicon as-svgicon-delivery as-svgicon-elevated as-svgicon-deliverydelevated" aria-hidden="true" role="img">
                                                <g>
                                                    <rect width="36" height="56" fill="none"></rect>
                                                    <path d="M33.905,17.063l-14-7.581a3.991,3.991,0,0,0-3.811,0l-14,7.581A4,4,0,0,0,0,20.581V35.419a4,4,0,0,0,2.095,3.518l14,7.581a3.989,3.989,0,0,0,3.811,0l14-7.581A4,4,0,0,0,36,35.419V20.581A4,4,0,0,0,33.905,17.063ZM17.048,11.241a1.993,1.993,0,0,1,1.9,0l13.8,7.47-6.383,3.645L11.943,14.005ZM18,27.133,3.253,18.711l6.629-3.589L24.355,23.5ZM3.048,37.178A2,2,0,0,1,2,35.419V20.581a1.955,1.955,0,0,1,.036-.262L17,28.865V44.733ZM34,35.419a2,2,0,0,1-1.048,1.759L19,44.733V28.865l14.964-8.545a1.955,1.955,0,0,1,.036.262Z" fill="#6CCA4E"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className='text-black space-y-2'>
                                            <div className='text-xl font-semibold'>
                                                <p>Giao hàng miễn phí</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content card-content-other rounded-2xl p-8 pb-0'>
                                        <div className='pb-2 icon-svg'>
                                            <svg className='object-cover' width="29" height="56" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 56" class="as-svgicon as-svgicon-applelogo as-svgicon-elevated" aria-hidden="true" role="img">
                                                <g>
                                                    <rect width="29" height="56" fill="none"></rect>
                                                    <defs id="defs2334">
                                                        <linearGradient id="linearGradient2904">
                                                            <stop style={{ stopColor: "#f8ab5e", stopOpacity: "1" }} offset="0" id="stop2900"></stop>
                                                            <stop style={{ stopColor: "#f3695f", stopPpacity: "1" }} offset="1" id="stop2902"></stop>
                                                        </linearGradient>
                                                        <linearGradient href="#linearGradient2904" id="linearGradient2906" x1="0.16650136" y1="23.976196" x2="15.151624" y2="23.976196" gradientUnits="userSpaceOnUse"></linearGradient>
                                                    </defs>
                                                    <g>
                                                        <path id="path2324" d="m 14.9,14.43 a 2.581,2.581 0 0 1 -0.472,-0.045 3.083,3.083 0 0 1 -0.067,-0.629 7.531,7.531 0 0 1 1.909,-4.694 7.76,7.76 0 0 1 5.1,-2.628 3.329,3.329 0 0 1 0.067,0.7 7.745,7.745 0 0 1 -1.837,4.825 6.728,6.728 0 0 1 -4.7,2.471 z m 12.807,3.818 a 7.851,7.851 0 0 0 -3.751,6.6 7.64,7.64 0 0 0 4.649,7.008 18.257,18.257 0 0 1 -2.381,4.919 c -1.482,2.134 -3.032,4.268 -5.391,4.268 -2.359,0 -2.965,-1.37 -5.683,-1.37 -2.65,0 -3.594,1.415 -5.75,1.415 -2.156,0 -3.661,-1.977 -5.391,-4.4 A 21.279,21.279 0 0 1 0.395,25.211 c 0,-6.738 4.38,-10.31 8.692,-10.31 2.291,0 4.2,1.5 5.638,1.5 1.37,0 3.5,-1.595 6.109,-1.595 a 8.172,8.172 0 0 1 6.873,3.442 z" style={{ fillOpacity: "1", fill: "url(#linearGradient2906)" }}></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className='text-black space-y-2'>
                                            <div className='text-xl font-semibold'>
                                                <p><span className='text-[#f3695f]'>Tùy chỉnh</span> Trải nghiệm mua sắm được cá nhân hóa với ứng dụng Apple Store</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content card-content-other rounded-2xl p-8 pb-0'>
                                        <div className='pb-2 icon-svg'>
                                            <svg className='object-cover' width="43" height="56" viewBox="0 0 43 56" xmlns="http://www.w3.org/2000/svg" class="as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated" aria-hidden="true" role="img">
                                                <path d="m0 0h43v56h-43z" fill="none" />
                                                <path d="m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z" fill="#ab45fb"></path><path d="m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z" fill="#ab45fb"></path><path d="m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z" fill="#ab45fb"></path><path d="m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z" fill="#ab45fb" />
                                            </svg>
                                        </div>
                                        <div className='text-black space-y-2'>
                                            <div className='text-xl font-semibold'>
                                                <p> <span className='text-[#ac39ff]'>Đổi thiết bị cũ đủ điều kiện, </span>
                                                    nhận điểm tín dụng để mua thiết bị mới.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content card-content-other rounded-2xl p-8 pb-0'>
                                        <div className='pb-2 icon-svg'>
                                            <svg className='object-cover' height="56" viewBox="0 0 35 35" width="56" class="as-svgicon as-svgicon-personalization as-svgicon-elevated as-svgicon-personalizationelevated" role="img" aria-hidden="true">
                                                <path d="m0 0h35v35h-35z" fill="none" />
                                                <path d="m17.5 6.1a11.4 11.4 0 1 1 -11.4 11.4 11.4129 11.4129 0 0 1 11.4-11.4m0-1.1a12.5 12.5 0 1 0 12.5 12.5 12.5 12.5 0 0 0 -12.5-12.5zm3.7707 11.3121a1.213 1.213 0 0 0 .9343-.4539 1.8075 1.8075 0 0 0 0-2.269 1.213 1.213 0 0 0 -.9343-.4539 1.2009 1.2009 0 0 0 -.921.4539 1.7981 1.7981 0 0 0 0 2.2624 1.1946 1.1946 0 0 0 .921.4605zm-7.5547 0a1.2454 1.2454 0 0 0 .9476-.4605 1.764 1.764 0 0 0 .0067-2.2624 1.2454 1.2454 0 0 0 -.9543-.4539 1.1813 1.1813 0 0 0 -.9143.4539 1.8311 1.8311 0 0 0 0 2.269 1.1813 1.1813 0 0 0 .9143.4539zm11.9727 2.2157a.655.655 0 0 0 -.6407-.08 27.5372 27.5372 0 0 1 -3.6906.861 24.1545 24.1545 0 0 1 -3.8507.3 24.2809 24.2809 0 0 1 -3.8575-.3 26.9794 26.9794 0 0 1 -3.6839-.861.6922.6922 0 0 0 -.6607.08.6079.6079 0 0 0 -.18.6139 7.7434 7.7434 0 0 0 1.4015 3.6306 8.5219 8.5219 0 0 0 2.9765 2.5961 8.3779 8.3779 0 0 0 4.0043.9677 8.35 8.35 0 0 0 3.9909-.9677 8.5849 8.5849 0 0 0 2.9832-2.5961 7.5976 7.5976 0 0 0 1.3948-3.6306.6384.6384 0 0 0 -.1871-.6139zm-1.4815 2.83a23.8689 23.8689 0 0 1 -3.3169.7008 24.6667 24.6667 0 0 1 -3.3836.2335 24.8628 24.8628 0 0 1 -3.3837-.2335 23.7823 23.7823 0 0 1 -3.33-.7008 6.2135 6.2135 0 0 1 -.694-1.8686 27.7532 27.7532 0 0 0 3.6171.7875 25.529 25.529 0 0 0 3.7908.28 25.5717 25.5717 0 0 0 3.784-.28 27.1787 27.1787 0 0 0 3.61-.7875 6.0407 6.0407 0 0 1 -.6937 1.8682z" fill="#06c" />
                                            </svg>
                                        </div>
                                        <div className='text-black space-y-2'>
                                            <div className='text-xl font-semibold'>
                                                <p>Thêm dấu ấn của riêng bạn.
                                                    <span className='text-[#007aff]'> Khắc kết hợp biểu tượng cảm xúc, tên và số miễn phí.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Phụ kiện tạo nét riêng */}
            <section>
                <div className='transform-default text-3xl font-semibold py-4'>
                    <h1 className=''>Phụ kiện.
                        <span className='text-[#6e6e73]'>{" "}Tạo nét riêng cho quà mà họ thích.</span>
                    </h1>
                </div>
                <div className='pb-4 overflow-hidden'>
                    <div className='scroller-overflow'>
                        <div className='scroll_list'>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='card-content-img'>
                                            <img src={Accessories} alt="img-apple" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-black space-y-2'>
                                            <div className='text-2xl font-semibold'>
                                                <a href="/">Đón máy mới về.</a>
                                            </div>
                                            <p className='font-normal text-base'>Khám phá yêu thích các màu mới tinh cho phụ kiện yêu thích của bạn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='card-content-accessories'>
                                            <div className='card-content-accessories-img'>
                                                <img src={iPhoneYello} alt="img-apple" className='w-auto h-[230px] object-cover mx-auto' />
                                            </div>
                                            <div className='flex flex-col relative'>
                                                <ul className="flex justify-center items-center absolute top-0 left-0 text-center w-[100%] list-none mx-auto pt-5 pb-3">
                                                    <li class="mr-2">
                                                        <img width="12" height="12" alt="Vàng Hoàng Yến" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUG3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611703" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUG3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611703, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUG3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1676665611703 2x" />
                                                    </li>
                                                    <li class="mr-2">
                                                        <img width="12" height="12" alt="Xanh Olive" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUH3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611914" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUH3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611914, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUH3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1676665611914 2x" />
                                                    </li>
                                                    <li class="mr-2">
                                                        <img width="12" height="12" alt="Màu Trời" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUJ3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611915" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUJ3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611915, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUJ3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1676665611915 2x" />

                                                    </li>
                                                    <li class="mr-2">
                                                        <img width="12" height="12" alt="Tím Diên Vĩ" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUK3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611915" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUK3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611915, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUK3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1676665611915 2x" />

                                                    </li>
                                                    <li class="mr-2">
                                                        <img width="12" height="12" alt="Hồng Phấn" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTH3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1661294191912" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTH3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1661294191912, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTH3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1661294191912 2x" />
                                                    </li>
                                                    <li class="mr-2">
                                                        <img width="12" height="12" alt="Xanh Giông Tố" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTF3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1661294191732" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTF3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1661294191732, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTF3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1661294191732 2x" />
                                                    </li>
                                                    <li class="">+</li>
                                                </ul>
                                                <div className='absolute mt-11 w-full'>
                                                    <span className='text-[#bf4800] text-xs'>Mới</span>
                                                </div>
                                                <h3 className='pt-20'>
                                                    <a href="/" className='text-base font-semibold limitTitle'>
                                                        Ốp lưng Silicon MagSafe cho iPhone 14 Pro-
                                                    </a>
                                                </h3>
                                                <div className='mt-5 content-price text-sm font-normal'>
                                                    <span>1.429.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='card-content-accessories'>
                                            <div className='card-content-accessories-img'>
                                                <img src={iPhoneRed} alt="img-apple" className='w-auto h-[230px] object-cover mx-auto' />
                                            </div>
                                            <div className='flex flex-col relative'>
                                                <ul className="flex justify-center items-center absolute top-0 left-0 text-center w-[100%] list-none mx-auto pt-5 pb-3">
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Vàng Hoàng Yến" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUG3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611703" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUG3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611703, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUG3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1676665611703 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Xanh Olive" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUH3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611914" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUH3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611914, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUH3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1676665611914 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Màu Trời" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUJ3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611915" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUJ3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611915, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUJ3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1676665611915 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Tím Diên Vĩ" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUK3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611915" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUK3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1676665611915, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQUK3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1676665611915 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Hồng Phấn" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTH3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1661294191912" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTH3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1661294191912, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTH3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1661294191912 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Xanh Giông Tố" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTF3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1661294191732" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTF3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1661294191732, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPTF3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1661294191732 2x" />
                                                    </li>
                                                    <li>+</li>
                                                </ul>
                                                <div className='absolute mt-11 w-full'>
                                                    <span className='text-[#bf4800] text-xs'>Mới</span>
                                                </div>
                                                <h3 className='pt-20'>
                                                    <span className='text-base font-semibold limitTitle'>
                                                        Ốp lưng Silicon MagSafe cho iPhone 14 Pro
                                                    </span>
                                                </h3>
                                                <div className='mt-5 content-price text-sm font-normal'>
                                                    <span>1.429.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='card-content-accessories'>
                                            <div className='card-content-accessories-img'>
                                                <img src={DayappleWatch} alt="img-apple" className='w-auto h-[230px] object-cover mx-auto' />
                                            </div>
                                            <div className='flex flex-col relative'>
                                                <ul className="flex justify-center items-center absolute top-0 left-0 text-center w-[100%] list-none mx-auto pt-5 pb-3">
                                                    <li>
                                                        <img width="12" height="12" alt="Pride Edition" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MRTL3ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682890822205" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MRTL3ref_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682890822205, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MRTL3ref_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1682890822205 2x" />
                                                    </li>
                                                </ul>
                                                <div className='absolute mt-11 w-full'>
                                                    <span className='text-[#bf4800] text-xs'>Mới</span>
                                                </div>
                                                <h3 className='pt-20'>
                                                    <span className='text-base font-semibold limitTitle'>
                                                        Dây Đeo Thể Thao Pride Edition 45mm - S/M
                                                    </span>
                                                </h3>
                                                <div className='mt-5 content-price text-sm font-normal limitTitle'>
                                                    <span>1.249.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='card-content-accessories'>
                                            <div className='card-content-accessories-img'>
                                                <img src={Tainghekhongday} alt="img-apple" className='w-auto h-[230px] object-cover mx-auto' />
                                            </div>
                                            <div className='flex flex-col relative'>
                                                <ul className="flex justify-center items-center absolute top-0 left-0 text-center w-[100%] list-none mx-auto pt-5 pb-3">
                                                    <li className='mr-2'>
                                                        <img width="12" height="12" alt="Trong Suốt" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLK3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682985972906" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLK3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682985972906, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLK3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682985972906 2x" />
                                                    </li>
                                                    <li className='mr-2'>
                                                        <img width="12" height="12" alt="Đen/Vàng Gold" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLH3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682361466573" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLH3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682361466573, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLH3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682361466573 2x" />
                                                    </li>
                                                    <li className=''>
                                                        <img width="12" height="12" alt="Trắng Ngà" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLJ3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682361466523" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLJ3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682361466523, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLJ3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682361466523 2x" />
                                                    </li>
                                                </ul>
                                                <div className='absolute mt-11 w-full'>
                                                    <span className='text-[#bf4800] text-xs'>Mới</span>
                                                </div>
                                                <h3 className='pt-20'>
                                                    <span className='text-base font-semibold limitTitle'>
                                                        Beats Studio Buds + Tai nghe không dây đích thực khử tiếng ồn — Trong Suốt
                                                    </span>
                                                </h3>
                                                <div className='mt-5 content-price text-sm font-normal'>
                                                    <span>3.999.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* To rõ trong trẻo. Giống phụ kiện tạo nét */}
            <section>
                <div className='transform-default text-3xl font-semibold py-4'>
                    <h1 className=''>To rõ, trong trẻo.
                        <span className='text-[#6e6e73]'>{" "}Lựa chọn hoàn hảo cho âm thanh tròn đầy, chất lượng cao.</span>
                    </h1>
                </div>
                <div className='pb-4 overflow-hidden'>
                    <div className='scroller-overflow'>
                        <div className='scroll_list'>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='card-content-img'>
                                            <img src={free6thang} alt="img-apple" className='w-full h-full object-cover' />
                                        </div>
                                        <div className='absolute top-0 left-0 p-8 text-black space-y-2'>
                                            <div className='text-2xl font-semibold'>
                                                <a href="/">Tặng 6 tháng sử dụng Apple Music miễn phí.</a>
                                            </div>
                                            <p className='font-normal text-base'>Đi kèm các thiết bị đủ điều kiện.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='card-content-accessories'>
                                            <div className='card-content-accessories-img'>
                                                <img src={taiphoneRed} alt="img-apple" className='w-auto h-[230px] object-cover mx-auto' />
                                            </div>
                                            <div className='flex flex-col relative'>
                                                <ul className="flex justify-center items-center absolute top-0 left-0 text-center w-[100%] list-none mx-auto pt-5 pb-3">
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Hồng Kim" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX442_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1686764360644" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX442_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1686764360644, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX442_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1686764360644 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Đen" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX432_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1686764360547" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX432_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1686764360547, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX432_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1686764360547 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Đỏ" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX472_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1686764360643" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX472_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1686764360643, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX472_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1686764360643 2x" />
                                                    </li>
                                                </ul>
                                                <div className='absolute mt-11 w-full'>
                                                    <span className='text-[#bf4800] text-xs'>{""}</span>
                                                </div>
                                                <h3 className='pt-20'>
                                                    <a href="/" className='text-base font-semibold limitTitle'>
                                                        Tai Nghe Beats Solo3 Wireless - (PRODUCT)RED Đỏ Cam
                                                    </a>
                                                </h3>
                                                <div className='mt-5 content-price text-sm font-normal'>
                                                    <span>4.499.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='card-content-accessories'>
                                            <div className='card-content-accessories-img'>
                                                <img src={taiphonePink} alt="img-apple" className='w-auto h-[230px] object-cover mx-auto' />
                                            </div>
                                            <div className='flex flex-col relative'>
                                                <ul className="flex justify-center items-center absolute top-0 left-0 text-center w-[100%] list-none mx-auto pt-5 pb-3">
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Hồng San Hô" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPLJ3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1677122348188" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPLJ3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1677122348188, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPLJ3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1677122348188 2x" /></li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Vàng Dạ Quang" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPLK3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1677122348072" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPLK3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1677122348072, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPLK3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1677122348072 2x" /></li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Xanh Hải Quân" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPLL3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1677122348072" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPLL3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1677122348072, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MPLL3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1677122348072 2x" /></li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Beats Đen" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2F3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1634663467000" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2F3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1634663467000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2F3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1634663467000 2x" /></li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Beats Trắng" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2G3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1634663475000" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2G3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1634663475000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2G3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1634663475000 2x" /></li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Tím Ngọc" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2H3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1634663485000" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2H3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1634663485000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2H3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1634663485000 2x" />
                                                    </li>
                                                    <li> +</li>
                                                </ul>
                                                <div className='absolute mt-11 w-full'>
                                                    <span className='text-[#bf4800] text-xs'>{""}</span>
                                                </div>
                                                <h3 className='pt-20'>
                                                    <span className='text-base font-semibold limitTitle'>
                                                        Tai Nghe Không Dây Đích Thực Beats Fit Pro - Tím Ngọc
                                                    </span>
                                                </h3>
                                                <div className='mt-5 content-price text-sm font-normal'>
                                                    <span>4.699.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='card-content-accessories'>
                                            <div className='card-content-accessories-img'>
                                                <img src={airpordRed} alt="img-apple" className='w-auto h-[230px] object-cover mx-auto' />
                                            </div>
                                            <div className='flex flex-col relative'>
                                                <ul className="flex justify-center items-center absolute top-0 left-0 text-center w-[100%] list-none mx-auto pt-5 pb-3">
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Trắng" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ4Y3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1621538155000" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ4Y3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1621538155000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ4Y3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1621538155000 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Hồng Lãng Mạn" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMT83_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1647541351979" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMT83_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1647541351979, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMT83_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1647541351979 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Xám Tinh Tế" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMT93_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1647541351979" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMT93_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1647541351979, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMT93_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1647541351979 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Xanh Đại Dương" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMT73_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1647541351967" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMT73_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1647541351967, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MMT73_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1647541351967 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Đen" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ4X3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1621876596000" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ4X3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1621876596000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ4X3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1621876596000 2x" />
                                                    </li>
                                                    <li>
                                                        <img width="12" height="12" alt="Beats Đỏ" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ503_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1621538271000" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ503_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1621538271000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ503_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=95&amp;.v=1621538271000 2x" />
                                                    </li>
                                                </ul>
                                                <div className='absolute mt-11 w-full'>
                                                    <span className='text-[#bf4800] text-xs'>{""}</span>
                                                </div>
                                                <h3 className='pt-20'>
                                                    <span className='text-base font-semibold limitTitle'>
                                                        Beats Studio Buds Tai nghe không dây đích thực khử tiếng ồn – Beats Đỏ
                                                    </span>
                                                </h3>
                                                <div className='mt-5 content-price text-sm font-normal limitTitle'>
                                                    <span>3.499.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='scroll_item'>
                                <div className='card'>
                                    <div className='card-content rounded-2xl'>
                                        <div className='card-content-accessories'>
                                            <div className='card-content-accessories-img'>
                                                <img src={taiphoneYellow} alt="img-apple" className='w-auto h-[230px] object-cover mx-auto' />
                                            </div>
                                            <div className='flex flex-col relative'>
                                                <ul className="flex justify-center items-center absolute top-0 left-0 text-center w-[100%] list-none mx-auto pt-5 pb-3">
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Lửa Xanh" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYMG2_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1601053189000" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYMG2_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1601053189000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYMG2_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1601053189000 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Beats Đen" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYMC2_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1601053162000" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYMC2_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1601053162000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYMC2_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1601053162000 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Xám Khói" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYME2_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1601053183000" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYME2_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1601053183000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYME2_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1601053183000 2x" />
                                                    </li>
                                                    <li className="mr-2">
                                                        <img width="12" height="12" alt="Vàng Xương Rồng" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYMD2_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1601053170000" srcset="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYMD2_SW_COLOR?wid=32&amp;hei=32&amp;fmt=jpeg&amp;qlt=95&amp;.v=1601053170000, https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYMD2_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1601053170000 2x" />
                                                    </li>
                                                </ul>
                                                <div className='absolute mt-11 w-full'>
                                                    <span className='text-[#bf4800] text-xs'>Mới</span>
                                                </div>
                                                <h3 className='pt-20'>
                                                    <span className='text-base font-semibold limitTitle'>
                                                        Beats Flex – Tai Nghe Không Dây Dùng Cả Ngày - Vàng Xương Rồng
                                                    </span>
                                                </h3>
                                                <div className='mt-5 content-price text-sm font-normal'>
                                                    <span>1.690.000đ</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Liên kết nhanh */}
            <section>
                <div className='transform-default text-3xl font-semibold py-4'>
                    <h1 className=''>Liên Kết Nhanh
                    </h1>
                </div>
                <div className='pb-4 overflow-hidden'>
                    <div className='scroller-overflow'>
                        <ul className='scroll_list'>
                            <li className='scroll_item pr-2'>
                                <div className='card border-none bg-[rgba(0,0,0,.08)] px-4 py-2 text-black text-sm rounded-full'>
                                    <a className='' href="/" target="_blank" >
                                        Trạng Thái Đơn Hàng
                                    </a>
                                </div>
                            </li>
                            <li className='scroll_item pr-2'>
                                <div className='card border-none bg-[rgba(0,0,0,.08)] px-4 py-2 text-black text-sm rounded-full'>
                                    <a className='' href="/" target="_blank" >
                                        Trợ Giúp Mua Hàng
                                    </a>
                                </div>
                            </li>
                            <li className='scroll_item pr-2'>
                                <div className='card border-none bg-[rgba(0,0,0,.08)] px-4 py-2 text-black text-sm rounded-full'>
                                    <a className='' href="/" target="_blank" >
                                        Trả Hàng
                                    </a>
                                </div>
                            </li>
                            <li className='scroll_item pr-2'>
                                <div className='card border-none bg-[rgba(0,0,0,.08)] px-4 py-2 text-black text-sm rounded-full'>
                                    <a className='' href="/" target="_blank" >
                                        Mục Đã Lưu
                                    </a>
                                </div>
                            </li>
                            <li className='scroll_item pr-2'>
                                <div className='card border-none bg-[rgba(0,0,0,.08)] px-4 py-2 text-black text-sm rounded-full'>
                                    <a className='' href="/" target="_blank" >
                                        Vận Chuyển & Giao Hàng
                                    </a>
                                </div>
                            </li>
                            <li className='scroll_item pr-2'>
                                <div className='card border-none bg-[rgba(0,0,0,.08)] px-4 py-2 text-black text-sm rounded-full'>
                                    <a className='' href="/" target="_blank" >
                                        Thanh toán
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div >
                </div >


            </section >
        </div >
    )
}

export default Store