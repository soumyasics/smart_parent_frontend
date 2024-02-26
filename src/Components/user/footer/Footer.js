import React from 'react'
import logo from "../../../Assets/logo.png"
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className='a' id='footer'>
                <div  >
                    <div className='d-flex' >
                        <img src={logo} alt='logo' />
                        <h1>Smart Parent</h1>
                    </div>
                    <p>Chat room for Parents to connect</p>

                </div>




            </div>
            <div className='list_footer' >

                <div className='footerlink' >
                    <p> <Link to="/" >Home</Link> </p>
                    <p> <Link to="/about" >About</Link> </p>
                    <p> <Link to="/gallery" >Gallery</Link> </p>
                    <p> <Link to="/contactus" >Contact Us</Link> </p>
                </div>



            </div>
        </div>

    )
}

export default Footer