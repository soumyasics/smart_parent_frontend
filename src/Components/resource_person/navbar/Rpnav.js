import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Rpnav.css";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import BASE_URL from "../../../apis/baseUrl";
import img from "../../../Assets/illustrators/man-placeholder-2.jpg";

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

  const handleProfile = () => {
    navigate("/resourceperson_profile/" + activeUser._id);
  };

  function redirectBlog() {
    if (isRpLoggedIn()) {
      navigate("/resourceperson_blog");
    } else {
      alert("Please login first");
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    }
  }
  function redirectChat() {
    if (isRpLoggedIn()) {
      navigate("/rp_chat");
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
                style={{ cursor: "pointer" }}
                onClick={redirectChat}
                className="nav-item"
              >
                <a className="nav-link active text-white" aria-current="page">
                  Chat
                </a>
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={redirectBlog}
                className="nav-item"
              >
                <a className="nav-link active text-white" aria-current="page">
                  Blog
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

              {activeUser ? (
                <li>
                  <div class="dropdown">
                    <Dropdown>
                      <Dropdown.Toggle
                        className="bg-dark"
                        id="dropdown-basic"
                        style={{
                          backgroundColor: "rgba(1, 30, 73, 0.97)",
                          border: "none",
                        }}
                      >
                        <img
                          alt="img"
                          className="parentimage dropdown-toggle"
                          src={
                            activeUser.profilePicture
                              ? BASE_URL +
                                activeUser.profilePicture.originalname
                              : img
                          }
                        ></img>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={handleProfile}>
                          Profile
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout}>
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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
