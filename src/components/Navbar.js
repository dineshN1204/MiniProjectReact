import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/events'>Events</NavLink>
    <NavLink to='/addevents'>Add Events</NavLink>
    <NavLink to='/signup'>Signup</NavLink>
    </div>
  )
}
