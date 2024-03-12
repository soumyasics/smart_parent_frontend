import React from 'react'
import "./Userinnerchat.css"
import innerchatimg from "../../../../Assets/test.jpg"

function Userinnerchat() {
  return (
    <div className='innerchat'>

        <div className='innerchathead'>
            <div className='innersubhead'>
            <div className='innerchatprofile'>
                <img src={innerchatimg} alt=''/>            
            </div>
            <h1>Adrian Gomez</h1>
        </div>
            </div>

<div className='row'>
<div className='innerchatmsg col-6'>

<div className='innnerchat'></div>
<p>Hello Gud Mrng</p>
</div>

<div className='inneruserchatmsg col-6'>

<div className='innneruserchat'></div>
<p>Hello Gud Mrng</p>
</div>



</div>


<div className="innerchatsearch ">
          <input
            type="text"
            placeholder="write Something"
            className="search_icon_input"
          />
        </div>



</div>
          
  )
}

export default Userinnerchat