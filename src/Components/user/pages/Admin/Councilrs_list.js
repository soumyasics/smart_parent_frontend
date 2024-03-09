import "./rplist.css";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import Table from "react-bootstrap/Table";
import BASE_URL from "../../../../apis/baseUrl";
import profileimg from "../../../../Assets/illustrators/man-placeholder.jpg";

function Counselorlist() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const CounselorData = async () => {
      try {
        const response = await axiosInstance.get("viewAllCouncilars");
        setUserData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    CounselorData();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-8 ms-5 container">
          <h3 className="mt-5">All Counselor Requests</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col">profilePicture</th>
                <th scope="col">name</th>
                <th scope="col">experienceYear</th>
                <th scope="col">age</th>
                <th scope="col">Email</th>
                <th scope="col">Accept</th>
                <th scope="col">Reject</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data, index) => {
                let profilePictureUrl = profileimg;
                let pathname = data?.profilePicture?.originalname || null;
                if (pathname) {
                  profilePictureUrl = BASE_URL + pathname;
                }
                return (
                  <tr key={index}>
                    <td scope="row">
                      <img
                        className="parentimage"
                        alt="img"
                        src={profilePictureUrl}
                      ></img>{" "}
                    </td>
                    <td>{data.name}</td>
                    <td>{data.experienceYear}</td>
                    <td>{data.age}</td>
                    <td>{data.email}</td>
                    <td>
                      <button className="btn btn-success">Accept</button>
                    </td>
                    <td>
                      <button className="btn btn-danger">Reject</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>{" "}
        </div>
      </div>
    </div>
  );
}

export default Counselorlist;
