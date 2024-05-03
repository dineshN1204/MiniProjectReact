import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className=''>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/events'>Events</NavLink>
        <NavLink to='/addclubs'>Add Clubs</NavLink>
        <NavLink to='/contactus'>Contact Us</NavLink> 
    </nav>
  )
}
