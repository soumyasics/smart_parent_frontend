import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify-icon/react'

function Rpresetpass() {
  return (
    <div className='signup passreset'>

    <h1>Reset-Password</h1>

    <div className='resetform'>

      <form >

        <div className="input-box">
          <div className='label'> <label>Email</label>  </div>
          <input type="email" placeholder="Email" name="email" />

          
        </div>

        <div className="input-box">

          <div className='label'> <label>New Password</label>  </div>
          <input type="password" placeholder="New Password" name="password" />

        
        </div>

        <div className="input-box">

          <div className='label'> <label>Confirm Password</label>  </div>
          <input type="password" placeholder=" Confirm Password" name="confirmpassword" />

         
        </div>

        <div className="resettext">
          <h6>Don't have an account? <Link to={""}>Register</Link></h6>
        </div>

        <div className="resetbutton">
          <button type="submit"> Change <Icon icon="grommet-icons:connect" className='icon' /></button>
        </div>

      </form>

    </div>

  </div>
  )
}

export default Rpresetpass