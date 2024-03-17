import React,{ useEffect, useState }  from 'react'
import "../../../user/User_Pages/Profile/Editprofile.css";
import axiosInstance from '../../../../apis/axiosInstance';
import { useNavigate } from 'react-router-dom';
import BASE_URL from "../../../../apis/baseUrl";
import img from "../../../../Assets/illustrators/man-placeholder-2.jpg"

function CounsellorProfileEdit() {
    const navigate = useNavigate();

    const [CounsellorEdit, setCousellorEdit] = useState({
      name: "",
      age:"",
      experienceYear:"",
      email: "",
      contact: ""
    });
    useEffect(() => {
    const counselorData = JSON.parse(localStorage.getItem("activecouncilor")) || null;
    if (counselorData && counselorData._id) {
      getCounselorData(counselorData._id);
    }
  }, []);
  async function getCounselorData(id) {
    try {
      const response = await axiosInstance.get(`/viewCouncilarById/${id}`);
      setCousellorEdit(response.data.data);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  }
  const changefn = (e) => {
    setCousellorEdit({ ...CounsellorEdit, [e.target.name]: e.target.value });
  };


  
  const submitfn = async (e) => {
    e.preventDefault();

    try {
      const counselorData = JSON.parse(localStorage.getItem("activecouncilor")) || null;
      if (counselorData && counselorData._id) {
        const id = counselorData._id;
        const res = await axiosInstance.post(`editCouncilarById/${id}`, CounsellorEdit);
        console.log('Response', res);
        if (res.data.status === 200) {
          alert(res.data.message);
          // Redirect or perform any other action upon successful update
        } else {
          alert(res.data.message);
        }
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    }
  };


  return (
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
            <input type='text' name='name' value={CounsellorEdit.name} onChange={changefn} />
          </div>
        </div>
        <div className='editprofile'>
          <div className='editEmail'>
            <div className='editmain-heading'>
              <h5>Email Address</h5>
            </div>
            <input type='text' value={CounsellorEdit.email} name='email' onChange={changefn} />
          </div>
        </div>
        <div className='editprofile'>
          <div className='editcontact'>
            <div className='editmain-heading'>
              <h5>Contact Number</h5>
            </div>
            <input type='text' value={CounsellorEdit.contact} name='contact' onChange={changefn} />
          </div>
        </div>
        <div className='editprofile'>
          <div className='editcontact'>
            <div className='editmain-heading'>
              <h5>Age</h5>
            </div>
            <input type='text' value={CounsellorEdit.age} name='age' onChange={changefn} />
          </div>
        </div><div className='editprofile'>
        <div className='editcontact'>
          <div className='editmain-heading'>
            <h5>experience</h5>
          </div>
          <input type='text' value={CounsellorEdit.experienceYear} name='experienceYear' onChange={changefn} />
        </div>
      </div>
        <div className='editprofilebtn'>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
    <div className="mainprofilebg col-6">
    <img
    alt="img"
    className="parentimageside dropdown-toggle"
    src={
        CounsellorEdit.profilePicture
        ? BASE_URL + CounsellorEdit.profilePicture.originalname
        : img
    }
  ></img>
    </div>
  </div>
  )
}

export default CounsellorProfileEdit
