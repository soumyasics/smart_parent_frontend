import React from "react";
import './sidebar.css'
import {Link} from "react-router-dom"

function Sidebar() {
  return (
    <div>
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
            <li className="active">
              <a href="">
                <span className="fa-stack fa-lg pull-left">
                  <i className="fa fa-dashboard fa-stack-1x " />
                </span>{" "}
                Dashboard
              </a>
              <ul
                className="nav-pills nav-stacked"
                style={{ listStyleType: "none" }}
              >
                <li>
                  <Link to="/rp_list">Resource person List</Link>
                </li>
                <li>
                  <a href="#">Counselor List </a>
                </li>
                <li>
                  <a href="#">Parents List </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span className="fa-stack fa-lg pull-left">
                  <i className="fa fa-flag fa-stack-1x " />
                </span>
                Shortcut
              </a>
              <ul
                className="nav-pills nav-stacked"
                style={{ listStyleType: "none" }}
              >
                <li>
                  <a href="#">
                    <span className="fa-stack fa-lg pull-left">
                      <i className="fa fa-flag fa-stack-1x " />
                    </span>
                    link1
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa-stack fa-lg pull-left">
                      <i className="fa fa-flag fa-stack-1x " />
                    </span>
                    link2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span className="fa-stack fa-lg pull-left">
                  <i className="fa fa-cloud-download fa-stack-1x " />
                </span>
                Overview
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <span className="fa-stack fa-lg pull-left">
                  <i className="fa fa-cart-plus fa-stack-1x " />
                </span>
                Events
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa-stack fa-lg pull-left">
                  <i className="fa fa-youtube-play fa-stack-1x " />
                </span>
                About
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa-stack fa-lg pull-left">
                  <i className="fa fa-wrench fa-stack-1x " />
                </span>
                Services
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa-stack fa-lg pull-left">
                  <i className="fa fa-server fa-stack-1x " />
                </span>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
