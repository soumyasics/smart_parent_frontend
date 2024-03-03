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
    }
  }, []);
  console.log("ac", activeUser);

  const handleLogout = () => {
    if (localStorage.getItem("parentData")) {
      localStorage.removeItem("parentData");
    }
    navigate("/sign_in");
  };
  return (
    <nav
      id="common-home-navbar"
      className="navbar navbar-expand-lg bg-body-tertiary pe-5"
    >
      <div className="container-fluid text-white">
        <img
          src={logo}
          onClick={() => navigate("/")}
          alt="Logo"
          width="60"
          height="60"
          class="d-inline-block align-text-top"
          id="logo"
        />
        &nbsp;&nbsp;
        <b onClick={() => navigate("/")}>SmartParent.</b>
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
          <ul class="navbar-nav a1" style={{ marginRight: "51px" }}>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/view-resouce-person")}
              class="nav-item"
            >
              <a class="nav-link active text-white" aria-current="page">
                Resource Person
              </a>
            </li>
            <li
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/counsellor")}
              class="nav-item"
            >
              <a class="nav-link active text-white" aria-current="page">
                Councilors
              </a>
            </li>
            <li class="nav-item" onClick={() => navigate("/parent_home")}>
              <a class="nav-link active text-white" href="#" id="a2">
                Parent
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => navigate("/user-my-subscription")}
            >
              <a class="nav-link active text-white" href="#" id="a3">
                My Subscriptions
              </a>
            </li>
            {activeUser ? (
              <li
                class="nav-item"
                style={{ cursor: "pointer" }}
                onClick={handleLogout}
              >
                <a
                  style={{ color: "red", fontWeight: "800" }}
                  className="nav-link active text-danger"
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
