import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import "./Navitem.css";
import { useNavigate } from "react-router-dom";
import "./Logo.css";

function Comp1() {
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("parentData")) {
      setActiveUser(JSON.parse(localStorage.getItem("parentData")));
    } else {
      console.log("Parent data not found in the local storage");
    }
  }, []);

  const handleLogout = () => {
    if (localStorage.getItem("parentData")) {
      localStorage.removeItem("parentData");
    }
    navigate("/sign_in");
  };

  function redirectResourcePerson() {
    if (activeUser) {
      navigate("/view-resouce-person");
    } else {
      alert("Please login first");
      setTimeout(() => {
        navigate("/sign_in");
      }, 1500);
    }
  }
  function redirectSubscription() {
    if (activeUser) {
      navigate("/user-my-subscription");
    } else {
      alert("Please login first");
      setTimeout(() => {
        navigate("/sign_in");
      }, 1500);
    }
  }
  function redirectCouncilar() {
    if (activeUser) {
      navigate("/counsellor");
    } else {
      alert("Please login first");
      setTimeout(() => {
        navigate("/sign_in");
      }, 1500);
    }
  }
  function redirectProfile() {
    if (activeUser) {
      navigate("/user_profile");
    } else {
      alert("Please login first");
      setTimeout(() => {
        navigate("/sign_in");
      }, 1500);
    }
  }
  return (
    <nav
      id="common-home-navbar"
      className="navbar navbar-expand-lg bg-body-tertiary pe-5"
    >
      <div className="container-fluid text-white">
        <img
          style={{ cursor: "pointer" }}
          src={logo}
          onClick={() => navigate("/")}
          alt="Logo"
          width="60"
          height="60"
          class="d-inline-block align-text-top"
          id="logo"
        />
        &nbsp;&nbsp;
        <b style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          SmartParent.
        </b>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav a1 gap-4" style={{ marginRight: "60px" }}>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
              class="nav-item"
            >
              <a class="nav-link active text-white" aria-current="page">
                Home
              </a>
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={redirectResourcePerson}
              class="nav-item"
            >
              <a class="nav-link active text-white" aria-current="page">
                Resource Person
              </a>
            </li>
            <li
              class="nav-item"
              onClick={redirectSubscription}
              style={{ cursor: "pointer" }}
            >
              <a class="nav-link active text-white" href="#" id="a3">
                Subscriptions
              </a>
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={redirectCouncilar}
              class="nav-item"
            >
              <a class="nav-link active text-white" aria-current="page">
                Councilors
              </a>
            </li>
            <li style={{ cursor: "pointer" }} onClick={redirectProfile} class="nav-item">
              <a class="nav-link active text-white" aria-current="page">
                Profile
              </a>
            </li>

            {activeUser ? (
              <li
                class="nav-item"
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
                className="bg-danger text-white"
              >
                <a
                  style={{ color: "red", fontWeight: "800" }}
                  className="nav-link active text-white"
                  id="a5"
                >
                  Logout
                </a>
              </li>
            ) : (
              <li
                class="nav-item"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/sign_up")}
                className="bg-success"
              >
                <a class="nav-link active text-white" id="a5">
                  Signup
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Comp1;
