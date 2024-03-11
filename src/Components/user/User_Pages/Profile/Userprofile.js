import React, { useEffect, useState } from 'react'
import "./Userprofile.css"
import Profileimg from "../../../../Assets/profile.jpg"
import imagebg from "../../../../Assets/parentbg.avif"
import { Link } from 'react-router-dom'
import axiosInstance from '../../../../apis/axiosInstance'
import Navbar from "../../../../pages/commonHomePage/Components/Comp1";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";

function Userprofile() {
  const [profile,setProfile]=useState({date:''})

  const id = localStorage.getItem("userdetails")

useEffect(()=>{
  axiosInstance.post(`/viewParentById/${id}`)
  .then((res)=>{console.log(res,"data") ; setProfile(res.data.data)})
  .catch((err)=>{console.log(err,"error");})
  console.log(id);
},[])


  return (

    <>

 <Navbar />

    <div className='row'>

      <div className='userprofile col-6'>

        <h1>My Profile</h1>
        <p>Manage your Profile settings</p>


        <div className='profile'>
          <div className='main'>
            <div className='main-heading'>
              <h5>Profile</h5>
            </div>
            <div className='main-sub'>
              <div className='profileimg'>
                <img src={Profileimg} alt='profile' />
              </div>
             
            </div>
          </div>
        </div>


        <div className='profile'>
          <div className='username'>
            <div className='main-heading'>
              <h5>Username</h5>
            </div>
            <p>{profile.name}</p>
          </div>
        </div>


        <div className='profile'>
          <div className='Email'>
            <div className='main-heading'>
              <h5>Email Address</h5>
            </div >
            <p>{profile.email}</p>
          </div>
        </div>

        <div className='profile'>
          <div className='dob'>
            <div className='main-heading'>
              <h5>DOB</h5>
            </div>
            <p>{profile.date.slice(0,10)}</p>
          </div>
        </div>

        <div className='profile'>
          <div className='contact'>
            <div className='main-heading'>
              <h5>Contact Number</h5>
            </div>
            <p>{profile.contact}</p>
          </div>
        </div>

        <div className='userprofilebtn'>

          <Link to="/user_editprofile"><button >Edit</button></Link>

        </div>


      </div>

      <div className='mainprofilebg col-6' >
        <img src={imagebg} alt='profilebg' />
      </div>

    </div>
    <Footer />
    </>
  )
}

export default Userprofile