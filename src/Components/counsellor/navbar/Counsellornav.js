import React from 'react'
import logo from "../../../Assets/logo.png"
import { Link } from 'react-router-dom'
import "./Counselornav.css"

function Counsellornav() {
  return (
    <nav className='navbar'>

    <div className='nav-heading'>

      <img src={logo} alt='logo' />
      <p>Navigating the digital world together</p>
      <h1>Smart Parent</h1>

    </div>

    <ul className='counlist'>

      <li> <Link to="/" >Home</Link></li>
      <li> <Link to="/counselor_chat" >Chat</Link></li>
      <li> <Link to="/counselor_blogs" >Blogs</Link></li>
      <li> <Link to="/counselor_subscribers" >Subscription</Link></li>
      <li> <Link to="/counselor_profile" >Profile</Link></li>
      
    </ul>

  </nav>
  )
}

export default Counsellornav