import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"; // Import icons
import ExpBanner from "./ExpBanner";

const HeroSlider = () => {
    return (
        <div className="relative w-full">
            {/* Swiper Slider */}
            <Swiper
                cssMode={true}
                loop={true}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ExpBanner />
                </SwiperSlide>
                <SwiperSlide>
                    <ExpBanner />
                </SwiperSlide>
                <SwiperSlide>
                    <ExpBanner />
                </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="absolute bottom-4 mb-[20px] w-full flex justify-between px-[50px] md:px-[100px] lg:px-[200px] z-50">

                {/* Left Arrow */}
                <button className="custom-prev w-12 h-12 bg-white/80 border border-gray-300 rounded-full flex items-center justify-center shadow-lg hover:bg-[#F3274C] transition duration-300">
                    <FaArrowLeftLong className="text-gray-700 text-2xl hover:text-white transition" />
                </button>

                {/* Right Arrow */}
                <button className="custom-next w-12 h-12 bg-white/80 border border-gray-300 rounded-full flex items-center justify-center shadow-lg hover:bg-[#F3274C] transition duration-300">
                    <FaArrowRightLong className="text-gray-700 text-2xl hover:text-white transition" />
                </button>
            </div>
        </div>
    );
};

export default HeroSlider;
