import React from 'react'
import "../css/style.css"

const Banner = () => {
    return (
        <>
            <div className='h-screen'>
                <div className='  bg-[url(/images/home_banner.png)] flex flex-col md:flex-row w-full h-screen bg-cover bg-right'>
                    

                    <div className='text-white w-full text-center pt-[80px] sm:text-start md:w-[70%]  sm:pl-[100px] md:pt-[100px]'>
                        <span className='home_banner_text text-[40px] sm:text-[60px]  leading-none  font-[600] '>The Perfect Space to
                            Enjoy Fantastic Food</span>

                        <p className='home_banner_text text-xl  md:w-[70%] mt-5 text-[20px] leading-[25px] xl:mt-[30px] '>Festive dining at Farthings where we are strong believers in
                            using the very best produce</p>


                        <div className=' flex flex-col md:flex-row gap-3 items-center  mt-[34px]'>

                            <div className='w-[160px] h-[58px] border-3 border-[#F3274C]  rounded-[12px] ml-[30px] '>
                                <div className=' bg-[#F3274C] flex justify-center items-center w-[175px] h-[45px] rounded-[12px] -ml-6  mt-1'>See Our Menus</div>
                            </div>

                            <div className='ml-[38px] mr-[45px] '>
                                <img src="./icons/video.png" alt="" />
                            </div>

                            <span className='home_banner_text text-[16px] leading-[25px] font-medium '>VIDEO</span>
                        </div>
                    </div>

                   
                </div>

            
            </div>
        </>
    )
}

export default Banner