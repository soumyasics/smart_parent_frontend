import React, { useState, useEffect } from "react";
import img from "../../Assest/CARD (1).png";
import axiosInstance from "../../Baseurl";
import {useNavigate} from 'react-router-dom'

function CreatorProfile({url}) {
  const [creatorRegister, setCreatorRegister] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    mobile: "",
    email: "",
    password: "",
    street: "",
    city: "",
    country: "",
    pincode: "",
    image: "",
  });
  const navigate=useNavigate()

  const handleedit=()=>{
    navigate('/creatorredit')
  }

  const handlelogout=()=>{
    localStorage.removeItem("creatorid")
    localStorage.removeItem("token")
    alert('logged out successfully')
    navigate('/')
  }

  useEffect(() => {
    axiosInstance
      .post("/viewCreatorById", { id: localStorage.getItem("creatorid") })
      .then((response) => {
        console.log(response.data.data);
        // document.getElementById(
        //   response.data.data.gender.toLowerCase()
        // ).checked = "true";
        setCreatorRegister(response.data.data);
      })
      .catch((error) => {
        console.error("Error submitting data: ", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row" id="profilemain">
        <div className="col-3">
          <img src={url+creatorRegister.image.filename} className="profile_img" alt="img"></img>
        </div>
        <div className="col-8 mt-2">
          <div>
            <label className="profilename">
              {" "}
              {creatorRegister.firstname} {creatorRegister.lastname}
            </label>
            <button onClick={handleedit} className="btn btn-outline-dark bg-light px-4">Edit</button>{" "}
            <button onClick={handlelogout} className=" RegisterButton ms-2 p-2">Logout</button>
          </div>
          <div>{creatorRegister.email}</div>
          <div>About me</div>
          <div>
            {creatorRegister.street}, {creatorRegister.city},{" "}
            {creatorRegister.pincode}, {creatorRegister.country}
          </div>
          <div>mobile : {creatorRegister.mobile}</div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <h5 className="mt-3">Recently Listened</h5>
        <div className="col-3">
          <card>
            <img src={img} className="profile_img" alt="img"></img>
          </card>
        </div>
        <div className="col-3">
          <card>
            <img src={img} className="profile_img" alt="img"></img>
          </card>
        </div>
        <div className="col-3">
          <card>
            <img src={img} className="profile_img" alt="img"></img>
          </card>
        </div>
        <div className="col-3">
          <card>
            <img src={img} className="profile_img" alt="img"></img>
          </card>
        </div>
      </div>
    </div>
  );
}

export default CreatorProfile;
