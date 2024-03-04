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
const SubscribedRp = () => {
  const { id } = useParams();
  const [rpDetails, setRpDetails] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [tutorial, setTutorial] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [watchFree, setWatchFree] = useState(false);
  const [profilePictureUrl, setProfilePictureUrl] = useState(manImgPlaceholder);

  useEffect(() => {
    getData();
    getVideoTutorials();
  }, []);

  useEffect(() => {
    let filePath = rpDetails?.profilePicture?.filename || null;

    console.log("rpdd", filePath);
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
        .get("smart_parent/get-subscription-by-id/" + id)
        .then((res) => {
          console.log("res", res);
          let rpData = res?.data?.data || null;
          if (rpData) {
            setRpDetails(rpData.resourcePersonId);
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
          <div className="rp-details-right w-50">
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
                      <div className="d-flex ps-0">
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

                        <Button style={{ marginLeft: "30px" }}>
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
          <div className="rp-details-left">
            <Image
              src="https://img.freepik.com/free-vector/caring-adoptive-fathers-abstract-concept-vector-illustration-foster-care-father-adoption-happy-interracial-family-having-fun-together-home-childless-couple-abstract-metaphor_335657-1385.jpg"
              alt="rp"
            />
          </div>
        </div>
      </div>

      <div>
        <h1> View Tutorial</h1>
      </div>

      <div>
        {" "}
        <h1> View Tasks</h1>{" "}
      </div>
      <div>
        <h1> View Blogs </h1>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default SubscribedRp;
