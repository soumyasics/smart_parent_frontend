import React from "react";
import "./Freeb.js";
import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance.js";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../../apis/baseUrl.js";
function Freeb() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getBlogs();
  }, []);
  async function getBlogs() {
    try {
      let res = await axiosInstance.get("viewAllBlogs");
      let data = res?.data?.data || null;
      if (data) {
        setBlogs(data);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.log("Error in getBlogs", error);
    }
  }
  return (
    <>
      <div className="fb mb-5 ms-5">
        <p style={{ fontSize: "35px" }}>
          <b>Free Blogs To Read</b>
        </p>
      </div>
      <div className="free-container container">
        {blogs.length === 0 && <h2>No blogs available</h2>}
        {blogs.length > 0 && (
          <div
            className="free-row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {blogs.map((blog, index) => {
              if (index >= 3) {
                return;
              }

              let filename = blog?.img?.filename || null;
              let imgUrl =
                "https://archive.org/download/placeholder-image/placeholder-image.jpg";
              if (filename) {
                imgUrl = `${BASE_URL}${filename}`;
                console.log("img ur", imgUrl);
              }
              return (
                <div
                  class="card"
                  style={{ width: "18rem", transition: "transform .9s" }}
                  key={index}
                >
                  <img src={imgUrl} alt="child" style={{ height: "200px" }} />
                  <div class="card-body text-center">
                    <h5 class="card-title">{blog.title}</h5>

                    <Button
                      onClick={() => {
                        navigate("/parent-view-blog-details/" + blog._id);
                      }}
                    >
                      {" "}
                      View More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Freeb;
