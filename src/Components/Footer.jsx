import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGreaterThan } from "react-icons/fa6";


const Footer = () => {
    return (
        <>
            <div className=' bg-[#F5F8FD] mt-[80px] '>
                <div className='w-full h-auto flex justify-center'>

                    <div className='foot_corner mt-[180px]  w-[250px]'>
                        <img src="./images/foot_left..png" alt="" />
                    </div>


                    <div className=' flex flex-col '>
                        <div className=' footer_list flex '>
                            <div className=' home_banner_text h-[350px] flex flex-col gap-[70px] justify-around rounded-[30px] p-[30px] font-[600] text-[18px] bg-[#F3274C] mt-[100px]  text-white '>
                                <div className=''>
                                    <p className='nav_li text-[24px]'>pizza hut</p>
                                    <p className='pl-[15px] text-[10px] -mt-[5px]'>FOOD & RESTAURANT</p>
                                </div>

                                <div>
                                    <p className=' '>Tuesday – Saturday: 12:00pm – 23:00pm</p>
                                    <p>Closed on Sunday</p>
                                </div>

                                <p className=''>5 star rated on TripAdvisor</p>
                            </div>

                            <div className=' flex mt-[130px] flex-wrap gap-10 sm:gap-0 md:flex-nowrap justify-evenly  sm:justify-evenly md:justify-start  '>

                                <ul className=' sm:ml-[47px]  '>
                                    <li>
                                        <div className='w-fit mb-8'>
                                            <div className=' home_banner_text font-[600] text-[18px] sm:text-[26px]  '>About</div>
                                            <div className='  h-[7px]  bg-[#FFD40D]'></div>
                                        </div>
                                    </li>
                                    <li><NavLink to="/fredokaone"> <span className=' flex items-center gap-2 pb-3 text-[18px]'> <FaGreaterThan /> <span>Fredoka One</span> </span> </NavLink></li>
                                    <li><NavLink to="/menu"> <span className=' flex items-center gap-2 pb-3 text-[18px]'> <FaGreaterThan /> <span>Special Dish</span> </span> </NavLink></li>
                                    <li><NavLink to="/reserve"> <span className=' flex items-center gap-2 pb-3 text-[18px]'> <FaGreaterThan /> <span>Reservatione</span> </span> </NavLink></li>
                                    <li><NavLink to="/contact"> <span className=' flex items-center gap-2 pb-3 text-[18px]'> <FaGreaterThan /> <span>Contact</span> </span> </NavLink></li>
                                </ul>

                                <ul className=' sm:ml-[47px]  '>
                                    <li>
                                        <div className='w-fit mb-8'>
                                            <div className=' home_banner_text font-[600] text-[18px] sm:text-[26px]  '>Menu</div>
                                            <div className='  h-[7px]  bg-[#FFD40D]'></div>
                                        </div>
                                    </li>
                                    <li><NavLink to="/fredokaone"> <span className=' flex items-center gap-2 pb-3 text-[18px]'> <FaGreaterThan /> <span>Steak</span> </span> </NavLink></li>
                                    <li><NavLink to="/menu"> <span className=' flex items-center gap-2 pb-3 text-[18px]'> <FaGreaterThan /> <span>Burgers</span> </span> </NavLink></li>
                                    <li><NavLink to="/reserve"> <span className=' flex items-center gap-2 pb-3 text-[18px]'> <FaGreaterThan /> <span>Coctails</span> </span> </NavLink></li>
                                    <li><NavLink to="/contact"> <span className=' flex items-center gap-2 pb-3 text-[18px]'> <FaGreaterThan /> <span>Bar B Q</span> </span> </NavLink></li>
                                    <li><NavLink to="/contact"> <span className=' flex items-center gap-2 pb-3 text-[18px]'> <FaGreaterThan /> <span>Desserts</span> </span> </NavLink></li>
                                </ul>

                                <ul className=' sm:ml-[47px]  '>
                                    <li>
                                        <div className='w-fit mb-8'>
                                            <div className=' home_banner_text font-[600] text-[18px] sm:text-[26px]  '>Newsletter</div>
                                            <div className='  h-[7px]  bg-[#FFD40D]'></div>
                                        </div>
                                    </li>

                                    <li><NavLink to="/fredokaone"> <span className=' flex items-center gap-2 pb-4 text-[18px]'> Get recent news and updates. </span> </NavLink></li>
                                    <li><NavLink to="/menu"> <input className='bg-white mb-[20px] w-auto sm:w-[320px] h-[60px] border-2 rounded-[10px] border-[#DEDEDE] pl-[30px]' placeholder='Email Address' type="text" />  </NavLink></li>
                                    <li>
                                        <NavLink to="/reserve">
                                            <div className='w-[107px] h-[63px] border-3 border-[#F3274C]  rounded-[12px] ml-[30px] '>
                                                <div className=' home_banner_text font-medium text-[16px] bg-[#F3274C] text-white flex justify-center items-center w-[120px] h-[50px] rounded-[12px] -ml-6  mt-1'>Subscribe</div>
                                            </div>
                                        </NavLink>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        <div className=' mt-[70px] mb-[30px] '>
                            <div className='w-full mb-8 h-[7px]  bg-[#FFD40D]'> </div>

                            <div className=' flex flex-col sm:flex-row justify-between items-center '>
                                <p><span className=' nav_li  text-[#F3274C]  '>© 2024 pizza hut </span><span className='home_banner_text font-[600] '>| All shawonetc3 Themes</span></p>

                                <div className='home_banner_text basis-1/3 underline font-[600] flex flex-col sm:flex-row justify-between'>
                                    <span>Facebook</span>
                                    <span>Instagram</span>
                                </div>
                            </div>
                           
                        </div>

                    </div>

                    <div className=' foot_corner mt-[240px]  w-[220px]'>
                        <img src="./images/foot_right.png" alt="" />
                    </div>

                </div>
            </div>


        </>
    )
}

export default Footer