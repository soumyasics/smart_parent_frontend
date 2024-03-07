import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Rpnav.css";
import { useNavigate } from "react-router-dom";

function Rpnav() {
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("activeRp")) {
      setActiveUser(JSON.parse(localStorage.getItem("activeRp")));
    } else {
      console.log("rp not logged in");
    }
  }, []);

  function isRpLoggedIn() {
    if (localStorage.getItem("activeRp")) {
      return true;
    } else {
      return false;
    }
  }

  const handleLogout = () => {
    if (localStorage.getItem("parentData")) {
      localStorage.removeItem("parentData");
    }
    if (localStorage.getItem("activeRp")) {
      localStorage.removeItem("activeRp");
    }
    setTimeout(() => {
      navigate("/admin");
    }, 1500);
  };

  const redirectViewTutorials = () => {
    if (isRpLoggedIn()) {
      navigate("/rp-view-tutorials");
    } else {
      alert("Please login first");
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    }
  };
  const handleRedirectTask = () => {
    if (isRpLoggedIn()) {
      navigate("/rp-add-task");
    } else {
      alert("Please login first");
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    }
  };

  function redirectSubscribers() {
    if (isRpLoggedIn()) {
      navigate("/rp-view-subscribers");
    } else {
      alert("Please login first");
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    }
  }
  console.log("act user", activeUser);

  function navigateTutorials() {
    if (isRpLoggedIn()) {
      navigate("/rp-add-tutorial");
    } else {
      alert("Please login first");
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    }
  }

  return (
    <div>
      <nav
        id="common-home-navbar"
        className="navbar navbar-expand-lg bg-body-tertiary pe-5"
      >
        <div className="container-fluid text-white">
          <img
            src="http://localhost:3000/static/media/logo.02ba8ea67b2b7903e412.png"
            onClick={() => navigate("/resource_person_home")}
            alt="Logo"
            width="60"
            height="60"
            class="d-inline-block align-text-top"
            id="logo"
          />
          &nbsp;&nbsp;
          <b onClick={() => navigate("/resource_person_home")}>SmartParent.</b>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav a1 gap-4" style={{ marginRight: "51px" }}>
              <li
                style={{ cursor: "pointer" }}
                onClick={navigateTutorials}
                class="nav-item"
              >
                <a class="nav-link active text-white" aria-current="page">
                  Tutorials
                </a>
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={redirectViewTutorials}
                className="nav-item"
              >
                <a className="nav-link active text-white" aria-current="page">
                  View
                </a>
              </li>
              <li
                className="nav-item"
                style={{ cursor: "pointer" }}
                onClick={redirectSubscribers}
              >
                <a className="nav-link active text-white" id="a2">
                  Subscribers
                </a>
              </li>
              <li
                className="nav-item"
                style={{ cursor: "pointer" }}
                onClick={handleRedirectTask}
              >
                <a className="nav-link active text-white" id="a3">
                  Tasks
                </a>
              </li>
              <li className="nav-item" style={{ cursor: "pointer" }}>
                <a href="#m" className="nav-link active text-white" id="a3">
                  Profile
                </a>
              </li>
              {activeUser ? (
                <li>
                  <div class="dropdown">
                  <img
                    alt="img"
                    className="parentimage dropdown-toggle" 
                    src={
                      "http://localhost:4009/" +
                      (activeUser.profilePicture
                        ? activeUser.profilePicture.originalname
                        : "")
                    }
                  ></img>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                </li>
              ) : (
                <li
                  className="nav-item bg-success"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/admin")}
                >
                  <a
                    style={{ color: "red", fontWeight: "800" }}
                    className="nav-link active text-white"
                    id="a5"
                  >
                    Login
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Rpnav;
