import React, { useEffect, useState } from 'react';
import "./Userchat.css";
import chatimg from "../../../../Assets/test.jpg";
import axiosInstance from "../../../../apis/axiosInstance";
import BASE_URL from "../../../../apis/baseUrl";
import Userinnerchat from './Userinnerchat';
import { Link } from 'react-router-dom';

function Userchat({ onSelectRecipient }) {
  const [profile, setProfile] = useState({});
  const [recipients, setRecipients] = useState([]);
  const [activerecipient, setActiverecipient] = useState({});
  const id = localStorage.getItem("userdetails");

  useEffect(() => {
    axiosInstance.post(`/viewParentById/${id}`)
      .then((res) => {
        console.log(res, "data");
        setProfile(res.data.data);
      })
      .catch((err) => { console.log(err, "error"); });
    console.log(id);
  }, []);

  useEffect(() => {
    axiosInstance.post(`/viewChatRecipientsforParentId/${id}`)
      .then((res) => {
        console.log(res, "data");
        if (res.data.data.length > 0)
          setRecipients(res.data.data);
        else
          setRecipients([]);
      })
      .catch((err) => { console.log(err, "error"); });
    console.log(id);
  }, []);

  console.log(recipients);
  console.log(activerecipient);

  return (
    <div className='row'>
      <div className='col-12'>
        <div className='userchat'>
          <div className='chatprofile'>
            <div className='chatimage'>
              <img src={chatimg} alt='' />
            </div>
            <h1>{profile.name}</h1>
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
                {recipients.map((rp, index) => (
                  <div className='list_view' onClick={() => onSelectRecipient(rp)} >
                      <img src={chatimg} alt='' />
                    <div>
                      <p className='list_view_title m-0' >{rp.name}</p>
                    <p className='m-0'><small>Resource Person</small></p>
                      </div>
                    
                  </div>
                  
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className='col-8'>
        {/* <Userinnerchat /> */}
      </div>
    </div>
  );
}

export default Userchat;
