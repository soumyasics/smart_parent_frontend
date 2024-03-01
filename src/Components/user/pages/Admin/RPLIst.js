import "./rplist.css";
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

function RPLIst() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4009/smart_parent/view-all-rp");
        setUserData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-8 ms-5 container">
          <h3 className="mt-5">All counsellor Requests</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">profilePicture</th>
                <th scope="col">name</th>
                <th scope="col">qualification</th>
                <th scope="col">experienceYear</th>
                <th scope="col">age</th>
                <th scope="col">Email</th>
                <th scope="col">Accept</th>
                <th scope="col">Reject</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data) => {
                return (
                  <tr>
                    <td scope="row">
                      <img src={data.profilePicture}></img>
                    </td>
                    <td>{data.name}</td>
                    <td>{data.experienceYear}</td>
                    <td>{data.age}</td>
                    <td>{data.email}</td>
                    <td>
                      <button>Accept</button>
                    </td>
                    <td>
                      <button>Reject</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RPLIst;
