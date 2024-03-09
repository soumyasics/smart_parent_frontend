import React from 'react'
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Footer from '../../../../pages/commonHomePage/Components/commonFooter';
import countutimg from "../../../../Assets/countutorialimg2.jpg"

function Counseloraddtutorials() {
  return (
    <>
    
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
                  
                    name="title"
                    
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
                    
                    name="duration"
                    
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
  )
}

export default Counseloraddtutorials