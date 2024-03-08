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

function AdminDashboard() {
  const [rpLists, setRpLists] = useState([]);
  const [userData, setUserData] = useState([]);
  const [parentlist, setParentList] = useState([]);
  const [parentCount, setparentCount] = useState(0);
  const [resourcepersoncount, setResourcepersoncount] = useState(0);
  const [counsellorCount, setCounsellorCount] = useState(0);

  function RPData() {
    axiosInstance
      .get("view-all-rp")
      .then((res) => {
        console.log("res", res);
        let allRps = res?.data?.data || [];
        const filteracceptedReqs = allRps.filter(
          (rp) => rp?.isAdminApproved == "accepted"
        );

        setRpLists(filteracceptedReqs);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  const CounselorData = async () => {
    try {
      const response = await axiosInstance.get(
        "viewAllCouncilars"
      );
      // const response = await axiosInstance.get("viewAllCouncilars");
      setUserData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const parentData = async () => {
    try {
      const response = await axiosInstance.post("viewParents");
      setParentList(response.data.data);
      console.log(response.data.data, "parent");
    } catch (error) {
      console.error("Error fetching parent data:", error, "parent");
    }
  };

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

  useEffect(() => {
    parentData();
    CounselorData();
    RPData();
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
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 ms-5 container w-75">
              <h3 className="mt-5">All Counselor Requests</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th scope="col">name</th>
                    <th scope="col">experienceYear</th>
                    <th scope="col">age</th>
                    <th scope="col">contact</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((data) => {
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.experienceYear}</td>
                        <td>{data.age}</td>
                        <td>{data.contact}</td>
                        <td>{data.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-7 ms-5 container w-75">
            <h3 className="mt-5">All Resource Person</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Experience Year</th>
                  <th>Age</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {rpLists.map((rp, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          className="parentimage"
                          src={
                            "http://localhost:4009/" +
                            (rp.profilePicture
                              ? rp.profilePicture.originalname
                              : "")
                          }
                        ></img>
                      </td>
                      <td>{rp.name}</td>
                      <td>{rp.email}</td>
                      <td>{rp.experienceYear}</td>
                      <td>{rp.age}</td>
                      <td>{rp.contact}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2"></div>
        <div className="col-6 ms-5 container w-75">
          <h3 className="mt-5">All Parents</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                {" "}
                <th scope="col">name</th>
                <th scope="col">Contact</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {parentlist.map((data) => {
                return (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.contact}</td>
                    <td>{data.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
