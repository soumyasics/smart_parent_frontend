import "./rplist.css";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import Table from "react-bootstrap/Table";
import BASE_URL from "../../../../apis/baseUrl";
import profileimg from "../../../../Assets/illustrators/man-placeholder.jpg";

function CounselorAccepted() {
  const [counsellor, setCounsellor] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axiosInstance
      .get("viewAllCouncilars")
      .then((res) => {
        console.log("res", res);

        let allCouncilars = res?.data?.data || [];
        const filterCounselor = allCouncilars.filter(
          (councilar) => councilar?.isAdminApproved == "accepted"
        );
        console.log(filterCounselor, "data");
        setCounsellor(filterCounselor);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div style={{ maxWidth: "77%" }} className="container">
          {counsellor.length === 0 && (
            <h1 className="mt-5"> No counsellor Found</h1>
          )}
          {counsellor.length > 0 && (
            <div>
              <h3 className="mt-5 ms-3">All counsellor List</h3>
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
                  </tr>
                </thead>
                <tbody>
                  {counsellor.map((councilar, index) => {
                    return (
                      <tr key={index} className="mt-4">
                        <td>{index + 1}</td>
                        <td>
                          <img
                            className="parentimage"
                            alt="img"
                            src={
                              BASE_URL +
                              (councilar.profilePicture
                                ? councilar.profilePicture.originalname
                                : "")
                            }
                          ></img>
                        </td>
                        <td>{councilar.name}</td>
                        <td>{councilar.email}</td>
                        <td>{councilar.experienceYear}</td>
                        <td>{councilar.age}</td>
                        <td>{councilar.contact}</td>
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

export default CounselorAccepted;
