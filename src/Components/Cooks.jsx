import React from 'react'

const Cooks = () => {

    const cooks = [
        {
            img: './images/chef1.png',
            position: 'Dessert specialist',
            name: 'Thomas Walim',
            sign: './images/sign.png'
        },
        {
            img: './images/chef2.png',
            position: 'Chef Master',
            name: 'James Jhonson',
            sign: './images/sign.png'
        },
        {
            img: './images/chef3.png',
            position: 'Dessert specialist',
            name: 'Room Minal',
            sign: './images/sign.png'
        }
    ]

    return (
        <>
            <div className=''>

                <div className='w-full flex justify-center mt-[40px] mb-[40px] '>
                    <div className='w-fit'>
                        <div className=' home_banner_text font-[600] text-[30px] sm:text-[50px]  '>Meet Our Experts</div>
                        <div className=' w-[60%] h-[7px] rounded-2xl m-auto bg-[#FFD40D]'></div>
                    </div>
                </div>


                <div className=' flex flex-wrap items-center gap-[30px] justify-center'>
                    {
                        cooks.map((cook, index) => (
                            <div key={index}>
                                <div className=' relative mb-[120px]' >
                                    <img className=' w-[330px] ' src={cook.img} alt="cook" />

                                    <div className=' absolute -bottom-[135px] left-[29px] w-[280px] h-[280px]   bg-white rounded-full  flex flex-col items-center justify-center border-4 border-[#E4E4E4]'>
                                        <p className=' home_banner_text font-[600] leading-[30px] text-[#F3274C] '>{cook.position}</p>
                                        <p className='home_banner_text text-[25px] font-[600] mb-4 '>{cook.name}</p>

                                        <div className=' flex'>
                                            <div className=' w-[40px] h-[40px] rounded-full bg-[#F5F8FD] '></div>
                                            <div className=' w-[40px] h-[40px] rounded-full bg-[#F5F8FD] '></div>
                                            <div className=' w-[40px] h-[40px] rounded-full bg-[#F5F8FD] '></div>
                                        </div>

                                        <div className=' w-[100px] mt-3 '>
                                            <img src={cook.sign} alt="" />
                                        </div>
                                    </div>
                                </div>

                              
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Cooks