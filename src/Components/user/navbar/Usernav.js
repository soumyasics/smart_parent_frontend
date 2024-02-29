import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../Assets/logo.png"
import "./Usenav.css"
function Usernav() {
  return (

    <nav className='navbar'>

    <div className='nav-heading'>

      <img src={logo} alt='logo' />
      <p>Navigating the digital world together</p>
      <h1>Smart Parent</h1>

    </div>

    <ul className='userlist'>

      <li> <Link to="/" >Home</Link></li>
      <li> <Link to="/user_resourceperson" >Resource Person</Link></li>
      <li> <Link to="/user_counselor" >Counselor</Link></li>
      <li> <Link to="/user_task" >Task</Link></li>
      <li> <Link to="/user_subscription" >Subscription</Link></li>
      <li> <Link to="/user_profile" >Profile</Link></li>
      
    </ul>

  </nav>
  )
}

export default Usernav