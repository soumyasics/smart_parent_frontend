import React from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../../../../apis/baseUrl";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

function ShowOneBlog() {
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  const [blogImg, setBlogImg] = useState(
    "https://t3.ftcdn.net/jpg/03/05/11/90/360_F_305119072_DVvXN3VHimeyX2mLJ75ssdQ3SV48AwOD.jpg"
  );

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getImgLink();
  }, [blogDetails]);
  function getImgLink() {
    if (blogDetails) {
      let pathaname = blogDetails?.img?.filename || null;
      if (pathaname) {
        let url = `${BASE_URL}${pathaname}`;
        if (blogDetails) {
          setBlogImg(url);
        }
      }
    }
  }

  console.log("blog data", blogDetails);

  async function getData() {
    try {
      const res = await axiosInstance.get("viewBlogsById/" + blogId);
      let blogData = res?.data?.data || null;
      if (blogData) {
        setBlogDetails(blogData);
      } else {
        console.log("can't fetch blog details");
      }
    } catch (error) {
      console.log("error get blog details", error);
    }
  }

  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div
        className="col-10 mt-5 mx-auto"
        style={{
          minHeight: "500px",
          width: "75%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div className=" p-5">
          <Row>
            <Col xs={8} className="d-flex flex-column justify-content-center">
              <h2> {blogDetails?.title}</h2>
              <p>{blogDetails?.para1}</p>
              <p>{blogDetails?.para2}</p>
            </Col>
            <Col xs={4}>
              <img
                className="img-fluid"
                src={blogImg}
                alt="blog"
                style={{ height: "300px", width: "100%" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ShowOneBlog;
