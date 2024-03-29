import React, { useEffect, useState } from "react";
import "./Userprofile.css";
import Profileimg from "../../../../Assets/profile.jpg";
import imagebg from "../../../../Assets/parentbg.avif";
import { Link } from "react-router-dom";
import Navbar from "../../../../pages/commonHomePage/Components/Comp1";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
import axiosMultipartInstance from "../../../../apis/axiosMultipartInstance";

function Userprofile() {
  const [profile, setProfile] = useState({})

  const id = localStorage.getItem("userdetails")


  useEffect(() => {
    const parentData = JSON.parse(localStorage.getItem("parentData")) || null;
    if (parentData && parentData._id) {
      getUserdata(parentData._id);
    }
  }, []);
  function getUserdata(id) {
    axiosMultipartInstance
      .post(`/viewParentById/${id}`)
      .then((res) => {
        console.log(res, "data");
        setProfile(res.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }
  return (
    <>
      <Navbar />

      <div className="row">
        <div className="userprofile col-6">
          <h1>My Profile</h1>
          <p>Manage your Profile settings</p>

          <div className="profile">
            <div className="main">
              <div className="main-heading">
                <h5>Profile</h5>
              </div>
              <div className="main-sub">
                <div className="profileimg">
                  <img src={Profileimg} alt="profile" />
                </div>
              </div>
            </div>
          </div>

          <div className="profile">
            <div className="username">
              <div className="main-heading">
                <h5>Username</h5>
              </div>
              <p>{profile?.name}</p>
            </div>
          </div>

          <div className="profile">
            <div className="Email">
              <div className="main-heading">
                <h5>Email Address</h5>
              </div>
              <p>{profile?.email}</p>
            </div>
          </div>

          <div className="profile">
            <div className="contact">
              <div className="main-heading">
                <h5>Contact Number</h5>
              </div>
              <p>{profile?.contact}</p>
            </div>
          </div>

          <div className="userprofilebtn">
            <Link to="/user_editprofile">
              <button>Edit</button>
            </Link>
          </div>
        </div>

        <div className="mainprofilebg col-6">
          <img src={imagebg} alt="profilebg" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Userprofile;
