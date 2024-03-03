import Footer from "../../commonHomePage/Components/commonFooter";
import { Image } from "react-bootstrap";
import addTutorialImg from "../../../Assets/illustrators/add-tutorial-img.jpg";
import { useState, useEffect, useContext } from "react";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
import "./rp-add-tutorial.css";
import axiosInstance from "../../../apis/axiosInstance";
import axiosMultipartInstance from "../../../apis/axiosMultipartInstance";
const ResourceUploadForm = () => {
  const [title, setTitle] = useState("vid tit");
  const [description, setDescription] = useState("vid des");
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);
  const [rpid, setRpid] = useState("65dc8ef9c5a825fd60e37b07");
  const [validated, setValidated] = useState(false);

  const handleUploadTutorail = (e) => {
    e.preventDefault();
    setValidated(true);
    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    }

    if (!title || !description || !thumbnail || !video || !rpid) {
      console.log("all fields are required.");
      return;
    }

    let videoObj = {
      title,
      description,
      thumbnail,
      video,
      rpid,
    };

    sendDataToServer(videoObj);
  };

  const sendDataToServer = async (videoObj) => {
   
    console.log("vid", videoObj);

    const formData = new FormData();
    formData.append("title", videoObj.title);
    formData.append("description", videoObj.description);
    formData.append("thumbnail", videoObj.thumbnail);
    formData.append("files", videoObj.video);
    formData.append("files", videoObj.rpId);
    console.log("fomd", formData);
    try {
      let res = await axiosMultipartInstance.post(
        "smart_parent/addTutorial",
        formData
      );

      console.log("vid", res);
    } catch (error) {
      console.log("err on upload video", error);
    }
  };

  useEffect(() => {
    console.log(title, description, thumbnail, video, "data");
  }, [title, description, thumbnail, video]);
  return (
    <>
      <h3> Navbar here </h3>
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
              <h4 className="text-center text-dark"> Upload Tutorial </h4>
              <p className="text-center text-dark">Tutorail details</p>
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
              <Row>
                <Col>
                  {" "}
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
