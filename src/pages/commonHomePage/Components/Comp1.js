import React from 'react'
import logo from '../Assets/logo.png'
import './Navitem.css'
import './Logo.css'
function Comp1() {
  return (
 
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id='abc'>
  <div class="container-fluid text-white">
   
       <img src={logo} alt="Logo" width="60" height="60" class="d-inline-block align-text-top" id="logo"/>&nbsp;&nbsp;
      <b>SmartParent.</b>
   
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav" >
      <ul class="navbar-nav a1">
        <li class="nav-item"  >
          <a class="nav-link active text-white" aria-current="page" href="#">Subscription</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="#" id='a2'>Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="#" id='a3'>About Us</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active text-white" href="#" id='a5'>SignUp</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
 

   
  )
}

export default Comp1