import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../fetures/cartSlice";
import { NavLink } from "react-router-dom";

const ItemCard = () => {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  return (
    <>
      <div className="  ">
        <div className=" w-full h-auto bg-[url(./images/pinkbackground.png)]   pt-[80px] pb-[100px] sm:px-[20px] lg:px-[100px] ">
          <p className=" home_banner_text text-4xl text-center font-[550] ">
            Farm Fresh Products
          </p>

          <div className=" flex items-end justify-center gap-3 min-[360px]:gap-10  mt-[36px] pb-[32px] ">
            <div className="flex flex-col justify-center items-center ">
              <img src="icons/leaves.svg" alt="" />
              <p className=" text-[#01693A] font-bold text-[16px] ">
                Vegetable
              </p>
            </div>

            <p>Fruits</p>
            <p>Drink</p>
            <p>Bee Products</p>
          </div>

          <div className=" flex flex-wrap justify-center gap-[30px]">
            {items.map((item, i) => (
              <div key={i} className="rounded-[18px]  overflow-hidden bg-white">
                <div className=" relative  ">
                  <div>
                    <img
                      className=" min-[377px]:w-[350px] min-[377px]:h-[350px] sm:w-[250px] sm:h-[250px] "
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className=" absolute top-[20px] left-[16px] bg-[#D4FF6E] w-fit px-2 rounded-full ">
                    {item.discount}
                  </div>
                </div>

                <div className=" flex flex-col gap-[15px] px-[22px] pt-[16px] pb-[36px] ">
                  <div>
                    <img src={item.star} alt="" />
                  </div>
                  <p>{item.name}</p>

                  <div className="flex justify-between items-center ">
                    <div className=" flex items-center gap-[10px] ">
                      <p className=" text-[28px] text-[#01693A] font-bold  ">
                        ₹{item.price}
                      </p>
                      <p className=" text-sm text-[#D6D6D6] line-through font-bold ">
                        {item.disc_price}
                      </p>
                    </div>

                    <div
                      onClick={() => dispatch(addToCart(item))}
                      className="bg-[#D6D6D6] hover:bg-[#bab7b7]    text-sm p-3 rounded-full"
                    >
                      <img src={item.cart} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F3274C] w-60 flex justify-center mx-auto mt-20 text-white text-2xl rounded-2xl hover:bg-white hover:text-black font-bold  p-3">
            <NavLink to={"/cart"}> Go for Payment </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
