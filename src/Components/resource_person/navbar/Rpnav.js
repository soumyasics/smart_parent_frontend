import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Rpnav.css";
import { useNavigate } from "react-router-dom";

function Rpnav() {
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
    <div>
      <nav
        id="common-home-navbar"
        className="navbar navbar-expand-lg bg-body-tertiary pe-5"
      >
        <div className="container-fluid text-white">
          <img
            src="http://localhost:3000/static/media/logo.02ba8ea67b2b7903e412.png"
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
                  Tutorials
                </a>
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/counsellor")}
                class="nav-item"
              >
                <a class="nav-link active text-white" aria-current="page">
                Blogs
                </a>
              </li>
              <li class="nav-item" onClick={() => navigate("/parent_home")}>
                <a class="nav-link active text-white" href="#" id="a2">
                Subscribers
                </a>
              </li>
              <li
                class="nav-item"
                onClick={() => navigate("/user-my-subscription")}
              >
                <a class="nav-link active text-white" href="#" id="a3">
                Tasks
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
                  profile
                  </a>
                </li>
              ) : ''}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Rpnav;
