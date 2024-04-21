import "./rplist.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import Table from "react-bootstrap/Table";
import BASE_URL from "../../../../apis/baseUrl";
import img from "../../../../Assets/illustrators/man-placeholder.jpg";
import { Button } from "react-bootstrap";

export function ViewAllBannedRps() {
  const [bannedRps, setBannedRps] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axiosInstance
      .get("view-all-baned-rp")
      .then((res) => {
        console.log(res, "complaint data ");
        if (res.status === 200) {
          let allBannedResourcePersons = res?.data?.data || [];
          setBannedRps(allBannedResourcePersons);
        }
      })
      .catch((err) => {
        console.log("err on get rp bannedRps", err);
      });
  }
  const handleUnBanRp = async (rpId) => {
    if (!rpId) {
      alert("Please try again later.");
      console.log("Rp id  is required");
      return;
    }
    let obj = {
      rpId,
    };
    try {
      let res = await axiosInstance.post("unBanRP", obj);
      if (res.status === 200) {
        alert("Resource Person unBanned successfully");
        getData()
        return;
      }

    } catch (error) {
      if (error.response?.status === 401) {
        alert(error.response.data.message);
        return;
      }
      console.log("Error on banning Rp", error);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div style={{ maxWidth: "77%" }} className="container">
          {bannedRps.length === 0 && (
            <h1 className="mt-5"> No Resource Person is banned</h1>
          )}
          {bannedRps.length > 0 && (
            <div>
              <h3 className="mt-5 ms-3">Banned Resource Persons</h3>
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
                    <th>Resource Person Name</th>
                    <th>Reson for banning</th>
                    <th>RP Email</th>
                    <th>RP Current Status</th>
                    <th>Un Ban Resource Person</th>
                  </tr>
                </thead>
                <tbody>
                  {bannedRps.map((banRp, index) => {
                    return (
                      <tr key={index} className="mt-4">
                        <td>{index + 1}</td>

                        <td>{banRp.rpId?.name}</td>
                        <td>{banRp.bannedComplaintId?.complaint}</td>
                        <td>{banRp.rpId?.email}</td>
                        <td>{banRp.currentStatus}</td>
                        <td>
                          <Button
                            onClick={() => {
                              handleUnBanRp(banRp.rpId?._id);
                            }}
                            variant="success"
                          >
                            {" "}
                            UnBan Resource Person
                          </Button>
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
