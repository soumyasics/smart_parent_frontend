import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import BASE_URL from "../../../../apis/baseUrl";
import "./rpProfile.css";
import { useParams } from "react-router-dom";

function Rprofile() {
  const [userData, setUserData] = useState("");
  
  const { id } = useParams();

  const rpData = async (req,res) => {
    try {
      const response = await axiosInstance.get(
        "view-rp-by-id/"
        +id
      );
      console.log(response.data.data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  let profilePictureUrl = userData.profileimg;
  let pathname = userData?.profilePicture?.originalname || null;
  if (pathname) {
    profilePictureUrl = BASE_URL + pathname;
  }

  useEffect(() => {
    rpData();
  }, []);
  return (
    <div>
      <div className="main main-raised">
        <div className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="profile">
                  <div className="avatar">
                    <img
                      src={profilePictureUrl}
                      alt="Circle Image"
                      className="img-raised rounded-circle img-fluid"
                    />
                  </div>
                  <div className="name">
                    <h3 className="title">{userData.name}</h3>
                    <h6>{userData.email}</h6>
                    <h6>{ userData.age}</h6>
                    <h6>{userData.contact}</h6>
                    <h6> Age : {userData.age}</h6>
                    <h6>Experience : {userData.experienceYear}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rprofile;
