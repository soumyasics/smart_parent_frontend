import React from 'react'
import Navbar from './Components/user/navbar/Navbar'
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import Home from './Components/user/pages/home/Home'
import About from './Components/user/pages/about/About'
import Gallery from './Components/user/pages/gallery/Gallery'
import Contactus from './Components/user/pages/contactus/Contactus'
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.bundle.min.js" 
import SignIn from './Components/user/pages/Sign_in & Sign_up/SignIn'
import SignUp from './Components/user/pages/Sign_in & Sign_up/SignUp'
import Footer from './Components/user/footer/Footer'
import ResetPass from './Components/user/pages/Sign_in & Sign_up/ResetPass'
import Counselor from './Components/user/pages/counsellor/Counselor'
import AdminSignin from './Components/user/pages/Sign_in & Sign_up/AdminSignin'
import AdminHome from './Components/user/pages/Admin/AdminHome'
import Resource_Person_Home from './Components/user/pages/Resource_person/ResourcePersonHome'
import ResourcePersonHome from './Components/user/pages/Resource_person/ResourcePersonHome'
import ParentHome from './Components/parent/ParentHome'


function App() {
  return (
    <div className='appjs'>

<Router>

  <Navbar/>

  <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/gallery' element={<Gallery/>}/>
<Route path='/contactus' element={<Contactus/>}/>
<Route path='/sign_up' element={<SignUp/>}/>
<Route path='/sign_in' element={<SignIn/>}/>
<Route path='/reset_password' element={<ResetPass/>}/>
<Route path='/counsellor' element={<Counselor/>}/>

<Route path='/admin' element={<AdminSignin/>}/>
<Route path='/admin_home' element={<AdminHome/>}/>
<Route path='/resource_person_home' element={<ResourcePersonHome/>}/>
<Route path='parent_home' element={<ParentHome/>}/>

  </Routes>

<Footer/>
  
</Router>

      
    </div>
  )
}

export default App