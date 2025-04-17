import React, { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  reduceItem,
  deleteItem,
  addItemQuentity,
} from "../fetures/cartSlice";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice, totalQuentity } = useSelector(
    (state) => state.allCart
  );

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <>
      <Helmet>
        <title>Cart Page</title>
        <meta name="description" content="Cart Page" />
        <meta name="keywords" content="Cart Page,awesome website,react" />
        <meta name="author" content="Pratham Vaja" />
      </Helmet>

      <div className="w-full min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-4">
        <div className="flex justify-center mb-8">
          <NavLink
            to="/order"
            className="bg-[#F3274C] text-white hover:bg-white hover:text-[#F3274C] transition-all duration-300 text-xl font-semibold px-6 py-3 rounded-full shadow-md"
          >
            Buy More
          </NavLink>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 max-w-7xl mx-auto">
          {/* Cart Items */}
          <div className="flex flex-col gap-6 w-full lg:w-2/3">
            {cart.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
              >
                <div
                  onClick={() => dispatch(deleteItem(item))}
                  className="self-end p-4 cursor-pointer text-2xl text-[#F3274C] hover:text-black transition"
                >
                  <FaTrashAlt />
                </div>

                <img
                  className="w-[150px] h-[150px] object-cover rounded-lg m-4"
                  src={item.img}
                  alt={item.name}
                />

                <div className="flex flex-col gap-3 p-4 w-full">
                  <img src={item.star} alt="" className="w-20" />
                  <h2 className="text-xl font-bold">{item.name}</h2>

                  <div className="text-xl font-semibold text-[#01693A]">
                    ₹{item.price}
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => dispatch(reduceItem(item))}
                      className="bg-[#F3274C] text-white text-xl w-10 h-10 rounded-full hover:bg-red-600 transition"
                    >
                      -
                    </button>
                    <span className="text-lg font-bold">{item.quentity}</span>
                    <button
                      onClick={() => dispatch(addItemQuentity(item))}
                      className="bg-[#F3274C] text-white text-xl w-10 h-10 rounded-full hover:bg-red-600 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 shadow-xl rounded-2xl sticky top-6">
              <h3 className="text-2xl font-bold mb-6 text-center border-b pb-2">
                Order Summary
              </h3>
              <div className="flex justify-between mb-4">
                <span>Total Quantity:</span>
                <span>{totalQuentity}</span>
              </div>
              <div className="flex justify-between mb-6 text-lg font-bold">
                <span>Total Price:</span>
                <span>₹{totalPrice}</span>
              </div>
              <button className="bg-[#F3274C] text-white w-full py-3 rounded-xl font-semibold hover:bg-red-600 transition">
                Get Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
