import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";
import slider4 from "../../../assets/images/slider4.jpg";
import slider5 from "../../../assets/images/slider5.jpg";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-1/2 transition-transform space-y-5"
      >
        <SwiperSlide>
          <img src={slider1} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="slider" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
