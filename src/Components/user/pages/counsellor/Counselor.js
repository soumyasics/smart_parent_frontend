import React from "react";
import "./counselor.css";
import { Icon } from "@iconify-icon/react";
import img1 from "../../../../Assets/img1.png";
import img2 from "../../../../Assets/img2.png";
import img3 from "../../../../Assets/img3.png";
import img4 from "../../../../Assets/img4.png";
import img5 from "../../../../Assets/img5.png";
import Navbar from "../../../../pages/commonHomePage/Components/Comp1";
import Footer from "../../../../pages/commonHomePage/Components/commonFooter";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
function Counselor() {
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState(null);
  const [allCo, setAllCo] = useState([]);
  console.log("all", allCo);
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
    let id = getActiveUserId();
    if (id) {
      getData(id);
    } else {
      console.log("Parent data not available in the Local storage");
    }
  }, []);

  function getActiveUserId() {
    let activeParent = JSON.parse(localStorage.getItem("parentData")) || null;
    if (activeParent && activeParent._id) {
      return activeParent._id;
    } else {
      return null;
    }
  }

  async function getData(id) {
    try {
      let res = await axiosInstance.get("viewAllCouncilars");
      let coData = res?.data?.data || null;
      if (coData) {
        setAllCo(coData);
      }
    } catch (error) {
      console.log("error on get all councilors", error);
    }
  }

  return (
    <div>
      <Navbar />

      <div className="counsellor">
        <h1>Choose Counsellor</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Search for a Counsellor"
            className="search_icon_input"
          />
        </div>

        <div className="listout">
          <h5>Top rated Counsellor</h5>

          {allCo.map((co, index) => {
            console.log("co", co);
            return (
              <div className="professionals">
                <img src={img1} alt="img1" />

                <div className="para">
                  {" "}
                  <p>Name: {co.name}</p>{" "}
                </div>

                <div className="d-flex">
                  <p>Email: {co.email}</p>
                  <div className="dot">
                    <Icon icon="fluent-mdl2:location-dot" />
                  </div>

                  <p>Contact: {co.contact}</p>
                  <div className="dot">
                    <Icon icon="fluent-mdl2:location-dot" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Counselor;
