import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../Assets/logo.png"
import "./Rpnav.css"

function Rpnav() {
  return (
    <nav className='navbar'>

    <div className='nav-heading'>

      <img src={logo} alt='logo' />
      <p>Navigating the digital world together</p>
      <h1>Smart Parent</h1>

    </div>

    <ul className='rplist'>

      <li> <Link to="/" >Home</Link></li>
      <li> <Link to="/resourceperson_chat" >Chat</Link></li>
      <li> <Link to="/resourceperson_task" >Task</Link></li>
      <li> <Link to="/resourceperson_subscribers" >Subscription</Link></li>
      <li> <Link to="/resourceperson_profile" >Profile</Link></li>
      
    </ul>

  </nav>
  )
}

export default Rpnav