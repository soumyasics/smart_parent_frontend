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
    }
  }, []);
  console.log("ac", activeUser);

  const handleLogout = () => {
    if (localStorage.getItem("parentData")) {
      localStorage.removeItem("parentData");
    }
    navigate("/admin");
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
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav a1" style={{ marginRight: "51px" }}>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/rp-add-tutorial")}
                class="nav-item"
              >
                <a class="nav-link active text-white" aria-current="page">
                  Tutorials
                </a>
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/rp-view-tutorials")}
                class="nav-item"
              >
                <a class="nav-link active text-white" aria-current="page">
                  View
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href="#" id="a2">
                  Subscribers
                </a>
              </li>
              <li class="nav-item">
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
                    Logout
                  </a>
                </li>
              ) : (
                <li
                  class="nav-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/admin")}
                >
                  <a
                    style={{ color: "red", fontWeight: "800" }}
                    className="nav-link active text-danger"
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
