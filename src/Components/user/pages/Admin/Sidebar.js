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
              <Link to="/admin_dashboard">
                <span className="fa-stack fa-lg pull-left">
                  <i className="fa fa-dashboard fa-stack-1x " />
                </span>{" "}
                Dashboard
              </Link>
              <Link to="/rp_list">
                <span className="fa-stack fa-lg pull-left">
                  <i className="fa fa-dashboard fa-stack-1x " />
                </span>{" "}
                Resource person List
              </Link>
              <Link to="/counsiler_list">
              <span className="fa-stack fa-lg pull-left">
                <i className="fa fa-dashboard fa-stack-1x " />
              </span>{" "}
              Counselor List 
            </Link>
            <Link to="">
            <span className="fa-stack fa-lg pull-left">
              <i className="fa fa-dashboard fa-stack-1x " />
            </span>{" "}
            Parents List
          </Link>
              
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
              <Link to="">
              <span className="fa-stack fa-lg pull-left">
                <i className="fa fa-flag fa-stack-1x " />
              </span>
              Logout
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
