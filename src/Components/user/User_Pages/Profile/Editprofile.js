import React, { useEffect, useState } from "react";
import "./Editprofile.css";
import imagebg from "../../../../Assets/parentbg.avif";
import axiosInstance from "../../../../apis/axiosInstance";
import Navbar from "../../../../pages/commonHomePage/Components/Comp1";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
import axiosMultipartInstance from "../../../../apis/axiosMultipartInstance";
import { useNavigate } from "react-router-dom";

function Editprofile() {
  const id = localStorage.getItem("userdetails");
  const navigate = useNavigate();
  const [useredit, setUseredit] = useState({
    name: "",
    email: "",
    contact: "",
  });

  useEffect(() => {
    axiosInstance
      .post(`/viewParentById/${id}`)
      .then((res) => {
        console.log("response", res);
        setUseredit(res.data.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const changefn = (e) => {
    setUseredit({ ...useredit, [e.target.name]: e.target.value });
  };

  const submitfn = (e) => {
    e.preventDefault(e);
    console.log("dtat", useredit);
    // axiosMultipartInstance.post(`/editParentById/${id}`,useredit,{headers: {
    //   "Content-Type": "multipart/form-data",
    // }})

    axiosInstance
      .post(`editParentById/${id}`, useredit, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((res) => {
        console.log("Response", res);
        if (res.data.status == 200) {
          navigate("/user_profile");
          alert(res.data.msg);
          console.log(useredit);
          console.log(id);
        } else if (res.data.status == 500) {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="edituserprofile col-6">
          <h1>Edit Profile</h1>
          <p>Manage your Profile settings</p>

          <form onSubmit={submitfn}>
            <div className="editprofile">
              <div className="editmain">
                <div className="editmain-heading">
                  <h5>Profile</h5>
                </div>
                <div className="editmain-sub">
                  <div className="editprofileimg">
                    <img src="" alt="editprofile" />
                  </div>

                  <button>Upload Image</button>
                </div>
              </div>
            </div>

            <div className="editprofile">
              <div className="editusername">
                <div className="editmain-heading">
                  <h5>Username</h5>
                </div>

                <input
                  type="text"
                  name="name"
                  value={useredit?.name}
                  onChange={changefn}
                />
              </div>
            </div>

            <div className="editprofile">
              <div className="editEmail">
                <div className="editmain-heading">
                  <h5>Email Address</h5>
                </div>

                <input
                  type="text"
                  value={useredit?.email}
                  name="email"
                  onChange={changefn}
                />
              </div>
            </div>

            <div className="editprofile">
              <div className="editcontact">
                <div className="editmain-heading">
                  <h5>Contact Number</h5>
                </div>

                <input
                  type="text"
                  value={useredit?.contact}
                  name="contact"
                  onChange={changefn}
                />
              </div>
            </div>

            <div className="editprofilebtn">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>

        <div className="profilebg col-6">
          <img src={imagebg} alt="profilebg" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Editprofile;
