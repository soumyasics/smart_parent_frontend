import React from "react";
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import { useState, useEffect } from "react";
import "./admin.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  
  const [parentCount, setparentCount] = useState(0);
  const [resourcepersoncount, setResourcepersoncount] = useState(0);
  const [counsellorCount, setCounsellorCount] = useState(0);

  const parentCollectionCount = async () => {
    try {
      const response = await axiosInstance.post(
        "parentcollection"
      ); // Replace with your backend URL
      setparentCount(response.data.count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const RPCollectionCount = async () => {
    try {
      const response = await axiosInstance.post("rpcollection"); // Replace with your backend URL
      setResourcepersoncount(response.data.count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const counsellorCollectionCount = async () => {
    try {
      const response = await axiosInstance.post(
        "counsellorcollection"
      ); // Replace with your backend URL
      setCounsellorCount(response.data.count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const navigate=useNavigate()

  useEffect(() => {
    if (localStorage.getItem("loggedUser") !== null) {
      navigate("/admin_dashboard");
    } else {
      navigate("/admin");
    }
  }, []);

  useEffect(() => {
    parentCollectionCount();
    counsellorCollectionCount();
    RPCollectionCount();
  }, []);

  return (
    <div>
      <div>
        <Sidebar />
        <div className="cardpadding">
          <Row className=" ms-5 mt-5 ps-5">
            <Col xs={12} md={4}>
              <Container>
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/super-mono-reflection/red/user_red.png"
                          alt="img"
                        ></img>
                        <span>
                          Joined Parents{" "}
                          <span className="fs-1 ms-2">{parentCount}</span>{" "}
                        </span>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>{" "}
            </Col>
            <Col xs={12} md={4}>
              <div className="container">
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/super-mono-reflection/red/user_red.png"
                          alt="img"
                        ></img>
                        <span>
                          Joined Resource persons{" "}
                          <span className="fs-1 ms-2">
                            {resourcepersoncount}
                          </span>
                        </span>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="container">
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        <img
                          src="https://cdn0.iconfinder.com/data/icons/super-mono-reflection/red/user_red.png"
                          alt="img"
                        ></img>
                        <span>
                          Joined Counselors{" "}
                          <span className="fs-1 ms-2">{counsellorCount}</span>
                        </span>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          
        </div>
      </div>

      
    </div>
  );
}

export default AdminDashboard;
