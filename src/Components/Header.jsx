import React, { useState, useEffect, useContext } from "react";
import "../css/style.css";
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../fetures/cartSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const { totalQuentity, cart } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
      <div className="max-w-[85%] mx-auto flex items-center justify-between relative">
        <div className="flex items-center">
          <div className="mt-[15px] mb-[15px]">
            <img src="./icons/logo.png" alt="Logo" className="w-full" />
          </div>
          <p className="logo_name hidden min-[400px]:block font-bold ml-[-15px] font-logo text-[24px]">
            Pizza Hut
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul className="flex space-x-6">
            <li className="nav_li font-bold">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="nav_li font-bold">
              <NavLink to="/explore">Explore</NavLink>
            </li>
            <li className="nav_li font-bold">
              <NavLink to="/reserve">Reserve Table</NavLink>
            </li>
            <li className="nav_li font-bold">
              <NavLink to="/order">Order Now</NavLink>
            </li>
          </ul>
        </div>

        <div className=" hidden lg:flex items-center gap-[20px] mr-5">
          <div className="relative">
            <NavLink to={"/cart"}>
              <img className="w-7 h-7" src="./icons/cart.png" alt="Cart" />
            </NavLink>
            <div className="absolute w-4 h-4 top-0 right-0 text-white bg-black flex justify-center items-center rounded-full ">
              <NavLink to={"/cart"}>{totalQuentity}</NavLink>
            </div>
          </div>

          <span className="bg-[#FFC222] text-white font-bold flex items-center justify-center rounded-[7px] w-[120px] h-[40px]">
            <NavLink to="/contact">Contact Us</NavLink>
          </span>
        </div>

        

        {/* for mobile */}
        <div className="flex items-center gap-2">
          <div className="relative lg:hidden ">
            <NavLink to={"/cart"}>
              <img className="w-7 h-7" src="./icons/cart.png" alt="Cart" />
            </NavLink>
            <div className="absolute w-4 h-4 top-0 right-0 text-white bg-black flex justify-center items-center rounded-full ">
              <NavLink to={"/cart"}>{totalQuentity}</NavLink>
            </div>
          </div>

          <div
            className="lg:hidden z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoMdClose size={"30px"} />
            ) : (
              <IoMdMenu size={"30px"} />
            )}
          </div>
        </div>

        {/*Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-6 lg:hidden z-40 transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-5 text-xl font-bold">
            <li className="nav_li">
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>

            <li className="nav_li">
              <NavLink to="/explore" onClick={() => setMenuOpen(false)}>
                Explore
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink to="/reserve" onClick={() => setMenuOpen(false)}>
                Reserve Table
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink to="/order" onClick={() => setMenuOpen(false)}>
                Order Now
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
