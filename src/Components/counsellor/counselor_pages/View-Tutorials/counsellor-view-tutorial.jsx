import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Counsellornav from "../../navbar/Counsellornav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../../../apis/baseUrl";
import axiosInstance from "../../../../apis/axiosInstance";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
const RpViewTutorials = () => {
  const navigate = useNavigate();
  const [allTutorials, setAllTutorials] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    let id = findActiveCounsellor();
    if (id) {
      getCounsellorTutorials(id);
      // getBlogs(id);
    } else {
      alert("Resource Person not logged in");
      setTimeout(() => {
        navigate("/admin");
      }, 5);
      console.log("Parent data not available in the Local storage");
    }
  }, []);
  
  async function getCounsellorTutorials(id) {
    try {
      const res = await axiosInstance.get("viewTutorialByCounsellorId/" + id);
      let tutorials = res?.data?.data || null;
      if (tutorials) {
        let reverseTuto = tutorials.reverse();
        setAllTutorials(reverseTuto);
      } else {
        console.log("can't fetch resource person tutorial details");
      }
    } catch (error) {
      console.log("error get all video tutorials", error);
    }
  }


  async function getBlogs(id) {
    try {
      const res = await axiosInstance.get("viewMyBlogsByRpid/" + id);
      let blogs = res?.data?.data || null;
      if (blogs) {
        let reverseRpData = blogs.reverse();
        setAllBlogs(reverseRpData);
      } else {
        console.log("can't fetch resource person blogs details");
      }
    } catch (error) {
      console.log("error get all blog ", error);
    }
  }


  function findActiveCounsellor() {
    let activeCounsellor;
    if (localStorage.getItem("activecouncilor")) {
      activeCounsellor = JSON.parse(localStorage.getItem("activecouncilor")) || null;
    } else {
      return null;
    }
    if (activeCounsellor && activeCounsellor._id) {
      return activeCounsellor._id;
    } else {
      return null;
    }
  }

  function watchTutorial(id) {
    if (!id) {
      alert("Tutorial id not found");
      return;
    }
    // navigate("/watch-tutorial/" + id);
  }

  function viewBlogDetails(id) {
    if (!id) {
      alert("Tutorial id not found");
      return;
    }
    navigate("/view-blog-details/" + id);
  }
  return (
    <>
      <Counsellornav />
      <div>
        {allTutorials.length > 0 && (
          <h1 className="text-center mt-5"> My Tutorials </h1>
        )}
        {allTutorials.length === 0 && (
          <h1 className="text-center mt-5"> No Tutorials </h1>
        )}

        <div
          style={{
            width: "90%",
            minHeight: "500px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
          className=" video-tutorials mx-auto d-flex flex-wrap justify-content-center mt-4 p-4 gap-3"
        >
          {allTutorials.length === 0 && (
            <h1 className="text-center "> You don't have any tutorials</h1>
          )}
          {allTutorials?.map((tutorial, index) => {
            let thumbnailUrl =
              "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png";
            if (tutorial?.thumbnail?.filename) {
              if (/\.(jpeg|jpg|gif|png)$/.test(tutorial.thumbnail.filename)) {
                thumbnailUrl = `${BASE_URL}${tutorial.thumbnail.filename}`;
              }
            } else {
              thumbnailUrl =
                "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png";
            }

            let title = tutorial?.title
              ? tutorial.title.length > 50
                ? tutorial.title.substring(0, 50) + "..."
                : tutorial.title
              : "Title";
            let description = tutorial?.description
              ? tutorial.description.length > 50
                ? tutorial.description.substring(0, 50) + "..."
                : tutorial.description
              : "Description";
            return (
              <Card key={index} style={{ width: "18rem", maxHeight: "400px" }}>
                <Card.Img
                  style={{ maxHeight: "50%" }}
                  className="h-50"
                  variant="top"
                  src={thumbnailUrl}
                />
                <Card.Body className="text-center">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>

                  <Button
                    variant="primary"
                    onClick={() => watchTutorial(tutorial?._id)}
                  >
                    Watch{" "}
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>

       
        

        {allBlogs.length === 0 && (
          <h1 className="text-center mt-5"> No Blogs </h1>
        )}
        {allBlogs.length > 0 && (
          <h1 className="text-center mt-5"> My Blogs </h1>
        )}
        {allBlogs.length > 0 && (
          <div
            style={{
              width: "90%",
              minHeight: "500px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            className=" video-tutorials mx-auto d-flex flex-wrap justify-content-center mt-4 p-4 gap-3"
          >
            {allBlogs?.map((blog, index) => {
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

              let description = blog?.para1
                ? blog.para1.length > 50
                  ? blog.para1.substring(0, 50) + "..."
                  : blog.para1
                : "Description";

              let title = blog?.title
                ? blog.title.length > 50
                  ? blog.title.substring(0, 50) + "..."
                  : blog.title
                : "Title";

              return (
                <Card
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
                    <Card.Title>{title || "Title"}</Card.Title>
                    <Card.Text>{description || "Description"}</Card.Text>

                    <Button
                      variant="primary"
                      onClick={() => viewBlogDetails(blog?._id)}
                    >
                      Read{" "}
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default RpViewTutorials;
