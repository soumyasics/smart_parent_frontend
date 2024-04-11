import "./rplist.css";
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import BASE_URL from "../../../../apis/baseUrl";
import img from "../../../../Assets/illustrators/man-placeholder.jpg";
import { useNavigate } from "react-router-dom";
function RPLIst() {
  const navigate = useNavigate();
  const [rpLists, setRpLists] = useState([]);

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
          (rp) => rp?.isAdminApproved == "pending"
        );
        console.log(filterPendingReqs, "data");
        setRpLists(filterPendingReqs);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  console.log(rpLists, "list");

  function handleRejectClick(id) {
    console.log(id);
    axiosInstance
      .post("rejectRpRegistration/" + id)
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          let msg =
            res?.data?.message ||
            "Resource Person Registration Request Rejected";
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
      .post("acceptRpRegistration/" + id)
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          let msg =
            res?.data?.message ||
            "Resource Person Registration Request Accepted";
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
  const navigateRpDetails = (id) => {
    navigate("/rp_pendinglist/" + id);
  };
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div style={{ maxWidth: "77%" }} className="container">
          {rpLists.length === 0 && (
            <h1 className="mt-5"> No Resource Person Requests Found</h1>
          )}
          {rpLists.length > 0 && (
            <div>
              <h3 className="mt-5 ms-3">All Resource person Requests</h3>
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
                  </tr>
                </thead>
                <tbody>
                  {rpLists.map((rp, index) => {
                    return (
                      <tr key={index} className="mt-4">
                        <td>{index + 1}</td>
                        <td>
                          <img
                            className="parentimage"
                            src={
                              rp.profilePicture
                                ? BASE_URL + rp.profilePicture.originalname
                                : img
                            }
                          ></img>
                        </td>
                        <td>{rp.name}</td>
                        <td>{rp.email}</td>
                        <td>{rp.experienceYear}</td>
                        <td>{rp.age}</td>
                        <td>{rp.contact}</td>
                        <td>
                          <button
                            className="btn btn-success rp-request-handls-btn"
                            onClick={() => {
                              handleAcceptClick(rp._id);
                            }}
                          >
                            Accept
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger rp-request-handls-btn"
                            onClick={() => {
                              handleRejectClick(rp._id);
                            }}
                          >
                            Reject
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger rp-request-handls-btn"
                            onClick={() => {
                              navigateRpDetails(rp._id);
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

export default RPLIst;
