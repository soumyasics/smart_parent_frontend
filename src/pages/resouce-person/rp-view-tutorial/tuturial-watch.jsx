import Rpnav from "../../../Components/resource_person/navbar/Rpnav";
import Footer from "../../commonHomePage/Components/commonFooter";
import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import BASE_URL from "../../../apis/baseUrl";
import { Image } from "react-bootstrap";
const TutorailWatch = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [tutorial, setTutorial] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    let id = findActiveResourcePerson();
    if (id) {
      getData(id);
    } else {
      alert("Resource Person not logged in");
      setTimeout(() => {
        navigate("/admin");
      }, 5);
      console.log("Parent data not available in the Local storage");
    }
  }, []);
  useEffect(() => {
    console.log("alls ", tutorial);
    let tutorialVideoLink = tutorial?.video?.filename || null;
    if (tutorialVideoLink) {
      let URL = `${BASE_URL}${tutorialVideoLink}`;
      console.log("ur", URL);
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

  function isValidVideoURL(url) {
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
  }
  async function getData() {
    try {
      const res = await axiosInstance.get("smart_parent/getTutorialById/" + id);
      console.log("res", res);
      let tutorial = res?.data?.data || null;
      if (tutorial) {
        setTutorial(tutorial);
      } else {
        console.log("can't fetch resource person tutorial details");
      }
    } catch (error) {
      if (error.response.status === 404) {
        alert("Tutorial not found");
        navigate("/rp-view-tutorials");
      } else if (error.response.status === 400) {
        alert("Id is not found");
      } else {
        alert("Server error");
      }

      setTimeout(() => {
        navigate("/rp-view-tutorials");
      }, 1500);
      let errorMsg = error?.response?.data?.message || error.message;
      console.log("error get all video tutorials", errorMsg);
      console.log("error get all video tutorials", error);
    }
  }
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

  return (
    <div>
      <Rpnav />
      <div style={{ minHeight: "500px" }} className="p-5">
        <h3 className="text-center">Watch Video Tutorials</h3>
        <div className="mt-5 d-flex gap-5">
          <div>
            <h3>{tutorial?.title}</h3>

            <iframe
              width="100%"
              height="300px"
              src={videoUrl ? videoUrl : null}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>{tutorial?.description}</p>
          </div>
          <div className="d-flex justify-content-center align-items-center w-50">
            <img
              className="w-75"
              src="https://img.freepik.com/premium-vector/hand-holding-phone-watching-video-streaming-online-social-media-smartphone-with-video-player-screen-watch-movies-educational-materials-web-courses-vector-illustration_401949-374.jpg"
              alt="watch-video"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default TutorailWatch;
