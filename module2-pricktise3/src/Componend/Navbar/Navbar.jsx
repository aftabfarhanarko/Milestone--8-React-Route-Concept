// Navbar.jsx
import React from 'react'
import { NavLink } from 'react-router'
import './Nav.css'

const Navbar = () => {
  return (
    <div>
      <nav>
          <NavLink className="side"  to={'/'}>Home</NavLink>
          <NavLink className="side"  to={'/post'}>Post</NavLink>
          <NavLink className="side" to={'/'}>Home</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
