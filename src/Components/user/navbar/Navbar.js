import React from 'react'
import './Navbar.css'
import logo from "../../../Assets/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>

      <div className='nav-heading'>

        <img src={logo} alt='logo' />


        <p>Navigating the digital world together</p>
        <h1>Smart Parent</h1>

      </div>

      <ul className='list'>





        <li> <Link to="/" >Home</Link> </li>
        <li> <Link to="/about" >About</Link> </li>
        <li> <Link to="/gallery" >Gallery</Link> </li>
        <li> <Link to="/contactus" >Contact Us</Link> </li>

      </ul>

    </nav>

  )
}

export default Navbar