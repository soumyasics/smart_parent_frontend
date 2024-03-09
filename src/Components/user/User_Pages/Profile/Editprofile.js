import React from 'react'
import "./Editprofile.css"
import imagebg from "../../../../Assets/parentbg.avif"


function Editprofile() {
  return (
    <div className='row' >

      <div className='edituserprofile col-6'>

        <h1>Edit Profile</h1>
        <p>Manage your Profile settings</p>

        <form>

          <div className='editprofile'>
            <div className='editmain'>
              <div className='editmain-heading'>

                <h5>Profile</h5>

              </div>
              <div className='editmain-sub'>
                <div className='editprofileimg'>

                  <img src='' alt='editprofile' />

                </div>

                <button>Upload Image</button>

              </div>
            </div>
          </div>


          <div className='editprofile'>
            <div className='editusername'>
              <div className='editmain-heading'>
                <h5>Username</h5>
              </div>

              <input type='text' placeholder='User name' />

            </div>
          </div>


          <div className='editprofile'>
            <div className='editEmail'>
              <div className='editmain-heading'>
                <h5>Email Address</h5>
              </div >

              <input type='text' placeholder='Email' />

            </div>
          </div>

          <div className='editprofile'>
            <div className='editdob'>
              <div className='editmain-heading'>
                <h5>DOB</h5>
              </div>

              <input type='date' />

            </div>
          </div>

          <div className='editprofile'>
            <div className='editcontact'>
              <div className='editmain-heading'>
                <h5>Contact Number</h5>
              </div>

              <input type='text' placeholder='contact' />

            </div>
          </div>

          <div className='editprofilebtn'>
            <button>Save</button>
          </div>

        </form>

      </div>

      <div className='profilebg col-6' >
        <img src={imagebg} alt='profilebg' />
      </div>

    </div>
  )
}

export default Editprofile