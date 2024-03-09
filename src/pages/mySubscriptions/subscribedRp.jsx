import { useState, useEffect } from "react";
import Navbar from "../../pages/commonHomePage/Components/Comp1";
import Footer from "../../pages/commonHomePage/Components/commonFooter";
import axiosInstance from "../../apis/axiosInstance";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import ReactStars from "react-rating-stars-component";
import BASE_URL from "../../apis/baseUrl";
import manImgPlaceholder from "../../Assets/illustrators/man-placeholder-2.jpg";

import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import isParentLoggedIn from "../../customHooks/checkParentLoggedIn";
import ViewAllTutorials from "./viewAllTutorials";
import ViewAllTasks from "./viewTaskDetails";
const SubscribedRp = () => {
  const { id } = useParams();
  const [rpDetails, setRpDetails] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [tutorial, setTutorial] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [watchFree, setWatchFree] = useState(false);
  const [profilePictureUrl, setProfilePictureUrl] = useState(manImgPlaceholder);
  const [resourcePersonId, setResourcePersonId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (rpDetails && rpDetails._id) {
      getVideoTutorials(rpDetails._id);
      getTasks(rpDetails._id);
    } else {
      console.log("can't get the rp details");
    }
  }, [rpDetails]);

  console.log("get task", tasks);

  useEffect(() => {
    let filePath = rpDetails?.profilePicture?.filename || null;

    if (filePath) {
      let url = `${BASE_URL}${filePath}`;
      if (rpDetails) {
        setProfilePictureUrl(url);
      }
    }
  }, [rpDetails]);

  function handleWatchFree() {
    setWatchFree(!watchFree);
  }
  async function getVideoTutorials(rpId) {
    try {
      let rpTutorials = await axiosInstance.get("viewTutorialByRpId/" + rpId);
      let rpTutorialsData = rpTutorials?.data?.data || null;
      console.log("", rpTutorialsData);
      if (rpTutorialsData.length > 0) {
        setTutorial(rpTutorialsData);
      } else {
        setTutorial([]);
        console.log("can't fetch rp details");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function getTasks(rpId) {
    try {
      let tasks = await axiosInstance.get("viewTaskQnByRPId/" + rpId);
      let activeTasks = tasks?.data?.data || null;
      console.log("activ tasks", activeTasks);
      if (activeTasks.length > 0) {
        setTasks(activeTasks);
      } else {
        setTasks([]);
        console.log("can't fetch rp details");
      }
    } catch (error) {
      console.log(error);
    }
  }
  const isValidVideoURL = (url) => {
    const videoExtensions = [
      ".mp4",
      ".avi",
      ".mov",
      ".wmv",
      ".mkv",
      ".flv",
      ".webm",
      ".ogg",
      ".m4v",
    ];
    let fileExtension = url.substring(url.lastIndexOf(".")).toLowerCase();
    return videoExtensions.includes(fileExtension);
  };

  useEffect(() => {
    let tutorialVideoLink = tutorial?.video?.filename || null;

    if (tutorialVideoLink) {
      let URL = `${BASE_URL}${tutorialVideoLink}`;

      // validate if it's a valid video URL
      if (isValidVideoURL(URL)) {
        setVideoUrl(URL);
      } else {
        console.log("Video url might be wrong.");
        setVideoUrl(null);
      }
    } else {
      console.log("Video url might be wrong.");
      setVideoUrl(null);
    }
  }, [tutorial]);

  async function getVideoTutorials(rpId) {
    try {
      let rpTutorials = await axiosInstance.get("viewTutorialByRpId/" + rpId);
      let rpTutorialsData = rpTutorials?.data?.data || null;
      console.log("rp tuto data", rpTutorialsData);
      if (rpTutorialsData.length > 0) {
        setTutorial(rpTutorialsData);
      } else {
        setTutorial([]);
        console.log("can't fetch rp details");
      }
    } catch (error) {
      console.log(error);
    }
  }
  const parentLoggedInStatus = isParentLoggedIn();
  const handleSubscribe = () => {
    console.log("par", parentLoggedInStatus);
    if (!parentLoggedInStatus) {
      alert("Please login to subscribe");
      return;
    }
    setModalShow(true);
  };

  function getData() {
    if (!id) {
      console.log("id not found");
      return;
    }
    try {
      axiosInstance
        .get("get-subscription-by-id/" + id)
        .then((res) => {
          console.log("res", res);
          let rpData = res?.data?.data || null;
          if (rpData) {
            setRpDetails(rpData.resourcePersonId || null);
          } else {
            console.log("can't fetch rp details");
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const ratingChanged = (newRating) => {
    console.log("new rating", newRating);
  };

  function redirectTaskDetails(taskId) {
    navigate(`/view-task-details/${taskId}`);
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-5" style={{ minHeight: "500px" }}>
        <div
          id="rp-details-container"
          className="p-5 d-flex"
          style={{ minHeight: "500px" }}
        >
          <div className="rp-details-right" style={{ width: "60%" }}>
            <Col>
              <Card className="mb-3 d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                  <Card.Img
                    variant="top"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                    }}
                    src={profilePictureUrl}
                  />
                </div>
                {!watchFree && (
                  <Card.Body>
                    <Card.Title className="text-center text-dark mb-3">
                      <h2>Name: {rpDetails?.name} </h2>
                    </Card.Title>
                    <Card.Text style={{ fontSize: "20px" }}>
                      Age: {rpDetails?.age}
                    </Card.Text>
                    <Card.Text style={{ fontSize: "20px" }}>
                      Email: {rpDetails?.email}
                    </Card.Text>
                    <Card.Text style={{ fontSize: "20px" }}>
                      Contact: {rpDetails?.contact}
                    </Card.Text>
                    <Card.Text style={{ fontSize: "20px" }}>
                      Experience Years: {rpDetails?.experienceYear}
                    </Card.Text>
                    <Card.Text>
                      <div className="d-flex align-items-center ps-0">
                        <p style={{ fontSize: "20px" }} className="mt-2">
                          Add Your Rating:
                        </p>
                        <div className="ms-3">
                          <ReactStars
                            count={5}
                            edit={true}
                            value={rpDetails?.rating}
                            onChange={ratingChanged}
                            size={30}
                            activeColor="#ffd700"
                          />
                        </div>

                        <Button
                          style={{
                            marginLeft: "30px",
                            height: "38px",
                            width: "184px",
                          }}
                        >
                          {" "}
                          Confirm Rating{" "}
                        </Button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                )}
              </Card>
            </Col>
          </div>
          <div
            style={{ width: "38%" }}
            className="rp-details-left d-flex p-0 align-items-center"
          >
            <Image
              className="w-100"
              src="https://img.freepik.com/free-vector/caring-adoptive-fathers-abstract-concept-vector-illustration-foster-care-father-adoption-happy-interracial-family-having-fun-together-home-childless-couple-abstract-metaphor_335657-1385.jpg"
              alt="rp"
            />
          </div>
        </div>
      </div>

      <div
        className="mt-5 mx-auto "
        style={{
          minHeight: "600px",
          width: "95%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <h1 style={{ top: "25px" }} className="text-center position-relative">
          {" "}
          Watch Tutorials
        </h1>
        <ViewAllTutorials allTutorials={tutorial} />
      </div>

      <div
        className="mt-5 mx-auto "
        style={{
          minHeight: "600px",
          width: "95%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        {" "}
        <h1 style={{ top: "25px" }} className="text-center position-relative">
          {" "}
          Active Tasks
        </h1>{" "}
        <div className="d-flex flex-wrap justify-content-center gap-5 mt-5 pt-3 ">
          {tasks.map((task, index) => {
            console.log("tas", task);
            return (
              <Card key={index} border="info" style={{ width: "18rem" }}>
                <Card.Header>Task </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {task.title || "Task for your children"}
                  </Card.Title>
                  <Card.Text>
                    {task.description ||
                      "This task for your children. please attend based on your result we provide the scores"}
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="primary"
                      onClick={() => {
                        redirectTaskDetails(task._id);
                      }}
                    >
                      View Task
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <br />
        <br />
      </div>
      <div
        className="mt-5 mx-auto "
        style={{
          minHeight: "600px",
          width: "95%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <div className="d-flex justify-content-center gap-5"></div>
        <h1 style={{ top: "25px" }} className="text-center position-relative">
          {" "}
          View Blogs{" "}
        </h1>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default SubscribedRp;
