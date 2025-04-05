import React from 'react'
import ExpCategory from './ExpCategory'
import ExpMenu from './ExpMenu'

const ExpHero = () => {
    return (
        <>
            <div className=' mt-[100px]  w-full   '>

                <p className=' fredoka text-[#F3274C] text-18px text-center tracking-[2px] leading-[30px] font-[600] '>About The Food Restaurant</p>
                <p className=' fredoka  text-[22px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] md:leading-[50px] font-[600]  flex  justify-center '>
                    <span className=' w-full text-center   '> Perfect Place Fo An Exceptional <br /> Experience</span>
                </p>

                <div className='mt-[19px] flex flex-col justify-center items-center lg:flex-row   gap-14 xl:gap-[100px] '>
                    <div className=' max-w-[650px] px-2 lg:p-10   '>
                        <img className=' w-full h-full object-contain ' src="./images/experience.png " alt="" />
                    </div>

                    <div className='  '>
                        <p className=' max-w-[430px] items-center sm:items-start px-4.5 sm:px-0 text-[16px] mx-auto ' >Nisl quam nestibulum ac quam nec odio elementu sceisue
                            the aucan ligula. Orci varius natoque pena culus mus
                            nellentesque ha um ac quam nec odio aibulum ac quam nec
                            odio elrbine.
                        </p>

                        <div className=' flex flex-col items-center  justify-center md:flex-row lg:flex-col '>

                            <div className=' flex items-center  gap-4 mt-[30px] ml-3 sm:ml-0' >
                                <div className=' max-w-26 '>
                                    <img src="./images/exp_online.png" alt="" />
                                </div>

                                <div>
                                    <p className=' fredoka font-[600] text-[16px] sm:text-[22px] '>Online Food Ordering</p>
                                    <p className=' text-[14px] sm:text-[16px] max-w-[260px] ' >Easy Food delivery from the best
                                        restaurants.</p>
                                </div>
                            </div>

                            <div className=' flex items-center   gap-4 mt-[30px] ml-3 sm:ml-0' >
                                <div className=' max-w-26 '>
                                    <img src="./images/exp_healthy.png" alt="" />
                                </div>

                                <div>
                                    <p className=' fredoka font-[600] text-[16px] sm:text-[22px] '>Online Food Ordering</p>
                                    <p className=' text-[14px] sm:text-[16px] max-w-[260px] ' >Easy Food delivery from the best
                                        restaurants.</p>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='w-full flex justify-center mt-[40px] mb-[40px] '>
                    <div className='w-fit'>
                        <div className=' home_banner_text font-[600] text-[30px] sm:text-[50px]  '>Choose a Category</div>
                        <div className=' w-[60%] h-[7px] rounded-2xl m-auto bg-[#FFD40D]'></div>
                    </div>
                </div>


                <div>
                    <ExpCategory/>
                </div>

                <div >
                    <div className='w-full flex justify-center mt-[120px] mb-[40px] '>
                        <div className='w-fit'>
                            <div className=' home_banner_text font-[600] text-[30px] sm:text-[50px]  '>Fast Food Menus</div>
                            <div className=' w-[60%] h-[7px] rounded-2xl m-auto bg-[#FFD40D]'></div>
                        </div>
                    </div>

                    <ExpMenu/>
                </div>
            </div>
        </>
    )
}

export default ExpHero