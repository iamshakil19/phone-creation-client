import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <div className="bg-white">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co/cwnSpyb/slider6.jpg" alt="slider-img-1" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/0r75Wwv/slider4.jpg" alt="slider-img-2" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/2Pdpq8N/slider2.jpg" alt="slider-img-3" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/LZRyKYr/slider-cpu-1.jpg" alt="slider-img-4" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/BwBWpB9/slider3.jpg" alt="slider-img-5" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/GQNPXNy/slider1.jpg" alt="slider-img-6" /></SwiperSlide>
            </Swiper>
        </div>
    );
}