import React from 'react'
import SwiperSlider from './SwiperSlider'
import Category from './Category'
import Card from './Card'

const Hero = () => {
    return (
        <>
            <div className=' mt-[100px]'>


                <div className='w-[75%] m-auto flex flex-col md:flex-row'>
                    <div className='w-full md:w-[45%]'>
                        <p className='home_banner_text font-bold text-[18px] leading-[30px] tracking-[2px] text-[#F3274C]'>About The Food Restaurant</p>

                        <p className='font-[600] home_banner_text leading-normal md:leading-[70px] text-[40px] sm:text-[60px]'>New Ground with Dishes to be Enjoyed</p>
                    </div>

                    <div className=' home_banner_text w-full md:w-[60%] text-[18px] flex flex-col mt-[60px] md:mt-0'>
                        <p className='w-full md:w-[80%] ml-auto'>Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci
                            varius nat oque pena tibus et urient monte nascete ridiculus mus
                            nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan
                            ligula.
                        </p>

                        <div className='w-full md:w-[80%] ml-auto flex items-center gap-4 mt-[30px]'>
                            <div>
                                <img src="./images/avatar.png" alt="Rounded avatar" />
                            </div>

                            <div>
                                <p className='home_banner_text font-[600] text-[20px] md:text-[30px] tracking-[2px]'>Willimes James</p>
                                <p className='text-[14px]  md:text-[18px]'>Director and Chief Operations Officer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <SwiperSlider/>
                </div>


                <div>
                    <Category/>
                </div>

                <div>
                    <Card/>
                </div>
            </div>



        </>
    )
}

export default Hero