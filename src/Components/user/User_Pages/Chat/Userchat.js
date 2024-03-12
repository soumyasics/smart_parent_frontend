import React from 'react'
import "./Userchat.css"
import chatimg from "../../../../Assets/test.jpg"

function Userchat() {
  return (
    <>

      <div className='userchat'>

        <div className='chatprofile'>
          <div className='chatimage'>
            <img src={chatimg} alt='' />
          </div>
          <h1>Gravid Cristopher</h1>
          <p>User</p>
        </div>

        <div className="chatsearch">
          <input
            type="text"
            placeholder="Search Friends"
            className="search_icon_input"
          />
        </div>

        <div className='chatfriends'>

          <div className='friendsimg'>
            <img src={chatimg} alt=""/>
          </div>
          <h2>Name</h2>

        </div>


      </div>

    </>
  )
}

export default Userchat