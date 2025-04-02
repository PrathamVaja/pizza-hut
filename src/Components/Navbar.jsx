import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const Navbar = () => {
  return (
      <>
          <ul className='flex items-center gap-5'>
              <li className='nav_li font-bold'><NavLink to="/">Home</NavLink></li>
              <li className='nav_li font-bold'><NavLink to="/menu">Menu</NavLink></li>
              <li className='nav_li font-bold'><NavLink to="/explore">Explore</NavLink></li>
              <li className='nav_li font-bold'><NavLink to="/reserve">Reserve Table</NavLink></li>
              <li className='nav_li font-bold'><NavLink to="/order">Order Now</NavLink></li>
          </ul>
          

         
      </>
  )
}

export default Navbar