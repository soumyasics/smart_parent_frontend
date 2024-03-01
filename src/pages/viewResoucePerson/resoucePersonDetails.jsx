import Navbar from "../../pages/commonHomePage/Components/Comp1";
import Footer from "../commonHomePage/Components/commonFooter";
import axiosInstance from "../../apis/axiosInstance";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";

import ResoucePersonSubscribeModel from "./subscribeModel";
const ResoucePersonDetails = () => {
  const { id } = useParams();
  const [rpDetails, setRpDetails] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  console.log("rp", rpDetails);
  function getData() {
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
              <Card.Body>
                <Card.Title className="text-center text-dark mb-3">
                  Name: {rpDetails?.name}
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
              <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  {" "}
                  Subscribe{" "}
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
