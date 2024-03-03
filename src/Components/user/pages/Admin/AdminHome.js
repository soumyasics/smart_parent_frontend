import React from "react";
import Sidebar from "./Sidebar";

function AdminHome() {
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col-9"></div>
    </div>
  );
}

export default AdminHome;
