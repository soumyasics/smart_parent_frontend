import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import { Table } from "react-bootstrap";
import BASE_URL from "../../../../apis/baseUrl";
import img from "../../../../Assets/illustrators/man-placeholder.jpg"
function RpMain() {
  const [rpmain, setRpmain] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axiosInstance
      .get("view-all-rp")
      .then((res) => {
        console.log("res", res);
        let allRps = res?.data?.data || [];
        const filterRplist = allRps.filter(
          (rp) => rp?.isAdminApproved == "accepted"
        );
        console.log(filterRplist, "data");
        setRpmain(filterRplist);
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
          {rpmain.length === 0 && (
            <h1 className="mt-5"> No Resource Person Found</h1>
          )}
          {rpmain.length > 0 && (
            <div>
              <h3 className="mt-5 ms-3">All Resource person List</h3>
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
                  {rpmain.map((rp, index) => {
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

export default RpMain;
