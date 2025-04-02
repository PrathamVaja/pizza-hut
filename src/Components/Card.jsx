import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../css/card.css';

import { FreeMode, Pagination } from 'swiper/modules';

const Card = () => {

    const cards = [
        {
            sale: './images/sale.png',
            img: './images/first.png',
            title: 'Crispy Fried Chicken',
            price: '$14.85',
            disc_price: '10.85',
            cart: './images/cart.png'

        },
        {
            sale: './images/sale.png',
            img: './images/pizza.png',
            title: 'Shroom Bacon Burger',
            price: '$21.76',
            disc_price: '11.76',
            cart: './images/cart.png'

        },
        {
            sale: './images/sale.png',
            img: './images/black_coffee.png',
            title: 'Delicious Black Coffee',
            price: '$21.76',
            disc_price: '11.76',
            cart: './images/cart.png'

        },
        {
            sale: './images/sale.png',
            img: './images/first.png',
            title: 'Crispy Fried Chicken',
            price: '$14.85',
            disc_price: '10.85',
            cart: './images/cart.png'

        },
        {
            sale: './images/sale.png',
            img: './images/pizza.png',
            title: 'Shroom Bacon Burger',
            price: '$21.76',
            disc_price: '11.76',
            cart: './images/cart.png'

        },
        {
            sale: './images/sale.png',
            img: './images/black_coffee.png',
            title: 'Delicious Black Coffee',
            price: '$21.76',
            disc_price: '11.76',
            cart: './images/cart.png'

        }
    ]


    return (
        <>
            <div className='bg-[#F5F8FD]   mt-[80px]'>


                <div className='w-full flex justify-center '>
                    <div className='w-fit'>
                        <div className=' home_banner_text font-[600] text-[30px] sm:text-[50px]  '>Featured Dishes</div>
                        <div className=' w-[60%] h-[7px] rounded-2xl m-auto bg-[#FFD40D]'></div>
                    </div>
                </div>


                <div className=' m-auto mt-[100px] w-[80%] h-auto'>

                    <Swiper
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        slidesPerView={1}
                        breakpoints={{
                            540: { slidesPerView: 1, spaceBetween: 20 }, // Small devices
                           710: { slidesPerView: 2, spaceBetween: 20 }, // Tablets      
                            1300: { slidesPerView: 3, spaceBetween: 30 }, // Laptops
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >

                        <div className='' >



                            {
                                cards.map((card, index) => (
                                    <div >
                                        <SwiperSlide key={index}>
                                            <div className='w-full h-full p-2 border-4 border-[#FFD40D] rounded-[20px] ' >
                                                <div className=' home_banner_text w-[70px] h-[70px] flex items-center justify-center font-bold rounded-full bg-[#FFD40D]'> SALE </div>

                                                <div>
                                                    <div className=' m-auto w-[230px] sm:w-[250px] h-[110px] mt-[50px] rounded-[50px] bg-[#F3274C]'>
                                                    </div>
                                                    <div className=' -mt-[170px] m-auto w-[230px] sm:w-[250px]'>
                                                        <img className=' object-cover ' src={card.img} alt="" />
                                                    </div>

                                                    <div className=' ml-[30px] mt-[30px] '>
                                                        <p className='home_banner_text font-[600] w-fit'>{card.title}</p>
                                                        <p className='home_banner_text font-[600] text-[26px] text-[#555555] w-fit'><span className='home_banner_text font-[500] text-[16px] text-[#555555]  line-through'>{card.price}</span>  <span className='home_banner_text font-[600] text-[26px] text-[#F3274C]'>$</span>{card.disc_price} </p>
                                                    </div>

                                                    <div className='w-[50px] ml-auto -mt-[30px] mb-1 mr-2'>
                                                        <img src={card.cart} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />

                                        </SwiperSlide>
                                    </div>
                                ))
                            }


                        </div>
                        <div className="swiper-pagination-bullet mt-[50px]"></div>
                    </Swiper>

                </div>
            </div>

        </>
    )
}

export default Card