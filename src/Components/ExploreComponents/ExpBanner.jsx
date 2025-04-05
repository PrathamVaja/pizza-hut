import React from 'react';
import '../../css/explore.css';
import Button from './Button';

const ExpBanner = () => {
    return (
        <div className='w-full h-auto md:h-[650px] flex flex-col md:flex-row items-center justify-center bg-cover bg-[url(./images/banner_back.png)] px-4 md:px-10 lg:px-20'>

            {/* Left Content  */}
            <div className='text-white text-center mt-[30px] md:mt-0  md:text-left max-w-md'>
                <p className='home_banner_text text-xl md:text-2xl text-[#F3274C] font-medium'>
                    Fastest Delivery & Easy Pickup
                </p>
                <p className='nav_li text-[#FFD40D] text-3xl md:text-4xl lg:text-[50px] font-bold'>
                    Kings Burger
                </p>
                <p className='mt-2'>
                    Good food starts with good ingredients. We only bring you the best.
                </p>
                <div className='mt-4 flex justify-center md:justify-start'>
                    <Button name="Explore" />
                </div>
            </div>

            {/* Right Content */}
            <div className='relative flex justify-center md:justify-end w-full mt-6 md:mt-0'>

                {/* Main Burger Image */}
                <img className='w-full max-w-[400px] xl:mr-[100px] lg:max-w-[600px] object-cover' src="./images/bargar_banner.png" alt="Burger" />

                {/* Discount Image */}
                <div className=' hidden md:block absolute  bottom-[80px] xl:mr-[600px] w-[130px] '>
                    <img src="./images/discount.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExpBanner;
