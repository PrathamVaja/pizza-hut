import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Components/AddtoCartContext'
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const CartPage = () => {
    const { cartItem } = useContext(CartContext);



    return (
        <>
            <Helmet>
                <title>Cart Page</title>
                <meta name='description' content='Cart Page'/>
                <meta name='keywords' content='Cart Page,awsome website,react'/>
                <meta name='author' content='Pratham Vaja'/>
            </Helmet>
            <div className='w-full h-screen bg-[#F7CFD8]'>
                <div className='p-[100px] flex justify-center flex-wrap gap-[30px]'>
                    {
                        cartItem.map((item, i) => (
                            <div key={i} className='flex rounded-[18px] overflow-hidden p-3 bg-white'>
                                <div className='relative flex items-center pl-2'>
                                    <div className='w-[150px] h-[150px]'>
                                        <img className='rounded-2xl' src={item.img} alt="" />
                                    </div>
                                    <div className='absolute top-[20px] left-[16px] bg-[#D4FF6E] w-fit px-2 rounded-full'>
                                        {item.discount}
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[15px] px-[22px] pt-[16px] pb-[16px]'>
                                    <div>
                                        <img src={item.star} alt="" />
                                    </div>

                                    <p>{item.name}</p> {/* Just render name here */}

                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-[10px]'>
                                            <p className='text-sm text-[#01693A] font-bold'>{item.price}</p>
                                            <p className='text-sm text-[#D6D6D6] line-through font-bold'>{item.disc_price}</p>
                                        </div>
                                    </div>

                                    <div className='ml-auto text-[#F3274C]'>
                                        <FaTrashAlt />
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

export default CartPage;
