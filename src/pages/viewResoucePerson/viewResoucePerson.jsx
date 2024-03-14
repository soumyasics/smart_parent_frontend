import Navbar from "../../pages/commonHomePage/Components/Comp1";
import Footer from "../commonHomePage/Components/commonFooter";
import axiosInstance from "../../apis/axiosInstance";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import manPlaceholderImg from "../../Assets/illustrators/man-placeholder.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import BASE_URL from "../../apis/baseUrl";
const ViewResourcePerson = () => {
  const navigate = useNavigate();
  const [rpLists, setRpLists] = useState([]);

  const [activeUser, setActiveUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("parentData")) {
      setActiveUser(JSON.parse(localStorage.getItem("parentData")));
    } else {
      console.log("Parent data not found in the local storage");
      alert("Please login first");
      navigate("/sign_in");
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axiosInstance
      .get("view-all-rp")
      .then((res) => {
        console.log("res", res);
        let allRps = res?.data?.data || [];
        const filterPendingReqs = allRps.filter(
          (rp) => rp?.isAdminApproved == "accepted"
        );

        setRpLists(filterPendingReqs);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function handleSubscribe(id) {}

  function handleViewRp(id) {
    console.log(id);
    navigate("//" + id);
  }

  return (
    <div>
      <Navbar />

      <h1 className="text-center my-3"> View All Resouce Person</h1>
      <p className="text-center my-3">
        {" "}
        <i>From here you can subscribe resouce persons and get tasks.</i>
      </p>

      <div
        className="justify-content-center mx-auto p-3 d-flex flex-wrap gap-5 ps-5"
        style={{
          minHeight: "500px",
          width: "95%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        {rpLists.map((rp) => {
          let profilePicture = manPlaceholderImg;
          const pathName = rp.profilePicture?.filename || null;
          if (pathName) {
            profilePicture = BASE_URL + pathName;
          }
          return (
            <Card
              style={{
                width: "18rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Card.Img className="h-50" variant="top" src={profilePicture} />
              <Card.Body className="text-center">
                <Card.Title>{rp?.name} </Card.Title>
                <Card.Text>Email: {rp?.email}</Card.Text>
                <Card.Text>Contact {rp?.contact}</Card.Text>
                <Card.Text>Experience Year {rp?.experienceYear}</Card.Text>
                <button
                  className="btn btn-primary rp-request-handls-btn mx-auto"
                  onClick={() => {
                    handleViewRp(rp._id);
                  }}
                >
                  View More
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default ViewResourcePerson;
