import "./rplist.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import Table from "react-bootstrap/Table";
import BASE_URL from "../../../../apis/baseUrl";
import img from "../../../../Assets/illustrators/man-placeholder.jpg";
import { Button } from "react-bootstrap";

function RpComplaints() {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axiosInstance
      .post("viewComplaints")
      .then((res) => {
        console.log(res, "complaint data ");
        let allComplaints = res?.data?.data || [];
        setComplaints(allComplaints);
      })
      .catch((err) => {
        console.log("err on get rp complaints", err);
      });
  }

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div style={{ maxWidth: "77%" }} className="container">
          {complaints.length === 0 && (
            <h1 className="mt-5"> No complaints Found</h1>
          )}
          {complaints.length > 0 && (
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
                    <th>Parent Name</th>
                    <th>Complaint</th>
                    <th>RP Name</th>
                    <th>RP Email</th>
                    <th>Send Warning</th>
                    <th>Ban Resource Person</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((com, index) => {
                    return (
                      <tr key={index} className="mt-4">
                        <td>{index + 1}</td>

                        <td>{com.parentId?.name}</td>
                        <td>{com.complaint}</td>
                        <td>{com.rpId?.name}</td>
                        <td>{com.rpId?.email}</td>
                        <td>
                          <Button variant="warning"> Send Warning</Button>
                        </td>
                        <td>
                          <Button variant="danger"> Ban Resource Person</Button>
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

export default RpComplaints;
