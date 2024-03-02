import React from 'react'
import "./Editprofile.css"
import { useState } from 'react'



function Editprofile() {

const [edit,setEdit] = useState({
  name:"",
  email:"",
  date:"",
  contact:""
})

const changefn = (e)=>{
  setEdit({...edit,[e.target.name]:e.target.value})
  console.log(e);
}

const submitfn = (e)=>{
  e.preventDefault();  
  alert("form submitted")
}

  return (
    <div className='edituserprofile'>

    <h1>Edit Profile</h1>
    <p>Manage your Profile settings</p>


<form onSubmit={submitfn}>

    <div className='editprofile'>
      <div className='editmain'>
        <div className='editmain-heading'>
          <h5>Profile</h5>
          </div>
          <div className='editmain-sub'>
          <div className='editprofileimg'>
          <img src='' alt='editprofile'/>
        </div>

       
        
        </div>     
      </div>
    </div>


    <div className='editprofile'>
      <div className='editusername'>
        <div className='editmain-heading'>
          <h5>Username</h5>
        </div>

        <input type='text' placeholder='User name'name='name' onChange={changefn}  required />

      </div>
    </div>


    <div className='editprofile'>
      <div className='editEmail'>
        <div className='editmain-heading'>
          <h5>Email Address</h5>
        </div >

          <input type='text' placeholder='Email' name='email' onChange={changefn} required/>

      </div>
    </div>

    <div className='editprofile'>
      <div className='editdob'>
        <div className='editmain-heading'>
          <h5>DOB</h5>
        </div>

        <input type='date' name='date' onChange={changefn} required/>

      </div>
    </div>

    <div className='editprofile'>
      <div className='editcontact'>
        <div className='editmain-heading'>
          <h5>Contact Number</h5>
        </div>
        
        <input type='text' placeholder='contact' name='contact' onChange={changefn} required/>

        

      </div>
    </div>

<div className='editsave'>
  <button type='submit'>SAVE</button>
</div>


    </form>




  </div>
  )
}

export default Editprofile