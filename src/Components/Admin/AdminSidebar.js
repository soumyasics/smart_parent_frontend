import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdVideoLibrary } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { RiLogoutCircleRLine  } from "react-icons/ri";
import {Link} from 'react-router-dom'
function AdminSidebar() {

  const handleLogout=()=>{
    localStorage.removeItem("admin")
    localStorage.removeItem("token")

  }
  
  return (
    <div className="sidebar">
    <div className="container-fluid">
      <div className="sidebarelements">
        {" "}
        <Link to="/admindashboard"><IoHomeSharp className="text-dark" /></Link>
      </div>
      <div className="sidebarelements">
        {" "}
        <Link to="/podcastlist"><FaMicrophone className="text-dark" /></Link>

      </div>
      <div className="sidebarelements">
        {" "}
        <Link to="/creatorlist"><HiUsers className="text-dark" /></Link>

      </div>
      <div className="sidebarelements">
        {" "}
        <Link to="/subscriptionList"><MdVideoLibrary className="text-dark" /></Link>

      </div>
      <div className="sidebarelements">
        {" "}
        <div onClick={handleLogout}><RiLogoutCircleRLine  className="text-dark" /></div>
      </div>
    </div></div>
  );
}

export default AdminSidebar;
