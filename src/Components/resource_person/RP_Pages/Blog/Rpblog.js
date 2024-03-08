import React, { useEffect } from "react";
import "./Rpblog.css";
import Rpnav from "../../navbar/Rpnav";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
import { useState } from "react";
import axiosMultipartInstance from "../../../../apis/axiosMultipartInstance";
import axiosInstance from "../../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
function Rpblog() {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    para1: "",
    para2: "",
    title: "",
    rpid: "",
    img: null,
  });

  useEffect(() => {
    getRpId();
  }, []);

  function getRpId() {
    let rpId = JSON.parse(localStorage.getItem("activeRp")) || null;
    if (rpId) {
      setBlogData({ ...blogData, rpid: rpId._id });
    } else {
      alert("Resource person not loggedin");
      navigate("/admin");
      return;
    }
  }

  const handleChanges = (e) => {
    console.log("e", e.target);
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setBlogData({ ...blogData, [name]: files[0] });
  };

  useEffect(() => {
    console.log("bol", blogData);
  }, [blogData]);

  const handleSubmit = () => {
    console.log(blogData);
    const { title, para1, para2, img } = blogData;
    if (!title || !para1 || !para2 || !img) {
      alert("Please fill all the fields");
      return;
    }

    sendDataToServer();
  };

  const sendDataToServer = async () => {
    let formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("para1", blogData.para1);
    formData.append("para2", blogData.para2);
    formData.append("files", blogData.img);
    formData.append("rpid", blogData.rpid);
    try {
      let res = await axiosMultipartInstance.post("addBlog", formData);
      if (res.status === 200) {
        alert("Blog posted successfully");
      }
    } catch (error) {
      console.log("error on get task data", error);
    }
  };
  return (
    <>
      <Rpnav />

      <div className="Rpblog">
        <div className="rpblogheading">
          <h1>BLOG POST</h1>
        </div>

        <div className="rpblogform">
          <div className="rpblogfield">
            <div className="rpbloginputs">
              <div className="bloglabel">
                <label>Title</label>
              </div>
              <input
                type="text"
                name="title"
                value={blogData.title}
                onChange={handleChanges}
              />
            </div>
          </div>

          <div className="rpblogfield">
            <div className="rpblogarea">
              <div className="bloglabel">
                <label>Blog Content</label>
              </div>
              <textarea
                type="text"
                name="para1"
                value={blogData.para1}
                onChange={handleChanges}
              />
            </div>
          </div>

          <div className="rpblogfield">
            <div className="rpblogarea">
              <div className="bloglabel">
                <label>Conclusion</label>
              </div>
              <textarea
                type="text"
                name="para2"
                value={blogData.para2}
                onChange={handleChanges}
              />
            </div>
          </div>

          <div className="rpblogfield">
            <div className="blogfiles">
              <div className="bloglabel">
                <label>Images</label>
              </div>

              <div className="rpimg1">
                <input name="img" onChange={handleFileChange} type="file" />
              </div>
            </div>
          </div>

          <div className="blogbutton d-flex justify-content-center">
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rpblog;
