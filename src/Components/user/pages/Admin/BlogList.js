import "./bloglist.css";
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import react, { useState, useEffect } from "react";
import BASE_URL from "../../../../apis/baseUrl";
import { Col, Form, Row, Button, Modal, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BlogList() {
  const [blogList, setBlogList] = useState([]);

  const navigate = useNavigate();

  const CounselorData = async () => {
    try {
      const response = await axiosInstance.get("viewAllBlogs");
      setBlogList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    CounselorData();
  }, []);
  console.log(blogList, "pp");

  function viewBlogDetails(id) {
    if (!id) {
      alert("Tutorial id not found");
      return;
    }
    navigate("/show_blog_content/" + id);
  }

  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-10">
        {blogList.length > 0 && (
          <div
            style={{
              width: "90%",
              minHeight: "500px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            className=" video-tutorials mx-auto d-flex flex-wrap justify-content-center mt-4 p-4 gap-3"
          >
            {blogList?.map((blog, index) => {
              console.log("blog", blog);

              let blogImg =
                "https://media.istockphoto.com/id/1253922154/vector/blog-authors-writing-articles.jpg?s=612x612&w=0&k=20&c=rfl7LAg3NoD2fYlPXTBvnXexaq2cFTZLxt7ronsBsWk=";

              let pathname = blog.img?.filename || null;

              console.log("pat", pathname);

              if (pathname) {
                if (/\.(jpeg|jpg|gif|png)$/.test(pathname)) {
                  blogImg = `${BASE_URL}${pathname}`;
                }
              }

              let title = blog?.title
                ? blog.title.length > 50
                  ? blog.title.substring(0, 50) + "..."
                  : blog.title
                : "Title";

              let BlogBy = blog?.title
                ? blog.rpid.name.length > 50
                  ? blog.rpid.name.substring(0, 50) + "..."
                  : blog.rpid.name
                : "Blog By ";

              return (
                <div
                  className="card"
                  key={index}
                  style={{ width: "18rem", maxHeight: "400px" }}
                >
                  <Card.Img
                    style={{ maxHeight: "50%" }}
                    className="h-50"
                    variant="top"
                    src={blogImg}
                    alt="blog"
                  />
                  <Card.Body className="text-center">
                    <Card.Title>Blog Title :{title || "Title"}</Card.Title>
                    <Card.Text>Blog By : {BlogBy || "BlogBy"}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => viewBlogDetails(blog?._id)}
                    >
                      Read{" "}
                    </Button>
                  </Card.Body>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
export default BlogList;
