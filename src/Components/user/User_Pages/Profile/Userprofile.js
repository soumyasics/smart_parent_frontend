import React from 'react'
import "./Userprofile.css"
import Profileimg from "../../../../Assets/profile.jpg"
import imagebg from "../../../../Assets/parentbg.avif"


function Userprofile() {
  return (

    <>

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
              <p>Name</p>
            </div>
          </div>
        </div>


        <div className='profile'>
          <div className='username'>
            <div className='main-heading'>
              <h5>Username</h5>
            </div>
            <p>name</p>
          </div>
        </div>


        <div className='profile'>
          <div className='Email'>
            <div className='main-heading'>
              <h5>Email Address</h5>
            </div >
            <p>Address</p>
          </div>
        </div>

        <div className='profile'>
          <div className='dob'>
            <div className='main-heading'>
              <h5>DOB</h5>
            </div>
            <p>date of birth</p>
          </div>
        </div>

        <div className='profile'>
          <div className='contact'>
            <div className='main-heading'>
              <h5>Contact Number</h5>
            </div>
            <p>923456789</p>
          </div>
        </div>


      </div>

      <div className='mainprofilebg col-6' >
        <img src={imagebg} alt='profilebg' />
      </div>

    </div>

    </>
  )
}

export default Userprofile