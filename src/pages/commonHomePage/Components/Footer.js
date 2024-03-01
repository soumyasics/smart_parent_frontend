import React from 'react'
import logo from '../Assets/logo.png' // assuming you have a separate Logo component
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" />
        <h6>ABOUT US</h6>
      </div>
      <div className="footer-right">
        <div>Contact</div>
        <div>Complaints</div>
        <div>Inquiries</div>
      </div>
    </div>
  )
}

export default Footer