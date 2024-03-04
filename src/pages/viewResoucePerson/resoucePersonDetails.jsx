import Navbar from "../../pages/commonHomePage/Components/Comp1";
import Footer from "../commonHomePage/Components/commonFooter";
import axiosInstance from "../../apis/axiosInstance";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import isParentLoggedIn from "../../customHooks/checkParentLoggedIn";
import { Button } from "react-bootstrap";
import BASE_URL from "../../apis/baseUrl";

import ResoucePersonSubscribeModel from "./subscribeModel";
const ResoucePersonDetails = () => {
  const { id } = useParams();
  const [rpDetails, setRpDetails] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [tutorial, setTutorial] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [watchFree, setWatchFree] = useState(false);

  useEffect(() => {
    getData();
    getVideoTutorials();
  }, []);

  useEffect(() => {
    console.log("rps video", tutorial);
  }, [tutorial]);
  function handleWatchFree() {
    setWatchFree(!watchFree);
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

  async function getVideoTutorials() {
    if (!id) {
      console.log("id not found");
      return;
    }
    try {
      let rpTutorials = await axiosInstance.get(
        "smart_parent/viewTutorialByRpId/" + id
      );
      let rpTutorialsData = rpTutorials?.data?.data || null;

      if (rpTutorialsData.length > 0) {
        setTutorial(rpTutorialsData[0]);
      } else {
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

  console.log("rp", rpDetails);
  function getData() {
    if (!id) {
      console.log("id not found");
      return;
    }
    try {
      axiosInstance
        .get("smart_parent/view-rp-by-id/" + id)
        .then((res) => {
          console.log("res", res);
          let rpData = res?.data?.data || null;
          if (rpData) {
            setRpDetails(rpData);
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
  return (
    <div>
      <ResoucePersonSubscribeModel
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Navbar />

      <div
        id="rp-details-container"
        className="p-5 d-flex"
        style={{ minHeight: "500px" }}
      >
        <div className="rp-details-left">
          <Image
            src="https://cdni.iconscout.com/illustration/premium/thumb/human-resources-7450942-6104016.png?f=webp"
            alt="rp"
          />
        </div>
        <div className="rp-details-right w-75">
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovxwCOZFk-Misb-JaZkfCoxWc6HCK9yIjdUc4u-19Mw&s"
                />
              </div>
              {!watchFree && (
                <Card.Body>
                  <Card.Title className="text-center text-dark mb-3">
                    <h2>Name: {rpDetails?.name} </h2>
                  </Card.Title>
                  <Card.Text>Age: {rpDetails?.age}</Card.Text>
                  <Card.Text>Email: {rpDetails?.email}</Card.Text>
                  <Card.Text>Contact: {rpDetails?.contact}</Card.Text>
                  <Card.Text>
                    Experience Years: {rpDetails?.experienceYear}
                  </Card.Text>
                  <Card.Text>
                    Description: I have a lot of experience in this field. I can
                    help you with your Childs tasks and needs. Subscribes Me.
                  </Card.Text>
                </Card.Body>
              )}

              {watchFree && tutorial && videoUrl && (
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
              )}

              <div className="d-flex justify-content-between">
                <Button variant="primary mb-5" onClick={handleSubscribe}>
                  {" "}
                  Subscribe{" "}
                </Button>
                <Button variant="primary mb-5" onClick={handleWatchFree}>
                  {!watchFree ? "Watch Free Tutorial" : "View Details"}
                </Button>
              </div>
            </Card>
          </Col>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResoucePersonDetails;
