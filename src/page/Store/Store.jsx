import React from 'react'
import Mac from "../../assets/images/mac-store.png"
import iPhone from "../../assets/images/iphone-store.png"
import iPad from "../../assets/images/ipad-store.png"
import AppleWatchSmall from "../../assets/images/watch-store.png"
import AirPods from "../../assets/images/airpods.png"
import AirTag from "../../assets/images/airtags-store.png"
import AppleTV from "../../assets/images/appletv.png"
import PhuKien from "../../assets/images/phukien.png"
import iPHONE14PRO from "../../assets/images/store-card-40-iphone-14-pro-2023.png"
import KHOANGTHANHTOAN from "../../assets/images/store-card-50-monthly-payments-2.png"
import MACBOOKAIR from "../../assets/images/store-card-40-macbook-air-202306.png"
import IPADAIR from "../../assets/images/store-card-40-ipad-air-202203.png"
import APPLEWATCH from "../../assets/images/store-card-40-watch-s8-202303_GE.png"
import WATCHSERIES from "../../assets/images/store-card-40-watch-se-pride-202.png"
import IHONE14 from "../../assets/images/store-card-40-iphone-14-202303_G.png"
import IPADPRO from "../../assets/images/store-card-40-ipad-pro-202210.png"
import IPAD from "../../assets/images/store-card-40-ipad-202210.png"
import "./Store.css"

const Store = () => {
    return (
        <div className='mt-12 bg-[#f5f5f7]'>
            <div className='h-16 bg-white'>
                <div className='transform-default'>
                    aaaa
                </div>
            </div>
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
            <div className='transform-default text-3xl font-semibold py-4'>
                <h1 className=''>Thế hệ mới nhất.
                    <span className='text-[#6e6e73]'>{" "}Xem ngay có gì mới.</span>
                </h1>
            </div>
            <div className='pb-4 overflow-hidden'>
                <div className='scroller-overflow'>
                    <div className='scroll_list'>
                        <div className='scroll_item'>
                            <div className='relative rounded-2xl card-content'>
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
                                    </div>  </div>
                            </div>
                        </div>
                        <div className='scroll_item'>
                            <div className='relative rounded-2xl card-content'>
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
                        <div className='scroll_item'>
                            <div className='relative rounded-2xl card-content'>
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
                        <div className='scroll_item'>
                            <div className='relative rounded-2xl card-content'>
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
                        <div className='scroll_item'>
                            <div className='relative rounded-2xl card-content'>
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
                        <div className='scroll_item'>
                            <div className='relative rounded-2xl card-content'>
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
                        <div className='scroll_item'>
                            <div className='relative rounded-2xl card-content'>
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
                        <div className='scroll_item'>
                            <div className='relative rounded-2xl card-content'>
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
                        <div className='scroll_item'>
                            <div className='relative rounded-2xl card-content'>
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
    )
}

export default Store