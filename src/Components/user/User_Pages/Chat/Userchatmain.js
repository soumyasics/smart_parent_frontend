import React from 'react'
import Userinnerchat from './Userinnerchat'
import Userchat from './Userchat'

function Userchatmain() {
  return (

    <div className='row'>
      
      <div className='col-4'>
        <Userchat/>
      </div>

      <div className='col-8'>
      <Userinnerchat/>
      </div>
     </div>
  )
}

export default Userchatmain