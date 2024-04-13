import "./rplist.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import Table from "react-bootstrap/Table";
import BASE_URL from "../../../../apis/baseUrl";
import img from "../../../../Assets/illustrators/man-placeholder.jpg"

function Counselorlist() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axiosInstance
      .get("viewAllCouncilars")
      .then((res) => {
        console.log(res, "data");
        let allCouncilars = res?.data?.data || [];
        const filterPendingReqs = allCouncilars.filter(
          (councilar) => councilar?.isAdminApproved == "pending"
        );
        console.log(filterPendingReqs, "data");
        setUserData(filterPendingReqs);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function handleRejectClick(id) {
    console.log(id);
    axiosInstance
      .post("crejectRpRegistration/" + id)
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          let msg =
            res?.data?.message ||
            "Counseller Registration Request Rejected";
          alert(msg);
          getData();
        } else {
          console.log("err on reject request");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function handleAcceptClick(id) {
    console.log("id", id);
    axiosInstance
      .post("cacceptRpRegistration/" + id)
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          let msg =
            res?.data?.message ||
            "Counseller Registration Request Accepted";
          alert(msg);
          getData();
        } else {
          console.log("err on accept request");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  const navigateCounsellorDetails = (id) => {
    navigate('/counsiler_list/'+id)
  }
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div style={{ maxWidth: "77%" }} className="container">
          {userData.length === 0 && (
            <h1 className="mt-5"> No Counselor Requests Found</h1>
          )}
          {userData.length > 0 && (
            <div>
              <h3 className="mt-5 ms-3">All Counseller Requests</h3>
              <Table
                striped
                bordered
                hover
                className="mt-5 ms-3"
                style={{ width: "100%" }}
              >
                <thead style={{ height: "50px" }}>
                  <tr>
                    <th>No</th>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Experience Year</th>
                    <th>Age</th>
                    <th>Phone Number</th>
                    <th>Accept</th>
                    <th>Reject</th>
                    <th>View More</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((councilar, index) => {
                    return (
                      <tr key={index} className="mt-4">
                        <td>{index + 1}</td>
                        <td>
                          <img
                            className="parentimage"
                            src={
                              councilar.profilePicture
                                ? BASE_URL + councilar.profilePicture.originalname
                                : img
                            }
                          ></img>
                        </td>
                        <td>{councilar.name}</td>
                        <td>{councilar.email}</td>
                        <td>{councilar.experienceYear}</td>
                        <td>{councilar.age}</td>
                        <td>{councilar.contact}</td>
                        <td>
                          <button
                            className="btn btn-success rp-request-handls-btn"
                            onClick={() => {
                              handleAcceptClick(councilar._id);
                            }}
                          >
                            Accept
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger rp-request-handls-btn"
                            onClick={() => {
                              handleRejectClick(councilar._id);
                            }}
                          >
                            Reject
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-primary rp-request-handls-btn"
                            onClick={() => {
                              navigateCounsellorDetails(councilar._id);
                            }}
                          >
                            View More
                          </button>
                        </td>
                        
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Counselorlist;
