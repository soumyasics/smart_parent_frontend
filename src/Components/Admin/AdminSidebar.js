import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdVideoLibrary } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import {Link} from 'react-router-dom'
function AdminSidebar() {
  return (
    <div className="sidebar">
    <div className="container-fluid">
      <div className="sidebarelements">
        {" "}
        <Link to="/admindashboard"><IoHomeSharp className="text-dark" /></Link>
      </div>
      <div className="sidebarelements">
        {" "}
        <Link to="/admindashboard"><FaMicrophone className="text-dark" /></Link>

      </div>
      <div className="sidebarelements">
        {" "}
        <Link to="/admindashboard"><HiUsers className="text-dark" /></Link>

      </div>
      <div className="sidebarelements">
        {" "}
        <Link to="/admindashboard"><MdVideoLibrary className="text-dark" /></Link>

      </div>
      <div className="sidebarelements">
        {" "}
        <Link to="/admindashboard"><RiSearchLine className="text-dark" /></Link>
      </div>
    </div></div>
  );
}

export default AdminSidebar;
