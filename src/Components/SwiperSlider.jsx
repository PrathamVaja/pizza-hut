import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../css/style.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SwiperSlider() {
    const cards = [
        {
            img: "./images/restuarent.png",
            name: "Restaurant"
        },
        {
            img: "./images/dinning.png",
            name: "Private Dining"
        },
        {
            img: "./images/coctal.png",
            name: "Cocktail Bar"
        },
        {
            img: "./images/restuarent.png",
            name: "Restaurant"
        },
        {
            img: "./images/dinning.png",
            name: "Private Dining"
        },
        {
            img: "./images/coctal.png",
            name: "Cocktail Bar"
        }
    ];

    return (
        <>
            <div className='w-full md:w-[70%] m-auto mt-[100px]'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}" style="background-color: ${className.includes('swiper-pagination-bullet-active') ? 'black' : 'white'};"></span>`;
                        }
                    }}
                  
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-full max-w-[420px] h-[440px] p-[15px] flex flex-col items-center justify-center bg-cover bg-center rounded-[20px] shadow-lg mx-auto' style={{ backgroundImage: `url(${card.img})` }}>
                                <div className='relative w-full h-full border-5 border-[#FFD40D] rounded-[20px]'>
                                    <p className=' home_banner_text absolute font-bold text-[25px] flex items-center justify-center w-full h-[47px] bottom-0  bg-[#FFD40D] rounded-[12px]'>{card.name}</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        
                    ))}
                    <div className="swiper-pagination-bullet mt-5"></div>
                </Swiper>
            </div>
        </>
    );
}