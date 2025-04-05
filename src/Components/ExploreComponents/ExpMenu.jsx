import React from 'react'

const ExpMenu = () => {

    const items = [
        {
            img: './images/pizza.png',
            name: 'Shroom Bacon Burger',
            price: '$11.76'
        },
        {
            img: './images/pizza.png',
            name: 'Shroom Bacon Burger',
            price: '$11.76'
        },
        {
            img: './images/pizza.png',
            name: 'Shroom Bacon Burger',
            price: '$11.76'
        },
        {
            img: './images/pizza.png',
            name: 'Shroom Bacon Burger',
            price: '$11.76'
        },
        {
            img: './images/pizza.png',
            name: 'Shroom Bacon Burger',
            price: '$11.76'
        },
        {
            img: './images/pizza.png',
            name: 'Shroom Bacon Burger',
            price: '$11.76'
        },
        {
            img: './images/pizza.png',
            name: 'Shroom Bacon Burger',
            price: '$11.76'
        },
        {
            img: './images/pizza.png',
            name: 'Shroom Bacon Burger',
            price: '$11.76'
        },

    ]

    return (
        <>

            <div className='lg:mx-[10px]  w-auto'>

                <div className='w-fit  grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-center mx-auto  ' >
                    {
                        items.map((item, i) => (
                            <div key={i} className='w-fit flex mb-3 mr-[20px]'>
                                <div className=' flex items-center' >
                                    <div className='w-auto md:mt-5  h-[200px] z-10 '>
                                        <div className=' m-auto max-w-[60px] w-[80px]  h-[200px] md:h-[180px]  rounded-[50px] bg-[#F3274C]'>

                                        </div>
                                        <div className='max-w-[180px] w-[120px] h-[100px] -mt-[155px] md:-mt-[145px]  '>
                                            <img src={item.img} alt="" />
                                        </div>

                                    </div>

                                    <div >
                                        <div className=' flex flex-col justify-center items-center bg-white  rounded-[20px] max-[350px]:w-fit w-[310px]  sm:w-[500px] md:w-[290px]  h-[220px] -ml-20'>
                                            <p className='fredoka text-[25px] sm:text-[40px] sm:w-[75%] md:w-auto md:text-[22px] ml-[100px]  sm:ml-[80px] font-[600] '>{item.name}</p>
                                            <p className='fredoka text-[#F3274C] sm:text-[36px] text-[20px] font-[600] -ml-[70px] sm:-ml-[200px] md:-ml-[40px] mt-[19px]'>{item.price}</p>
                                        </div>



                                    </div>


                                </div>

                            </div>


                        ))


                    }

                    <div className='max-[617px]:w-full flex flex-col  items-center relative '>

                        <div className='  w-[320px] sm:w-[500px] md:w-[310px]  h-[220px]   rounded-[20px] bg-[#FED30D]  '>

                            <div className='w-full flex justify-center mt-[40px] mb-[18px] '>
                                <div className='w-fit'>
                                    <div className=' home_banner_text font-[600] text-[24px] sm:text-[24px]  '>OPENING TIMES</div>
                                    <div className=' w-[60%] h-[5px] rounded-2xl m-auto bg-black'></div>
                                </div>
                            </div>

                            <div className='flex justify-evenly'>
                                <p className=' fredoka text-[18px] font-[600] '>Mon</p>
                                <p className=' fredoka text-[18px] font-[600] '>17:00 to 23:00</p>
                            </div>
                            <div className='flex justify-evenly'>
                                <p className=' fredoka text-[18px] font-[600] '>Tue</p>
                                <p className=' fredoka text-[18px] font-[600] '>17:00 to 23:00</p>
                            </div>

                        </div>

                        <div className='absolute flex-col flex justify-center text-center  w-[80%]  sm:w-[460px] md:w-[280px] rounded-[30px] -bottom-7 xl:-bottom-5  h-[93px] bg-[#F3274C] '>
                            <p className='fredoka text-[24px] text-white font-[600] underline decoration-[#FED30D]'>+1 234 567 891</p>
                            <p className='fredoka text-[16px] text-white font-[600]'>Avenue New Town 124 United State</p>

                        </div>

                    </div>


                

                </div>




            </div>
        </>
    )
}

export default ExpMenu