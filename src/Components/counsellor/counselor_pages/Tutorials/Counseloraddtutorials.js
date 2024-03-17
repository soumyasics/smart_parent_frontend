import React, { useEffect, useState } from "react";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
import countutimg from "../../../../Assets/countutorialimg2.jpg";
import { useNavigate } from "react-router-dom";
import axiosMultipartInstance from "../../../../apis/axiosMultipartInstance";
import Counsellornav from "../../navbar/Counsellornav";
function Counseloraddtutorials() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [cid, setcid] = useState("");
  const [validated, setValidated] = useState(false);
  const [target, setTarget] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    if (localStorage.getItem("activecouncilor")) {
      let activecouncilorId =
        JSON.parse(localStorage.getItem("activecouncilor"))?._id || null;
      if (activecouncilorId) {
        setcid(activecouncilorId);
      }
    } else {
      console.log("Councilor id not found in the local storage");
      alert("Councilor is not logged in yet.");
      navigate("/admin");
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
      !cid ||
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
      cid,
      duration,
      target,
    };

    console.log("vide obj", videoObj);
    sendDataToServer(videoObj);
  };

  const sendDataToServer = async (videoObj) => {
    const formData = new FormData();
    formData.append("title", videoObj.title);
    formData.append("description", videoObj.description);
    formData.append("files", videoObj.thumbnail);
    formData.append("files", videoObj.video);
    formData.append("cid", videoObj.cid);
    formData.append("duration", videoObj.duration);
    formData.append("target", videoObj.target);
    try {
      let res = await axiosMultipartInstance.post(
        "counselloraddTutorial",
        formData
      );
      console.log("vid", res);
      if (res.status === 200) {
        alert("Tutorial uploaded successfully");
        // setTimeout(() => {
        //   navigate("");
        // }, 1000);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log("err on upload video", error);
    }
  };

  return (
    <>
      <Counsellornav />
      <div className="mt-5">
        <h2 className="text-center">Upload Tutorials</h2>

        <div
          style={{ height: "500px", width: "90%" }}
          className=" d-flex add-tutorial-form-container mx-auto"
        >
          <div className="w-50 d-flex p-3 justify-content-center align-items-center">
            <Image className="w-100" src={countutimg} alt="add-tutorials" />
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
}

export default Counseloraddtutorials;
