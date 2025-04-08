import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import { CartContext } from '../AddtoCartContext';

const ItemCard = () => {

    const items = [
        {
            img: 'images/green.png',
            discount: '-11%',
            name:'Green Broccoli',
            heart: 'icons/heart.svg',
            star: 'icons/star.svg',
            cart: 'icons/black_cart.svg',
            price: '$8.00',
            disc_price:'$9.00'
        },
        {
            img: 'images/purple.png',
            discount: '-17%',
            price: '$10.00',
            disc_price: '$12.00',
            name:'Purple Onion',
            heart: 'icons/heart.svg',
            star: 'icons/star.svg',
            cart: 'icons/black_cart.svg',
        },
        {
            img: 'images/chili.png',
            discount: '',
            price: '$9.00',
            disc_price: '$10.00',
            name:'Chile Bell Pepper',
            heart: 'icons/heart.svg',
            star: 'icons/star.svg',
            cart: 'icons/black_cart.svg',
        },
        {
            img: 'images/cabbage.png',
            discount: '',
            price: '$8.00',
            disc_price: '$11.00',
            name:'Green Cabbage',
            heart: 'icons/heart.svg',
            star: 'icons/star.svg',
            cart: 'icons/black_cart.svg',
        },
        {
            img: 'images/chili.png',
            discount: '',
            price: '$9.00',
            disc_price: '$10.00',
            name: 'Chile Bell Pepper',
            heart: 'icons/heart.svg',
            star: 'icons/star.svg',
            cart: 'icons/black_cart.svg',
        },
        {
            img: 'images/cabbage.png',
            discount: '',
            price: '$8.00',
            disc_price: '$11.00',
            name: 'Green Cabbage',
            heart: 'icons/heart.svg',
            star: 'icons/star.svg',
            cart: 'icons/black_cart.svg',
        },
        {
            img: 'images/purple.png',
            discount: '-17%',
            price: '$10.00',
            disc_price: '$12.00',
            name: 'Purple Onion',
            heart: 'icons/heart.svg',
            star: 'icons/star.svg',
            cart: 'icons/black_cart.svg',
        },
        {
            img: 'images/green.png',
            discount: '-11%',
            name: 'Green Broccoli',
            heart: 'icons/heart.svg',
            star: 'icons/star.svg',
            cart: 'icons/black_cart.svg',
            price: '$8.00',
            disc_price: '$9.00'
        },
    ]

    const { setCartItem } = useContext(CartContext);
    const addToCart = (item) => {
        console.log(item);
        setCartItem((prev) => [...prev, item]);
    };

    return (
        <>
             
            <div className='  '>
                <div className=' w-full h-auto bg-[url(./images/pinkbackground.png)]   pt-[80px] pb-[100px] px-[200px] '>

                    <p className=' home_banner_text text-4xl text-center font-[550] '>Farm Fresh Products</p>


                    <div className=' flex items-end justify-center  gap-10 mt-[36px] pb-[32px] '>
                        <div className='flex flex-col justify-center items-center '>
                            <img src="icons/leaves.svg" alt="" />
                            <p className=' text-[#01693A] font-bold text-[16px] '>Vegetable</p>
                        </div>

                        <p>Fruits</p>
                        <p>Drink</p>
                        <p>Bee Products</p>
                    </div>

                    <div className=' flex flex-wrap justify-center gap-[30px]'>
                        {
                            items.map((item,i) => (
                                <div key={i} className='rounded-[18px] overflow-hidden bg-white' >
                                    <div className=' relative  '>
                                        <div className='w-[250px] h-[250px]  '>
                                            <img  src={item.img} alt="" />
                                        </div>
                                        <div className=' absolute top-[20px] left-[16px] bg-[#D4FF6E] w-fit px-2 rounded-full '>
                                            {item.discount}
                                        </div>
                                    </div>

                                    <div className=' flex flex-col gap-[15px] px-[22px] pt-[16px] pb-[36px] '>
                                        <div>
                                            <img src={item.star} alt="" />
                                        </div>
                                        <p>{item.name}</p>

                                        <div className='flex justify-between items-center '>
                                            <div className=' flex items-center gap-[10px] '>
                                                <p className=' text-sm text-[#01693A] font-bold  '>{ item.price }</p>
                                                <p className=' text-sm text-[#D6D6D6] line-through font-bold '>{ item.disc_price }</p>
                                            </div>

                                            <div onClick={()=>addToCart(item)} className='bg-[#D6D6D6] text-sm p-3 rounded-full'>
                                                <img src={item.cart} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                      }
                    </div>

                </div>
            </div>

        </>
    )
}

export default ItemCard