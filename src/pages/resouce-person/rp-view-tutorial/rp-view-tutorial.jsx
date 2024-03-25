import Footer from "../../commonHomePage/Components/commonFooter";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rpnav from "../../../Components/resource_person/navbar/Rpnav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import BASE_URL from "../../../apis/baseUrl";
const RpViewTutorials = () => {
  const navigate = useNavigate();
  const [allTutorials, setAllTutorials] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    let id = findActiveResourcePerson();
    if (id) {
      getData(id);
      getBlogs(id);
      getTasks(id);
    } else {
      alert("Resource Person not logged in");
      setTimeout(() => {
        navigate("/admin");
      }, 5);
      console.log("Parent data not available in the Local storage");
    }
  }, []);
  useEffect(() => {
    console.log("alls ", allBlogs);
  }, [allBlogs]);
  async function getData(id) {
    try {
      const res = await axiosInstance.get("viewTutorialByRpId/" + id);
      let rpData = res?.data?.data || null;
      if (rpData) {
        let reverseRpData = rpData.reverse();
        setAllTutorials(reverseRpData);
      } else {
        console.log("can't fetch resource person tutorial details");
      }
    } catch (error) {
      console.log("error get all video tutorials", error);
    }
  }
  async function getTasks(id) {
    try {
      const res = await axiosInstance.get("viewTaskQnByRPId/" + id);
      let tasks = res?.data?.data || null;
      if (tasks) {
        let reverseRpData = tasks.reverse();
        setAllTasks(reverseRpData);
      } else {
        console.log("can't fetch resource person tutorial details");
      }
    } catch (error) {
      console.log("error get all video tutorials", error);
    }
  }

  async function redirectTaskDetails() {
    navigate("/view-task-details");
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

  console.log("get bl", allBlogs);

  function findActiveResourcePerson() {
    let activeRp;
    if (localStorage.getItem("activeRp")) {
      activeRp = JSON.parse(localStorage.getItem("activeRp")) || null;
    } else {
      return null;
    }
    if (activeRp && activeRp._id) {
      return activeRp._id;
    } else {
      return null;
    }
  }

  function watchTutorial(id) {
    if (!id) {
      alert("Tutorial id not found");
      return;
    }
    navigate("/watch-tutorial/" + id);
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
      <Rpnav />
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

        {allTasks.length === 0 && (
          <h1 className="text-center mt-5"> No Tasks </h1>
        )}
        {allTasks.length > 0 && (
          <h1 className="text-center mt-5"> My Tasks </h1>
        )}
        {allTasks.length > 0 && (
          <div
            style={{
              width: "90%",
              minHeight: "500px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            className=" video-tutorials mx-auto d-flex flex-wrap justify-content-center mt-4 p-4 gap-3"
          >
            {allTasks?.map((task, index) => {
              console.log("task id", task._id);
              let desc = task?.description || null;
              let description = "";
              if (desc) {
                if (desc.length > 150) {
                  desc = desc.substring(0, 150) + "...";
                }
                description = desc;
              }
              return (
                <Card key={index} style={{ width: "18rem", height: "250px" }}>
                  <Card.Body>
                    <Card.Title>{task?.title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}

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
