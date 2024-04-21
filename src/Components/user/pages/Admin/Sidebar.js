import React from "react";
import "./sidebar.css";
import { useNavigate, Link } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    console.log("pp");
    try {
      localStorage.removeItem("loggedUser");
      // navigate("/admin");
      window.location.href = "/smart_parent/admin";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
            <li className="active">
              <Link to="/admin_dashboard">Dashboard</Link>

              <Link to="/rp_list">Resource person List</Link>

              <Link to="/rp_pendinglist">Resource person pending List</Link>

              <Link to="/counsiler_list">Counselor Request List</Link>
              <Link to="/rp-complaints">Resource Person Complaints</Link>

              <Link to="/counsiler_accepted">Counselor List</Link>

              <Link to="/parent_list">Parents List</Link>
            </li>
            <li>
              <Link to="/tutorials_list">Tutorials</Link>
            </li>
            <li>
              <Link to="/payment_list">Payment Details</Link>
            </li>
            <li>
              <Link to="/blog_list">Blogs</Link>
              <Link>
                <div onClick={handleLogout}>
                  Logout
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
