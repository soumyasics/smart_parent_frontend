import React, { useEffect, useState } from 'react';
import "./Editprofile.css";
import imagebg from "../../../../Assets/parentbg.avif";
import axiosInstance from '../../../../apis/axiosInstance';
import Navbar from "../../../../pages/commonHomePage/Components/Comp1";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
import { useNavigate } from 'react-router-dom';

function Editprofile() {
  const navigate = useNavigate();
  const [useredit, setUseredit] = useState({
    name: "",
    email: "",
    contact: ""
  });

  useEffect(() => {
    const parentData = JSON.parse(localStorage.getItem("parentData")) || null;
    if (parentData && parentData._id) {
      getUserdata(parentData._id);
    }
  }, []);

  async function getUserdata(id) {
    try {
      const response = await axiosInstance.post(`/viewParentById/${id}`);
      setUseredit(response.data.data);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  }

  const changefn = (e) => {
    setUseredit({ ...useredit, [e.target.name]: e.target.value });
  };

  const submitfn = async (e) => {
    e.preventDefault();

    try {
      const parentData = JSON.parse(localStorage.getItem("parentData")) || null;
      if (parentData && parentData._id) {
        const id = parentData._id;
        const res = await axiosInstance.post(`editParentById/${id}`, useredit);
        console.log('Response', res);
        if (res.data.status === 200) {
          alert('Profile updated successfully');
          // Redirect or perform any other action upon successful update
        } else {
          alert('Failed to update profile');
        }
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };

  return (
    <>
      <Navbar />
      <div className='row'>
        <div className='edituserprofile col-6'>
          <h1>Edit Profile</h1>
          <p>Manage your Profile settings</p>
          <form onSubmit={submitfn}>
            <div className='editprofile'>
              {/*<div className='editmain'>
                <div className='editmain-heading'>
                  <h5>Profile</h5>
                </div>
                <div className='editmain-sub'>
                  <div className='editprofileimg'>
                    <img src='' alt='editprofile' />
                  </div>
                  <button>Upload Image</button>
                </div>
              </div>*/}
            </div>
            <div className='editprofile'>
              <div className='editusername'>
                <div className='editmain-heading'>
                  <h5>Username</h5>
                </div>
                <input type='text' name='name' value={useredit.name} onChange={changefn} />
              </div>
            </div>
            <div className='editprofile'>
              <div className='editEmail'>
                <div className='editmain-heading'>
                  <h5>Email Address</h5>
                </div>
                <input type='text' value={useredit.email} name='email' onChange={changefn} />
              </div>
            </div>
            <div className='editprofile'>
              <div className='editcontact'>
                <div className='editmain-heading'>
                  <h5>Contact Number</h5>
                </div>
                <input type='text' value={useredit.contact} name='contact' onChange={changefn} />
              </div>
            </div>
            <div className='editprofilebtn'>
              <button type='submit'>Save</button>
            </div>
          </form>
        </div>
        <div className='profilebg col-6' >
          <img src={imagebg} alt='profilebg' />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Editprofile;
