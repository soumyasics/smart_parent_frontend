import Footer from "../../commonHomePage/Components/commonFooter";
import { Image } from "react-bootstrap";
import addTutorialImg from "../../../Assets/illustrators/add-tutorial-img.jpg";
import { useState, useEffect, useContext } from "react";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
import "./rp-add-tutorial.css";
import RpNav from "../../../Components/resource_person/navbar/Rpnav";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router";
import axiosMultipartInstance from "../../../apis/axiosMultipartInstance";

const ResourceUploadForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Learn How to Code");
  const [description, setDescription] = useState(
    "Learn how to code this video help your child"
  );
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [rpid, setRpid] = useState("");
  const [validated, setValidated] = useState(false);
  const [target, setTarget] = useState("3");
  const [duration, setDuration] = useState("20");

  useEffect(() => {
    if (localStorage.getItem("activeRp")) {
      let activeRpId =
        JSON.parse(localStorage.getItem("activeRp"))?._id || null;
      console.log("ac rp id", activeRpId);
      if (activeRpId) {
        setRpid(activeRpId);
      }
    } else {
      console.log("rp id not found in the local storage");
      alert("Resource person is not logged in yet.");
      setTimeout(() => {
        navigate("/admin");
      }, 5);
    }
  }, []);

  const handleUploadTutorail = (e) => {
    e.preventDefault();
    setValidated(true);
    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    }

    if (
      !title ||
      !description ||
      !thumbnail ||
      !video ||
      !rpid ||
      !duration ||
      !target
    ) {
      console.log("all fields are required.");
      return;
    }

    let videoObj = {
      title,
      description,
      thumbnail,
      video,
      rpid,
      duration,
      target,
    };

    sendDataToServer(videoObj);
  };

  const sendDataToServer = async (videoObj) => {
    const formData = new FormData();
    formData.append("title", videoObj.title);
    formData.append("description", videoObj.description);
    formData.append("files", videoObj.thumbnail);
    formData.append("files", videoObj.video);
    formData.append("rpid", videoObj.rpid);
    formData.append("duration", videoObj.duration);
    formData.append("target", videoObj.target);
    try {
      let res = await axiosMultipartInstance.post(
        "addTutorial",
        formData
      );
      console.log("vid", res);
      if (res.status === 200) {
        alert("Tutorial uploaded successfully");
        setTimeout(() => {
          navigate("/rp-view-tutorials");
        }, 1000);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log("err on upload video", error);
    }
  };

  useEffect(() => {
    console.log(title, description, thumbnail, video, "data");
  }, [title, description, thumbnail, video]);
  return (
    <>
      <RpNav />
      <div className="mt-5">
        <h2 className="text-center">Upload Tutorials</h2>

        <div
          style={{ height: "500px", width: "90%" }}
          className=" d-flex add-tutorial-form-container mx-auto"
        >
          <div className="w-50 d-flex p-3 justify-content-center align-items-center">
            <Image className="w-100" src={addTutorialImg} alt="add-tutorials" />
          </div>
          <div className="p-3">
            <Form
              className="rp-video-upload-form p-5"
              noValidate
              validated={validated}
              onSubmit={handleUploadTutorail}
            >
              <h4 className="text-center text-dark"> Tutorial Upload Form </h4>
              <p className="text-center text-dark">
                {" "}
                <i>Upload tutorial videos here.. </i>
              </p>
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Tutorial Title</Form.Label>
                    <Form.Control
                      onChange={(e) => setTitle(e.target.value)}
                      name="title"
                      value={title}
                      type="text"
                      placeholder="Tutorial Title"
                      autoFocus
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Tutorial title
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Tutorial Target</Form.Label>
                    <Form.Control
                      name="target"
                      onChange={(e) => setTarget(e.target.value)}
                      value={target}
                      type="text"
                      placeholder="Video Target age Eg: 3"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide tutorial target
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Tutorial Duration in mins</Form.Label>
                    <Form.Control
                      onChange={(e) => setDuration(e.target.value)}
                      name="duration"
                      value={duration}
                      type="text"
                      placeholder="Tutorial Duration Eg: 3"
                      autoFocus
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Provide Tutorial Duration
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Tutorial Description</Form.Label>
                    <Form.Control
                      name="description"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      type="text"
                      placeholder="Tutorial Description"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide tutorial description
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Tutorial Thumbnail</Form.Label>
                    <Form.Control
                      name="thumbnail"
                      type="file"
                      required
                      onChange={(e) => setThumbnail(e.target.files[0])}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a video thumbnail
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Tutorial Video</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        setVideo(e.target.files[0]);
                      }}
                      name="video"
                      type="file"
                      required
                      placeholder="Video"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please upload a video
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <div className="mt-3 d-flex justify-content-center align-items-center">
                <Button
                  type="submit"
                  style={{ width: "10rem", height: "50px" }}
                >
                  {" "}
                  Upload Video
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default ResourceUploadForm;
