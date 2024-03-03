import React from "react";
import Sidebar from "./Sidebar";
import axiosInstance from "../../../../apis/axiosInstance";
import { useState, useEffect } from "react";

function AdminDashboard() {
  const [rpLists, setRpLists] = useState([]);
  const [userData, setUserData] = useState([]);
  const [parentlist, setParentList] = useState([]);

  function RPData() {
    axiosInstance
      .get("smart_parent/view-all-rp")
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
        "smart_parent/viewAllCouncilars"
      );
      setUserData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const parentData = async () => {
    try {
      const response = await axiosInstance.post("smart_parent/viewParents");
      setParentList(response.data.data);
      console.log(response.data.data, "parent");
    } catch (error) {
      console.error("Error fetching parent data:", error, "parent");
    }
  };

  useEffect(() => {
    parentData();
    CounselorData();
    RPData();
  }, []);

  return (
    <div>
      <div>
        <Sidebar />
        <div>
          <div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-6 ms-5 container">
                <h3 className="mt-5">All Counselor</h3>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">profilePicture</th>
                      <th scope="col">name</th>
                      <th scope="col">experienceYear</th>
                      <th scope="col">age</th>
                      <th scope="col">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((data) => {
                      return (
                        <tr>
                          <td scope="row">
                            <img src={data.profilePicture} alt=""></img>
                          </td>
                          <td>{data.name}</td>
                          <td>{data.experienceYear}</td>
                          <td>{data.age}</td>
                          <td>{data.email}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-7 ms-5 container">
            <h3 className="mt-5">All Resource Person</h3>
            <table class="table">
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
                        <img src=""></img>
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
            </table>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2"></div>
        <div className="col-6 ms-5 container">
          <h3 className="mt-5">All Parents</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">profilePicture</th>
                <th scope="col">name</th>
                <th scope="col">age</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {parentlist.map((data) => {
                return (
                  <tr>
                    <td scope="row">
                      <img src={data.profilePicture} alt=""></img>
                    </td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.email}</td>
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

export default AdminDashboard;
