import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='header-nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/addevents'>Add Events</NavLink>
        <NavLink to='/events'>Events</NavLink>
        {/* <NavLink to='/events1'>Events1</NavLink> */}
        <NavLink to='/contactus'>Contact Us</NavLink> 
    </nav>
  )
}
