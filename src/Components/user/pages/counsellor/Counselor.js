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
import BASE_URL from "../../../../apis/baseUrl";
import placeholderImg from "../../../../Assets/illustrators/man-placeholder-2.jpg";
import { Button } from "react-bootstrap";

function Counselor() {
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState(null);
  const [allCo, setAllCo] = useState([]);
  const [searchCo, setSearchCo] = useState("");
  const [fixedCo, setFixedCo] = useState([]);

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
      getData();
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

  async function getData() {
    try {
      let res = await axiosInstance.get("viewAllCouncilars");
      let coData = res?.data?.data || null;

      if (coData) {
        coData = coData.filter((co) => co?.isAdminApproved == "accepted");
        setAllCo(coData);
        setFixedCo(coData);
      }
    } catch (error) {
      console.log("error on get all councilors", error);
    }
  }

  function handleSearch() {
    if (!searchCo) {
      setAllCo(fixedCo);
      return;
    }
    let filteredCo = fixedCo.filter((co) => {
      return co?.name.toLowerCase().includes(searchCo.toLowerCase());
    });
    console.log("fil", filteredCo);
    setAllCo(filteredCo);
  }
  return (
    <div>
      <Navbar />

      <div className="counsellor">
        <h1>Our Counsellors</h1>

        <div className="search mb-5">
          <input
            type="text"
            value={searchCo}
            className="search_icon_input w-50"
            onChange={(e) => setSearchCo(e.target.value)}
            placeholder="Search for a Counsellor"
            style={{ width: "50%" }}
          />
          <Button className="ms-3" onClick={handleSearch}>
            {" "}
            Search Councilor
          </Button>
        </div>

        <div className="listout">
          {allCo.map((co, index) => {
            let profilePicUrl = placeholderImg;
            let filename = co?.profilePicture?.filename || null;
            if (filename) {
              profilePicUrl = `${BASE_URL}${filename}`;
            }

            return (
              <div
                key={co._id}
                className="professionals"
                onClick={() => {
                  navigate(`/view-counsellor/${co._id}`);
                }}
              >
                <img
                  className="mt-3"
                  style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                  src={profilePicUrl}
                  alt="img1"
                />

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
