import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import BASE_URL from "../../../../apis/baseUrl";
import "./cousellorprofile.css";
import { useParams, Link } from "react-router-dom";
import img from "../../../../Assets/illustrators/man-placeholder-2.jpg"

function Counselorprofile() {
  const [userData, setUserData] = useState("");

  const { id } = useParams();

  const CounselorData = async (req, res) => {
    try {
      const response = await axiosInstance.get("viewCouncilarById/" + id);
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
    CounselorData();
  }, []);
  return (
    <div className="row">
      <div className="userprofile col-6">
        <h1>My Profile</h1>
        <p>Manage your Profile settings</p>

        <div className="profile">
          <div className="username">
            <div className="main-heading">
              <h5>Username</h5>
            </div>
            <p>{userData.name}</p>
          </div>
        </div>

        <div className="profile">
          <div className="Email">
            <div className="main-heading">
              <h5>Email Address</h5>
            </div>
            <p>{userData.email}</p>
          </div>
        </div>

        <div className="profile">
          <div className="contact">
            <div className="main-heading">
              <h5>Contact Number</h5>
            </div>
            <p>{userData.contact}</p>
          </div>
        </div>

        <div className="profile">
          <div className="contact">
            <div className="main-heading">
              <h5>Age</h5>
            </div>
            <p>{userData.age}</p>
          </div>
        </div>
        <div className="profile">
          <div className="contact">
            <div className="main-heading">
              <h5>Experience</h5>
            </div>
            <p>{userData.experienceYear}</p>
          </div>
        </div>

        <div className="userprofilebtn">
          <Link to="/user_editprofile">
            <button>Edit</button>
          </Link>
        </div>
      </div>
      <div className="mainprofilebg col-6">
      <img
      alt="img"
      className="parentimageside dropdown-toggle"
      src={
        userData.profilePicture
          ? BASE_URL + userData.profilePicture.originalname
          : img
      }
    ></img>
      </div>
    </div>
  );
}

export default Counselorprofile;
